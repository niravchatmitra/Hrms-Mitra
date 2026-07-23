import { Metadata } from 'next'
import PricingHero from '@/components/pricing/PricingHero'
import PricingCards from '@/components/pricing/PricingCards'
import EmployeeRangeSelector from '@/components/pricing/EmployeeRangeSelector'
import PricingComparison from '@/components/pricing/PricingComparison'
import AddOnsSection from '@/components/pricing/AddOnsSection'
import ImplementationSection from '@/components/pricing/ImplementationSection'
import PricingFAQ from '@/components/pricing/PricingFAQ'
import PricingCTA from '@/components/pricing/PricingCTA'

export const metadata: Metadata = {
  title: 'Pricing - Affordable HRMS Plans for Every Business',
  description: 'Simple, transparent pricing for HRMS Mitra. Choose the right HR software plan for your business size—from startups to enterprises. No hidden fees.',
  openGraph: {
    title: 'HRMS Mitra Pricing - Simple Plans for Every Stage',
    description: 'Affordable HRMS software for Indian businesses. Essential, Professional, and Enterprise plans.',
  },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <EmployeeRangeSelector />
      <PricingComparison />
      <AddOnsSection />
      <ImplementationSection />
      <PricingFAQ />
      <PricingCTA />
    </>
  )
}
