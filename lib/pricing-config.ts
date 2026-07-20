export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  priceDetail: string
  billingPeriod: string
  employeeCount: string
  extraEmployeePrice: string
  featured: boolean
  features: string[]
  ctaLabel: string
  ctaHref: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'Perfect for startups and small teams getting started with HR automation',
    price: 'Contact Sales',
    priceDetail: 'Custom pricing based on your needs',
    billingPeriod: 'per month',
    employeeCount: 'Up to 50 employees',
    extraEmployeePrice: 'Contact for details',
    featured: false,
    features: [
      'Core HR & Employee Database',
      'Employee Directory',
      'Attendance Management',
      'Leave Management',
      'Employee Self-Service Portal',
      'Standard Reports',
      'Email Support',
      'Mobile Access',
    ],
    ctaLabel: 'Request Pricing',
    ctaHref: '/contact',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Complete HR solution for growing businesses with advanced needs',
    price: 'Contact Sales',
    priceDetail: 'Custom pricing based on your needs',
    billingPeriod: 'per month',
    employeeCount: 'Up to 250 employees',
    extraEmployeePrice: 'Contact for details',
    featured: true,
    features: [
      'Everything in Essential, plus:',
      'Payroll Management',
      'Expense Management',
      'Recruitment & ATS',
      'Employee Onboarding',
      'Custom Approval Workflows',
      'Advanced Reports & Analytics',
      'Document Management',
      'Priority Email Support',
      'Dedicated Account Manager',
    ],
    ctaLabel: 'Book a Demo',
    ctaHref: '/book-demo',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Enterprise-grade HRMS with complete customization and priority support',
    price: 'Custom Pricing',
    priceDetail: 'Tailored to your organization',
    billingPeriod: '',
    employeeCount: '250+ employees',
    extraEmployeePrice: 'Volume discounts available',
    featured: false,
    features: [
      'Everything in Professional, plus:',
      'Performance Management',
      'Asset Management',
      'Employee Helpdesk',
      'Multi-location Support',
      'Advanced Role Permissions',
      'Custom Integrations & API Access',
      'White-label Options',
      'Priority Implementation Assistance',
      'Dedicated Customer Success Manager',
      '24/7 Priority Support',
    ],
    ctaLabel: 'Talk to Sales',
    ctaHref: '/contact',
  },
]

export const EMPLOYEE_RANGES = [
  { id: '1-25', label: '1–25 employees', value: '1-25' },
  { id: '26-50', label: '26–50 employees', value: '26-50' },
  { id: '51-100', label: '51–100 employees', value: '51-100' },
  { id: '101-250', label: '101–250 employees', value: '101-250' },
  { id: '251-500', label: '251–500 employees', value: '251-500' },
  { id: '500+', label: '500+ employees', value: '500+' },
]

export const PRICING_FAQS = [
  {
    question: 'How is HRMS Mitra priced?',
    answer: 'HRMS Mitra pricing is based on the number of active employees and the modules you choose. We offer flexible plans for startups, growing businesses, and enterprises. Contact our sales team for a personalized quote.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a personalized demo to show you how HRMS Mitra works for your specific needs. After the demo, we can discuss trial options based on your requirements.',
  },
  {
    question: 'What is included in the implementation?',
    answer: 'Implementation includes system configuration, company policy setup, employee data migration, user training, and go-live support. Our team guides you through every step.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. Our pricing is transparent and includes all core features in your chosen plan. Additional modules, integrations, or customizations may have separate costs, which will be clearly communicated.',
  },
  {
    question: 'Can we upgrade or downgrade our plan?',
    answer: 'Yes, you can upgrade or downgrade your plan as your business needs change. We  help you transition smoothly to ensure continuity.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, credit cards, and other standard payment methods. Payment terms can be discussed with our sales team based on your preference.',
  },
]
