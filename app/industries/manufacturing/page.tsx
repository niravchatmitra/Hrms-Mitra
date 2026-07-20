import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Manufacturing Industry | HRMS Mitra',
  description: 'HR software for manufacturing companies. Manage shift workers, track production attendance, handle blue-collar workforce, and ensure labor compliance.',
}

export default function ManufacturingPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
      ]}
      badge="Manufacturing"
      icon={<Factory className="w-10 h-10 text-primary" />}
      title="HRMS for Manufacturing and Production Companies"
      description="Manage your factory workforce efficiently. Handle multiple shifts, track production attendance, ensure compliance, and manage both floor workers and office staff."
      challenges={[
        { title: 'Shift Management', description: 'Managing multiple shifts, rotations, and production schedules for floor workers.' },
        { title: 'Attendance Tracking', description: 'Accurate timekeeping for large workforces with biometric integration.' },
        { title: 'Contractor Management', description: 'Handling both permanent employees and contract workers in compliance.' },
        { title: 'Labor Law Compliance', description: 'Meeting Factories Act, overtime regulations, and statutory requirements.' },
      ]}
      solutions={[
        { title: 'Flexible Shift Management', description: 'Create rotating shifts, assign workers, track shift changes, and calculate shift allowances automatically.' },
        { title: 'Biometric Integration', description: 'Integrate with factory biometric devices for accurate attendance capture and eliminate proxy attendance.' },
        { title: 'Overtime Calculation', description: 'Auto-calculate overtime hours based on shift timings and labor laws. Process overtime wages accurately in payroll.' },
        { title: 'Statutory Compliance', description: 'Ensure PF, ESI, bonus, and gratuity calculations comply with labor laws and factory regulations.' },
      ]}
      modules={[
        { name: 'Attendance Management', description: 'Biometric integration and shift tracking', href: '/features/attendance-management' },
        { name: 'Payroll Management', description: 'Handle piece-rate, overtime, and allowances', href: '/features/payroll-management' },
        { name: 'Leave Management', description: 'Manage factory holidays and earned leave', href: '/features/leave-management' },
        { name: 'Core HR', description: 'Employee database for all worker categories', href: '/features/core-hr' },
        { name: 'Reports & Analytics', description: 'Production attendance and labor cost reports', href: '/features/reports-analytics' },
        { name: 'Asset Management', description: 'Track safety equipment and tools', href: '/features/asset-management' },
      ]}
      benefits={[
        'Eliminate manual attendance registers and calculation errors',
        'Support 24/7 operations with flexible shift management',
        'Reduce payroll processing time for large workforces',
        'Ensure labor law compliance and avoid penalties',
        'Track contract workers separately with proper documentation',
        'Generate statutory reports required by labor department',
        'Integrate with existing biometric or card-based systems',
      ]}
      faqs={[
        { question: 'Can we integrate with our factory biometric devices?', answer: 'Yes, HRMS Mitra integrates with most standard biometric systems including fingerprint, face recognition, and RFID card readers.' },
        { question: 'How do we handle different worker categories?', answer: 'You can create separate employee types for permanent, contract, temporary, and apprentice workers with different policies and pay structures.' },
        { question: 'Does it calculate piece-rate wages?', answer: 'Yes, you can configure piece-rate, production-based incentives, and other variable pay components based on production output.' },
        { question: 'Can we generate labor compliance reports?', answer: 'Yes, generate statutory reports including Form A, Form B, muster rolls, and other documents required for factory inspections and labor audits.' },
      ]}
    />
  )
}
