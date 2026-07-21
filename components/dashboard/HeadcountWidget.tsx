import { UserCheck, BarChart3 } from 'lucide-react'

const departments = [
  { name: 'Engineering', count: 42, total: 120, color: 'bg-[#075E54]' },
  { name: 'Sales', count: 28, total: 120, color: 'bg-blue-500' },
  { name: 'HR & Admin', count: 15, total: 120, color: 'bg-violet-500' },
  { name: 'Finance', count: 18, total: 120, color: 'bg-amber-500' },
  { name: 'Marketing', count: 12, total: 120, color: 'bg-pink-500' },
  { name: 'Operations', count: 5, total: 120, color: 'bg-teal-500' },
]

const newHires = [
  { name: 'Rahul Verma', role: 'Backend Engineer', joined: 'Jul 18', avatar: 'RV', color: 'bg-blue-500' },
  { name: 'Sneha Joshi', role: 'UX Designer', joined: 'Jul 15', avatar: 'SJ', color: 'bg-pink-500' },
  { name: 'Amit Kumar', role: 'Sales Manager', joined: 'Jul 10', avatar: 'AK', color: 'bg-amber-500' },
]

export default function HeadcountWidget() {
  const total = departments.reduce((sum, d) => sum + d.count, 0)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#075E54]" />
          <h3 className="text-sm font-semibold text-gray-800">Headcount by Department</h3>
        </div>
        <span className="text-sm font-bold text-[#075E54]">{total} Total</span>
      </div>

      <div className="p-5 space-y-3">
        {departments.map((dept) => {
          const pct = Math.round((dept.count / total) * 100)
          return (
            <div key={dept.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 font-medium">{dept.name}</span>
                <span className="text-xs font-semibold text-gray-800">{dept.count}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${dept.color} transition-all duration-700`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* New Hires Section */}
      <div className="border-t border-gray-100 px-5 py-4">
        <div className="flex items-center gap-2 mb-3">
          <UserCheck className="w-4 h-4 text-emerald-500" />
          <h4 className="text-xs font-semibold text-gray-700">Recent New Hires</h4>
        </div>
        <div className="space-y-2">
          {newHires.map((hire, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full ${hire.color} text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0`}>
                {hire.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{hire.name}</p>
                <p className="text-[10px] text-gray-500 truncate">{hire.role}</p>
              </div>
              <span className="text-[10px] text-gray-400 flex-shrink-0">{hire.joined}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
