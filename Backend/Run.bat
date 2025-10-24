@echo off
REM — switch to your project directory (change path as needed)
cd /d "C:\Users\Ishan\Downloads\Downloads\My Group\VersionSix\V6_GithubRender"

REM — optional: activate your virtualenv if you have one
REM call "%~dp0venv\Scripts\activate.bat"

REM — launch Flask server in a new console window
start "Flask Server" cmd /k "python Flask_API_No_Static.py"

REM — give Flask a few seconds to start
timeout /t 3 /nobreak >nul

REM — open default browser to the app root (serves index.html)
start "" "http://127.0.0.1:5000/"

REM — close this launcher window
exit
