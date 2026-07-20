import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { DollarSign, Calculator, FileText, Shield, TrendingUp, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payroll Management - Indian Payroll Processing Software | HRMS Mitra',
  description: 'Process accurate Indian payroll with PF, ESI, TDS, and Professional Tax compliance. Automated salary calculations, payslips, and payroll reports.',
}

export default function PayrollManagementPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Payroll Management', href: '/features/payroll-management' },
      ]}
      badge="Payroll Management"
      title="Run Accurate Indian Payroll With Greater Confidence"
      description="Process monthly payroll automatically with attendance integration, statutory compliance, flexible salary structures, and error-free calculations."
      benefits={[
        { title: 'Flexible Salary Structures', description: 'Configure CTC components, allowances, deductions, and variable pay structures.', icon: <Calculator className="w-12 h-12 text-primary" /> },
        { title: 'Statutory Compliance', description: 'Built-in support for PF, ESI, Professional Tax, TDS, and other Indian payroll regulations.', icon: <Shield className="w-12 h-12 text-primary" /> },
        { title: 'Attendance Integration', description: 'Automatically sync attendance and leave data for accurate salary calculations.', icon: <CheckCircle2 className="w-12 h-12 text-primary" /> },
        { title: 'Digital Payslips', description: 'Generate and distribute secure, password-protected digital payslips to employees.', icon: <FileText className="w-12 h-12 text-primary" /> },
        { title: 'Payroll Reports', description: 'Comprehensive payroll summaries, cost analysis, and statutory reports.', icon: <TrendingUp className="w-12 h-12 text-primary" /> },
        { title: 'Tax Declarations', description: 'Allow employees to submit investment proofs for tax calculations.', icon: <DollarSign className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'CTC Configuration', description: 'Define salary components with calculation formulas and statutory settings.' },
        { title: 'Attendance-Based Salary', description: 'Calculate salaries based on actual working days and leave without pay.' },
        { title: 'Arrears & Adjustments', description: 'Process salary arrears, one-time bonuses, and manual adjustments.' },
        { title: 'Loan & Advance Management', description: 'Track employee loans and deduct EMIs from monthly salary.' },
        { title: 'PF Calculation', description: 'Auto-calculate employer and employee PF contributions with correct ceilings.' },
        { title: 'ESI Calculation', description: 'Compute ESI deductions based on gross salary limits.' },
        { title: 'Professional Tax', description: 'Apply state-specific PT slabs automatically.' },
        { title: 'TDS Computation', description: 'Calculate TDS based on tax regime, investment declarations, and exemptions.' },
        { title: 'Form 16 Generation', description: 'Generate Form 16 for employees at financial year end.' },
        { title: 'Bank Transfer File', description: 'Export salary data in bank-specific formats for direct credit.' },
        { title: 'Hold Salary', description: 'Put salary on hold for specific employees when needed.' },
        { title: 'Payroll Approval', description: 'Multi-level payroll approval workflow before final processing.' },
      ]}
      useCases={[
        { title: 'Monthly Payroll Run', description: 'Process regular monthly salaries with automated calculations and validations.' },
        { title: 'Final Settlement', description: 'Calculate full and final settlement for exiting employees with all dues.' },
        { title: 'Year-End Processing', description: 'Generate Form 16, process bonuses, and close financial year payroll.' },
      ]}
      advantages={[
        'Reduce payroll processing time from days to hours',
        'Eliminate calculation errors with automated formulas',
        'Ensure compliance with changing tax and labor regulations',
        'Maintain confidentiality with secure access controls',
        'Support complex salary structures with ease',
        'Generate audit-ready payroll reports instantly',
      ]}
      relatedModules={[
        { name: 'Attendance Management', href: '/features/attendance-management' },
        { name: 'Leave Management', href: '/features/leave-management' },
        { name: 'Expense Management', href: '/features/expense-management' },
        { name: 'Employee Self-Service', href: '/features/employee-self-service' },
      ]}
      faqs={[
        { question: 'Does HRMS Mitra support new and old tax regimes?', answer: 'Yes, employees can choose between old and new tax regimes. The system calculates TDS accordingly based on their selection and investment declarations.' },
        { question: 'Can we customize salary components?', answer: 'Absolutely. You can create custom salary components (allowances, deductions, benefits) with specific calculation rules and tax treatment.' },
        { question: 'How is attendance linked to payroll?', answer: 'The system automatically fetches attendance data including present days, leaves, and loss of pay. Salaries are calculated based on actual working days as per your policy.' },
        { question: 'Is payroll data encrypted?', answer: 'Yes, all payroll data is encrypted both in storage and during transmission. Only authorized personnel with specific permissions can access payroll information.' },
      ]}
      ctaTitle="Ready to Simplify Payroll Processing?"
      ctaDescription="Process accurate, compliant Indian payroll with complete automation. Book a demo to see how HRMS Mitra handles your payroll needs."
    />
  )
}
