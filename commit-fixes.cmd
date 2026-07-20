@echo off
cd /d "C:\Users\DELL\Desktop\hrms ui"
echo Adding files to git...
git add .
echo.
echo Creating commit...
git commit -m "Production-ready: Fix all build bugs, navigation issues, and add API routes

- Fix build-breaking bugs (FAQ apostrophe, missing imports, JSX syntax)
- Replace all internal <a> tags with Next.js <Link> for smooth navigation  
- Create API routes for contact and demo forms with validation
- Add error and loading boundaries
- Remove Google verification placeholder
- Document production checklist and required assets
- Forms now submit to real endpoints (email integration ready)"
echo.
echo Commit created! Ready to push.
echo Run: git push -u origin main
pause
