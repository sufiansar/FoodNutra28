# 🏗️ FoodNutra - Complete Project Structure

```
FoodNutra28/
│
├── 📄 README.md                          # Main project documentation
├── 📄 QUICKSTART.md                      # Quick setup guide
│
├── 🔧 Backend/                           # Flask API & Machine Learning
│   ├── 🐍 Flask_API_No_Static.py        # Original Flask API
│   ├── 🐍 Flask_API_With_CORS.py        # Flask API with CORS enabled (USE THIS!)
│   ├── 📊 best_models_per_label.pkl     # Trained ML models
│   ├── 📊 preprocessor.pkl              # Data preprocessor
│   ├── 📋 Bangladeshi Regional Food Data Rajkumar.json  # Food database
│   ├── 📄 requirements.txt              # Original dependencies
│   ├── 📄 requirements_updated.txt      # Updated dependencies with CORS
│   └── 🪟 Run.bat                       # Windows run script
│
└── 🎨 frontend/                         # Next.js Frontend Application
    │
    ├── 📁 app/                          # Next.js 14 App Router
    │   ├── 🎨 globals.css               # Global styles + Tailwind
    │   ├── ⚙️ layout.tsx                # Root layout with metadata
    │   └── 📄 page.tsx                  # Main page (Landing + Form + Results)
    │
    ├── 📁 components/                   # React Components
    │   ├── 📁 ui/                       # shadcn/ui Components
    │   │   ├── button.tsx               # Button component
    │   │   ├── card.tsx                 # Card component
    │   │   ├── input.tsx                # Input component
    │   │   ├── label.tsx                # Label component
    │   │   ├── radio-group.tsx          # Radio group component
    │   │   ├── checkbox.tsx             # Checkbox component
    │   │   └── badge.tsx                # Badge component
    │   │
    │   ├── 📝 RecommendationForm.tsx    # 3-step form component
    │   └── 🍽️ FoodResults.tsx           # Results display component
    │
    ├── 📁 lib/                          # Utility Functions
    │   ├── utils.ts                     # Helper utilities (cn function)
    │   └── api.ts                       # API service layer
    │
    ├── ⚙️ package.json                  # Node.js dependencies
    ├── ⚙️ tsconfig.json                 # TypeScript configuration
    ├── 🎨 tailwind.config.ts            # Tailwind CSS configuration
    ├── ⚙️ postcss.config.js             # PostCSS configuration
    ├── ⚙️ next.config.js                # Next.js configuration
    ├── 📄 .eslintrc.json                # ESLint configuration
    ├── 📄 .gitignore                    # Git ignore rules
    ├── 📄 .env.example                  # Environment variables template
    ├── 📄 README.md                     # Frontend documentation
    ├── 🔧 setup.sh                      # Linux/Mac setup script
    └── 🔧 setup.bat                     # Windows setup script
```

## 📊 Component Hierarchy

```
App (page.tsx)
│
├── 🏠 Landing View
│   ├── Navigation Bar
│   ├── Hero Section
│   │   ├── Title with gradient
│   │   ├── Description
│   │   └── CTA Button
│   ├── Features Section (6 cards)
│   │   ├── Heart Health Focus
│   │   ├── AI-Powered
│   │   ├── Diet Flexibility
│   │   ├── Lifestyle Integration
│   │   ├── Allergy Safe
│   │   └── Family Friendly
│   ├── How It Works (3 steps)
│   ├── CTA Section
│   └── Footer
│
├── 📝 Form View (RecommendationForm)
│   ├── Progress Bar (3 steps)
│   ├── Step 1: Health Profile
│   │   ├── Health Conditions (Checkboxes)
│   │   ├── Health Goals (Checkboxes)
│   │   └── Life Stage (Checkboxes)
│   ├── Step 2: Dietary Preferences
│   │   ├── Diet Type (Radio Group)
│   │   └── Allergies (Radio Group)
│   ├── Step 3: Lifestyle & Preferences
│   │   ├── Activity Level (Radio Group)
│   │   ├── Spice Preference (Radio Group)
│   │   ├── Nutritional Focus (Radio Group)
│   │   ├── Cooking Time (Radio Group)
│   │   ├── Budget Friendly (Checkbox)
│   │   └── Number of Recommendations (Radio Group)
│   └── Navigation Buttons (Previous/Next/Submit)
│
└── 🎯 Results View (FoodResults)
    ├── Header with title
    ├── Results Grid (Food Cards)
    │   └── For each food:
    │       ├── Image placeholder
    │       ├── Category badge
    │       ├── Food name
    │       ├── Nutrition info (3 metrics)
    │       └── Health benefits
    ├── Action Buttons
    └── Info Card (Why these foods?)
```

