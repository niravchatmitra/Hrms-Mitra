export interface FAQItem {
  q: string
  a: string
}

export interface FAQCategory {
  category: string
  questions: FAQItem[]
}

export const faqs: FAQCategory[] = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is HRMS software?',
        a: 'HRMS (Human Resource Management System) is software that helps businesses manage all HR activities including employee records, attendance, leave, payroll, recruitment, performance, and more in one centralized platform.',
      },
      {
        q: 'Who should use HRMS Mitra?',
        a: 'HRMS Mitra is designed for Indian businesses of all sizes—from startups with 10 employees to enterprises with 1000+ employees across industries like IT, manufacturing, retail, healthcare, and more.',
      },
      {
        q: 'Is HRMS Mitra cloud-based?',
        a: 'Yes, HRMS Mitra is a cloud-based solution accessible from anywhere with an internet connection. No installation or server maintenance required.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    questions: [
      {
        q: 'How much does HRMS Mitra cost?',
        a: 'Pricing is based on the number of employees and modules you choose. We offer Essential, Professional, and Enterprise plans. Contact our sales team for a personalized quote based on your requirements.',
      },
      {
        q: 'Is there a free trial?',
        a: 'We offer personalized demos to show you how HRMS Mitra works. After the demo, we can discuss trial options based on your specific needs.',
      },
      {
        q: 'Can we upgrade or downgrade our plan?',
        a: "Yes, you can upgrade or downgrade your plan as your business needs change. We'll help you transition smoothly.",
      },
    ],
  },
  {
    category: 'Implementation',
    questions: [
      {
        q: 'How long does implementation take?',
        a: 'Most companies go live within 2-4 weeks, depending on company size and complexity. This includes configuration, data migration, and training.',
      },
      {
        q: 'Do you provide implementation support?',
        a: 'Yes, our team guides you through the entire implementation process including system setup, data import, policy configuration, and user training.',
      },
      {
        q: 'Can we import existing employee data?',
        a: 'Yes, you can bulk import employee data from Excel or CSV files. We provide templates and assistance during data migration.',
      },
    ],
  },
  {
    category: 'Features & Functionality',
    questions: [
      {
        q: 'Does HRMS Mitra support Indian payroll?',
        a: 'Yes, HRMS Mitra is built specifically for Indian payroll with support for PF, ESI, Professional Tax, TDS, and other statutory requirements. However, we recommend verifying specific compliance needs with your financial advisor.',
      },
      {
        q: 'Can employees access the system?',
        a: 'Yes, employees get access to a self-service portal where they can view attendance, apply for leave, download payslips, update details, and submit requests.',
      },
      {
        q: 'Does it work on mobile devices?',
        a: 'Yes, HRMS Mitra is fully responsive and works on desktop, tablets, and mobile phones. Employees can check-in, apply for leave, and access HR services on the go.',
      },
      {
        q: 'Can we customize the system?',
        a: 'Yes, you can configure leave policies, attendance rules, salary structures, approval workflows, and more to match your company policies. Enterprise plans offer additional customization options.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      {
        q: 'Is our data secure?',
        a: 'Yes, we use industry-standard encryption for data storage and transmission. Role-based access controls ensure only authorized personnel can view sensitive information.',
      },
      {
        q: 'Where is data stored?',
        a: 'Data is stored in secure cloud servers with regular backups. We ensure data availability and disaster recovery protocols.',
      },
      {
        q: 'Are you GDPR compliant?',
        a: 'We follow data privacy best practices and can accommodate GDPR requirements for companies operating internationally.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of support do you provide?',
        a: 'We provide email support for all plans. Professional and Enterprise plans get priority support and dedicated account managers.',
      },
      {
        q: 'Do you provide training?',
        a: 'Yes, we provide training for HR admins and key users during implementation. Additional training sessions can be arranged as needed.',
      },
      {
        q: 'How do I contact support?',
        a: 'You can reach our support team via email at support@hrmsmitra.com or through the helpdesk portal within the application.',
      },
    ],
  },
]
