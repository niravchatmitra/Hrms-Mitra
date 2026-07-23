import Link from 'next/link'
import { ArrowRight, BarChart3, TrendingUp, Users, PieChart } from 'lucide-react'

export default function ReportingSection() {
  return (
    <section className="py-24 bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
            Make Better People Decisions With Clear HR Data
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            Get instant access to workforce analytics, attendance trends, payroll costs, and
            departmental insights through visual dashboards and downloadable reports.
          </p>
        </div>
        
        <div className="card-white p-10 mb-10">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-primary mb-2">248</div>
              <div className="text-sm text-text-muted">Total Employees</div>
            </div>
            
            <div className="text-center p-6 bg-success/5 rounded-2xl border border-success/10">
              <TrendingUp className="w-10 h-10 text-success mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-success mb-2">95.2%</div>
              <div className="text-sm text-text-muted">Avg Attendance</div>
            </div>
            
            <div className="text-center p-6 bg-warning/5 rounded-2xl border border-warning/10">
              <BarChart3 className="w-10 h-10 text-warning mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-warning mb-2">₹42L</div>
              <div className="text-sm text-text-muted">Monthly Payroll</div>
            </div>
            
            <div className="text-center p-6 bg-accent-coral/5 rounded-2xl border border-accent-coral/10">
              <PieChart className="w-10 h-10 text-accent-coral mx-auto mb-4" strokeWidth={1.5} />
              <div className="text-4xl font-bold text-accent-coral mb-2">6.5%</div>
              <div className="text-sm text-text-muted">Avg Leave Rate</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Headcount by Department */}
            <div>
              <p className="text-sm font-semibold text-text-heading mb-6">Headcount by Department</p>
              <div className="space-y-4">
                {[
                  { dept: 'Engineering', count: 85, percent: 34 },
                  { dept: 'Sales & Marketing', count: 62, percent: 25 },
                  { dept: 'Operations', count: 48, percent: 19 },
                  { dept: 'HR & Admin', count: 28, percent: 11 },
                  { dept: 'Finance', count: 25, percent: 10 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-heading">{item.dept}</span>
                      <span className="text-sm font-bold text-text-heading">{item.count}</span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2.5">
                      <div
                        className="bg-primary rounded-full h-2.5"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Attendance Trends */}
            <div>
              <p className="text-sm font-semibold text-text-heading mb-6">Monthly Attendance Trends</p>
              <div className="space-y-4">
                {[
                  { month: 'December', rate: 95.2, status: 'success' },
                  { month: 'November', rate: 94.8, status: 'success' },
                  { month: 'October', rate: 93.5, status: 'success' },
                  { month: 'September', rate: 92.1, status: 'warning' },
                  { month: 'August', rate: 94.3, status: 'success' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-heading">{item.month}</span>
                      <span className={`text-sm font-bold ${
                        item.status === 'success' ? 'text-success' : 'text-warning'
                      }`}>
                        {item.rate}%
                      </span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2.5">
                      <div
                        className={`rounded-full h-2.5 ${
                          item.status === 'success' ? 'bg-success' : 'bg-warning'
                        }`}
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/features/reports-analytics" className="btn-primary btn-lg">
            Explore Reports & Analytics
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
