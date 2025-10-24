# FoodNutra Frontend

A beautiful, modern, and responsive frontend for personalized food recommendations built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🌟 Features

- **Personalized Recommendations**: Get food suggestions tailored to your health profile
- **Multi-Step Form**: Intuitive form with health profile, dietary preferences, and lifestyle factors
- **Beautiful UI**: Modern design with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and animations throughout
- **Dark Mode Ready**: Supports dark mode out of the box
- **Type-Safe**: Built with TypeScript for better developer experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Flask backend running (see Backend folder)

### Installation

1. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and set your Flask backend URL:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with landing, form, and results
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── radio-group.tsx
│   │   ├── checkbox.tsx
│   │   └── badge.tsx
│   ├── RecommendationForm.tsx  # Multi-step form component
│   └── FoodResults.tsx         # Results display component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── api.ts              # API service layer
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## 🔧 Configuration

### Tailwind CSS

The project uses a custom Tailwind configuration with:

- Custom color palette for health/food theme
- Extended animations (fade-in, slide-in, gradient)
- Dark mode support
- Custom container settings

### API Integration

The API service (`lib/api.ts`) handles communication with the Flask backend:

- Type-safe request/response interfaces
- Error handling
- Request builder utilities

## 🎯 Key Components

### RecommendationForm

A 3-step form that collects:

1. **Health Profile**: Conditions, goals, life stage
2. **Dietary Preferences**: Diet type, allergies
3. **Lifestyle**: Activity level, spice preference, cooking time, budget

### FoodResults

Displays personalized recommendations with:

- Beautiful food cards with nutrition info
- Category badges (Heart Healthy, High Protein, etc.)
- Health benefits information
- Responsive grid layout

### Landing Page

Features:

- Eye-catching hero section
- Feature highlights
- "How It Works" section
- Call-to-action areas

## 🌈 Color Scheme

The app uses a health-focused color palette:

- **Primary**: Green (#16a34a) - Health, growth, wellness
- **Secondary**: Blue - Trust, calm
- **Accents**: Purple, Orange, Pink for various features
- **Neutrals**: Gray shades with dark mode support

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the FoodNutra system for personalized food recommendations.

## 🙏 Acknowledgments

- Backend powered by Flask and Machine Learning
- UI components from shadcn/ui
- Icons from Lucide React
- Built with Next.js and Tailwind CSS

## 🐛 Troubleshooting

### Backend Connection Issues

- Ensure Flask backend is running on port 5000
- Check CORS settings in Flask
- Verify `NEXT_PUBLIC_API_URL` in `.env.local`

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Made with ❤️ for better health through personalized nutrition**