## 🔄 Data Flow

```
User Input (Form)
    ↓
FormData (State)
    ↓
buildRecommendationRequest() → API Request Object
    ↓
foodApi.getRecommendations() → HTTP POST to Flask
    ↓
Flask Backend
    ├── Parse request
    ├── Map to health category
    ├── Load ML models
    ├── Transform features
    ├── Predict probabilities
    ├── Apply filters
    └── Return recommendations
    ↓
API Response
    ↓
setRecommendations() → Update State
    ↓
FoodResults Component → Display
```

## 🎨 Styling Architecture

```
Tailwind CSS (Utility Classes)
    ├── globals.css (Base styles)
    ├── tailwind.config.ts (Configuration)
    │   ├── Custom colors (health-focused palette)
    │   ├── Custom animations (fade-in, slide-in, gradient)
    │   ├── Extended theme
    │   └── Dark mode support
    │
    └── Component Styles
        ├── shadcn/ui components (Pre-styled)
        ├── Custom utility classes
        ├── Responsive breakpoints (sm, md, lg, xl)
        └── State variants (hover, focus, active)
```

## 🧩 Key Technologies Used

### Backend Stack

```
Flask (Web Framework)
    ├── flask-cors (CORS handling)
    ├── joblib (Model loading)
    ├── pandas (Data manipulation)
    ├── numpy (Numerical operations)
    └── scikit-learn (ML models)
```

### Frontend Stack

```
Next.js 14 (React Framework)
    ├── React 18 (UI library)
    ├── TypeScript (Type safety)
    ├── Tailwind CSS (Styling)
    ├── shadcn/ui (Component library)
    ├── Lucide React (Icons)
    ├── Framer Motion (Animations)
    └── Radix UI (Accessibility)
```

## 🚀 Development Workflow

```
1. Start Backend (Port 5000)
   └── Flask API serves ML predictions

2. Start Frontend (Port 3000)
   └── Next.js dev server with hot reload

3. Make Changes
   ├── Backend: Edit Python files → Auto-reload
   └── Frontend: Edit .tsx files → Hot Module Replacement

4. Test
   ├── Backend: Test API endpoints
   └── Frontend: Test in browser

5. Build
   ├── Backend: Deploy with Gunicorn/uWSGI
   └── Frontend: npm run build → Static optimization
```

## 📦 File Sizes (Approximate)

- **Backend**: ~2 MB (without models)
- **Frontend** (after build): ~5 MB
- **ML Models**: Variable (depends on training)
- **Food Database**: ~500 KB (JSON)

## 🔐 Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (optional .env)

```
PORT=5000
FLASK_ENV=development
DEBUG=True
```

## 📱 Responsive Breakpoints

```
Mobile:    < 640px  (1 column)
Tablet:    640-1024px (2 columns)
Desktop:   > 1024px (3 columns)
```

## 🎯 Core Features Map

```
Health-Focused Recommendations
├── ML-Powered Matching
├── Multi-Factor Analysis
│   ├── Health conditions
│   ├── Dietary preferences
│   ├── Lifestyle factors
│   └── Budget constraints
├── Smart Filtering
│   ├── Allergy exclusions
│   ├── Diet type matching
│   ├── Spice level filtering
│   └── Cooking time filtering
└── Personalized Results
    ├── Nutrition information
    ├── Health benefits
    └── Category tagging
```

---

**This structure provides a complete, production-ready food recommendation system!** 🎉
