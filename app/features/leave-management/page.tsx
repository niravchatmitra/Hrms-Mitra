import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Calendar, CheckCircle, Bell, BarChart, Sun, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leave Management - Automated Leave Tracking & Approval | HRMS Mitra',
  description: 'Streamline leave management with automated workflows, leave balance tracking, multi-level approvals, and comprehensive leave reports for your organization.',
}

export default function LeaveManagementPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Leave Management', href: '/features/leave-management' },
      ]}
      badge="Leave Management"
      title="Manage Leave Requests and Balances Effortlessly"
      description="Automate leave requests, approvals, and balance tracking with configurable leave policies, multi-level workflows, and real-time visibility."
      benefits={[
        { title: 'Configurable Leave Types', description: 'Set up casual leave, sick leave, earned leave, and custom leave types with specific rules.', icon: <Calendar className="w-12 h-12 text-primary" /> },
        { title: 'Automated Approval Workflows', description: 'Define single or multi-level approval processes based on leave type and duration.', icon: <CheckCircle className="w-12 h-12 text-primary" /> },
        { title: 'Real-Time Balance Tracking', description: 'Employees and managers see accurate leave balances updated in real-time.', icon: <BarChart className="w-12 h-12 text-primary" /> },
        { title: 'Holiday Calendar Management', description: 'Maintain company-wide and location-specific holiday calendars.', icon: <Sun className="w-12 h-12 text-primary" /> },
        { title: 'Leave Notifications', description: 'Automatic email and app notifications for leave requests and approvals.', icon: <Bell className="w-12 h-12 text-primary" /> },
        { title: 'Team Leave Calendar', description: 'View team leave schedules to plan work and avoid conflicts.', icon: <Users className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Multiple Leave Types', description: 'Configure earned, casual, sick, maternity, paternity, and custom leave types.' },
        { title: 'Leave Accrual Rules', description: 'Set up monthly, quarterly, or annual leave accrual with carry-forward options.' },
        { title: 'Probation Period Leaves', description: 'Define separate leave policies for probationary employees.' },
        { title: 'Sandwich Leave Rules', description: 'Automatically count holidays between leave days as per policy.' },
        { title: 'Half-Day & Short Leaves', description: 'Support half-day leave requests and short permission hours.' },
        { title: 'Negative Balance Control', description: 'Allow or restrict leave applications when balance is insufficient.' },
        { title: 'Leave Encashment', description: 'Calculate and process leave encashment during exit or annually.' },
        { title: 'Compensatory Off', description: 'Grant comp-off for overtime or holiday work with expiry rules.' },
        { title: 'Restricted Holidays', description: 'Allow employees to choose from a list of optional holidays.' },
        { title: 'Leave Reports', description: 'Generate leave summaries, balance reports, and departmental analytics.' },
      ]}
      useCases={[
        { title: 'Annual Leave Planning', description: 'Employees plan vacations by checking team calendars and applying in advance.' },
        { title: 'Emergency Leave Handling', description: 'Quick mobile leave application with instant notifications to managers.' },
        { title: 'Year-End Closing', description: 'Process carry-forwards, encashments, and reset balances systematically.' },
      ]}
      advantages={[
        'Eliminate email-based leave requests and manual tracking',
        'Reduce leave approval time from days to minutes',
        'Prevent scheduling conflicts with team leave visibility',
        'Ensure accurate payroll deductions for unpaid leaves',
        'Maintain compliance with labor laws and company policies',
        'Empower employees with self-service leave applications',
      ]}
      relatedModules={[
        { name: 'Attendance Management', href: '/features/attendance-management' },
        { name: 'Payroll Management', href: '/features/payroll-management' },
        { name: 'Employee Self-Service', href: '/features/employee-self-service' },
      ]}
      faqs={[
        { question: 'Can we set different leave policies for different departments?', answer: 'Yes, you can configure separate leave policies for departments, locations, or employee grades with different accrual rates and approval workflows.' },
        { question: 'How are leave balances calculated?', answer: 'Leave balances are calculated based on joining date, accrual rules, leaves taken, and carry-forward policies. The system updates balances in real-time.' },
        { question: 'Can employees cancel approved leaves?', answer: 'Yes, employees can request leave cancellation through the portal. The cancellation requires manager approval and restores the leave balance.' },
        { question: 'Does the system handle leave during notice periods?', answer: 'Yes, you can configure whether leaves are allowed during notice period and how they affect final settlement calculations.' },
      ]}
      ctaTitle="Ready to Automate Leave Management?"
      ctaDescription="Eliminate leave management chaos with automated workflows, accurate tracking, and self-service capabilities."
    />
  )
}
