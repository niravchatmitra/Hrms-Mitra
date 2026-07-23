import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ClientTrustSection from '@/components/home/ClientTrustSection'
import HRProblemsSection from '@/components/home/HRProblemsSection'
import ProductModulesSection from '@/components/home/ProductModulesSection'
import CoreHRFeatureSection from '@/components/home/CoreHRFeatureSection'
import AttendanceLeaveSection from '@/components/home/AttendanceLeaveSection'
import PayrollSection from '@/components/home/PayrollSection'
import EmployeeSelfServiceSection from '@/components/home/EmployeeSelfServiceSection'
import RecruitmentOnboardingSection from '@/components/home/RecruitmentOnboardingSection'
import PerformanceSection from '@/components/home/PerformanceSection'
import ReportingSection from '@/components/home/ReportingSection'
import WhyHRMSMitraSection from '@/components/home/WhyHRMSMitraSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import IndustriesSection from '@/components/home/IndustriesSection'
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
      <HeroSection />
      <ClientTrustSection />
      <HRProblemsSection />
      <ProductModulesSection />
      <CoreHRFeatureSection />
      <AttendanceLeaveSection />
      <PayrollSection />
      <EmployeeSelfServiceSection />
      <RecruitmentOnboardingSection />
      <PerformanceSection />
      <ReportingSection />
      <WhyHRMSMitraSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
