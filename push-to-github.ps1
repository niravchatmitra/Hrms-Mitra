# Push to GitHub Script
Set-Location "c:\Users\DELL\Desktop\hrms ui"

Write-Host "Pushing HRMS Mitra to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Add remote repository
Write-Host "Adding remote repository..." -ForegroundColor Yellow
git remote add origin https://github.com/niravchatmitra/hrms-mitra.git

# Rename branch to main
Write-Host "Renaming branch to main..." -ForegroundColor Yellow
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ Success! Your code has been pushed to GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "Repository URL: https://github.com/niravchatmitra/hrms-mitra" -ForegroundColor Cyan
Write-Host ""
