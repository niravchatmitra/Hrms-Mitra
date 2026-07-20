import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Target, Star, MessageCircle, TrendingUp, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Performance Management - Goals, Reviews & Feedback | HRMS Mitra',
  description: 'Drive employee performance with goal setting, continuous feedback, structured reviews, and performance analytics. Align individual goals with organizational objectives.',
}

export default function PerformanceManagementPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Performance Management', href: '/features/performance-management' },
      ]}
      badge="Performance Management"
      title="Turn Employee Goals Into Measurable Progress"
      description="Set clear objectives, conduct structured reviews, and track employee development with continuous feedback, performance insights, and data-driven decisions."
      benefits={[
        { title: 'Goal Management & OKRs', description: 'Set SMART goals and OKRs aligned with company objectives. Track progress continuously.', icon: <Target className="w-12 h-12 text-primary" /> },
        { title: 'Performance Reviews', description: 'Conduct periodic reviews with customizable rating scales and competency frameworks.', icon: <Star className="w-12 h-12 text-primary" /> },
        { title: 'Continuous Feedback', description: 'Enable managers and peers to provide real-time feedback throughout the year.', icon: <MessageCircle className="w-12 h-12 text-primary" /> },
        { title: 'Development Planning', description: 'Create individual development plans with training recommendations.', icon: <TrendingUp className="w-12 h-12 text-primary" /> },
        { title: '360-Degree Feedback', description: 'Collect feedback from managers, peers, subordinates, and self-assessment.', icon: <Users className="w-12 h-12 text-primary" /> },
        { title: 'Performance Analytics', description: 'Analyze performance trends, identify top performers, and spot improvement needs.', icon: <Award className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'SMART Goal Setting', description: 'Define specific, measurable, achievable, relevant, and time-bound goals.' },
        { title: 'Goal Alignment', description: 'Cascade organizational goals down to departments and individuals.' },
        { title: 'Progress Tracking', description: 'Update goal progress with percentage completion and status updates.' },
        { title: 'Review Cycles', description: 'Configure annual, half-yearly, or quarterly review cycles.' },
        { title: 'Custom Rating Scales', description: 'Define rating scales like 1-5, A-D, or meets/exceeds expectations.' },
        { title: 'Competency Assessment', description: 'Evaluate employees on technical, behavioral, and functional competencies.' },
        { title: 'Self-Assessment', description: 'Allow employees to complete self-reviews before manager assessments.' },
        { title: 'Manager Evaluation', description: 'Structured evaluation forms with ratings and detailed comments.' },
        { title: 'Peer Reviews', description: 'Collect feedback from colleagues for comprehensive evaluation.' },
        { title: 'Performance Improvement Plans', description: 'Create PIPs for underperformers with specific improvement actions.' },
        { title: 'One-on-One Meetings', description: 'Schedule and document regular manager-employee discussions.' },
        { title: 'Performance Calibration', description: 'Normalize ratings across teams to ensure fairness.' },
      ]}
      useCases={[
        { title: 'Annual Appraisals', description: 'Conduct year-end performance reviews linked to compensation planning.' },
        { title: 'Probation Reviews', description: 'Evaluate new hires during probation period for confirmation decisions.' },
        { title: 'Promotion Assessments', description: 'Use performance history for promotion and succession planning.' },
      ]}
      advantages={[
        'Replace subjective evaluations with structured, fair assessments',
        'Increase transparency in performance expectations and feedback',
        'Identify high performers and create retention strategies',
        'Link performance outcomes to rewards and recognition',
        'Track employee growth and skill development over time',
        'Make informed decisions on promotions and compensation',
      ]}
      relatedModules={[
        { name: 'Core HR', href: '/features/core-hr' },
        { name: 'Recruitment', href: '/features/recruitment' },
        { name: 'Employee Onboarding', href: '/features/onboarding' },
        { name: 'Reports & Analytics', href: '/features/reports-analytics' },
      ]}
      faqs={[
        { question: 'Can we customize the review form?', answer: 'Yes, you can create custom review templates with your own questions, rating scales, and competency frameworks based on roles or departments.' },
        { question: 'How does 360-degree feedback work?', answer: 'The employee receives feedback from multiple sources—manager, peers, direct reports, and self. The system collects anonymous responses and generates consolidated reports.' },
        { question: 'Can employees see their performance history?', answer: 'Yes, employees can view their goal progress, completed reviews, feedback received, and ratings through their self-service portal.' },
        { question: 'Is performance data linked to compensation?', answer: 'While performance ratings are recorded, the link to compensation is configured based on your policy. You can use performance data to inform salary revision decisions.' },
      ]}
      ctaTitle="Ready to Build a High-Performance Culture?"
      ctaDescription="See how HRMS Mitra Performance Management can help you set goals, track progress, and develop your team effectively."
    />
  )
}
