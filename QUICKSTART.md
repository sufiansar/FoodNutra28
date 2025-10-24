# 🚀 Quick Start Guide - FoodNutra

Get your FoodNutra application running in minutes!

## ⚡ Fast Setup (For Developers)

### Step 1: Backend Setup (2 minutes)

```bash
# Navigate to Backend folder
cd Backend

# Install Python dependencies
pip install flask flask-cors pandas numpy scikit-learn joblib

# Start the Flask server
python Flask_API_With_CORS.py
```

Backend will run on: **http://localhost:5000**

### Step 2: Frontend Setup (3 minutes)

```bash
# Open a new terminal
# Navigate to frontend folder
cd frontend

# Install dependencies (first time only)
npm install

# Create environment file
cp .env.example .env.local

# Start the Next.js development server
npm run dev
```

Frontend will run on: **http://localhost:3000**

### Step 3: Use the Application

1. Open your browser: **http://localhost:3000**
2. Click **"Get Started"**
3. Fill out the 3-step form
4. Get your personalized recommendations! 🎉

---

## 📋 Detailed Instructions

### Prerequisites Check

```bash
# Check Python (need 3.8+)
python --version

# Check Node.js (need 18+)
node --version

# Check npm
npm --version
```

### Backend - Option 1: Using Virtual Environment (Recommended)

```bash
cd Backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements_updated.txt

# Run server with CORS support
python Flask_API_With_CORS.py
```

### Backend - Option 2: Direct Installation

```bash
cd Backend

# Install dependencies globally
pip install flask flask-cors pandas numpy scikit-learn joblib

# Run server
python Flask_API_With_CORS.py
```

### Frontend - Automated Setup

**Windows:**

```bash
cd frontend
setup.bat
npm run dev
```

**Mac/Linux:**

```bash
cd frontend
chmod +x setup.sh
./setup.sh
npm run dev
```

### Frontend - Manual Setup

```bash
cd frontend

# Install all dependencies
npm install

# Setup environment
cp .env.example .env.local

# Edit .env.local (if backend is not on localhost:5000)
# NEXT_PUBLIC_API_URL=http://localhost:5000

# Start development server
npm run dev
```

---

## 🔍 Verify Setup

### Test Backend

Open: **http://localhost:5000/health**

Should see:

```json
{
  "status": "healthy",
  "message": "FoodNutra API is running"
}
```

### Test Frontend

Open: **http://localhost:3000**

Should see a beautiful landing page with "Personalized Food Recommendations" header.

---

## 🐛 Common Issues & Solutions

### Issue: Port 5000 already in use

**Solution:**

```python
# Edit Flask_API_With_CORS.py, change port:
app.run(host="0.0.0.0", port=5001, debug=True)

# Update frontend .env.local:
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### Issue: "Module not found" in Python

**Solution:**

```bash
pip install flask flask-cors pandas numpy scikit-learn joblib
```

### Issue: "Cannot find module" in Frontend

**Solution:**

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS error in browser

**Solution:** Make sure you're using `Flask_API_With_CORS.py` (not the old file)

### Issue: TypeScript errors

**Solution:** These are expected before running `npm install`. They'll be resolved after installation.

---

## 📱 Using the Application

### Step 1: Health Profile

- Check health conditions (High Blood Pressure, etc.)
- Select health goals (Weight Management, etc.)
- Indicate life stage (Pregnancy, Children, etc.)

### Step 2: Dietary Preferences

- Choose diet type (Non-Vegetarian, Vegetarian, Vegan)
- Select allergies (None, Dairy, Gluten, Both)

### Step 3: Lifestyle & Preferences

- Activity level (Low, Moderate, High)
- Spice preference (Mild, Medium, Hot)
- Nutritional focus (Balanced, Low Sugar, High Protein)
- Cooking time preference
- Budget-friendly option
- Number of recommendations (3, 5, 7, or 10)

### Step 4: Get Recommendations

Click "Get Recommendations" and view your personalized Bangladeshi food suggestions!

---

## 🎨 What You'll See

- **Landing Page**: Beautiful hero section with features
- **Form**: 3-step form with progress indicator
- **Results**: Beautiful cards with:
  - Food names
  - Nutrition info (Calories, Protein, Fiber)
  - Category badges (Heart Healthy, etc.)
  - Health benefits

---

## 📦 Production Build

### Frontend Production Build

```bash
cd frontend
npm run build
npm start
```

### Backend Production (with Gunicorn)

```bash
cd Backend
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 Flask_API_With_CORS:app
```

---

## 🎯 Next Steps

1. ✅ Backend running on port 5000
2. ✅ Frontend running on port 3000
3. ✅ Test the application
4. 📚 Read the full README.md for more details
5. 🎨 Customize colors in `tailwind.config.ts`
6. 🔧 Adjust backend models as needed

---

## 💡 Tips

- Keep both terminal windows open (backend and frontend)
- Backend must be running for frontend to work
- Use Chrome DevTools (F12) to debug API calls
- Check backend terminal for API request logs
- Frontend has hot reload - changes appear instantly

---

## 📞 Need Help?

- Check the main README.md
- Review the API documentation
- Open an issue on GitHub
- Check backend logs for errors
- Check browser console for frontend errors

---

**Happy Coding! 🎉**

Made with ❤️ for better health through personalized nutrition
