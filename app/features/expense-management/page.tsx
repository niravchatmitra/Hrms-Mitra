import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Receipt, DollarSign, Camera, CheckCircle, TrendingUp, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Expense Management - Employee Expense & Reimbursement Tracking | HRMS Mitra',
  description: 'Streamline employee expense claims and reimbursements. Submit expenses with receipts, approve claims, and process reimbursements efficiently.',
}

export default function ExpenseManagementPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Expense Management', href: '/features/expense-management' },
      ]}
      badge="Expense Management"
      title="Track and Approve Employee Expenses Effortlessly"
      description="Simplify expense submission, approval, and reimbursement with mobile receipt capture, automated workflows, and policy enforcement."
      benefits={[
        { title: 'Mobile Expense Submission', description: 'Submit expenses on-the-go with mobile app and receipt photo capture.', icon: <Camera className="w-12 h-12 text-primary" /> },
        { title: 'Expense Categories', description: 'Configure expense types with limits, tax treatment, and approval rules.', icon: <Receipt className="w-12 h-12 text-primary" /> },
        { title: 'Multi-Level Approval', description: 'Route expenses through managers and finance teams based on amount thresholds.', icon: <CheckCircle className="w-12 h-12 text-primary" /> },
        { title: 'Reimbursement Processing', description: 'Process approved expenses through payroll or direct bank transfer.', icon: <DollarSign className="w-12 h-12 text-primary" /> },
        { title: 'Mileage Tracking', description: 'Track business travel kilometers with automatic calculation of allowances.', icon: <TrendingUp className="w-12 h-12 text-primary" /> },
        { title: 'Advance Management', description: 'Issue travel advances and adjust against actual expense claims.', icon: <CreditCard className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Expense Types', description: 'Configure travel, food, accommodation, fuel, and custom expense categories.' },
        { title: 'Receipt Attachment', description: 'Attach photos or scanned copies of bills and receipts.' },
        { title: 'Per-Diem Rates', description: 'Set daily allowance rates for domestic and international travel.' },
        { title: 'Expense Policies', description: 'Define spending limits and approval requirements by category and amount.' },
        { title: 'GST/Tax Capture', description: 'Record GST and calculate eligible input tax credit.' },
        { title: 'Expense Reports', description: 'View employee-wise, department-wise, and category-wise expense reports.' },
        { title: 'Advance Requests', description: 'Apply for cash advances before business trips.' },
        { title: 'Budget Tracking', description: 'Track expenses against department or project budgets.' },
        { title: 'Approval Notifications', description: 'Automated alerts for pending approvals and rejected claims.' },
        { title: 'Payroll Integration', description: 'Process reimbursements through monthly salary or separate payments.' },
      ]}
      useCases={[
        { title: 'Field Sales Teams', description: 'Sales representatives submit travel and client meeting expenses regularly.' },
        { title: 'Business Travel', description: 'Employees traveling for work claim flights, hotels, and per-diem allowances.' },
        { title: 'Remote Work Expenses', description: 'Track internet, electricity, and work-from-home allowances.' },
      ]}
      advantages={[
        'Eliminate paper-based expense claims and manual calculations',
        'Reduce reimbursement processing time from weeks to days',
        'Enforce expense policies automatically with limit checks',
        'Improve visibility into company spending patterns',
        'Reduce fraudulent claims with receipt verification',
        'Simplify GST compliance with proper documentation',
      ]}
      relatedModules={[
        { name: 'Payroll Management', href: '/features/payroll-management' },
        { name: 'Employee Self-Service', href: '/features/employee-self-service' },
        { name: 'Reports & Analytics', href: '/features/reports-analytics' },
      ]}
      faqs={[
        { question: 'Can employees submit expenses from mobile?', answer: 'Yes, employees can capture receipt photos with their phone camera and submit expense claims through the mobile portal.' },
        { question: 'How are expense limits enforced?', answer: 'You can set maximum limits for each expense category. Claims exceeding limits are flagged and require additional approval levels.' },
        { question: 'Can we issue travel advances?', answer: 'Yes, employees can request advances before travel. After the trip, they submit actual expenses which are adjusted against the advance.' },
        { question: 'How are reimbursements paid?', answer: 'Approved expenses can be processed through monthly payroll or as separate direct bank transfers, depending on your preference.' },
      ]}
      ctaTitle="Ready to Streamline Expense Management?"
      ctaDescription="Say goodbye to paper receipts and delayed reimbursements. See how HRMS Mitra makes expense management effortless."
    />
  )
}
