# Git Push Script
Set-Location "c:\Users\DELL\Desktop\hrms ui"

# Configure Git user
git config user.name "HRMS Mitra"
git config user.email "dev@hrmsmitra.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete HRMS Mitra marketing website"

# Display status
Write-Host "Git initialized and committed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create a repository on GitHub/GitLab/Bitbucket"
Write-Host "2. Run: git remote add origin <your-repository-url>"
Write-Host "3. Run: git branch -M main"
Write-Host "4. Run: git push -u origin main"
Write-Host ""
Write-Host "Current status:"
git status
