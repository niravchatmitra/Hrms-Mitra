import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Healthcare & Hospitals | HRMS Mitra',
  description: 'HR software for hospitals, clinics, and healthcare providers. Manage medical staff schedules, track certifications, handle on-call duties, and ensure compliance.',
}

export default function HealthcarePage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare' },
      ]}
      badge="Healthcare"
      icon={<Heart className="w-10 h-10 text-primary" />}
      title="HRMS for Healthcare and Medical Institutions"
      description="Manage your healthcare workforce effectively. Handle complex schedules, track medical certifications, manage on-call duties, and ensure staffing compliance."
      heroImage="/images/industries/healthcare-hero.jpg"
      heroImageAlt="Clean modern hospital corridor with medical equipment and healthcare facility environment"
      challenges={[
        { title: 'Complex Scheduling', description: 'Managing doctors, nurses, and support staff across 24/7 shifts and on-call rosters.' },
        { title: 'License Tracking', description: 'Tracking medical licenses, certifications, and training renewals for compliance.' },
        { title: 'Varying Work Patterns', description: 'Different staff categories with consultants, residents, nurses having unique work patterns.' },
        { title: 'Critical Staffing', description: 'Ensuring adequate staffing levels at all times for patient care.' },
      ]}
      solutions={[
        { title: 'Advanced Shift Management', description: 'Create doctor rosters, on-call schedules, emergency shifts, and duty rotations. Track 24/7 coverage with real-time visibility.' },
        { title: 'Certification Management', description: 'Maintain records of medical licenses, certifications, and continuing education. Get alerts before expiry dates.' },
        { title: 'Flexible Attendance', description: 'Handle doctors with visiting hours, consultants with flexible schedules, and staff with shift-based attendance.' },
        { title: 'Staffing Analytics', description: 'Analyze staff availability, overtime patterns, and department-wise coverage to ensure adequate staffing.' },
      ]}
      modules={[
        { name: 'Attendance Management', description: 'Complex shift patterns and on-call tracking', href: '/features/attendance-management' },
        { name: 'Core HR', description: 'Track medical licenses and certifications', href: '/features/core-hr' },
        { name: 'Leave Management', description: 'Handle emergency leaves and replacements', href: '/features/leave-management' },
        { name: 'Payroll Management', description: 'Process consultant fees and shift allowances', href: '/features/payroll-management' },
        { name: 'Reports & Analytics', description: 'Staffing levels and overtime analysis', href: '/features/reports-analytics' },
        { name: 'Employee Self-Service', description: 'Staff can view schedules and swap shifts', href: '/features/employee-self-service' },
      ]}
      benefits={[
        'Ensure adequate staffing levels for patient safety',
        'Track medical licenses and prevent compliance issues',
        'Handle complex doctor and nurse schedules efficiently',
        'Calculate duty allowances, on-call pay, and overtime accurately',
        'Manage visiting consultants and full-time staff together',
        'Reduce scheduling conflicts and last-minute changes',
        'Maintain complete audit trail for healthcare accreditation',
      ]}
      faqs={[
        { question: 'Can we track medical license expiry dates?', answer: 'Yes, store license details with expiry dates and get automated alerts before expiry. Maintain renewal history and upload updated certificates.' },
        { question: 'How do we handle on-call duties?', answer: 'Create on-call rosters with auto-rotation. Track on-call hours separately and process on-call allowances through payroll.' },
        { question: 'Can visiting consultants use the system?', answer: 'Yes, consultants can view their schedules, mark attendance for specific days or hours, and access their payment information.' },
        { question: 'How do we ensure adequate staffing?', answer: 'Real-time dashboards show current staffing levels by department and shift. Get alerts when staffing falls below defined thresholds.' },
      ]}
    />
  )
}
