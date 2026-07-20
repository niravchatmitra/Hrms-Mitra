@echo off
cd /d "C:\Users\DELL\Desktop\hrms ui"
echo Running ESLint...
call npm run lint
echo.
echo Lint completed. Check output above for any errors.
pause
