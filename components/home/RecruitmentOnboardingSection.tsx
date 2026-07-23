import Link from 'next/link'
import { ArrowRight, Briefcase, Users, FileCheck, UserPlus, CheckSquare, Send } from 'lucide-react'

export default function RecruitmentOnboardingSection() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
            Move From Candidate to Productive Employee Faster
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            Streamline your entire hiring and onboarding process—from job postings to day-one readiness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recruitment */}
          <div className="card-white p-10">
            <div className="icon-line-art w-14 h-14 mb-6">
              <Briefcase className="w-8 h-8" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-text-heading mb-4">Recruitment & ATS</h3>
            <p className="text-text-body mb-8 leading-relaxed">
              Post job openings, track candidates through your pipeline, schedule interviews, and
              send offers—all in one applicant tracking system.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: Briefcase, text: 'Job opening management' },
                { icon: Users, text: 'Candidate pipeline tracking' },
                { icon: FileCheck, text: 'Interview scheduling' },
                { icon: Send, text: 'Offer letter generation' },
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-text-body">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link
              href="/features/recruitment"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Learn more about Recruitment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          {/* Onboarding */}
          <div className="card-white p-10">
            <div className="icon-line-art w-14 h-14 mb-6">
              <UserPlus className="w-8 h-8" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-text-heading mb-4">Employee Onboarding</h3>
            <p className="text-text-body mb-8 leading-relaxed">
              Create structured onboarding journeys with document collection, task checklists, and
              training modules to make new hires productive from day one.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                { icon: FileCheck, text: 'Digital joining documents' },
                { icon: CheckSquare, text: 'Onboarding checklists' },
                { icon: Users, text: 'Team introductions' },
                { icon: Briefcase, text: 'Equipment assignment' },
              ].map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-text-body">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link
              href="/features/onboarding"
              className="inline-flex items-center text-primary font-semibold hover:underline"
            >
              Learn more about Onboarding
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
