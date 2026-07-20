import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Briefcase, Users, Calendar, Send, FileCheck, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recruitment & ATS - Applicant Tracking System | HRMS Mitra',
  description: 'Streamline hiring with HRMS Mitra recruitment module. Manage job postings, track candidates, schedule interviews, and send offers—all in one ATS.',
}

export default function RecruitmentPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Recruitment', href: '/features/recruitment' },
      ]}
      badge="Recruitment & ATS"
      title="Hire the Right Talent Faster With Our Applicant Tracking System"
      description="Manage your entire recruitment process from job posting to offer acceptance. Track candidates, collaborate with hiring teams, and make data-driven hiring decisions."
      benefits={[
        { title: 'Job Opening Management', description: 'Create and manage job requisitions with approval workflows and hiring plans.', icon: <Briefcase className="w-12 h-12 text-primary" /> },
        { title: 'Candidate Pipeline', description: 'Track candidates through stages from applied to hired with visual pipelines.', icon: <Users className="w-12 h-12 text-primary" /> },
        { title: 'Interview Scheduling', description: 'Schedule interviews, send calendar invites, and collect feedback from interviewers.', icon: <Calendar className="w-12 h-12 text-primary" /> },
        { title: 'Offer Management', description: 'Generate and send offer letters digitally with e-signature capabilities.', icon: <Send className="w-12 h-12 text-primary" /> },
        { title: 'Candidate Database', description: 'Build a searchable talent pool for future hiring needs.', icon: <FileCheck className="w-12 h-12 text-primary" /> },
        { title: 'Recruitment Analytics', description: 'Track time-to-hire, source effectiveness, and hiring funnel metrics.', icon: <Target className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Job Posting Creation', description: 'Create detailed job descriptions with required skills and experience levels.' },
        { title: 'Multi-Channel Publishing', description: 'Post jobs to your career page and export to job boards.' },
        { title: 'Resume Parsing', description: 'Automatically extract candidate information from resumes.' },
        { title: 'Candidate Screening', description: 'Screen applications with custom questionnaires and knockout questions.' },
        { title: 'Interview Rounds', description: 'Configure multiple interview rounds with different evaluators.' },
        { title: 'Feedback Collection', description: 'Structured interview feedback forms for consistent evaluations.' },
        { title: 'Candidate Communication', description: 'Send automated emails for application status and next steps.' },
        { title: 'Collaborative Hiring', description: 'Share candidate profiles with hiring managers for feedback.' },
        { title: 'Offer Letter Templates', description: 'Create offer letter templates with placeholders for candidate details.' },
        { title: 'Background Verification', description: 'Track background check status before finalizing offers.' },
        { title: 'Recruitment Reports', description: 'Analyze hiring metrics, source performance, and pipeline health.' },
        { title: 'Candidate Portal', description: 'Allow candidates to track their application status online.' },
      ]}
      useCases={[
        { title: 'High-Volume Hiring', description: 'Manage multiple job openings and hundreds of applications efficiently.' },
        { title: 'Campus Recruitment', description: 'Track campus hiring drives with bulk candidate processing.' },
        { title: 'Executive Search', description: 'Manage confidential senior-level hiring with restricted access.' },
      ]}
      advantages={[
        'Reduce time-to-hire by centralizing all recruitment activities',
        'Improve candidate experience with timely communication',
        'Make better hiring decisions with structured evaluation',
        'Build a talent pipeline for future opportunities',
        'Ensure compliance with equal opportunity employment',
        'Track recruitment costs and ROI by source',
      ]}
      relatedModules={[
        { name: 'Employee Onboarding', href: '/features/onboarding' },
        { name: 'Core HR', href: '/features/core-hr' },
        { name: 'Performance Management', href: '/features/performance-management' },
      ]}
      faqs={[
        { question: 'Can we post jobs to external job boards?', answer: 'Yes, you can export job postings to popular job boards. Integration capabilities depend on your plan. Contact us for specific integrations.' },
        { question: 'How many interview rounds can we configure?', answer: 'You can configure unlimited interview rounds with different interviewers, evaluation criteria, and feedback forms for each round.' },
        { question: 'Can candidates apply through mobile?', answer: 'Yes, the career page is mobile-responsive. Candidates can browse jobs and submit applications from any device.' },
        { question: 'Is there a candidate database for future hiring?', answer: 'Yes, rejected and withdrawn candidates are stored in the talent pool. You can search and contact them for future suitable positions.' },
      ]}
      ctaTitle="Ready to Transform Your Hiring Process?"
      ctaDescription="See how HRMS Mitra Recruitment can help you hire better, faster. Book a demo to explore the applicant tracking system."
    />
  )
}
