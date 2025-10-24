# 🎨 FoodNutra - Visual Component Guide

## 🏠 Landing Page Components

### Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                      🍎 FoodNutra                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│           ✨ Personalized Food Recommendations ✨           │
│                                                              │
│     Discover healthy Bangladeshi cuisine tailored to        │
│     your unique health profile, dietary needs, and          │
│                lifestyle preferences                         │
│                                                              │
│         [ 🌟 Get Started - It's Free! ]                     │
│                                                              │
│                ⬇️ Scroll to learn more ⬇️                   │
└─────────────────────────────────────────────────────────────┘
```

### Features Grid (2x3)

```
┌───────────────┬───────────────┬───────────────┐
│   ❤️ Heart    │  🧠 AI-      │  🌿 Diet      │
│    Health     │   Powered    │  Flexibility  │
│    Focus      │              │               │
│               │              │               │
│  Tailored for │  Advanced ML │  Support for  │
│  cardiovasc.  │  algorithms  │  vegetarian,  │
│   wellness    │   analyze    │   vegan, etc  │
├───────────────┼───────────────┼───────────────┤
│  🏃 Lifestyle │  🛡️ Allergy  │  👨‍👩‍👧 Family │
│  Integration  │     Safe     │   Friendly    │
│               │              │               │
│  Considers    │  Filters out │   Special     │
│   activity    │   foods by   │ recommend.    │
│    level      │   allergies  │  for family   │
└───────────────┴───────────────┴───────────────┘
```

### How It Works

```
    ┌──────┐         ┌──────┐         ┌──────┐
    │  1   │    →    │  2   │    →    │  3   │
    └──────┘         └──────┘         └──────┘
    👤 Share         🧠 AI            🏆 Get
     Your           Analysis        Recommend.
    Profile
```

## 📝 Form Components

### Progress Bar

```
Step 1 of 3
████████░░░░░░░░░░░░░░░░  (33%)

Step 2 of 3
████████████████░░░░░░░░  (66%)

Step 3 of 3
████████████████████████  (100%)
```

### Step 1: Health Profile

```
┌─────────────────────────────────────────────┐
│  ❤️ Health Profile                          │
├─────────────────────────────────────────────┤
│                                             │
│  Health Conditions                          │
│  ☐ High Blood Pressure                     │
│                                             │
│  ⚖️ Health Goals                            │
│  ☐ Weight Management                       │
│                                             │
│  👨‍👩‍👧 Life Stage                            │
│  ☐ Pregnancy                               │
│  ☐ Children in Family                      │
│                                             │
│              [ Next → ]                     │
└─────────────────────────────────────────────┘
```

### Step 2: Dietary Preferences

```
┌─────────────────────────────────────────────┐
│  🌿 Dietary Preferences                     │
├─────────────────────────────────────────────┤
│                                             │
│  Diet Type                                  │
│  ⚪ Non-Vegetarian                          │
│  ⚪ Vegetarian                              │
│  ⚪ Vegan                                   │
│                                             │
│  Allergies & Intolerances                   │
│  ⚪ None                                    │
│  ⚪ Dairy                                   │
│  ⚪ Gluten                                  │
│  ⚪ Both Dairy & Gluten                     │
│                                             │
│  [ ← Previous ]        [ Next → ]          │
└─────────────────────────────────────────────┘
```

### Step 3: Lifestyle

```
┌─────────────────────────────────────────────┐
│  🏃 Lifestyle & Preferences                 │
├─────────────────────────────────────────────┤
│                                             │
│  🏃 Activity Level                          │
│  ⚪ Low (Sedentary)                         │
│  ⚪ Moderate (3-4 times/week)               │
│  ⚪ High (Very Active)                      │
│                                             │
│  🌶️ Spice Preference                        │
│  ⚪ Mild  ⚪ Medium  ⚪ Hot & Spicy          │
│                                             │
│  Nutritional Focus                          │
│  ⚪ Balanced                                │
│  ⚪ Low Sugar                               │
│  ⚪ High Protein                            │
│                                             │
│  ⏰ Cooking Time                            │
│  ⚪ Any  ⚪ Under 15 min  ⚪ Under 30 min    │
│                                             │
│  ☐ 💰 Budget-Friendly Options Only         │
│                                             │
│  Number of Recommendations                  │
│  ⚪ 3  ⚪ 5  ⚪ 7  ⚪ 10                      │
│                                             │
│  [ ← Previous ]  [ ✨ Get Recommendations ] │
└─────────────────────────────────────────────┘
```

## 🎯 Results Display

### Results Header

```
┌─────────────────────────────────────────────────────┐
│    ✨ Your Personalized Food Recommendations ✨     │
│                                                     │
│  Based on your health profile and preferences,      │
│  we recommend these nutritious Bangladeshi dishes   │
└─────────────────────────────────────────────────────┘
```

### Food Card (Desktop: 3 columns, Tablet: 2, Mobile: 1)

```
┌──────────────────────────────────────┐
│  ┌────────────────────────────────┐  │
│  │   [  Chef Hat Icon  ]          │  │
│  │                      [Badge]   │  │
│  └────────────────────────────────┘  │
│                                      │
│  🍎 Daal Bhaat                       │
│  Traditional Bangladeshi cuisine     │
│                                      │
│  ┌────────┬────────┬────────┐       │
│  │  250   │  12g   │  8g    │       │
│  │Calories│Protein │ Fiber  │       │
│  └────────┴────────┴────────┘       │
│                                      │
│  ❤️ Perfectly matched to your       │
│     dietary needs and health goals  │
│                                      │
└──────────────────────────────────────┘
```

### Results Grid Layout

```
Desktop (3 columns):
┌──────┐ ┌──────┐ ┌──────┐
│Card 1│ │Card 2│ │Card 3│
└──────┘ └──────┘ └──────┘
┌──────┐ ┌──────┐ ┌──────┐
│Card 4│ │Card 5│ │Card 6│
└──────┘ └──────┘ └──────┘

Tablet (2 columns):
┌──────┐ ┌──────┐
│Card 1│ │Card 2│
└──────┘ └──────┘
┌──────┐ ┌──────┐
│Card 3│ │Card 4│
└──────┘ └──────┘

Mobile (1 column):
┌──────┐
│Card 1│
└──────┘
┌──────┐
│Card 2│
└──────┘
```

## 🎨 Color Coding

### Health Categories

```
❤️ Heart Healthy     → Red badge (#ef4444)
💪 High Protein      → Green badge (#22c55e)
🌿 Plant Based       → Green badge (#16a34a)
⭐ Low Sugar         → Orange badge (#f59e0b)
```

### UI Elements

```
Primary Buttons      → Green (#16a34a)
Secondary Buttons    → Gray (#6b7280)
Success Messages     → Green (#22c55e)
Error Messages       → Red (#ef4444)
Info Messages        → Blue (#3b82f6)
```

## 📱 Responsive Breakpoints

### Mobile (<640px)

```
┌──────────────┐
│   Logo       │
├──────────────┤
│              │
│   Content    │
│  (1 column)  │
│              │
└──────────────┘
```

### Tablet (640-1024px)

```
┌─────────────────────────┐
│   Logo    Navigation    │
├─────────────────────────┤
│           │             │
│  Content  │   Content   │
│ (2 columns)             │
│           │             │
└─────────────────────────┘
```

### Desktop (>1024px)

```
┌──────────────────────────────────────┐
│   Logo         Navigation            │
├──────────────────────────────────────┤
│          │          │                │
│ Content  │ Content  │    Content     │
│          (3 columns)                 │
│          │          │                │
└──────────────────────────────────────┘
```

## 🎭 Animation Examples

### Fade In

```
Opacity: 0 → 1
Y-position: 10px down → 0
Duration: 0.5s
```

### Hover Effect (Cards)

```
Border: gray → green
Shadow: small → large
Transform: scale(1) → scale(1.02)
Duration: 0.3s
```

### Progress Bar

```
Width: 0% → 33% → 66% → 100%
Color: gray → green
Transition: 0.3s ease
```

### Gradient Animation

```
Background position moves:
0% 50% → 100% 50% → 0% 50%
Duration: 6s
Repeat: infinite
```

## 🧩 Component Interaction Flow

```
User Journey:
Landing → Click "Get Started" → Form Step 1 → Next →
Form Step 2 → Next → Form Step 3 → Submit →
[API Call] → Results Display → Back/New Search
```

## 📊 State Management

```
App State:
├── view: 'landing' | 'form' | 'results'
├── formData: {...}
├── recommendations: { initial: [], refined: [] }
├── isLoading: boolean
└── error: string

Form State:
├── step: 1 | 2 | 3
├── healthConditions: string[]
├── healthGoals: string[]
├── lifeStage: string[]
├── dietType: string
├── allergies: string
├── activityLevel: string
├── spiceLevel: string
├── macroPreference: string
├── cookingTime: string
├── budgetFriendly: boolean
└── numberOfRecommendations: number
```

## 🎯 Key User Interactions

```
1. Landing Page
   └─→ Click "Get Started" → Navigate to Form

2. Form Navigation
   ├─→ Select options → Update state
   ├─→ Click "Next" → Move to next step
   ├─→ Click "Previous" → Move to previous step
   └─→ Click "Get Recommendations" → Submit form

3. Results Page
   ├─→ View recommendations → Display cards
   ├─→ Hover cards → Show animations
   └─→ Click "Back to Home" → Return to landing
```

---

**This visual guide shows the complete UI structure of your FoodNutra frontend!** 🎨✨
