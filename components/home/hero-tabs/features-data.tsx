import { Feature } from './types'

export const featuresData: Feature[] = [
  {
    id: 'hiring-onboarding',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: 'Hiring &\nOnboarding',
    title: 'Streamline Your Hiring Process',
    description: 'Attract top talent, manage candidates efficiently, and onboard new employees seamlessly with our integrated recruitment and onboarding platform.',
    highlights: [
      'Applicant tracking system with job posting management',
      'Interview scheduling and candidate evaluation tools',
      'Digital onboarding with automated document collection',
      'New hire portal with task assignments and progress tracking'
    ]
  },
  {
    id: 'hr-data-reporting',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'HR Data &\nReporting',
    title: 'Data-Driven HR Decisions',
    description: 'Access real-time HR analytics, generate custom reports, and make informed decisions with powerful data visualization and workforce insights.',
    highlights: [
      'Real-time dashboards with key HR metrics',
      'Custom report builder with 50+ templates',
      'Headcount analysis and turnover tracking',
      'Export to Excel, PDF with scheduled delivery'
    ]
  },
  {
    id: 'payroll-time',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Payroll &\nTime',
    title: 'Automated Payroll & Time Tracking',
    description: 'Process payroll accurately, track attendance automatically, manage leave requests, and ensure compliance with Indian labor laws.',
    highlights: [
      'Automated salary calculation with tax compliance',
      'Biometric and GPS-based attendance tracking',
      'Leave management with policy configuration',
      'Statutory reports for PF, ESI, PT, and TDS'
    ]
  },
  {
    id: 'benefits-administration',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Benefits\nAdministration',
    title: 'Simplify Benefits Management',
    description: 'Manage employee benefits, health insurance, provident fund, and other perks with ease. Keep your team happy and ensure regulatory compliance.',
    highlights: [
      'Health insurance enrollment and claim tracking',
      'PF and gratuity calculation and management',
      'Flexible benefits with cafeteria-style options',
      'Employee benefit statements and portals'
    ]
  },
  {
    id: 'employee-experience',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Employee\nExperience',
    title: 'Enhance Employee Engagement',
    description: 'Empower employees with self-service portals, improve internal communication, and create a positive workplace culture that drives retention.',
    highlights: [
      'Employee self-service portal for all HR tasks',
      'Document management with digital signatures',
      'Company directory and org chart',
      'Mobile app for on-the-go access'
    ]
  },
  {
    id: 'performance-management',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: 'Performance\nManagement',
    title: 'Drive Performance Excellence',
    description: 'Set clear goals, conduct structured reviews, provide continuous feedback, and develop talent with comprehensive performance management tools.',
    highlights: [
      'Goal setting with OKR framework support',
      '360-degree feedback and peer reviews',
      'Continuous performance conversations',
      'Development plans and skill gap analysis'
    ]
  },
  {
    id: 'compensation',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Compensation',
    title: 'Strategic Compensation Planning',
    description: 'Design competitive salary structures, manage annual increments, bonuses, and equity compensation to attract and retain top talent in your industry.',
    highlights: [
      'Salary benchmarking with market data',
      'Compensation band management',
      'Variable pay and bonus calculation',
      'Equity and stock option tracking'
    ]
  },
]
