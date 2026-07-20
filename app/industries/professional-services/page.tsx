import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Professional Services Firms | HRMS Mitra',
  description: 'HR software for consulting, legal, accounting, and professional services firms. Manage billable hours, track utilization, and handle project-based teams.',
}

export default function ProfessionalServicesPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Professional Services', href: '/industries/professional-services' },
      ]}
      badge="Professional Services"
      icon={<Briefcase className="w-10 h-10 text-primary" />}
      title="HRMS for Consulting and Professional Services Firms"
      description="Manage your professional workforce effectively. Track billable hours, monitor utilization rates, handle project assignments, and optimize resource allocation."
      challenges={[
        { title: 'Billable Hour Tracking', description: 'Accurately tracking and billing client hours while managing non-billable time.' },
        { title: 'Resource Utilization', description: 'Optimizing consultant allocation across multiple client projects.' },
        { title: 'Project-Based Teams', description: 'Managing employees working on multiple projects simultaneously.' },
        { title: 'Client Confidentiality', description: 'Ensuring data security and confidentiality for different client engagements.' },
      ]}
      solutions={[
        { title: 'Time & Billing Integration', description: 'Track billable and non-billable hours with project and client tags. Integrate attendance data with billing systems for accurate invoicing.' },
        { title: 'Resource Planning', description: 'View employee availability, utilization rates, and skills for better project staffing. Track bench time and optimize resource allocation.' },
        { title: 'Project-Based Performance', description: 'Set project-specific goals and KPIs. Collect client feedback and link performance to project delivery success.' },
        { title: 'Secure Access Controls', description: 'Role-based permissions ensure employees access only their assigned project information. Maintain confidentiality across client engagements.' },
      ]}
      modules={[
        { name: 'Attendance Management', description: 'Track billable hours and project time', href: '/features/attendance-management' },
        { name: 'Core HR', description: 'Maintain consultant skills and certifications', href: '/features/core-hr' },
        { name: 'Performance Management', description: 'Project-based goals and client feedback', href: '/features/performance-management' },
        { name: 'Payroll Management', description: 'Handle variable pay and project bonuses', href: '/features/payroll-management' },
        { name: 'Reports & Analytics', description: 'Utilization rates and project analytics', href: '/features/reports-analytics' },
        { name: 'Leave Management', description: 'Coordinate leaves with project timelines', href: '/features/leave-management' },
      ]}
      benefits={[
        'Track billable vs. non-billable hours accurately',
        'Optimize consultant utilization across projects',
        'Maintain detailed skill inventories for staffing',
        'Handle multiple currency and international assignments',
        'Process performance bonuses linked to project success',
        'Ensure client data confidentiality with access controls',
        'Generate resource utilization and profitability reports',
      ]}
      faqs={[
        { question: 'Can we track time spent on different client projects?', answer: 'Yes, employees can log time with project and client tags. The system captures billable vs. non-billable hours for accurate client billing.' },
        { question: 'How do we manage consultants on multiple projects?', answer: 'Employees can be assigned to multiple projects simultaneously. Track time allocation percentages and availability across all active projects.' },
        { question: 'Can we maintain confidentiality between client teams?', answer: 'Yes, use role-based access to restrict information visibility. Employees see only projects they are assigned to, maintaining client confidentiality.' },
        { question: 'How are utilization rates calculated?', answer: 'Utilization is calculated as billable hours divided by total available hours. View individual, team, and organization-wide utilization metrics.' },
      ]}
    />
  )
}
