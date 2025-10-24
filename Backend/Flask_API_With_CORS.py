import os
import json
import re
import numpy as np
import pandas as pd
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all origins (can be restricted to specific domains if needed)
CORS(app, resources={r"/*": {"origins": "*"}})

# -------------------------
# Load data & feature engineering
# -------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE_DIR, "Bangladeshi Regional Food Data Rajkumar.json"), "r", encoding="utf-8") as f:
    data = json.load(f)
df = pd.DataFrame(data)

def parse_quantity(q):
    if not isinstance(q, str):
        return np.nan
    m = re.search(r'~\s*(\d+)\s*g', q)
    if m:
        return float(m.group(1))
    m2 = re.search(r'(\d+)\s*g', q)
    return float(m2.group(1)) if m2 else np.nan

df["QuantityGrams"]   = df["Quantity"].apply(parse_quantity)
df["fiber_to_sugar"]  = df["Fiber"] / (df["Sugar"] + 1e-3)
df["protein_density"] = df["Protein"] / (df["Calories"] + 1e-3)

NUM_COLS = [
    "Calories","Sugar","Fat","Protein","Sodium","Fiber","Vitamin C",
    "QuantityGrams","fiber_to_sugar","protein_density"
]
CAT_COLS = ["Allergy"]

# -------------------------
# Load models & preprocessor
# -------------------------
best_models = joblib.load(os.path.join(BASE_DIR, "best_models_per_label.pkl"))
preprocessor = joblib.load(os.path.join(BASE_DIR, "preprocessor.pkl"))

# -------------------------
# Category mapping & filters
# -------------------------
def map_category(profile):
    if profile.get("high_bp"):
        return "heartKidneySafe"
    if profile.get("weight_loss"):
        return "metabolicHealth"
    if profile.get("pregnant"):
        return "immunityPregnancySafe"
    if profile.get("child"):
        return "childFamilySafe"
    if profile.get("diet") in ("vegetarian","vegan"):
        return "plantBasedDiet"
    if profile.get("allergy") in ("dairy","gluten","both"):
        return "digestiveBoneSupport"
    return None

def get_filters(extra):
    flt = []
    flt.append(("rank_by",
                "protein_density" if extra.get("activity") in ("moderate","high")
                else "fiber_to_sugar"))
    if extra.get("spicy") == "hot":
        flt.append(("exclude_cat","childFamilySafe"))
    if extra.get("macro") == "low_sugar":
        flt.append(("max_sugar", 5))
    if extra.get("cook_time") == "under_15":
        flt.append(("exclude_kw", ["Bhaja","Roast","Fry"]))
    if extra.get("budget"):
        flt.append(("exclude_kw", ["Hilsa","Shrimp","Duck","Beef"]))
    return flt

def apply_filters(temp, flt):
    df_temp = temp.copy()
    for t, arg in flt:
        if t == "max_sugar":
            df_temp = df_temp[df_temp["Sugar"] <= arg]
        elif t == "exclude_kw":
            pat = "|".join(arg)
            df_temp = df_temp[~df_temp["Food"].str.contains(pat)]
    return df_temp

# -------------------------
# Suggestion engine
# -------------------------
def get_suggestions(target_class, top_n, flt=None):
    if target_class not in best_models:
        return []

    model_info = best_models[target_class]
    model = model_info["model"]
    thr   = model_info.get("threshold")

    X_all = preprocessor.transform(df[NUM_COLS + CAT_COLS])
    probs = model.predict_proba(X_all)[:, 1]

    temp = df.copy()
    temp["prob"] = probs

    if thr is not None:
        temp = temp[temp["prob"] >= thr]

    if flt:
        temp = apply_filters(temp, flt)
        rank_col = next((v for k, v in flt if k == "rank_by"), "prob")
    else:
        rank_col = "prob"

    if temp.empty:
        return []

    temp = temp.sort_values([rank_col, "prob"], ascending=[False, False])
    temp = temp.drop_duplicates(subset=["Food"], keep="first")

    return temp.head(top_n)["Food"].tolist()

# -------------------------
# API endpoint
# -------------------------
@app.route("/recommend", methods=["POST", "OPTIONS"])
def recommend():
    if request.method == "OPTIONS":
        # Handled by flask-cors, but early return for clarity
        return ("", 204)

    data      = request.get_json() or {}
    basic     = data.get("basic_profile", {})
    main_goal = data.get("main_goal")
    extra     = data.get("extra_profile", {})
    try:
        top_n     = max(2, min(10, int(data.get("top_n", 5))))
    except Exception:
        top_n = 5

    target_class = map_category(basic)
    if not target_class:
        if main_goal in best_models:
            target_class = main_goal
        else:
            return jsonify({"error": "no category detected"}), 400

    response = {"initial": get_suggestions(target_class, top_n)}

    if extra:
        flt = get_filters(extra)
        response["refined"] = get_suggestions(target_class, top_n, flt)

    return jsonify(response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)
