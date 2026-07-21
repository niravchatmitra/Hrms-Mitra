import { CalendarDays, Clock, CheckCircle2, XCircle } from 'lucide-react'

const leaveRequests = [
  { name: 'Priya Sharma', type: 'Sick Leave', dates: 'Jul 22–24', days: 3, status: 'pending', avatar: 'PS', avatarColor: 'bg-pink-500' },
  { name: 'Karan Mehta', type: 'Casual Leave', dates: 'Jul 25', days: 1, status: 'approved', avatar: 'KM', avatarColor: 'bg-blue-500' },
  { name: 'Ananya Singh', type: 'Earned Leave', dates: 'Aug 1–5', days: 5, status: 'pending', avatar: 'AS', avatarColor: 'bg-violet-500' },
  { name: 'Dev Patel', type: 'Work from Home', dates: 'Jul 28–29', days: 2, status: 'approved', avatar: 'DP', avatarColor: 'bg-amber-500' },
]

const leaveSummary = [
  { label: 'Pending Approval', count: 8, color: 'bg-amber-400' },
  { label: 'Approved This Month', count: 24, color: 'bg-emerald-500' },
  { label: 'On Leave Today', count: 3, color: 'bg-blue-500' },
]

export default function TimeOffWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-[#075E54]" />
          <h3 className="text-sm font-semibold text-gray-800">Time Off Requests</h3>
        </div>
        <a href="/dashboard/time-off" className="text-xs text-[#075E54] font-medium hover:underline">View All</a>
      </div>

      {/* Summary Pills */}
      <div className="px-5 py-3 flex gap-3 flex-wrap border-b border-gray-50">
        {leaveSummary.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${item.color}`} />
            <span className="text-xs text-gray-600">{item.label}:</span>
            <span className="text-xs font-bold text-gray-800">{item.count}</span>
          </div>
        ))}
      </div>

      {/* Requests List */}
      <div className="divide-y divide-gray-50">
        {leaveRequests.map((req, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
            <div className={`w-8 h-8 rounded-full ${req.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
              {req.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-800 truncate">{req.name}</p>
              <p className="text-[10px] text-gray-500 truncate">{req.type} · {req.dates}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{req.days}d</span>
              {req.status === 'pending' ? (
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <XCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-medium">Approved</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-3 border-t border-gray-100">
        <button className="w-full py-2 rounded-lg bg-[#EFF8F5] text-[#075E54] text-xs font-semibold hover:bg-[#075E54] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          Request Time Off
        </button>
      </div>
    </div>
  )
}
