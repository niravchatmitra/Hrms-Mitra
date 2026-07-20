import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Retail Industry | HRMS Mitra',
  description: 'HR software for retail chains and stores. Manage multi-location workforce, track store attendance, handle sales incentives, and reduce turnover.',
}

export default function RetailPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Retail', href: '/industries/retail' },
      ]}
      badge="Retail"
      icon={<ShoppingBag className="w-10 h-10 text-primary" />}
      title="HRMS for Retail Chains and Stores"
      description="Manage your retail workforce across multiple locations. Track store attendance, process sales incentives, reduce turnover, and ensure consistent HR policies."
      challenges={[
        { title: 'Multi-Location Management', description: 'Managing employees across multiple stores and locations with different local needs.' },
        { title: 'High Employee Turnover', description: 'Retail faces frequent resignations requiring constant hiring and training.' },
        { title: 'Variable Work Hours', description: 'Part-time staff, weekend shifts, and seasonal hiring create scheduling complexity.' },
        { title: 'Sales Incentives', description: 'Calculating store-wise and individual sales incentives accurately and on time.' },
      ]}
      solutions={[
        { title: 'Centralized Multi-Location HR', description: 'Manage all stores from one system while allowing location-specific policies and reporting. Track transfers between stores easily.' },
        { title: 'Rapid Store Onboarding', description: 'Hire and onboard store staff quickly with digital forms, mobile check-ins, and automated training assignments.' },
        { title: 'Flexible Scheduling', description: 'Handle part-time, full-time, and seasonal staff with flexible rosters. Track weekend and holiday work separately.' },
        { title: 'Incentive Automation', description: 'Configure sales-based incentives with auto-calculation. Link performance targets to payout and process through payroll.' },
      ]}
      modules={[
        { name: 'Core HR', description: 'Multi-location employee management', href: '/features/core-hr' },
        { name: 'Attendance Management', description: 'Store-level attendance with mobile check-in', href: '/features/attendance-management' },
        { name: 'Payroll Management', description: 'Process incentives and variable pay', href: '/features/payroll-management' },
        { name: 'Recruitment', description: 'Fast-track store-level hiring', href: '/features/recruitment' },
        { name: 'Performance Management', description: 'Track sales targets and KPIs', href: '/features/performance-management' },
        { name: 'Reports & Analytics', description: 'Store-wise HR and labor cost analytics', href: '/features/reports-analytics' },
      ]}
      benefits={[
        'Manage employees across all store locations from one platform',
        'Reduce hiring time with streamlined retail recruitment',
        'Track store-level attendance and labor costs accurately',
        'Automate sales incentive calculations and payouts',
        'Handle part-time and seasonal staff efficiently',
        'Improve retention with better employee engagement',
        'Generate location-wise compliance and labor reports',
      ]}
      faqs={[
        { question: 'Can store managers access HR data for their location?', answer: 'Yes, store managers can view and manage their team data through role-based access. They can approve leaves, view attendance, and access store-specific reports.' },
        { question: 'How do we handle employee transfers between stores?', answer: 'Employee transfers are processed through the system with history maintained. All records, leaves, and attendance data move with the employee to the new location.' },
        { question: 'Can we track part-time employees?', answer: 'Yes, create separate categories for full-time, part-time, and seasonal staff with different pay structures, benefits, and attendance policies.' },
        { question: 'How are sales incentives calculated?', answer: 'Configure incentive rules based on individual or team sales targets. The system auto-calculates payouts based on actual sales data and processes through monthly payroll.' },
      ]}
    />
  )
}
