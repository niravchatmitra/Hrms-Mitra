# Push to existing GitHub repository
Set-Location "c:\Users\DELL\Desktop\hrms ui"

Write-Host "Configuring Git with your name..." -ForegroundColor Cyan
git config user.name "niravchatmitra"
git config user.email "niravchatmitra@gmail.com"

Write-Host "Adding remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/niravchatmitra/Hrms-Mitra.git

Write-Host "Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main --force

Write-Host ""
Write-Host "✅ Success! Code pushed to GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "Repository URL: https://github.com/niravchatmitra/Hrms-Mitra" -ForegroundColor Cyan
Write-Host ""
