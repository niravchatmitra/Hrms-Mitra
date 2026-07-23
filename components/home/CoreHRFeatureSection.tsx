import Link from 'next/link'
import { CheckCircle2, ArrowRight, Users, FileText, Building, History, Shield } from 'lucide-react'

export default function CoreHRFeatureSection() {
  const benefits = [
    { icon: Users, text: 'Central employee database' },
    { icon: FileText, text: 'Digital documents' },
    { icon: Building, text: 'Department and reporting structure' },
    { icon: History, text: 'Employment history' },
    { icon: Shield, text: 'Role-based access' },
  ]

  return (
    <section className="py-24 bg-background-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Core HR</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
              Keep Every Employee Record Accurate and Accessible
            </h2>
            
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              Build a complete digital employee database. Store personal details, employment
              information, documents, and organizational hierarchy in one secure location.
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="icon-line-art flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-text-heading font-medium text-lg">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/core-hr" className="btn-primary btn-lg">
              Explore Core HR
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="card-white p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center text-white text-xl font-bold shadow-soft">
                  AS
                </div>
                <div>
                  <p className="text-xl font-serif font-semibold text-text-heading">Amit Sharma</p>
                  <p className="text-sm text-text-muted">Senior Software Engineer</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Employee ID</div>
                  <div className="font-semibold text-text-heading">EMP-001248</div>
                </div>
                <div className="p-4 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Department</div>
                  <div className="font-semibold text-text-heading">Engineering</div>
                </div>
                <div className="p-4 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Joining Date</div>
                  <div className="font-semibold text-text-heading">15 Jan 2021</div>
                </div>
                <div className="p-4 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Location</div>
                  <div className="font-semibold text-text-heading">Bangalore</div>
                </div>
              </div>
              
              <div className="border-t border-border-light pt-6">
                <p className="text-sm font-semibold text-text-heading mb-4">Documents</p>
                <div className="space-y-3">
                  {['Offer Letter', 'Joining Form', 'ID Proof', 'Bank Details'].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-text-heading">{doc}</span>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
