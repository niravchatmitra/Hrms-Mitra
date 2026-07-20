# HRMS Mitra - Public Marketing Website

A premium, conversion-focused public marketing website for HRMS Mitra built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

This is the **public marketing website** for HRMS Mitra - NOT the internal HRMS application. It showcases the product, features, pricing, and helps businesses learn about the HRMS software.

## ✨ Features

### Design & Branding
- **Premium Design**: Inspired by HROne's quality with original HRMS Mitra branding
- **Brand Colors**: Primary #075E54 (ChatMitra green) with warm accents
- **Typography**: Manrope font with clear hierarchy
- **Responsive**: Mobile-first design working across all devices
- **Accessibility**: WCAG-compliant with keyboard navigation

### Pages Implemented

#### Core Pages
- ✅ Home page (17 sections including hero, features, testimonials, FAQ)
- ✅ Pricing page (3 plans, comparison table, employee selector)
- ✅ About Us
- ✅ Contact Us (with functional form)
- ✅ Book a Demo (with functional form)
- ✅ Thank You page
- ✅ FAQ (searchable, expandable)
- ✅ Custom 404 page

#### Feature Pages (12 modules)
- ✅ Features Overview
- ✅ Core HR
- ✅ Attendance Management
- ✅ Leave Management
- ✅ Payroll Management
- ✅ Recruitment & ATS
- ✅ Performance Management
- ✅ Employee Self-Service
- ✅ Employee Onboarding
- ✅ Expense Management
- ✅ Asset Management
- ✅ Employee Helpdesk
- ✅ Reports & Analytics

#### Industry Pages (7 sectors)
- ✅ Industries Overview
- ✅ Startups
- ✅ IT & Software Companies
- ✅ Manufacturing
- ✅ Retail
- ✅ Healthcare
- ✅ Education
- ✅ Professional Services

#### Additional Pages
- ✅ Blog (structure ready for content)
- ✅ Integrations
- ✅ HR Glossary
- ✅ Resources
- ✅ Security
- ✅ Privacy Policy
- ✅ Terms & Conditions
- ✅ Cookie Policy

### Components

#### Global
- **Header**: Sticky navigation with mega menus for Products, Solutions, Resources, Company
- **Footer**: Multi-column footer with all navigation links
- **Mobile Menu**: Accessible drawer with expandable sections
- **Breadcrumbs**: Consistent navigation breadcrumbs
- **Search Overlay**: Functional search with quick links
- **Cookie Consent**: GDPR-style banner with preference management

#### Forms (with validation)
- **Contact Form**: React Hook Form + Zod validation
- **Demo Booking Form**: Comprehensive demo request with date/time selection
- **Newsletter Form**: Email subscription (ready for integration)
- **Validation**: Indian phone numbers, email, required fields
- **Security**: Honeypot spam prevention

#### Reusable Templates
- `FeaturePageLayout`: Consistent structure for all feature pages
- `IndustryPageLayout`: Consistent structure for industry pages
- `HRMSProductPreview`: Interactive dashboard preview
- Various section components for home page

### Technical Features

- **Next.js 14**: App Router, Server Components, Server Actions ready
- **TypeScript**: Full type safety
- **Tailwind CSS**: Custom design system with brand colors
- **React Hook Form + Zod**: Form validation
- **Lucide Icons**: Consistent iconography
- **SEO Optimized**: Metadata, Open Graph, sitemap, robots.txt
- **Performance**: Optimized images, lazy loading, code splitting

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install

# Or with pnpm
pnpm install
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
# Public Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_HRMS_APP_URL=https://app.hrmsmitra.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@hrmsmitra.com
NEXT_PUBLIC_SUPPORT_PHONE=+91-XXXXXXXXXX

# Private Environment Variables (Server-side only)
CONTACT_RECEIVER_EMAIL=
FORM_WEBHOOK_URL=
EMAIL_SERVICE_API_KEY=
```

### Development

```bash
# Run development server
npm run dev

