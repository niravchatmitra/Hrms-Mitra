import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { UserPlus, CheckSquare, FileCheck, Users, Rocket, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Employee Onboarding - Streamlined New Hire Process | HRMS Mitra',
  description: 'Create structured onboarding journeys for new hires. Collect documents, assign tasks, introduce teams, and make employees productive from day one.',
}

export default function OnboardingPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Employee Onboarding', href: '/features/onboarding' },
      ]}
      badge="Employee Onboarding"
      title="Make New Hires Productive From Day One"
      description="Create structured, engaging onboarding experiences. Collect documents, complete tasks, introduce teams, and track onboarding progress—all digitally."
      benefits={[
        { title: 'Onboarding Workflows', description: 'Create step-by-step onboarding journeys for different roles and departments.', icon: <Rocket className="w-12 h-12 text-primary" /> },
        { title: 'Document Collection', description: 'Collect joining documents digitally with automated reminders for pending items.', icon: <FileCheck className="w-12 h-12 text-primary" /> },
        { title: 'Task Checklists', description: 'Assign onboarding tasks to new hires, managers, and HR with due dates.', icon: <CheckSquare className="w-12 h-12 text-primary" /> },
        { title: 'Welcome Emails', description: 'Send automated welcome emails with portal access and first-day information.', icon: <UserPlus className="w-12 h-12 text-primary" /> },
        { title: 'Team Introductions', description: 'Facilitate team introductions and buddy assignments for new employees.', icon: <Users className="w-12 h-12 text-primary" /> },
        { title: 'Progress Tracking', description: 'Monitor onboarding completion status and identify bottlenecks.', icon: <Calendar className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Pre-Boarding', description: 'Engage candidates between offer acceptance and joining date.' },
        { title: 'Digital Forms', description: 'Collect information through online forms instead of paper documents.' },
        { title: 'Document Verification', description: 'HR can review and approve submitted documents online.' },
        { title: 'Equipment Assignment', description: 'Track laptop, phone, and other asset assignments.' },
        { title: 'Access Provisioning', description: 'Checklist for IT access, email, tools, and system logins.' },
        { title: 'Training Assignment', description: 'Assign mandatory training courses for new hires.' },
        { title: 'Orientation Schedule', description: 'Create and share first-week schedules and meeting calendars.' },
        { title: 'Manager Tasks', description: 'Remind managers to complete onboarding tasks like workspace setup.' },
        { title: 'Feedback Collection', description: 'Collect onboarding feedback to improve the process.' },
        { title: 'Probation Tracking', description: 'Track probation period and schedule confirmation reviews.' },
      ]}
      useCases={[
        { title: 'Remote Onboarding', description: 'Onboard remote employees without requiring physical presence.' },
        { title: 'Bulk Campus Hiring', description: 'Onboard multiple campus hires efficiently with standardized processes.' },
        { title: 'International Hires', description: 'Handle complex onboarding for employees joining from different countries.' },
      ]}
      advantages=[
        'Reduce onboarding time by 50% with automation',
        'Improve new hire experience with clear, structured guidance',
        'Ensure compliance by tracking all required documents',
        'Make managers accountable for onboarding tasks',
        'Reduce new hire time-to-productivity',
        'Create consistent onboarding across all departments',
      ]}
      relatedModules={[
        { name: 'Recruitment', href: '/features/recruitment' },
        { name: 'Core HR', href: '/features/core-hr' },
        { name: 'Asset Management', href: '/features/asset-management' },
      ]}
      faqs={[
        { question: 'When does onboarding start?', answer: 'Onboarding can start immediately after offer acceptance (pre-boarding) or on the joining date. You can configure the timeline based on your process.' },
        { question: 'Can we customize onboarding workflows by role?', answer: 'Yes, you can create different onboarding workflows for various roles, departments, or levels with specific tasks and documents.' },
        { question: 'How do we track onboarding completion?', answer: 'The dashboard shows onboarding progress for each new hire with pending tasks, document status, and overall completion percentage.' },
        { question: 'Can new hires upload documents before joining?', answer: 'Yes, candidates receive portal access after offer acceptance and can upload documents during the pre-boarding phase.' },
      ]}
      ctaTitle="Ready to Transform Your Onboarding Experience?"
      ctaDescription="Create memorable first impressions and productive employees from day one. See HRMS Mitra Onboarding in action."
    />
  )
}
