import { Users, Clock, Calendar, DollarSign, CheckCircle } from 'lucide-react'

export default function HRMSProductPreview() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Main Dashboard Card */}
      <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-lg font-semibold text-text-heading">HR Dashboard</p>
          <div className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
            Live
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-background-alt rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-text-muted">Employees</span>
            </div>
            <div className="text-2xl font-bold text-text-heading">248</div>
            <div className="text-xs text-success">+12 this month</div>
          </div>
          
          <div className="p-4 bg-background-alt rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm text-text-muted">Present Today</span>
            </div>
            <div className="text-2xl font-bold text-text-heading">236</div>
            <div className="text-xs text-text-muted">95.2% attendance</div>
          </div>
          
          <div className="p-4 bg-background-alt rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm text-text-muted">On Leave</span>
            </div>
            <div className="text-2xl font-bold text-text-heading">8</div>
            <div className="text-xs text-text-muted">3 pending</div>
          </div>
          
          <div className="p-4 bg-background-alt rounded-xl">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-sm text-text-muted">Payroll</span>
            </div>
            <div className="text-2xl font-bold text-text-heading">₹42L</div>
            <div className="text-xs text-text-muted">This month</div>
          </div>
        </div>
        
        {/* Pending Approvals */}
        <div className="border-t border-border pt-4">
          <p className="text-sm font-semibold text-text-heading mb-3">Pending Approvals</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-warning/5 rounded-lg border border-warning/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-warning" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-heading">Leave Requests</div>
                  <div className="text-xs text-text-muted">5 pending</div>
                </div>
              </div>
              <div className="text-xs text-primary font-medium">Review</div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-heading">Expense Claims</div>
                  <div className="text-xs text-text-muted">3 pending</div>
                </div>
              </div>
              <div className="text-xs text-primary font-medium">Review</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Cards */}
      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border p-3 z-20">
        <div className="text-xs text-text-muted mb-1">Quick Actions</div>
        <div className="text-sm font-semibold text-primary">Mark Attendance</div>
      </div>
      
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-border p-3 z-20">
        <div className="text-xs text-text-muted mb-1">System Status</div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <div className="text-sm font-semibold text-success">All Systems Online</div>
        </div>
      </div>
    </div>
  )
}