import os
import json
import re
import numpy as np
import pandas as pd
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend connection

# -------------------------
# Load data & feature engineering
# -------------------------
with open("Bangladeshi Regional Food Data Rajkumar.json", "r", encoding="utf-8") as f:
    data = json.load(f)
df = pd.DataFrame(data)

def parse_quantity(q):
    if not isinstance(q, str):
        return np.nan
    m = re.search(r'~\s*(\d+)\s*g', q)
    if m:
        return float(m.group(1))
    m2 = re.search(r'(\d+)\s*g', q)
    return float(m2.group(1)) if m2 else np.nan

df["QuantityGrams"]   = df["Quantity"].apply(parse_quantity)
df["fiber_to_sugar"]  = df["Fiber"] / (df["Sugar"] + 1e-3)
df["protein_density"] = df["Protein"] / (df["Calories"] + 1e-3)

NUM_COLS = [
    "Calories","Sugar","Fat","Protein","Sodium","Fiber","Vitamin C",
    "QuantityGrams","fiber_to_sugar","protein_density"
]
CAT_COLS = ["Allergy"]

# -------------------------
# Load models & preprocessor
# -------------------------
best_models = joblib.load("best_models_per_label.pkl")
preprocessor = joblib.load("preprocessor.pkl")

# -------------------------
# Category mapping & filters
# -------------------------
def map_category(profile):
    if profile.get("high_bp"):
        return "heartKidneySafe"
    if profile.get("weight_loss"):
        return "metabolicHealth"
    if profile.get("pregnant"):
        return "immunityPregnancySafe"
    if profile.get("child"):
        return "childFamilySafe"
    if profile.get("diet") in ("vegetarian","vegan"):
        return "plantBasedDiet"
    if profile.get("allergy") in ("dairy","gluten","both"):
        return "digestiveBoneSupport"
    return None

def get_filters(extra):
    flt = []
    flt.append(("rank_by",
                "protein_density" if extra.get("activity") in ("moderate","high")
                else "fiber_to_sugar"))
    if extra.get("spicy") == "hot":
        flt.append(("exclude_cat","childFamilySafe"))
    if extra.get("macro") == "low_sugar":
        flt.append(("max_sugar", 5))
    if extra.get("cook_time") == "under_15":
        flt.append(("exclude_kw", ["Bhaja","Roast","Fry"]))
    if extra.get("budget"):
        flt.append(("exclude_kw", ["Hilsa","Shrimp","Duck","Beef"]))
    return flt

def apply_filters(temp, flt):
    df_temp = temp.copy()
    for t, arg in flt:
        if t == "max_sugar":
            df_temp = df_temp[df_temp["Sugar"] <= arg]
        elif t == "exclude_kw":
            pat = "|".join(arg)
            df_temp = df_temp[~df_temp["Food"].str.contains(pat)]
    return df_temp

# -------------------------
# Suggestion engine
# -------------------------
def get_suggestions(target_class, top_n, flt=None):
    if target_class not in best_models:
        return []

    model_info = best_models[target_class]
    model = model_info["model"]
    thr   = model_info.get("threshold")

    X_all = preprocessor.transform(df[NUM_COLS + CAT_COLS])
    probs = model.predict_proba(X_all)[:, 1]

    temp = df.copy()
    temp["prob"] = probs

    if thr is not None:
        temp = temp[temp["prob"] >= thr]

    if flt:
        temp = apply_filters(temp, flt)
        rank_col = next((v for k, v in flt if k == "rank_by"), "prob")
    else:
        rank_col = "prob"

    if temp.empty:
        return []

    temp = temp.sort_values([rank_col, "prob"], ascending=[False, False])
    temp = temp.drop_duplicates(subset=["Food"], keep="first")

    return temp.head(top_n)["Food"].tolist()

# -------------------------
# API endpoint
# -------------------------
@app.route("/recommend", methods=["POST"])
def recommend():
    data      = request.get_json()
    basic     = data.get("basic_profile", {})
    main_goal = data.get("main_goal")
    extra     = data.get("extra_profile")
    top_n     = max(2, min(10, int(data.get("top_n", 5))))

    target_class = map_category(basic)
    if not target_class:
        if main_goal in best_models:
            target_class = main_goal
        else:
            return jsonify({"error": "no category detected"}), 400

    response = {"initial": get_suggestions(target_class, top_n)}

    if extra:
        flt = get_filters(extra)
        response["refined"] = get_suggestions(target_class, top_n, flt)

    return jsonify(response)

# -------------------------
# Health check endpoint
# -------------------------
@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy", "message": "FoodNutra API is running"})

# -------------------------
# Run Flask
# -------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)
