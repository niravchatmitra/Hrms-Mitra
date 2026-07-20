export const SITE_CONFIG = {
  name: 'HRMS Mitra',
  tagline: 'Simple HR. Smarter Workplaces.',
  description: 'All-in-One HRMS for Modern Indian Businesses',
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@hrmsmitra.com',
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || '+91-XXXXXXXXXX',
  location: 'Ahmedabad, Gujarat, India',
}

export const NAVIGATION = {
  products: [
    {
      category: 'People Management',
      items: [
        { name: 'Core HR', href: '/features/core-hr', description: 'Central employee database and records' },
        { name: 'Employee Database', href: '/features/core-hr#employee-database', description: 'Manage all employee information' },
        { name: 'Employee Self-Service', href: '/features/employee-self-service', description: 'Empower employees with self-service' },
        { name: 'Documents', href: '/features/core-hr#documents', description: 'Digital document management' },
        { name: 'Organization Chart', href: '/features/core-hr#org-chart', description: 'Visual hierarchy and structure' },
      ],
    },
    {
      category: 'Time and Attendance',
      items: [
        { name: 'Attendance Management', href: '/features/attendance-management', description: 'Track time and attendance' },
        { name: 'Leave Management', href: '/features/leave-management', description: 'Manage leave requests and balances' },
        { name: 'Shift Management', href: '/features/attendance-management#shifts', description: 'Configure and assign shifts' },
        { name: 'Holiday Management', href: '/features/leave-management#holidays', description: 'Manage company holidays' },
        { name: 'Regularization', href: '/features/attendance-management#regularization', description: 'Handle attendance corrections' },
      ],
    },
    {
      category: 'Payroll and Finance',
      items: [
        { name: 'Payroll Management', href: '/features/payroll-management', description: 'Process accurate payroll' },
        { name: 'Income Tax and TDS', href: '/features/payroll-management#tax', description: 'Manage tax declarations' },
        { name: 'Expenses', href: '/features/expense-management', description: 'Track and approve expenses' },
        { name: 'Reimbursements', href: '/features/expense-management#reimbursements', description: 'Process reimbursements' },
        { name: 'Salary Structures', href: '/features/payroll-management#salary-structure', description: 'Configure pay components' },
      ],
    },
    {
      category: 'Talent Management',
      items: [
        { name: 'Recruitment', href: '/features/recruitment', description: 'Applicant tracking system' },
        { name: 'Onboarding', href: '/features/onboarding', description: 'Streamline new hire process' },
        { name: 'Performance Management', href: '/features/performance-management', description: 'Goals, reviews, and feedback' },
        { name: 'Goals and Reviews', href: '/features/performance-management#goals', description: 'Set and track objectives' },
      ],
    },
    {
      category: 'Workplace Operations',
      items: [
        { name: 'Asset Management', href: '/features/asset-management', description: 'Track company assets' },
        { name: 'Employee Helpdesk', href: '/features/employee-helpdesk', description: 'HR ticketing system' },
        { name: 'Reports and Analytics', href: '/features/reports-analytics', description: 'Data-driven insights' },
      ],
    },
  ],
  solutions: {
    bySize: [
      { name: 'Startups', href: '/industries/startups' },
      { name: 'Small Businesses', href: '/industries/startups' },
      { name: 'Growing Businesses', href: '/industries' },
      { name: 'Enterprises', href: '/industries' },
    ],
    byIndustry: [
      { name: 'IT and Software', href: '/industries/it-companies' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Professional Services', href: '/industries/professional-services' },
    ],
    byRole: [
      { name: 'HR Teams', href: '/industries' },
      { name: 'Business Owners', href: '/industries/startups' },
      { name: 'Payroll Teams', href: '/features/payroll-management' },
      { name: 'Managers', href: '/features/performance-management' },
      { name: 'Employees', href: '/features/employee-self-service' },
    ],
  },
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'HR Glossary', href: '/hr-glossary' },
    { name: 'HR Guides', href: '/resources' },
    { name: 'Payroll Resources', href: '/resources' },
    { name: 'HR Templates', href: '/resources' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Help Centre', href: '/faq' },
  ],
  company: [
    { name: 'About HRMS Mitra', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book a Demo', href: '/book-demo' },
    { name: 'Security', href: '/security' },
  ],
}

export const FEATURES = [
  {
    id: 'core-hr',
    name: 'Core HR',
    icon: 'Users',
    shortDescription: 'Central employee database and records',
    href: '/features/core-hr',
  },
  {
    id: 'attendance',
    name: 'Attendance',
    icon: 'Clock',
    shortDescription: 'Track time and attendance',
    href: '/features/attendance-management',
  },
  {
    id: 'leave',
    name: 'Leave',
    icon: 'Calendar',
    shortDescription: 'Manage leave requests and balances',
    href: '/features/leave-management',
  },
  {
    id: 'payroll',
    name: 'Payroll',
    icon: 'DollarSign',
    shortDescription: 'Process accurate Indian payroll',
    href: '/features/payroll-management',
  },
  {
    id: 'recruitment',
    name: 'Recruitment',
    icon: 'UserPlus',
    shortDescription: 'Applicant tracking system',
    href: '/features/recruitment',
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    icon: 'CheckCircle',
    shortDescription: 'Streamline new hire process',
    href: '/features/onboarding',
  },
  {
    id: 'performance',
    name: 'Performance',
    icon: 'TrendingUp',
    shortDescription: 'Goals, reviews, and feedback',
    href: '/features/performance-management',
  },
  {
    id: 'expenses',
    name: 'Expenses',
    icon: 'Receipt',
    shortDescription: 'Track and approve expenses',
    href: '/features/expense-management',
  },
  {
    id: 'assets',
    name: 'Assets',
    icon: 'Laptop',
    shortDescription: 'Track company assets',
    href: '/features/asset-management',
  },
  {
    id: 'helpdesk',
    name: 'Helpdesk',
    icon: 'Headphones',
    shortDescription: 'HR ticketing system',
    href: '/features/employee-helpdesk',
  },
  {
    id: 'self-service',
    name: 'Self-Service',
    icon: 'UserCheck',
    shortDescription: 'Employee portal and actions',
    href: '/features/employee-self-service',
  },
  {
    id: 'reports',
    name: 'Reports',
    icon: 'BarChart',
    shortDescription: 'Data-driven HR insights',
    href: '/features/reports-analytics',
  },
]

export const INDUSTRIES = [
  {
    id: 'it-companies',
    name: 'IT and Software',
    icon: 'Code',
    href: '/industries/it-companies',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Factory',
    href: '/industries/manufacturing',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: 'ShoppingBag',
    href: '/industries/retail',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: 'Heart',
    href: '/industries/healthcare',
  },
  {
    id: 'education',
    name: 'Education',
    icon: 'GraduationCap',
    href: '/industries/education',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: 'Briefcase',
    href: '/industries/professional-services',
  },
]
