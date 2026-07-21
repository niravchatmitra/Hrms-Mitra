'use client'

import { useState } from 'react'
import { Bell, Search, ChevronDown, HelpCircle, Settings } from 'lucide-react'

interface DashboardHeaderProps {
  title?: string
  subtitle?: string
}

const notifications = [
  { id: 1, text: 'Priya Sharma requested time off', time: '5m ago', unread: true, avatar: 'PS' },
  { id: 2, text: 'New hire onboarding: Rahul Verma', time: '1h ago', unread: true, avatar: 'RV' },
  { id: 3, text: 'Q3 Performance reviews due', time: '2h ago', unread: false, avatar: '📋' },
  { id: 4, text: 'Payroll processed successfully', time: 'Yesterday', unread: false, avatar: '💰' },
]

export default function DashboardHeader({ title = 'Home', subtitle }: DashboardHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-0 flex items-center justify-between h-[60px] flex-shrink-0 relative z-20">
      {/* Left: Page Title */}
      <div>
        <h1 className="text-[17px] font-semibold text-gray-800 leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees, reports..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Help */}
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all duration-200">
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowUserMenu(false) }}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all duration-200 relative"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E8753A] rounded-full" />
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-800">Notifications</span>
                <span className="text-xs text-[#075E54] font-medium cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="divide-y divide-gray-50 max-h-72 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${n.unread ? 'bg-[#EFF8F5]' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-[#075E54]/10 text-[#075E54] text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {n.avatar.length === 2 ? n.avatar : <span>{n.avatar}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-snug ${n.unread ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{n.text}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
                    </div>
                    {n.unread && <span className="w-2 h-2 rounded-full bg-[#E8753A] flex-shrink-0 mt-1" />}
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 border-t border-gray-100 text-center">
                <span className="text-xs text-[#075E54] font-medium cursor-pointer hover:underline">View all notifications</span>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-1" />

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => { setShowUserMenu(!showUserMenu); setShowNotifications(false) }}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-[#E8753A] flex items-center justify-center text-white text-xs font-bold">
              AR
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-gray-800 leading-tight">Arjun Rathore</p>
              <p className="text-[10px] text-gray-500">Admin</p>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-800">Arjun Rathore</p>
                <p className="text-xs text-gray-500">arjun@hrmsmitra.com</p>
              </div>
              {[
                { label: 'My Profile', href: '/dashboard/my-info' },
                { label: 'Settings', href: '/dashboard/settings' },
                { label: 'Help & Support', href: '#' },
              ].map(item => (
                <a key={item.label} href={item.href} className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-100">
                <button className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside overlay */}
      {(showNotifications || showUserMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setShowNotifications(false); setShowUserMenu(false) }}
        />
      )}
    </header>
  )
}
