import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Startups - Scale Your HR Operations | HRMS Mitra',
  description: 'Affordable HRMS software for Indian startups. Automate HR from day one with employee management, payroll, attendance, and leave tracking.',
}

export default function StartupsPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Startups', href: '/industries/startups' },
      ]}
      badge="Startups"
      icon={<Rocket className="w-10 h-10 text-primary" />}
      title="HRMS Software Built for Fast-Growing Startups"
      description="Focus on building your product while HRMS Mitra handles your HR operations. Affordable, easy-to-use, and ready to scale as you grow."
      challenges={[
        {
          title: 'Limited HR Resources',
          description: 'Startups often have no dedicated HR person, forcing founders to manage HR manually.',
        },
        {
          title: 'Rapid Hiring Needs',
          description: 'Need to hire quickly but lack structured recruitment and onboarding processes.',
        },
        {
          title: 'Payroll Complexity',
          description: 'Managing payroll, compliance, and tax calculations becomes overwhelming as the team grows.',
        },
        {
          title: 'Informal Policies',
          description: 'Operating with informal attendance and leave policies leads to confusion and disputes.',
        },
      ]}
      solutions={[
        {
          title: 'Start HR Right From Day One',
          description: 'Set up HRMS Mitra in hours, not weeks. Create employee records, define leave policies, and establish attendance tracking from your first hire.',
        },
        {
          title: 'Streamline Rapid Hiring',
          description: 'Post jobs, track candidates, send offers, and onboard new hires digitally—all in one system without manual paperwork.',
        },
        {
          title: 'Automate Payroll and Compliance',
          description: 'Process accurate payroll with PF, ESI, and TDS calculations. Focus on growth while HRMS Mitra handles statutory compliance.',
        },
        {
          title: 'Scale Without HR Overhead',
          description: 'Add modules as you grow. Start with essentials and expand to recruitment, performance, and analytics when needed.',
        },
      ]}
      modules={[
        {
          name: 'Core HR',
          description: 'Build your employee database from the first hire',
          href: '/features/core-hr',
        },
        {
          name: 'Attendance & Leave',
          description: 'Track time and manage leave requests effortlessly',
          href: '/features/attendance-management',
        },
        {
          name: 'Payroll',
          description: 'Run compliant payroll without accounting expertise',
          href: '/features/payroll-management',
        },
        {
          name: 'Recruitment',
          description: 'Hire faster with organized candidate tracking',
          href: '/features/recruitment',
        },
        {
          name: 'Onboarding',
          description: 'Create smooth onboarding experiences',
          href: '/features/onboarding',
        },
        {
          name: 'Employee Self-Service',
          description: 'Empower employees to handle their own HR needs',
          href: '/features/employee-self-service',
        },
      ]}
      benefits={[
        'Affordable pricing designed for early-stage companies',
        'Quick implementation—get started in days, not months',
        'No dedicated HR person needed to manage the system',
        'Flexible modules—pay only for what you use',
        'Mobile-first design for remote and hybrid teams',
        'Built for Indian compliance (PF, ESI, PT, TDS)',
        'Scale seamlessly as your team grows to 100+ employees',
      ]}
      faqs={[
        {
          question: 'Is HRMS Mitra suitable for early-stage startups?',
          answer: 'Absolutely. HRMS Mitra is designed for startups from 5 to 500+ employees. You can start with basic modules and add more as you grow.',
        },
        {
          question: 'Do we need an HR person to use HRMS Mitra?',
          answer: 'No. The system is intuitive enough for founders or office managers to handle HR operations. We provide implementation support to get you started.',
        },
        {
          question: 'What if we have remote employees?',
          answer: 'HRMS Mitra works perfectly for remote and hybrid teams. Employees can mark attendance, apply for leave, and access payslips from anywhere.',
        },
        {
          question: 'How quickly can we implement HRMS Mitra?',
          answer: 'Most startups go live within 1-2 weeks. We help you configure policies, import employee data, and train your team quickly.',
        },
      ]}
    />
  )
}
