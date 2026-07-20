import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Headphones, MessageSquare, Clock, CheckCircle, BarChart3, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Employee Helpdesk - HR Ticketing & Support System | HRMS Mitra',
  description: 'Manage employee queries and HR requests with a ticketing system. Track, prioritize, and resolve HR issues efficiently.',
}

export default function EmployeeHelpdeskPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Employee Helpdesk', href: '/features/employee-helpdesk' },
      ]}
      badge="Employee Helpdesk"
      title="Resolve Employee Queries Faster With Organized Ticketing"
      description="Centralize all HR queries and requests in one place. Track, prioritize, and resolve employee issues with complete transparency and accountability."
      benefits={[
        { title: 'Ticket Management', description: 'Create, assign, and track employee queries with unique ticket numbers.', icon: <Tag className="w-12 h-12 text-primary" /> },
        { title: 'Multi-Channel Support', description: 'Accept requests through portal, email, or mobile app.', icon: <MessageSquare className="w-12 h-12 text-primary" /> },
        { title: 'Priority & SLA', description: 'Set priority levels and service level agreements for different query types.', icon: <Clock className="w-12 h-12 text-primary" /> },
        { title: 'Quick Resolution', description: 'Categorize tickets and route to the right HR team members automatically.', icon: <CheckCircle className="w-12 h-12 text-primary" /> },
        { title: 'Knowledge Base', description: 'Create FAQs and self-help articles to reduce repetitive queries.', icon: <Headphones className="w-12 h-12 text-primary" /> },
        { title: 'Helpdesk Analytics', description: 'Track response times, resolution rates, and common query categories.', icon: <BarChart3 className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Ticket Creation', description: 'Employees can raise tickets for any HR-related query or request.' },
        { title: 'Category Management', description: 'Organize tickets by category like payroll, leave, documents, or IT access.' },
        { title: 'Assignment Rules', description: 'Automatically assign tickets to HR team members based on category.' },
        { title: 'Priority Levels', description: 'Mark tickets as low, medium, high, or urgent priority.' },
        { title: 'Internal Notes', description: 'HR team can add internal comments not visible to employees.' },
        { title: 'Status Tracking', description: 'Track ticket status from open to in-progress to resolved.' },
        { title: 'Response Templates', description: 'Use pre-defined templates for common responses.' },
        { title: 'Attachments', description: 'Attach files, screenshots, or documents to tickets.' },
        { title: 'Email Notifications', description: 'Automatic updates to employees on ticket progress.' },
        { title: 'Escalation Workflow', description: 'Auto-escalate overdue tickets to senior HR or managers.' },
      ]}
      useCases={[
        { title: 'Payroll Queries', description: 'Employees raise questions about salary components, deductions, or tax calculations.' },
        { title: 'Document Requests', description: 'Request for experience letters, salary certificates, or other HR documents.' },
        { title: 'IT Access Issues', description: 'Track and resolve employee access problems for systems and tools.' },
      ]}
      advantages={[
        'Never lose track of employee queries with centralized ticketing',
        'Reduce email clutter and improve response times',
        'Maintain complete history of employee interactions',
        'Measure HR team performance with resolution metrics',
        'Empower employees with self-service knowledge base',
        'Identify recurring issues and improve HR processes',
      ]}
      relatedModules={[
        { name: 'Employee Self-Service', href: '/features/employee-self-service' },
        { name: 'Core HR', href: '/features/core-hr' },
        { name: 'Reports & Analytics', href: '/features/reports-analytics' },
      ]}
      faqs={[
        { question: 'Can employees track their ticket status?', answer: 'Yes, employees receive a unique ticket number and can track progress through their portal. They get email notifications on updates.' },
        { question: 'How are tickets assigned to HR team?', answer: 'You can set up automatic assignment rules based on ticket category or manually assign tickets to specific HR team members.' },
        { question: 'Can we create a knowledge base?', answer: 'Yes, you can publish FAQs and help articles. Employees can search the knowledge base before raising tickets.' },
        { question: 'What reports are available?', answer: 'View average response time, resolution time, ticket volume by category, and individual agent performance metrics.' },
      ]}
      ctaTitle="Ready to Provide Better Employee Support?"
      ctaDescription="Transform HR query management with organized ticketing and faster resolution times. See HRMS Mitra Helpdesk in action."
    />
  )
}
