import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for IT & Software Companies | HRMS Mitra',
  description: 'HR software for IT companies. Manage tech talent, track project hours, process variable pay, and handle employee lifecycle for software teams.',
}

export default function ITCompaniesPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'IT Companies', href: '/industries/it-companies' },
      ]}
      badge="IT & Software"
      icon={<Code className="w-10 h-10 text-primary" />}
      title="HRMS for IT and Software Companies"
      description="Manage your tech talent effectively. Handle high-volume hiring, flexible work arrangements, skill tracking, and project-based performance reviews."
      heroImage="/images/industries/it-companies-hero.jpg"
      heroImageAlt="Modern IT and software company workspace with development monitors and coding environment"
      challenges={[
        { title: 'High Hiring Volume', description: 'Constant recruitment needs for developers, QA, designers, and other tech roles.' },
        { title: 'Remote & Hybrid Teams', description: 'Managing distributed teams across multiple locations and time zones.' },
        { title: 'Attrition Management', description: 'High attrition rates require better retention strategies and exit analytics.' },
        { title: 'Skill Tracking', description: 'Need to track employee skills, certifications, and training for project allocation.' },
      ]}
      solutions={[
        { title: 'Streamlined Tech Recruitment', description: 'Track multiple job openings, manage large candidate volumes, schedule technical interviews, and reduce time-to-hire with organized ATS.' },
        { title: 'Flexible Work Management', description: 'Support remote check-ins, flexible hours, work-from-home policies, and hybrid attendance tracking.' },
        { title: 'Performance & Skills Tracking', description: 'Set project-based goals, conduct technical reviews, track skills and certifications for better resource allocation.' },
        { title: 'Retention Analytics', description: 'Analyze attrition patterns, identify flight risks, and take proactive retention measures with data insights.' },
      ]}
      modules={[
        { name: 'Recruitment & ATS', description: 'Handle high-volume tech hiring efficiently', href: '/features/recruitment' },
        { name: 'Attendance Management', description: 'Track flexible and remote work arrangements', href: '/features/attendance-management' },
        { name: 'Performance Management', description: 'Project-based goals and technical evaluations', href: '/features/performance-management' },
        { name: 'Payroll Management', description: 'Handle variable pay and stock options', href: '/features/payroll-management' },
        { name: 'Reports & Analytics', description: 'Attrition analysis and workforce planning', href: '/features/reports-analytics' },
        { name: 'Employee Self-Service', description: 'Empower tech teams with self-service', href: '/features/employee-self-service' },
      ]}
      benefits={[
        'Reduce hiring cycle time with organized recruitment workflows',
        'Support fully remote and hybrid work models seamlessly',
        'Track technical skills and certifications for resource planning',
        'Handle complex salary structures with bonuses and ESOPs',
        'Analyze attrition trends and improve retention',
        'Integrate with project management and development tools',
        'Provide tech-savvy employees with modern self-service portal',
      ]}
      faqs={[
        { question: 'Can HRMS Mitra handle remote teams?', answer: 'Yes, employees can check-in remotely, apply for leave, and access all HR services from anywhere. Supports GPS-based attendance for field teams.' },
        { question: 'How do we track technical skills?', answer: 'Maintain skill profiles for each employee with certifications, training records, and proficiency levels. Use this data for project allocation and development planning.' },
        { question: 'Can we manage variable pay components?', answer: 'Yes, configure performance bonuses, referral bonuses, and other variable pay components. The system calculates them based on attendance, performance, or custom rules.' },
        { question: 'Does it integrate with development tools?', answer: 'HRMS Mitra offers API access for integration with project management, time tracking, and other business tools. Contact us for specific integration requirements.' },
      ]}
    />
  )
}
