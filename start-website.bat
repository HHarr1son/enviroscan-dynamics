@echo off
chcp 65001 >nul
cd /d "%~dp0"
cls
echo ========================================
echo EnviroScan Dynamics Website
echo ========================================
echo.
echo Starting local server...
echo.
start http://localhost:9000
echo.
echo Website URL: http://localhost:9000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
python -m http.server 9000 --directory dist
pause
