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
    <section className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary-light rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Core HR</span>
            </div>
            
            <h2 className="mb-6">
              Keep Every Employee Record Accurate and Accessible.
            </h2>
            
            <p className="text-lg text-text-body mb-8">
              Build a complete digital employee database. Store personal details, employment
              information, documents, and organizational hierarchy in one secure location.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-heading font-medium">{benefit.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/core-hr" className="btn-primary">
              Explore Core HR
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center text-white text-xl font-bold">
                  AS
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-heading">Amit Sharma</h4>
                  <p className="text-sm text-text-muted">Senior Software Engineer</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-background-alt rounded-lg">
                  <div className="text-xs text-text-muted mb-1">Employee ID</div>
                  <div className="font-semibold text-text-heading">EMP-001248</div>
                </div>
                <div className="p-4 bg-background-alt rounded-lg">
                  <div className="text-xs text-text-muted mb-1">Department</div>
                  <div className="font-semibold text-text-heading">Engineering</div>
                </div>
                <div className="p-4 bg-background-alt rounded-lg">
                  <div className="text-xs text-text-muted mb-1">Joining Date</div>
                  <div className="font-semibold text-text-heading">15 Jan 2021</div>
                </div>
                <div className="p-4 bg-background-alt rounded-lg">
                  <div className="text-xs text-text-muted mb-1">Location</div>
                  <div className="font-semibold text-text-heading">Bangalore</div>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <h5 className="text-sm font-semibold text-text-heading mb-3">Documents</h5>
                <div className="space-y-2">
                  {['Offer Letter', 'Joining Form', 'ID Proof', 'Bank Details'].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-background-alt rounded">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-text-heading">{doc}</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-success" />
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
