import Link from 'next/link'
import { ArrowRight, BarChart3, TrendingUp, Users, PieChart } from 'lucide-react'

export default function ReportingSection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-6">
            Make Better People Decisions With Clear HR Data.
          </h2>
          <p className="text-lg text-text-body">
            Get instant access to workforce analytics, attendance trends, payroll costs, and
            departmental insights through visual dashboards and downloadable reports.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-border p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary-extra-light to-primary-light rounded-xl">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">248</div>
              <div className="text-sm text-text-muted">Total Employees</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-success/10 to-success/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-success mb-1">95.2%</div>
              <div className="text-sm text-text-muted">Avg Attendance</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-warning/10 to-warning/20 rounded-xl">
              <BarChart3 className="w-8 h-8 text-warning mx-auto mb-3" />
              <div className="text-3xl font-bold text-warning mb-1">₹42L</div>
              <div className="text-sm text-text-muted">Monthly Payroll</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-accent-coral/10 to-accent-coral/20 rounded-xl">
              <PieChart className="w-8 h-8 text-accent-coral mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent-coral mb-1">6.5%</div>
              <div className="text-sm text-text-muted">Avg Leave Rate</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Headcount by Department */}
            <div>
              <p className="text-sm font-semibold text-text-heading mb-4">Headcount by Department</p>
              <div className="space-y-3">
                {[
                  { dept: 'Engineering', count: 85, percent: 34 },
                  { dept: 'Sales & Marketing', count: 62, percent: 25 },
                  { dept: 'Operations', count: 48, percent: 19 },
                  { dept: 'HR & Admin', count: 28, percent: 11 },
                  { dept: 'Finance', count: 25, percent: 10 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-heading">{item.dept}</span>
                      <span className="text-sm font-semibold text-text-heading">{item.count}</span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Attendance Trends */}
            <div>
              <p className="text-sm font-semibold text-text-heading mb-4">Monthly Attendance Trends</p>
              <div className="space-y-3">
                {[
                  { month: 'December', rate: 95.2, status: 'success' },
                  { month: 'November', rate: 94.8, status: 'success' },
                  { month: 'October', rate: 93.5, status: 'success' },
                  { month: 'September', rate: 92.1, status: 'warning' },
                  { month: 'August', rate: 94.3, status: 'success' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-heading">{item.month}</span>
                      <span className={`text-sm font-semibold ${
                        item.status === 'success' ? 'text-success' : 'text-warning'
                      }`}>
                        {item.rate}%
                      </span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2">
                      <div
                        className={`rounded-full h-2 ${
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
