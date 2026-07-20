# Production Checklist for HRMS Mitra

## 🚨 Critical - Must Complete Before Launch

### 1. Environment Variables
Update `.env.local` with production values:

```env
# Site URL (update to production domain)
NEXT_PUBLIC_SITE_URL=https://hrmsmitra.com

# HRMS App URL (for login/trial redirects)
NEXT_PUBLIC_HRMS_APP_URL=https://app.hrmsmitra.com

# Support Contact Info - REPLACE PLACEHOLDERS!
NEXT_PUBLIC_SUPPORT_EMAIL=support@hrmsmitra.com
NEXT_PUBLIC_SUPPORT_PHONE=+91-XXXXXXXXXX  # ⚠️ ADD REAL PHONE NUMBER

# Email Service (Resend recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxx  # Get from https://resend.com

# Optional: CRM/Webhook Integration
CRM_WEBHOOK_URL=https://your-crm-endpoint.com/webhook

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics 4
```

### 2. Missing Assets

#### Social Share Images (OG Images)
**Location:** `public/og-image.png`
**Required:** Yes
**Dimensions:** 1200x630px
**Current Status:** ❌ Missing
**Impact:** Broken social media previews on Facebook, Twitter, LinkedIn

**Action Required:**
1. Create professional OG image with HRMS Mitra branding
2. Save as `public/og-image.png`
3. Optionally create page-specific images:
   - `public/og-images/pricing.png`
   - `public/og-images/features.png`

#### Favicons
**Location:** `public/` directory
**Required:** Yes
**Current Status:** ❌ Missing
**Impact:** No browser tab icon, unprofessional appearance

**Action Required:**
Generate complete favicon set (use https://realfavicongenerator.net/):
- `public/favicon.ico` (32x32)
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png` (180x180)
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/site.webmanifest`

Then update `app/layout.tsx` icons metadata.

### 3. Pricing Configuration
**File:** `lib/pricing-config.ts`
**Current Status:** ⚠️ Shows "Contact Sales" for all plans
**Action Required:** 

Update with real pricing or keep "Contact Sales" if pricing is custom-only.

Example update:
```typescript
{
  id: 'essential',
  name: 'Essential',
  price: 'Contact Sales', // OR: '₹299/employee/month'
  billingCycle: 'per employee per month',
  // ...
}
```

### 4. Google Search Console Verification
**File:** `app/layout.tsx`
**Current Value:** `'your-google-verification-code'` (placeholder)
**Action Required:**

Option 1: Add real verification code
```typescript
verification: {
  google: 'your-actual-verification-code-from-search-console',
},
```

Option 2: Remove placeholder
```typescript
// Remove the verification section entirely
```

### 5. Form Email Integration

**Files:** 
- `app/api/contact/route.ts`
- `app/api/demo/route.ts`

**Current Status:** ⚠️ Console logging only (TODOs in place)

**Recommended Setup (Resend):**
```bash
npm install resend
```

**Action Required:**
1. Sign up at https://resend.com
2. Get API key
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Uncomment email sending code in API routes
5. Update sender domain to verified domain

**Alternative:** Use webhook integration with your existing CRM/email system.

---

## 📋 Pre-Launch Testing

### Build & Deployment
- [ ] Run `npm run build` - must complete with 0 errors
- [ ] Run `npm run lint` - fix all warnings
- [ ] Test production build locally: `npm run build && npm run start`
- [ ] Verify all routes accessible in production mode

### Forms Testing
- [ ] Submit contact form - verify email received
- [ ] Submit demo form - verify email received
- [ ] Test honeypot spam protection
- [ ] Verify form validation (try submitting invalid data)
- [ ] Check thank-you page redirects work

### Content Verification
- [ ] Replace all placeholder content (testimonials, stats)
- [ ] Verify all internal links work (no 404s)
- [ ] Check pricing page reflects current offerings
- [ ] Update blog with real content (currently structure only)
- [ ] Add real product screenshots (currently placeholders)

### SEO & Social
- [ ] Verify OG images appear correctly on social media
- [ ] Test share previews: https://www.opengraph.xyz/
- [ ] Confirm favicon shows in browser tabs
- [ ] Verify Google Search Console ownership
- [ ] Submit sitemap to Google: `/sitemap.xml`

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on slow 3G connection
- [ ] Verify images are optimized
- [ ] Check Core Web Vitals in production

### Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge

### Accessibility
- [ ] Keyboard navigation works (Tab through forms)
- [ ] Screen reader friendly (test with NVDA/JAWS)
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text
- [ ] Forms have proper labels

---

## 📞 Support Contacts

**For questions about:**
- **Email setup**: Resend documentation (https://resend.com/docs)
- **Favicon generation**: Real Favicon Generator (https://realfavicongenerator.net/)
- **OG image design**: Canva (https://www.canva.com/) or Figma
- **Environment variables**: Next.js env docs (https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

## ✅ Launch Day Checklist

- [ ] All items above completed
- [ ] Production environment variables set
- [ ] DNS configured correctly
- [ ] SSL certificate active
- [ ] Form submissions tested in production
- [ ] Analytics tracking verified
- [ ] Error monitoring active (Sentry recommended)
- [ ] Backup monitoring email notifications working

---

**Last Updated:** $(date)
**Project:** HRMS Mitra Marketing Website
**Built with:** Next.js 14, TypeScript, Tailwind CSS
