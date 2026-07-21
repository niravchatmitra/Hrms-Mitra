import Link from 'next/link'
import {
  UserPlus,
  CalendarPlus,
  FileText,
  DollarSign,
  ClipboardList,
  Users,
} from 'lucide-react'

const actions = [
  { label: 'Add Employee', icon: UserPlus, href: '/dashboard/employees/new', color: 'text-[#075E54]', bg: 'bg-[#EFF8F5]', hoverBg: 'hover:bg-[#075E54]' },
  { label: 'Request Leave', icon: CalendarPlus, href: '/dashboard/time-off/new', color: 'text-blue-600', bg: 'bg-blue-50', hoverBg: 'hover:bg-blue-600' },
  { label: 'Run Payroll', icon: DollarSign, href: '/dashboard/payroll', color: 'text-amber-600', bg: 'bg-amber-50', hoverBg: 'hover:bg-amber-500' },
  { label: 'New Report', icon: FileText, href: '/dashboard/reports', color: 'text-violet-600', bg: 'bg-violet-50', hoverBg: 'hover:bg-violet-600' },
  { label: 'Review Goals', icon: ClipboardList, href: '/dashboard/performance', color: 'text-pink-600', bg: 'bg-pink-50', hoverBg: 'hover:bg-pink-500' },
  { label: 'View Org Chart', icon: Users, href: '/dashboard/employees', color: 'text-teal-600', bg: 'bg-teal-50', hoverBg: 'hover:bg-teal-600' },
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-800">Quick Actions</h3>
      </div>
      <div className="p-4 grid grid-cols-3 gap-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.label}
              href={action.href}
              className={`group flex flex-col items-center justify-center gap-2 p-3 rounded-xl ${action.bg} hover:text-white ${action.hoverBg} transition-all duration-200 cursor-pointer`}
            >
              <div className={`w-9 h-9 rounded-lg bg-white/60 group-hover:bg-white/20 flex items-center justify-center transition-all`}>
                <Icon className={`w-4 h-4 ${action.color} group-hover:text-white`} />
              </div>
              <span className={`text-[10px] font-semibold ${action.color} group-hover:text-white text-center leading-tight`}>
                {action.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
