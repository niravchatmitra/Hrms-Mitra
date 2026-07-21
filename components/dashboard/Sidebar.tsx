'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  UserCircle,
  CalendarDays,
  DollarSign,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  ClipboardList,
  Bell,
  LogOut,
  Building2,
} from 'lucide-react'

const navItems = [
  {
    label: 'Home',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'People',
    href: '/dashboard/employees',
    icon: Users,
  },
  {
    label: 'My Info',
    href: '/dashboard/my-info',
    icon: UserCircle,
  },
  {
    label: 'Time Off',
    href: '/dashboard/time-off',
    icon: CalendarDays,
  },
  {
    label: 'Payroll',
    href: '/dashboard/payroll',
    icon: DollarSign,
  },
  {
    label: 'Hiring',
    href: '/dashboard/hiring',
    icon: Briefcase,
  },
  {
    label: 'Performance',
    href: '/dashboard/performance',
    icon: ClipboardList,
  },
  {
    label: 'Reports',
    href: '/dashboard/reports',
    icon: BarChart3,
  },
]

const bottomItems = [
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard'
    return pathname.startsWith(href)
  }

  return (
    <aside
      className={`relative flex flex-col h-screen bg-[#075E54] transition-all duration-300 ease-in-out flex-shrink-0 ${
        collapsed ? 'w-[68px]' : 'w-[220px]'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-md">
          <Building2 className="w-5 h-5 text-[#075E54]" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-white font-bold text-sm leading-tight whitespace-nowrap">HRMS Mitra</p>
            <p className="text-white/50 text-[10px] whitespace-nowrap">HR Platform</p>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[72px] w-6 h-6 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#075E54] hover:bg-[#075E54] hover:text-white hover:border-[#075E54] transition-all duration-200 z-10"
        aria-label="Toggle sidebar"
      >
        {collapsed ? (
          <ChevronRight className="w-3.5 h-3.5" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
                ${active
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {/* Active indicator bar */}
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
              )}
              <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-white' : 'text-white/70 group-hover:text-white'}`} />
              {!collapsed && (
                <span className={`text-sm font-medium whitespace-nowrap ${active ? 'text-white' : ''}`}>
                  {item.label}
                </span>
              )}
              {/* Tooltip when collapsed */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 z-50">
                  {item.label}
                </div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Items */}
      <div className="px-2 pb-4 border-t border-white/10 pt-3 space-y-0.5">
        {bottomItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 group relative"
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="text-sm font-medium">Settings</span>}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50">
                  Settings
                </div>
              )}
            </Link>
          )
        })}

        {/* User Avatar at Bottom */}
        <div className={`flex items-center gap-3 px-3 py-2.5 mt-1 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 group`}>
          <div className="w-7 h-7 rounded-full bg-[#E8753A] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
            AR
          </div>
          {!collapsed && (
            <div className="overflow-hidden flex-1 min-w-0">
              <p className="text-white text-xs font-semibold truncate">Arjun Rathore</p>
              <p className="text-white/50 text-[10px] truncate">Admin</p>
            </div>
          )}
          {!collapsed && <LogOut className="w-4 h-4 text-white/40 group-hover:text-white/80 flex-shrink-0" />}
        </div>
      </div>
    </aside>
  )
}
