import Link from 'next/link'
import { ArrowRight, Clock, Calendar, FileText, User, Receipt, MessageSquare } from 'lucide-react'

export default function EmployeeSelfServiceSection() {
  const actions = [
    { icon: Clock, text: 'View attendance' },
    { icon: Calendar, text: 'Apply for leave' },
    { icon: FileText, text: 'Download payslips' },
    { icon: User, text: 'Update personal details' },
    { icon: Receipt, text: 'Submit expense claims' },
    { icon: MessageSquare, text: 'Raise HR requests' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="card-cream p-10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft">
                  RK
                </div>
                <div>
                  <p className="font-serif font-semibold text-text-heading text-lg">Rajesh Kumar</p>
                  <p className="text-sm text-text-muted">Product Manager</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-white rounded-xl shadow-soft">
                  <div className="text-xs text-text-muted mb-1">Leave Balance</div>
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-xs text-text-muted">days</div>
                </div>
                <div className="p-5 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">This Month</div>
                  <div className="text-3xl font-bold text-text-heading">22</div>
                  <div className="text-xs text-text-muted">days</div>
                </div>
              </div>
              
              <p className="text-sm font-semibold text-text-heading mb-4">Quick Actions</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {actions.map((action, i) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={i}
                      className="flex items-center space-x-2 p-4 bg-white hover:bg-primary/5 rounded-xl transition-all text-left shadow-soft hover:shadow-medium"
                    >
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-xs font-medium text-text-heading">{action.text}</span>
                    </button>
                  )
                })}
              </div>
              
              <div className="border-t border-border-light pt-6">
                <p className="text-sm font-semibold text-text-heading mb-4">Recent Payslips</p>
                <div className="space-y-3">
                  {['December 2024', 'November 2024', 'October 2024'].map((month, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-soft">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-text-heading">{month}</span>
                      </div>
                      <button className="text-xs text-primary hover:underline font-semibold">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Employee Self-Service</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
              Give Employees Answers Without Increasing HR Workload
            </h2>
            
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              Empower your employees with a dedicated portal where they can access information,
              submit requests, and complete HR tasks independently—reducing HR team burden.
            </p>
            
            <div className="space-y-4 mb-10">
              {actions.map((action, index) => {
                const Icon = action.icon
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="icon-line-art flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-text-heading font-medium text-lg">{action.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/employee-self-service" className="btn-primary btn-lg">
              Explore Employee Self-Service
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
