import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { BarChart3, PieChart, TrendingUp, Download, Eye, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reports & Analytics - HR Data Insights & Dashboards | HRMS Mitra',
  description: 'Make data-driven HR decisions with comprehensive reports and analytics. Track headcount, attendance, payroll, turnover, and more.',
}

export default function ReportsAnalyticsPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Reports & Analytics', href: '/features/reports-analytics' },
      ]}
      badge="Reports & Analytics"
      title="Make Better People Decisions With Clear HR Data"
      description="Transform HR data into actionable insights. Access pre-built reports, create custom analytics, and visualize workforce trends through interactive dashboards."
      benefits={[
        { title: 'Pre-Built Reports', description: 'Access 50+ ready-to-use reports covering all HR modules without configuration.', icon: <BarChart3 className="w-12 h-12 text-primary" /> },
        { title: 'Custom Report Builder', description: 'Create custom reports with drag-and-drop fields and filters.', icon: <Filter className="w-12 h-12 text-primary" /> },
        { title: 'Visual Dashboards', description: 'View key HR metrics through charts, graphs, and interactive widgets.', icon: <PieChart className="w-12 h-12 text-primary" /> },
        { title: 'Real-Time Data', description: 'All reports reflect real-time data with no delays or manual refresh.', icon: <Eye className="w-12 h-12 text-primary" /> },
        { title: 'Export Options', description: 'Download reports in Excel, PDF, or CSV formats for offline analysis.', icon: <Download className="w-12 h-12 text-primary" /> },
        { title: 'Trend Analysis', description: 'Analyze historical trends for attendance, turnover, and hiring patterns.', icon: <TrendingUp className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Headcount Reports', description: 'Track total employees, joiners, leavers, and department distribution.' },
        { title: 'Attendance Reports', description: 'Monthly attendance summaries, late coming, early leaving, and absence trends.' },
        { title: 'Leave Reports', description: 'Leave balance, usage patterns, and pending leave requests by team.' },
        { title: 'Payroll Reports', description: 'Salary registers, component-wise breakup, tax deductions, and cost analysis.' },
        { title: 'Recruitment Reports', description: 'Time-to-hire, source effectiveness, and hiring funnel conversion rates.' },
        { title: 'Performance Reports', description: 'Rating distribution, goal completion, and performance trends.' },
        { title: 'Turnover Analysis', description: 'Attrition rates by department, tenure, and exit reasons.' },
        { title: 'Demographics', description: 'Age distribution, gender ratio, and diversity metrics.' },
        { title: 'Scheduled Reports', description: 'Auto-generate and email reports daily, weekly, or monthly.' },
        { title: 'Role-Based Access', description: 'Control who can view specific reports and data fields.' },
      ]}
      useCases={[
        { title: 'Board Presentations', description: 'Create executive dashboards for leadership with key HR metrics and trends.' },
        { title: 'Audit Compliance', description: 'Generate compliance reports for labor audits and statutory requirements.' },
        { title: 'Budget Planning', description: 'Analyze payroll costs and forecast future hiring expenses.' },
      ]}
      advantages={[
        'Move from reactive to proactive HR management with data insights',
        'Identify workforce trends before they become problems',
        'Make informed decisions on hiring, training, and retention',
        'Eliminate manual report creation and save hours of work',
        'Share insights with stakeholders through scheduled reports',
        'Measure the effectiveness of HR initiatives with metrics',
      ]}
      relatedModules={[
        { name: 'Core HR', href: '/features/core-hr' },
        { name: 'Attendance Management', href: '/features/attendance-management' },
        { name: 'Payroll Management', href: '/features/payroll-management' },
        { name: 'Performance Management', href: '/features/performance-management' },
      ]}
      faqs={[
        { question: 'Can we create our own custom reports?', answer: 'Yes, the custom report builder allows you to select fields, apply filters, and create reports specific to your needs without technical knowledge.' },
        { question: 'How often is report data updated?', answer: 'All reports show real-time data. When you open a report, it reflects the latest information from the system.' },
        { question: 'Can reports be scheduled automatically?', answer: 'Yes, you can schedule reports to be generated and emailed automatically daily, weekly, or monthly to specified recipients.' },
        { question: 'What export formats are supported?', answer: 'Reports can be exported as Excel (XLSX), PDF, or CSV files for further analysis or sharing.' },
      ]}
      ctaTitle="Ready to Unlock Your HR Data Insights?"
      ctaDescription="See how HRMS Mitra Reports & Analytics can transform your raw data into strategic workforce intelligence."
    />
  )
}
