import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { User, FileText, Calendar, Receipt, Settings, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Employee Self-Service Portal - Empower Your Workforce | HRMS Mitra',
  description: 'Give employees 24/7 access to their HR information. Apply for leave, download payslips, update details, and submit requests independently.',
}

export default function EmployeeSelfServicePage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Employee Self-Service', href: '/features/employee-self-service' },
      ]}
      badge="Employee Self-Service"
      title="Give Employees Answers Without Increasing HR Workload"
      description="Empower employees with a dedicated portal for accessing information, submitting requests, and completing HR tasks independently—anytime, anywhere."
      benefits={[
        { title: 'Personal Information Access', description: 'View and update personal details, contact information, and emergency contacts.', icon: <User className="w-12 h-12 text-primary" /> },
        { title: 'Leave Application', description: 'Check leave balances, apply for leave, and track approval status in real-time.', icon: <Calendar className="w-12 h-12 text-primary" /> },
        { title: 'Payslip Download', description: 'Access and download payslips, Form 16, and salary breakup statements.', icon: <FileText className="w-12 h-12 text-primary" /> },
        { title: 'Expense Submission', description: 'Submit expense claims with receipts and track reimbursement status.', icon: <Receipt className="w-12 h-12 text-primary" /> },
        { title: 'Profile Management', description: 'Update bank details, tax declarations, and dependent information.', icon: <Settings className="w-12 h-12 text-primary" /> },
        { title: 'Notifications', description: 'Receive alerts for pending actions, approvals, and important announcements.', icon: <Bell className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Attendance View', description: 'Check daily attendance, check-in times, and monthly attendance summary.' },
        { title: 'Leave Balance', description: 'View available leave balance by type with accrual and usage history.' },
        { title: 'Team Directory', description: 'Access employee directory with contact details and reporting structure.' },
        { title: 'Document Access', description: 'Download appointment letter, ID card, and other employment documents.' },
        { title: 'Tax Declaration', description: 'Submit investment declarations and upload proof documents for tax savings.' },
        { title: 'Loan Requests', description: 'Apply for salary advances or loans through the portal.' },
        { title: 'Helpdesk Tickets', description: 'Raise HR queries and track resolution status.' },
        { title: 'Asset Requests', description: 'Request laptops, accessories, or other company assets.' },
        { title: 'Mobile Access', description: 'Access all features from mobile devices on the go.' },
        { title: 'Approval Inbox', description: 'Managers can approve team requests from their portal.' },
      ]}
      useCases={[
        { title: 'Remote Employees', description: 'Distributed teams can access HR services without visiting office.' },
        { title: 'Shift Workers', description: 'Employees working odd hours can apply for leave or check attendance anytime.' },
        { title: 'Manager Approvals', description: 'Managers can review and approve requests during travel or off-hours.' },
      ]}
      advantages={[
        'Reduce HR team workload by 40% with employee self-service',
        'Improve employee satisfaction with instant access to information',
        'Eliminate delays in leave approvals and document requests',
        'Reduce paper usage with digital documents and forms',
        'Enable 24/7 access to HR services from any location',
        'Maintain data accuracy with employee-initiated updates',
      ]}
      relatedModules={[
        { name: 'Leave Management', href: '/features/leave-management' },
        { name: 'Attendance Management', href: '/features/attendance-management' },
        { name: 'Payroll Management', href: '/features/payroll-management' },
        { name: 'Employee Helpdesk', href: '/features/employee-helpdesk' },
      ]}
      faqs={[
        { question: 'Is the employee portal mobile-friendly?', answer: 'Yes, the portal is fully responsive and works seamlessly on smartphones, tablets, and desktops.' },
        { question: 'Can employees see other employees information?', answer: 'Employees can only access their own information. They can view limited details like names and departments of colleagues in the employee directory.' },
        { question: 'How secure is employee data in the portal?', answer: 'The portal uses secure authentication, encrypted connections, and role-based access to protect employee data.' },
        { question: 'Can we customize what employees can update?', answer: 'Yes, you can control which fields employees can view or edit through permission settings.' },
      ]}
      ctaTitle="Ready to Empower Your Employees?"
      ctaDescription="Give your workforce the self-service tools they need. See how HRMS Mitra ESS can reduce HR workload."
    />
  )
}
