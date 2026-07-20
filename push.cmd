@echo off
cd /d "C:\Users\DELL\Desktop\hrms ui"
echo Pushing to GitHub...
git branch -M main
git push -u origin main
echo.
echo Done! Check your repository at:
echo https://github.com/niravchatmitra/Hrms-Mitra
pause
