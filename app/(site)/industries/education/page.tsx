import { Metadata } from 'next'
import IndustryPageLayout from '@/components/industries/IndustryPageLayout'
import { GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HRMS for Schools, Colleges & Education | HRMS Mitra',
  description: 'HR software for educational institutions. Manage faculty, track qualifications, handle academic calendars, and process payroll for teachers and staff.',
}

export default function EducationPage() {
  return (
    <IndustryPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: 'Education', href: '/industries/education' },
      ]}
      badge="Education"
      icon={<GraduationCap className="w-10 h-10 text-primary" />}
      title="HRMS for Schools, Colleges and Educational Institutions"
      description="Manage your academic workforce efficiently. Handle teaching and non-teaching staff, track qualifications, align with academic calendars, and process payroll accurately."
      heroImage="/images/industries/education-hero.jpg"
      heroImageAlt="Modern classroom inside an educational institution with desks and learning environment"
      challenges={[
        { title: 'Academic Calendar Alignment', description: 'Aligning HR operations with academic calendars, vacations, and examination periods.' },
        { title: 'Qualification Tracking', description: 'Maintaining records of degrees, certifications, and continuous professional development.' },
        { title: 'Diverse Staff Categories', description: 'Managing full-time, part-time, visiting faculty, and administrative staff together.' },
        { title: 'Seasonal Variations', description: 'Handling summer breaks, reduced staff during vacations, and academic year cycles.' },
      ]}
      solutions={[
        { title: 'Academic Calendar Integration', description: 'Configure holidays aligned with academic calendar. Handle semester-based attendance and vacation periods separately.' },
        { title: 'Qualification Management', description: 'Store educational qualifications, teaching certifications, and research publications. Track faculty development programs.' },
        { title: 'Flexible Faculty Management', description: 'Manage full-time faculty, visiting professors, and guest lecturers with different attendance and payment structures.' },
        { title: 'Automated Payroll', description: 'Process monthly salaries for permanent staff and hourly/session-based pay for visiting faculty. Handle academic allowances.' },
      ]}
      modules={[
        { name: 'Core HR', description: 'Track qualifications and teaching experience', href: '/features/core-hr' },
        { name: 'Attendance Management', description: 'Academic calendar aligned attendance', href: '/features/attendance-management' },
        { name: 'Leave Management', description: 'Handle semester breaks and sabbaticals', href: '/features/leave-management' },
        { name: 'Payroll Management', description: 'Process faculty salaries and allowances', href: '/features/payroll-management' },
        { name: 'Recruitment', description: 'Hire teaching and non-teaching staff', href: '/features/recruitment' },
        { name: 'Performance Management', description: 'Faculty appraisals and student feedback', href: '/features/performance-management' },
      ]}
      benefits={[
        'Align HR processes with academic calendar and semesters',
        'Track teaching qualifications and research credentials',
        'Handle both teaching and administrative staff efficiently',
        'Process different pay structures for various faculty types',
        'Manage sabbatical leaves and research periods',
        'Track faculty workload and teaching hours',
        'Generate reports for UGC, AICTE, and accreditation bodies',
      ]}
      faqs={[
        { question: 'Can we align attendance with academic calendar?', answer: 'Yes, configure holidays and working days based on your academic calendar. Handle semester breaks, exam periods, and vacation schedules separately.' },
        { question: 'How do we track visiting faculty?', answer: 'Create separate employment categories for visiting faculty with hourly or per-session attendance and payment. Track their lectures and process payment accordingly.' },
        { question: 'Can we manage faculty research activities?', answer: 'Yes, maintain records of research publications, conference presentations, and funded projects as part of faculty profiles.' },
        { question: 'How do we handle summer vacations?', answer: 'Configure summer break as a special leave type or non-working period. Faculty can still access portal and receive communications during this time.' },
      ]}
    />
  )
}
