@echo off
echo 🚀 Setting up FoodNutra Frontend...

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo ✅ Node.js is installed

echo 📦 Installing dependencies...
call npm install

if not exist .env.local (
    echo 📝 Creating .env.local file...
    copy .env.example .env.local
    echo ✅ .env.local created. Please update with your backend URL.
) else (
    echo ℹ️  .env.local already exists.
)

echo.
echo ✨ Setup complete! 
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser.
echo.
echo ⚠️  Make sure your Flask backend is running on port 5000!
pause