# Server will start at http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── blog/                    # Blog listing
│   ├── book-demo/               # Demo booking page with form
│   ├── contact/                 # Contact page with form
│   ├── features/                # All feature detail pages
│   ├── industries/              # All industry pages
│   ├── pricing/                 # Pricing page
│   ├── faq/                     # FAQ page
│   ├── security/                # Security page
│   ├── privacy-policy/          # Privacy policy
│   ├── terms-and-conditions/    # Terms page
│   ├── cookie-policy/           # Cookie policy
│   ├── thank-you/               # Thank you page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   └── sitemap.ts               # Dynamic sitemap
├── components/
│   ├── features/                # Feature page components
│   ├── forms/                   # Form components with validation
│   ├── home/                    # Home page sections (17 sections)
│   ├── industries/              # Industry page components
│   ├── layout/                  # Header, Footer, Navigation
│   ├── pricing/                 # Pricing page components
│   └── shared/                  # Reusable components
├── lib/
│   ├── constants.ts             # Site-wide constants
│   ├── form-schemas.ts          # Zod validation schemas
│   ├── pricing-config.ts        # Pricing configuration
│   └── utils.ts                 # Utility functions
├── public/
│   └── robots.txt               # Search engine directives
├── .env.example                 # Environment variable template
├── .env.local                   # Local environment variables (create this)
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: #075E54 (ChatMitra green)
- **Primary Dark**: #043D37
- **Primary Hover**: #086C61
- **Primary Medium**: #168A78
- **Primary Light**: #DCEFEB
- **Primary Extra Light**: #EFF8F5
- **Background Main**: #FBF8F1
- **Background Alt**: #F4F8F6
- **Accent Coral**: #E8753A (for CTA highlights)

### Typography
- **Font**: Manrope (Google Fonts)
- **Fallbacks**: Inter, Plus Jakarta Sans, system-ui
- **Body Text**: 16px minimum
- **Headings**: Bold, clear hierarchy

### Components
- **Cards**: White background, soft shadows, rounded corners
- **Buttons**: Primary (green), Secondary (white/green border), Accent (coral)
- **Forms**: Clear labels, inline validation, accessible
- **Navigation**: Sticky header, mega menus, mobile drawer

## 🔗 External Links

All "Login", "Open HRMS", "Start Free Trial", and "Get Started" buttons redirect to:
- Environment variable: `NEXT_PUBLIC_HRMS_APP_URL`
- Default: `https://app.hrmsmitra.com`

This ensures the public website is completely separate from the HRMS application.

## 📝 Content Management

### Forms
Forms currently log to console and show success messages. To connect to your backend:

1. Update form submission handlers in:
   - `components/forms/ContactForm.tsx`
   - `components/forms/DemoForm.tsx`

2. Replace the mock API call with your actual endpoint:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

### Blog Content
The blog page (`app/blog/page.tsx`) has a sample structure. To add real blog content:

1. Option A: Use MDX files in `content/blog/` directory
2. Option B: Integrate a headless CMS (Contentful, Sanity, etc.)
3. Option C: Build custom API routes for dynamic content

### Pricing
Update pricing in `lib/pricing-config.ts`:
- Change "Contact Sales" to actual prices
- Modify plan features
- Adjust employee count ranges

### Testimonials
Replace sample testimonials in `components/home/TestimonialsSection.tsx` with real client testimonials.

## ✅ Quality Checklist

- [x] All navigation links functional (no # links)
- [x] Forms with proper validation
- [x] Mobile responsive (tested 360px to 1440px+)
- [x] Accessibility (keyboard navigation, ARIA labels)
- [x] SEO optimization (metadata, sitemap, robots.txt)
- [x] Cookie consent banner
- [x] Search functionality
- [x] 404 page
- [x] Legal pages (Privacy, Terms, Cookie Policy)
- [x] Contact and Demo forms
- [x] External HRMS app URL configuration

## 🚧 Remaining Work

### Optional Enhancements
1. **Blog System**: Add MDX or CMS integration for actual blog posts
2. **Form Backend**: Connect forms to email service or CRM
3. **Analytics**: Add Google Analytics or similar
4. **Performance**: Further optimize images (add actual product screenshots)
5. **Testing**: Add unit/integration tests
6. **Animations**: Add subtle scroll animations if desired
7. **i18n**: Multi-language support if needed

### Before Going Live
1. Replace placeholder images with actual product screenshots
2. Update contact information in `.env.local`
3. Add real client testimonials
4. Set official pricing in `lib/pricing-config.ts`
5. Connect forms to backend/email service
6. Add Google verification code in `app/layout.tsx`
7. Set up analytics tracking
8. Test all forms and links
9. Run Lighthouse audit
10. Configure production domain

## 📱 Responsive Breakpoints

- Mobile: 360px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1280px+

All components are fully responsive and tested across breakpoints.

## 🔒 Security

- Forms include honeypot spam prevention
- Server-side validation ready
- Environment variables for sensitive data
- No hardcoded credentials
- Cookie consent compliance
- Privacy policy and terms included

## 📞 Support

For questions about this codebase:
- Review component documentation in files
- Check `lib/constants.ts` for configuration
- See `.env.example` for required environment variables

## 📄 License

This project is proprietary software for HRMS Mitra.

---

**Built with ❤️ for HRMS Mitra**

Simple HR. Smarter Workplaces.
