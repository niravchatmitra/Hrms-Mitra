# HRMS Mitra - Marketing Website

Complete marketing website for HRMS Mitra, a Human Resource Management System designed for Indian businesses.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🚀 Features

### Pages
- **Home Page** - 17 comprehensive sections showcasing HRMS features
- **12 Feature Pages** - Core HR, Attendance, Leave, Payroll, Recruitment, Performance, Employee Self-Service, Onboarding, Expense, Asset, Helpdesk, Reports & Analytics
- **7 Industry Solutions** - Startups, IT Companies, Manufacturing, Retail, Healthcare, Education, Professional Services
- **Pricing** - 3-tier plans with detailed comparison table
- **Company Pages** - About, Contact, Book Demo, FAQ, Security
- **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy

### Key Features
- ✅ Premium design with ChatMitra green brand color (#075E54)
- ✅ Fully responsive and mobile-optimized
- ✅ Working contact and demo request forms with validation
- ✅ SEO optimized with metadata and sitemap
- ✅ Cookie consent management
- ✅ Search functionality
- ✅ Functional navigation (no placeholder links)
- ✅ Fast page loads with Next.js 14 App Router

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Font**: Manrope (Google Fonts)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/niravchatmitra/hrms-mitra.git
cd hrms-mitra
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_HRMS_APP_URL=https://app.hrmsmitra.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@hrmsmitra.com
NEXT_PUBLIC_SUPPORT_PHONE=+91-XXXXXXXXXX
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📂 Project Structure

```
hrms-mitra/
├── app/                    # Next.js App Router pages
│   ├── features/          # Feature detail pages
│   ├── industries/        # Industry solution pages
│   ├── pricing/          # Pricing page
│   ├── about/            # Company pages
│   └── ...
├── components/
│   ├── home/             # Home page sections
│   ├── features/         # Feature page components
│   ├── industries/       # Industry page components
│   ├── pricing/          # Pricing components
│   ├── layout/           # Header, Footer, Navigation
│   ├── forms/            # Contact and Demo forms
│   └── shared/           # Reusable components
├── lib/
│   ├── constants.ts      # Site configuration
│   ├── pricing-config.ts # Pricing plans data
│   └── form-schemas.ts   # Zod validation schemas
├── public/               # Static assets
└── ...
```

## 🎨 Design System

### Brand Colors
- **Primary**: #075E54 (ChatMitra Green)
- **Primary Hover**: #064139
- **Primary Light**: #E8F5F4
- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Headings**: 700 weight
- **Body**: 400 weight

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📋 Before Production

- [ ] Replace sample testimonials with real client quotes
- [ ] Update pricing in `lib/pricing-config.ts` with actual prices
- [ ] Connect forms to backend API (currently console logging)
- [ ] Add real product screenshots
- [ ] Add Google Analytics tracking code
- [ ] Create actual blog posts
- [ ] Test all forms and links
- [ ] Run accessibility audit
- [ ] Test on multiple browsers and devices

## 🔒 Security

- Environment variables are excluded from Git (`.env.local`)
- Form validation with Zod
- Honeypot spam prevention in forms
- No sensitive data in codebase

## 📄 License

Proprietary - All rights reserved by HRMS Mitra

## 👥 Author

Built for HRMS Mitra by niravchatmitra

## 📞 Support

For questions or issues:
- Email: support@hrmsmitra.com
- Website: https://hrmsmitra.com
