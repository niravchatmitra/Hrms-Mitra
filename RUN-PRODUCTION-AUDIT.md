# How to Run Production Build & Lighthouse Audit

This guide walks you through testing the production build and measuring real Lighthouse scores.

---

## 🏗️ STEP 1: Stop Development Server

If the dev server is running on port 3000, stop it first:

**Windows PowerShell**:
```powershell
# Find the process using port 3000
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Kill it
Stop-Process -Id <PID>
```

**Or press `Ctrl+C` in the terminal where `npm run dev` is running.**

---

## 🚀 STEP 2: Build for Production

Run the production build:

```bash
npm run build
```

**What to look for**:
- ✅ Build completes with zero errors
- ✅ All ~40 routes compile successfully
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ⚠️ Check bundle sizes (displayed at end of build)

**Expected output**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         150 kB
├ ○ /about                               3.8 kB         148 kB
├ ○ /features/core-hr                    4.1 kB         149 kB
...
○  (Static)  prerendered as static content
```

**If build fails**:
1. Read the error message carefully
2. Fix the file mentioned in the error
3. Run `npm run build` again

---

## 🌐 STEP 3: Start Production Server

After successful build, start the production server:

```bash
npm start
```

**What to expect**:
```
   ▲ Next.js 14.2.35
   - Local:        http://localhost:3000
   - Network:      http://192.168.x.x:3000

 ✓ Ready in 500ms
```

**Keep this terminal open!** The production server needs to stay running for the audit.

---

## 🔍 STEP 4: Run Lighthouse Audit

### Option A: Chrome DevTools (Recommended)

1. Open **Google Chrome** (not another browser)
2. Navigate to `http://localhost:3000`
3. Open DevTools:
   - Windows: `F12` or `Ctrl+Shift+I`
   - Mac: `Cmd+Option+I`
4. Click the **"Lighthouse"** tab (might be under the `>>` overflow menu)
5. Select options:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - **Device**: Desktop (test both Desktop and Mobile separately)
   - **Mode**: Navigation (default)
6. Click **"Analyze page load"**
7. Wait 30-60 seconds for the audit to complete

### Option B: Lighthouse CLI

Install Lighthouse globally:
```bash
npm install -g lighthouse
```

Run the audit:
```bash
lighthouse http://localhost:3000 --view --output=html
```

**This will**:
- Run the full audit
- Generate an HTML report
- Open it automatically in your browser

---

## 📊 STEP 5: Interpret Results

### Performance Score
**What affects it**:
- JavaScript bundle size
- Image loading/optimization
- Font loading strategy
- Render-blocking resources
- Layout shift (CLS)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)

**Current baseline** (production mode):
- Expected: **75-85** (good for a content-heavy site)
- Target: **85-95** (excellent)

**If score is low**, check:
- "Opportunities" section for quick wins
- "Diagnostics" for detailed issues
- Bundle sizes in build output

### Accessibility Score
**What affects it**:
- Color contrast ratios
- Missing alt text on images
- Missing ARIA labels
- Improper heading hierarchy
- Missing form labels
- Keyboard navigation issues
- Focus states

**Current baseline**:
- Expected: **96-98**
- Target: **100**

**If score is low**, check:
- Color contrast (gray text on light-green backgrounds)
- Icon-only buttons without labels
- Missing focus indicators

### Best Practices Score
**What affects it**:
- HTTPS usage (localhost won't have HTTPS)
- Console errors/warnings
- Deprecated APIs
- Image aspect ratios
- Security headers

**Current baseline**:
- Expected: **95-100**
- Target: **100**

**If score is low**, check:
- Browser console for errors
- Network tab for failed requests

### SEO Score
**What affects it**:
- Meta descriptions
- Title tags
- Proper heading hierarchy
- Mobile-friendly viewport
- Crawlable links
- robots.txt

**Current baseline**:
- Expected: **100** (all metadata implemented)
- Target: **100**

---

## 🐛 STEP 6: Test Specific Pages

Don't just test the homepage! Run Lighthouse on:

### Critical Pages
- `http://localhost:3000` (homepage)
- `http://localhost:3000/features/core-hr` (feature page example)
- `http://localhost:3000/industries/it-companies` (industry page example)
- `http://localhost:3000/pricing` (pricing page)
- `http://localhost:3000/contact` (form page)
- `http://localhost:3000/faq` (FAQ with client interactions)

### Why test multiple pages?
- Different pages load different components
- Some pages have more images/scripts
- Form pages need extra accessibility checks
- Interactive pages might have layout shift issues

---

## 📝 STEP 7: Document Findings

Create a file `LIGHTHOUSE-RESULTS.md` with:

```markdown
# Lighthouse Audit Results

**Date**: [Date]
**Build Version**: [Commit hash]
**Test Environment**: Production build (npm start)

## Scores

### Homepage (/)
- Performance: XX/100
- Accessibility: XX/100
- Best Practices: XX/100
- SEO: XX/100

### Feature Page (/features/core-hr)
- Performance: XX/100
- Accessibility: XX/100
- Best Practices: XX/100
- SEO: XX/100

[... repeat for other pages]

## Issues Found

### Performance
1. [Issue description]
   - File: [filename]
   - Fix: [how to fix]

### Accessibility
1. [Issue description]
   - File: [filename]
   - Fix: [how to fix]

[... etc]

## Action Items
- [ ] Fix color contrast on light-green cards
- [ ] Add focus states to mega-menu items
- [ ] Optimize images in hero sections
- [ ] [... other fixes]
```

---

## 🔄 STEP 8: Fix and Re-test

1. Stop the production server (`Ctrl+C`)
2. Make code changes to fix issues
3. Rebuild: `npm run build`
4. Restart: `npm start`
5. Run Lighthouse again
6. Repeat until all scores are satisfactory

---

## 🎯 Target Scores for Production

**Minimum acceptable**:
- Performance: 80+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Ideal**:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🚨 Common Issues & Quick Fixes

### Issue: Performance score is low
**Check**:
- Bundle size in build output (should be <200 KB First Load JS)
- Unused CSS/JS (run `npm run build` and look for warnings)
- Images not using next/image component

**Quick wins**:
- Lazy load below-the-fold content
- Use next/image for all images
- Minimize third-party scripts

### Issue: Accessibility score is low
**Check**:
- Color contrast using DevTools (Lighthouse will show specific elements)
- Missing alt text on images
- Buttons/links without descriptive text

**Quick wins**:
- Darken gray text on light backgrounds
- Add aria-label to icon-only buttons
- Ensure all form inputs have labels

### Issue: SEO score is low
**Check**:
- Missing meta descriptions (should already be fixed)
- Invalid links
- Images without alt text

**Quick wins**:
- Add/fix meta descriptions in page metadata
- Fix broken internal links
- Add descriptive alt text to images

---

## 📞 Need Help?

If you encounter errors during the build or audit:

1. Check `PRODUCTION-STATUS.md` for known issues
2. Read the error message carefully (they're usually helpful!)
3. Google the exact error message
4. Check Next.js docs: https://nextjs.org/docs

**Common build errors**:
- "Module not found" → Missing import or wrong path
- "Type error" → TypeScript type mismatch
- "Parse error" → Syntax error in JSX/TSX

---

**Ready?** Start with Step 1 and work your way through!

Good luck! 🚀
