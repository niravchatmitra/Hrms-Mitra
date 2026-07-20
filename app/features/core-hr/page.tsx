import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Users, Database, FileText, Building2, Shield, History } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Core HR - Employee Database & Records Management | HRMS Mitra',
  description: 'Centralize employee information with HRMS Mitra Core HR. Manage employee records, documents, organization structure, and reporting relationships in one secure platform.',
  openGraph: {
    title: 'Core HR - Complete Employee Database Management',
    description: 'Digital employee records, document management, and organizational structure in one system.',
  },
}

export default function CoreHRPage() {
  const benefits = [
    {
      title: 'Centralized Employee Database',
      description: 'Store all employee information in one secure, searchable database accessible to authorized personnel.',
      icon: <Database className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Digital Document Management',
      description: 'Upload, store, and manage employee documents digitally with version control and secure access.',
      icon: <FileText className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Organization Structure',
      description: 'Visualize your company hierarchy with interactive org charts and reporting relationships.',
      icon: <Building2 className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Employee History Tracking',
      description: 'Maintain complete employment history including promotions, transfers, and role changes.',
      icon: <History className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Role-Based Access Control',
      description: 'Control who can view or edit employee information with granular permission settings.',
      icon: <Shield className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Quick Employee Search',
      description: 'Find employee information instantly with powerful search and filter capabilities.',
      icon: <Users className="w-12 h-12 text-primary" />,
    },
  ]

  const features = [
    {
      title: 'Personal Information Management',
      description: 'Store employee names, contact details, emergency contacts, and identification numbers.',
    },
    {
      title: 'Employment Details',
      description: 'Track joining dates, employment type, probation periods, and contract information.',
    },
    {
      title: 'Department & Location Management',
      description: 'Organize employees by department, team, location, and cost center.',
    },
    {
      title: 'Reporting Structure',
      description: 'Define manager-employee relationships and approval hierarchies.',
    },
    {
      title: 'Job Information',
      description: 'Maintain job titles, descriptions, grade levels, and employment categories.',
    },
    {
      title: 'Document Repository',
      description: 'Store offer letters, joining forms, ID proofs, education certificates, and more.',
    },
    {
      title: 'Custom Fields',
      description: 'Add company-specific fields to capture unique employee information.',
    },
    {
      title: 'Employment History',
      description: 'Record promotions, transfers, designation changes, and salary revisions.',
    },
    {
      title: 'Family & Dependent Information',
      description: 'Maintain records of employee family members for benefits and emergency purposes.',
    },
    {
      title: 'Education & Certification Tracking',
      description: 'Store educational qualifications, certifications, and professional memberships.',
    },
    {
      title: 'Bulk Import & Export',
      description: 'Import employee data from spreadsheets and export reports in multiple formats.',
    },
    {
      title: 'Audit Trail',
      description: 'Track all changes to employee records with complete audit logs.',
    },
  ]

  const useCases = [
    {
      title: 'New Employee Onboarding',
      description: 'Create complete employee profiles during onboarding with all required information and documents.',
    },
    {
      title: 'Organization Restructuring',
      description: 'Easily update reporting structures and department assignments during organizational changes.',
    },
    {
      title: 'Compliance Audits',
      description: 'Quickly retrieve employee records and documents for regulatory compliance audits.',
    },
  ]

  const advantages = [
    'No more scattered spreadsheets—all employee data in one secure location',
    'Reduce time spent searching for employee information from hours to seconds',
    'Maintain data accuracy with validation rules and mandatory fields',
    'Support multi-location organizations with centralized data access',
    'Enable employee self-service to update personal information',
    'Ensure data security with encryption and role-based permissions',
  ]

  const relatedModules = [
    { name: 'Attendance Management', href: '/features/attendance-management' },
    { name: 'Leave Management', href: '/features/leave-management' },
    { name: 'Payroll Management', href: '/features/payroll-management' },
    { name: 'Employee Self-Service', href: '/features/employee-self-service' },
  ]

  const faqs = [
    {
      question: 'Can employees update their own information?',
      answer: 'Yes, through the employee self-service portal, employees can view and update specific fields like contact details and emergency contacts. HR approves these changes before they reflect in the system.',
    },
    {
      question: 'How secure is employee data in HRMS Mitra?',
      answer: 'HRMS Mitra uses encryption for data storage and transmission. Role-based access ensures only authorized personnel can view sensitive information. All changes are logged in audit trails.',
    },
    {
      question: 'Can we import existing employee data?',
      answer: 'Yes, you can bulk import employee data from Excel or CSV files. Our team provides templates and assists with data migration during implementation.',
    },
    {
      question: 'Is there a limit to documents we can store per employee?',
      answer: 'Document storage limits depend on your plan. Enterprise plans offer higher storage capacity. Contact our sales team for specific limits.',
    },
  ]

  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Core HR', href: '/features/core-hr' },
      ]}
      badge="Core HR"
      title="Keep Every Employee Record Accurate and Accessible"
      description="Build a complete digital employee database. Store personal details, employment information, documents, and organizational hierarchy in one secure, searchable platform."
      benefits={benefits}
      features={features}
      useCases={useCases}
      advantages={advantages}
      relatedModules={relatedModules}
      faqs={faqs}
      ctaTitle="Ready to Centralize Your Employee Data?"
      ctaDescription="See how HRMS Mitra Core HR can transform your employee information management. Book a personalized demo today."
    />
  )
}
