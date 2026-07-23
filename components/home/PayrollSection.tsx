import Link from 'next/link'
import { ArrowRight, DollarSign, FileText, Calculator, Shield, TrendingUp } from 'lucide-react'

export default function PayrollSection() {
  const features = [
    { icon: Calculator, text: 'Flexible salary structures' },
    { icon: DollarSign, text: 'Attendance-linked payroll' },
    { icon: Shield, text: 'PF, ESI, Professional Tax and TDS support' },
    { icon: FileText, text: 'Digital payslips' },
    { icon: TrendingUp, text: 'Payroll reports and compliance' },
  ]

  return (
    <section className="py-24 bg-background-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Payroll Management</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
              Run Accurate Indian Payroll With Greater Confidence
            </h2>
            
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              Process monthly payroll automatically with attendance integration, statutory compliance,
              and flexible salary components. Generate payslips and reports with complete accuracy.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="icon-line-art flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-text-heading font-medium text-lg">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <div className="card-cream p-5 border-l-4 border-primary mb-10">
              <p className="text-sm text-text-body leading-relaxed">
                <strong className="text-text-heading font-semibold">Note:</strong> HRMS Mitra supports Indian payroll
                calculations. Please verify statutory compliance requirements with your financial advisor.
              </p>
            </div>
            
            <Link href="/features/payroll-management" className="btn-primary btn-lg">
              Explore Payroll
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="card-white p-10">
              <div className="flex items-center justify-between mb-8">
                <p className="text-xl font-serif font-semibold text-text-heading">Payroll Summary</p>
                <div className="text-sm text-text-muted">December 2024</div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary to-primary-medium rounded-2xl text-white mb-8 shadow-soft">
                <div className="text-sm opacity-90 mb-2">Total Payroll</div>
                <div className="text-4xl font-bold mb-1">₹42,18,500</div>
                <div className="text-sm opacity-90">248 employees</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Gross Salary</div>
                  <div className="text-xl font-semibold text-text-heading">₹52.4L</div>
                </div>
                <div className="p-5 bg-background-alt rounded-xl">
                  <div className="text-xs text-text-muted mb-1">Deductions</div>
                  <div className="text-xl font-semibold text-text-heading">₹10.2L</div>
                </div>
              </div>
              
              <div className="border-t border-border-light pt-6">
                <p className="text-sm font-semibold text-text-heading mb-4">Breakdown</p>
                <div className="space-y-3">
                  {[
                    { label: 'PF Contribution', amount: '₹4.8L' },
                    { label: 'ESI', amount: '₹1.2L' },
                    { label: 'Professional Tax', amount: '₹0.5L' },
                    { label: 'TDS', amount: '₹3.7L' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-text-body">{item.label}</span>
                      <span className="text-sm font-semibold text-text-heading">{item.amount}</span>
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
