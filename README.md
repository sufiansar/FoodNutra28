# 🍽️ FoodNutra - Personalized Food Recommendation System

An intelligent food recommendation system that provides personalized Bangladeshi cuisine suggestions based on health profiles, dietary preferences, and lifestyle factors using Machine Learning.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## 🎯 Overview

FoodNutra is a comprehensive health-focused food recommendation platform that combines:

- **Machine Learning**: Trained models for intelligent food matching
- **Health Focus**: Considers blood pressure, weight goals, pregnancy, etc.
- **Dietary Preferences**: Vegetarian, vegan, allergy-safe options
- **Lifestyle Integration**: Activity level, cooking time, budget considerations

## ✨ Features

### Backend (Flask + ML)

- ✅ Machine Learning-powered recommendations
- ✅ Multiple health category models
- ✅ Feature engineering (protein density, fiber-to-sugar ratio)
- ✅ Threshold-based filtering
- ✅ RESTful API with JSON responses

### Frontend (Next.js + TypeScript)

- ✅ Beautiful, modern UI with Tailwind CSS & shadcn/ui
- ✅ Multi-step form for comprehensive profiling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Dark mode support
- ✅ Real-time API integration
- ✅ Type-safe development with TypeScript

## 🛠️ Tech Stack

### Backend

- **Python 3.8+**
- **Flask** - Web framework
- **scikit-learn** - Machine Learning models
- **pandas** - Data manipulation
- **numpy** - Numerical computing
- **joblib** - Model persistence

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **Framer Motion** - Animations

## 📁 Project Structure

```
FoodNutra28/
├── Backend/
│   ├── Flask_API_No_Static.py           # Main Flask API
│   ├── best_models_per_label.pkl        # Trained ML models
│   ├── preprocessor.pkl                 # Data preprocessor
│   ├── Bangladeshi Regional Food Data Rajkumar.json  # Food database
│   ├── requirements.txt                 # Python dependencies
│   └── Run.bat                          # Windows run script
│
└── frontend/
    ├── app/
    │   ├── layout.tsx                   # Root layout
    │   ├── page.tsx                     # Main page
    │   └── globals.css                  # Global styles
    ├── components/
    │   ├── ui/                          # shadcn/ui components
    │   ├── RecommendationForm.tsx       # Multi-step form
    │   └── FoodResults.tsx              # Results display
    ├── lib/
    │   ├── api.ts                       # API service
    │   └── utils.ts                     # Utilities
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    └── README.md
```

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- Node.js 18 or higher
- npm or yarn

### Backend Setup

1. **Navigate to Backend directory:**

   ```bash
   cd Backend
   ```

2. **Create a virtual environment (recommended):**

   ```bash
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On Linux/Mac:
   source venv/bin/activate
   ```

3. **Install Python dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**

   ```bash
   python Flask_API_No_Static.py
   ```

   The backend will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**

   ```bash
   cd frontend
   ```

2. **Run the setup script:**

   **On Linux/Mac:**

   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

   **On Windows:**

   ```bash
   setup.bat
   ```

   **Or manually:**

   ```bash
   npm install
   cp .env.example .env.local
   ```

3. **Configure environment variables:**
   Edit `.env.local` and set your backend URL:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`

## 💻 Usage

1. **Start the Backend:**

   ```bash
   cd Backend
   python Flask_API_No_Static.py
   ```

2. **Start the Frontend:**

   ```bash
   cd frontend
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

4. **Get Recommendations:**
   - Click "Get Started"
   - Complete the 3-step form:
     - **Step 1**: Health Profile (conditions, goals, life stage)
     - **Step 2**: Dietary Preferences (diet type, allergies)
     - **Step 3**: Lifestyle & Preferences (activity, spice, cooking time)
   - Click "Get Recommendations"
   - View your personalized food suggestions!

## 📡 API Documentation

### Endpoint: `/recommend`

**Method:** POST

**Request Body:**

```json
{
  "basic_profile": {
    "high_bp": true,
    "weight_loss": false,
    "pregnant": false,
    "child": false,
    "diet": "vegetarian",
    "allergy": "dairy"
  },
  "main_goal": "heartKidneySafe",
  "extra_profile": {
    "activity": "moderate",
    "spicy": "medium",
    "macro": "low_sugar",
    "cook_time": "under_30",
    "budget": true
  },
  "top_n": 5
}
```

**Response:**

```json
{
  "initial": ["Food 1", "Food 2", "Food 3", "Food 4", "Food 5"],
  "refined": ["Refined Food 1", "Refined Food 2", "Refined Food 3"]
}
```

**Health Categories:**

- `heartKidneySafe` - For high blood pressure
- `metabolicHealth` - For weight management
- `immunityPregnancySafe` - For pregnancy
- `childFamilySafe` - For children
- `plantBasedDiet` - For vegetarian/vegan
- `digestiveBoneSupport` - For allergies

## 🎨 Features Showcase

### Multi-Step Form

- **Step 1**: Health conditions, goals, and life stage
- **Step 2**: Dietary preferences and allergies
- **Step 3**: Activity level, spice preference, cooking time, budget

### Smart Recommendations

- ML-powered food matching
- Nutrition information display
- Category badges (Heart Healthy, High Protein, etc.)
- Health benefit descriptions

### Beautiful UI

- Gradient hero sections
- Animated feature cards
- Smooth transitions
- Responsive grid layouts
- Dark mode support

## 🔧 Configuration

### Backend Configuration

Edit `Flask_API_No_Static.py` to configure:

- Port (default: 5000)
- CORS settings
- Model paths
- Data sources

### Frontend Configuration

Edit `.env.local` for:

- `NEXT_PUBLIC_API_URL` - Backend API URL

Edit `tailwind.config.ts` for:

- Colors
- Animations
- Breakpoints

## 📦 Build for Production

### Frontend

```bash
cd frontend
npm run build
npm start
```

### Backend

```bash
cd Backend
# Use a production WSGI server like Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 Flask_API_No_Static:app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Backend Issues

- **Port already in use**: Change port in `Flask_API_No_Static.py`
- **Model file not found**: Ensure all `.pkl` files are in Backend directory
- **JSON not found**: Check `Bangladeshi Regional Food Data Rajkumar.json` path

### Frontend Issues

- **API connection failed**: Verify backend is running and `NEXT_PUBLIC_API_URL` is correct
- **Build errors**: Delete `.next` folder and `node_modules`, then reinstall
- **TypeScript errors**: Run `npm install` to ensure all types are installed

### CORS Issues

Add to Flask app:

```python
from flask_cors import CORS
CORS(app)
```

## 📄 License

This project is created for educational and health promotion purposes.

## 👏 Acknowledgments

- Bangladeshi food data compilation
- Machine Learning community
- Next.js and React team
- shadcn/ui for beautiful components
- Tailwind CSS for styling utilities

## 📞 Support

For issues, questions, or suggestions:

- Open an issue in the repository
- Contact the development team

---

**Made with ❤️ for better health through personalized nutrition**

🌟 If you find this project helpful, please give it a star!
