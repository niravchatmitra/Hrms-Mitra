import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ClientTrustSection from '@/components/home/ClientTrustSection'
import FeatureHighlightCards from '@/components/home/FeatureHighlightCards'
import AllInOnePlatformSection from '@/components/home/AllInOnePlatformSection'
import SocialProofSection from '@/components/home/SocialProofSection'
import IntegrationsSection from '@/components/home/IntegrationsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export const metadata: Metadata = {
  title: 'HRMS Mitra — Simple HR, Smarter Workplaces',
  description:
    'HRMS Mitra automates payroll (PF/ESI/TDS), attendance, leave, hiring and performance for Indian businesses — with WhatsApp-native HR notifications. Simple HR, smarter workplaces. Free demo.',
  keywords: [
    'HRMS India', 'HR software India', 'payroll software India', 'PF ESI TDS payroll',
    'attendance management', 'leave management', 'WhatsApp HRMS', 'employee self service',
    'Keka alternative', 'greytHR alternative', 'Darwinbox alternative', 'Zoho People alternative',
    'HRMS for SME India', 'hiring onboarding software', 'performance management India',
    'simple HR software', 'Indian HRMS', 'HRMS Mitra',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'HRMS Mitra',
    title: 'HRMS Mitra — Simple HR, Smarter Workplaces',
    description:
      'Automate payroll, attendance, leave, hiring and performance — with WhatsApp-native HR alerts. PF/ESI/TDS compliant. Free demo.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HRMS Mitra — Simple HR, Smarter Workplaces' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Mitra — Simple HR, Smarter Workplaces',
    description: 'Automate payroll & HR with WhatsApp notifications. PF/ESI/TDS compliant. Free demo.',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* ① Hero — headline + module pills + CTA */}
      <HeroSection />

      {/* ② Client trust / logo marquee strip */}
      <ClientTrustSection />

      {/* ③ 3 Feature highlight cards (WhatsApp / Payroll / AI) */}
      <FeatureHighlightCards />

      {/* ④ "All your HR, one platform" — 6 alternating module blocks */}
      <AllInOnePlatformSection />

      {/* ⑤ Social proof stats row + primary CTA + Case Studies link */}
      <SocialProofSection />

      {/* ⑥ Integrations strip + See All Integrations */}
      <IntegrationsSection />

      {/* ⑦ Testimonials carousel */}
      <TestimonialsSection />

      {/* ⑧ FAQ with schema.org FAQPage markup */}
      <FAQSection />

      {/* ⑨ Final CTA band — Start Free Trial / Book a Demo */}
      <FinalCTASection />
    </>
  )
}
