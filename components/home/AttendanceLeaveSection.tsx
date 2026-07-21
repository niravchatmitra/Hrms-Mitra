import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Users, CheckCircle, Sun } from 'lucide-react'

export default function AttendanceLeaveSection() {
  const features = [
    { icon: Clock, text: 'Check-in and check-out tracking' },
    { icon: Users, text: 'Shift tracking and management' },
    { icon: Calendar, text: 'Attendance calendar view' },
    { icon: CheckCircle, text: 'Leave balances and approval workflows' },
    { icon: Sun, text: 'Holiday calendars' },
  ]

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
              <p className="text-lg font-semibold text-text-heading mb-6">Today&apos;s Attendance</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-success/10 rounded-xl">
                  <div className="text-3xl font-bold text-success mb-1">236</div>
                  <div className="text-xs text-text-muted">Present</div>
                </div>
                <div className="text-center p-4 bg-warning/10 rounded-xl">
                  <div className="text-3xl font-bold text-warning mb-1">8</div>
                  <div className="text-xs text-text-muted">On Leave</div>
                </div>
                <div className="text-center p-4 bg-error/10 rounded-xl">
                  <div className="text-3xl font-bold text-error mb-1">4</div>
                  <div className="text-xs text-text-muted">Absent</div>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 mb-6">
                <p className="text-sm font-semibold text-text-heading mb-3">Recent Check-ins</p>
                <div className="space-y-3">
                  {[
                    { name: 'Priya Patel', time: '09:15 AM', status: 'On Time' },
                    { name: 'Rahul Kumar', time: '09:30 AM', status: 'On Time' },
                    { name: 'Sneha Desai', time: '10:05 AM', status: 'Late' },
                  ].map((entry, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                      <div>
                        <div className="font-medium text-text-heading text-sm">{entry.name}</div>
                        <div className="text-xs text-text-muted">{entry.time}</div>
                      </div>
                      <div className={`text-xs font-medium px-2 py-1 rounded ${
                        entry.status === 'On Time' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {entry.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-text-heading mb-3">Leave Requests</p>
                <div className="space-y-2">
                  {['Casual Leave - 2 days', 'Sick Leave - 1 day'].map((leave, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-warning/5 rounded border border-warning/20">
                      <span className="text-sm text-text-heading">{leave}</span>
                      <button className="text-xs font-medium text-primary hover:underline">
                        Review
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
              <span className="text-sm font-medium text-primary">Time & Attendance</span>
            </div>
            
            <h2 className="mb-6">
              Know Who Is Working, Late or on Leave.
            </h2>
            
            <p className="text-lg text-text-body mb-8">
              Track employee attendance in real-time with flexible check-in options. Manage shifts,
              calculate working hours, and handle leave requests with automated approval workflows.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-heading font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/attendance-management" className="btn-primary">
              Explore Attendance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
