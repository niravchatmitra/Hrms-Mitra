import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Clock, Calendar, Users, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Attendance Management - Track Employee Time & Attendance | HRMS Mitra',
  description: 'Automated attendance tracking with flexible check-in options, shift management, overtime calculation, and real-time attendance reports for Indian businesses.',
  openGraph: {
    title: 'Attendance Management - Accurate Time Tracking',
    description: 'Track employee attendance, manage shifts, calculate overtime, and generate attendance reports.',
  },
}

export default function AttendanceManagementPage() {
  const benefits = [
    {
      title: 'Real-Time Attendance Tracking',
      description: 'Monitor employee check-ins and check-outs in real-time with accurate timestamps.',
      icon: <Clock className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Flexible Check-In Methods',
      description: 'Support web check-in, mobile app, biometric devices, and GPS-based attendance.',
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Shift Management',
      description: 'Create multiple shifts, assign employees, and handle shift rotations effortlessly.',
      icon: <Calendar className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Attendance Regularization',
      description: 'Allow employees to request attendance corrections with manager approval workflows.',
      icon: <AlertCircle className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Overtime Calculation',
      description: 'Automatically calculate overtime hours based on configured rules and policies.',
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
    },
    {
      title: 'Attendance Analytics',
      description: 'Generate comprehensive attendance reports and analyze trends across your organization.',
      icon: <Users className="w-12 h-12 text-primary" />,
    },
  ]

  const features = [
    { title: 'Web & Mobile Check-In', description: 'Employees can mark attendance from desktop or mobile devices.' },
    { title: 'GPS Location Tracking', description: 'Verify employee location during check-in for field staff.' },
    { title: 'Biometric Integration', description: 'Connect with fingerprint, face recognition, or card readers.' },
    { title: 'Late Coming Tracking', description: 'Automatically flag late arrivals based on shift timings.' },
    { title: 'Early Leaving Detection', description: 'Identify employees leaving before shift end time.' },
    { title: 'Half-Day Marking', description: 'Auto-calculate half-day attendance based on working hours.' },
    { title: 'Absent Notifications', description: 'Alert managers about absent employees automatically.' },
    { title: 'Shift Roster Planning', description: 'Create and publish shift schedules in advance.' },
    { title: 'Break Time Management', description: 'Track meal breaks and rest periods separately.' },
    { title: 'Monthly Attendance Reports', description: 'Generate detailed monthly attendance summaries.' },
    { title: 'Department-Wise Reports', description: 'View attendance statistics by department or location.' },
    { title: 'Payroll Integration', description: 'Seamlessly sync attendance data with payroll processing.' },
  ]

  const useCases = [
    {
      title: 'Office Teams',
      description: 'Track daily attendance for office employees with flexible work hours and work-from-home options.',
    },
    {
      title: 'Field Staff',
      description: 'Monitor field employees with GPS-based check-ins and location verification.',
    },
    {
      title: 'Shift Workers',
      description: 'Manage rotating shifts for manufacturing, retail, or 24/7 operations.',
    },
  ]

  const advantages = [
    'Eliminate manual attendance registers and reduce errors',
    'Get instant visibility into who is present, absent, or on leave',
    'Reduce payroll processing time with automated attendance integration',
    'Handle complex shift patterns and rotations easily',
    'Support hybrid work models with remote check-in options',
    'Generate compliance-ready attendance records for audits',
  ]

  const relatedModules = [
    { name: 'Leave Management', href: '/features/leave-management' },
    { name: 'Payroll Management', href: '/features/payroll-management' },
    { name: 'Employee Self-Service', href: '/features/employee-self-service' },
    { name: 'Reports & Analytics', href: '/features/reports-analytics' },
  ]

  const faqs = [
    {
      question: 'Can employees mark attendance from mobile phones?',
      answer: 'Yes, employees can check-in and check-out using the HRMS Mitra mobile portal. You can also enable GPS tracking to verify their location.',
    },
    {
      question: 'Does HRMS Mitra integrate with biometric devices?',
      answer: 'Yes, HRMS Mitra can integrate with most standard biometric devices including fingerprint scanners and face recognition systems. Contact our team for specific device compatibility.',
    },
    {
      question: 'How does attendance regularization work?',
      answer: 'Employees can submit regularization requests for missed check-ins or incorrect attendance through their portal. These requests go to their manager for approval with relevant remarks.',
    },
    {
      question: 'Can we set different attendance rules for different departments?',
      answer: 'Yes, you can configure attendance policies, shift timings, grace periods, and overtime rules separately for different departments, locations, or employee groups.',
    },
  ]

  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Attendance Management', href: '/features/attendance-management' },
      ]}
      badge="Attendance Management"
      title="Know Who Is Working, Late or on Leave"
      description="Track employee attendance in real-time with flexible check-in options, shift management, overtime calculation, and comprehensive attendance analytics."
      benefits={benefits}
      features={features}
      useCases={useCases}
      advantages={advantages}
      relatedModules={relatedModules}
      faqs={faqs}
      ctaTitle="Ready to Automate Attendance Tracking?"
      ctaDescription="See how HRMS Mitra Attendance Management can eliminate manual registers and provide real-time workforce visibility."
    />
  )
}
