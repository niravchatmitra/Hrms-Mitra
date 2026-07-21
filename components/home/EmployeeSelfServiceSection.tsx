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
    <section className="section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div>
                  <p className="font-semibold text-text-heading">Rajesh Kumar</p>
                  <p className="text-sm text-text-muted">Product Manager</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-primary-extra-light rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Leave Balance</div>
                  <div className="text-2xl font-bold text-primary">12 days</div>
                </div>
                <div className="p-4 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">This Month</div>
                  <div className="text-2xl font-bold text-text-heading">22 days</div>
                </div>
              </div>
              
              <p className="text-sm font-semibold text-text-heading mb-3">Quick Actions</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {actions.map((action, i) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={i}
                      className="flex items-center space-x-2 p-3 bg-background-alt hover:bg-primary-extra-light rounded-lg transition-colors text-left"
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs font-medium text-text-heading">{action.text}</span>
                    </button>
                  )
                })}
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-text-heading mb-3">Recent Payslips</p>
                <div className="space-y-2">
                  {['December 2024', 'November 2024', 'October 2024'].map((month, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-text-heading">{month}</span>
                      </div>
                      <button className="text-xs text-primary hover:underline font-medium">
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
            <div className="inline-flex items-center px-3 py-1 bg-primary-light rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Employee Self-Service</span>
            </div>
            
            <h2 className="mb-6">
              Give Employees Answers Without Increasing HR Workload.
            </h2>
            
            <p className="text-lg text-text-body mb-8">
              Empower your employees with a dedicated portal where they can access information,
              submit requests, and complete HR tasks independently—reducing HR team burden.
            </p>
            
            <div className="space-y-4 mb-8">
              {actions.map((action, index) => {
                const Icon = action.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-heading font-medium">{action.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/employee-self-service" className="btn-primary">
              Explore Employee Self-Service
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
