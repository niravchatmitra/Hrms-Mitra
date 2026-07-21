'use client'

import { useState } from 'react'
import { CalendarDays, Plus, ChevronLeft, ChevronRight, Clock, CheckCircle2, XCircle, Info } from 'lucide-react'

const leaveTypes = ['Earned Leave', 'Sick Leave', 'Casual Leave', 'Compensatory Off', 'Work from Home']

const leaveRequests = [
  { id: 1, employee: 'Priya Sharma', type: 'Sick Leave', from: 'Jul 22', to: 'Jul 24', days: 3, status: 'pending', avatar: 'PS', color: 'bg-pink-500' },
  { id: 2, employee: 'Karan Mehta', type: 'Casual Leave', from: 'Jul 25', to: 'Jul 25', days: 1, status: 'approved', avatar: 'KM', color: 'bg-blue-500' },
  { id: 3, employee: 'Ananya Singh', type: 'Earned Leave', from: 'Aug 1', to: 'Aug 5', days: 5, status: 'pending', avatar: 'AS', color: 'bg-violet-500' },
  { id: 4, employee: 'Dev Patel', type: 'Work from Home', from: 'Jul 28', to: 'Jul 29', days: 2, status: 'approved', avatar: 'DP', color: 'bg-amber-500' },
  { id: 5, employee: 'Meera Pillai', type: 'Earned Leave', from: 'Aug 10', to: 'Aug 14', days: 5, status: 'pending', avatar: 'MP', color: 'bg-rose-500' },
  { id: 6, employee: 'Rohit Nair', type: 'Sick Leave', from: 'Jul 30', to: 'Jul 31', days: 2, status: 'rejected', avatar: 'RN', color: 'bg-teal-500' },
]

const statusConfig: Record<string, { label: string; class: string; dotColor: string }> = {
  pending: { label: 'Pending', class: 'bg-amber-50 text-amber-600', dotColor: 'bg-amber-400' },
  approved: { label: 'Approved', class: 'bg-emerald-50 text-emerald-600', dotColor: 'bg-emerald-500' },
  rejected: { label: 'Rejected', class: 'bg-red-50 text-red-500', dotColor: 'bg-red-500' },
}

// Mini calendar helper
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

// Leave days marked on calendar (day numbers for July 2025)
const markedDays: Record<number, string> = {
  22: 'bg-pink-200 text-pink-700',
  23: 'bg-pink-200 text-pink-700',
  24: 'bg-pink-200 text-pink-700',
  25: 'bg-blue-200 text-blue-700',
  28: 'bg-amber-200 text-amber-700',
  29: 'bg-amber-200 text-amber-700',
  30: 'bg-gray-200 text-gray-500 line-through',
  31: 'bg-gray-200 text-gray-500 line-through',
}

const holidays = [
  { date: 'Jul 21', name: 'No Holidays' },
  { date: 'Aug 15', name: 'Independence Day 🇮🇳' },
  { date: 'Aug 26', name: 'Janmashtami' },
  { date: 'Oct 2', name: 'Gandhi Jayanti' },
]

export default function TimeOffPage() {
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(6) // July = 6
  const currentYear = 2025

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const myBalance = [
    { type: 'Earned Leave', remaining: 10, total: 18, color: 'bg-[#075E54]', textColor: 'text-[#075E54]' },
    { type: 'Casual Leave', remaining: 9, total: 12, color: 'bg-blue-500', textColor: 'text-blue-600' },
    { type: 'Sick Leave', remaining: 8, total: 10, color: 'bg-amber-500', textColor: 'text-amber-600' },
    { type: 'Comp Off', remaining: 0, total: 4, color: 'bg-gray-400', textColor: 'text-gray-500' },
  ]

  return (
    <div className="max-w-[1400px] space-y-5">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Time Off</h1>
          <p className="text-sm text-gray-500">Manage leave requests and view team calendar</p>
        </div>
        <button
          onClick={() => setShowRequestForm(!showRequestForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#075E54] text-white text-sm font-semibold hover:bg-[#086C61] transition-all shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Request Time Off
        </button>
      </div>

      {/* Request Form */}
      {showRequestForm && (
        <div className="bg-white rounded-xl border border-[#075E54]/20 shadow-sm p-6 ring-1 ring-[#075E54]/10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-semibold text-gray-800">New Time Off Request</h3>
            <button onClick={() => setShowRequestForm(false)} className="text-gray-400 hover:text-gray-600">
              <XCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Leave Type</label>
              <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all">
                {leaveTypes.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Start Date</label>
              <input type="date" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">End Date</label>
              <input type="date" className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Reason</label>
              <input type="text" placeholder="Brief reason..." className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <button className="px-5 py-2 rounded-lg bg-[#075E54] text-white text-sm font-semibold hover:bg-[#086C61] transition-all">
              Submit Request
            </button>
            <button onClick={() => setShowRequestForm(false)} className="px-5 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-all">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* My Balance Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {myBalance.map(b => {
          const pct = Math.round((b.remaining / b.total) * 100)
          return (
            <div key={b.type} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all hover:-translate-y-0.5 duration-200">
              <p className="text-xs text-gray-500 font-medium mb-2">{b.type}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-2xl font-bold ${b.textColor}`}>{b.remaining}</span>
                <span className="text-xs text-gray-400">/ {b.total} days</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${b.color}`} style={{ width: `${pct}%` }} />
              </div>
              <p className="text-[10px] text-gray-400 mt-1">{pct}% remaining</p>
            </div>
          )
        })}
      </div>

      {/* Calendar + Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Calendar */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Team Calendar</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentMonth(m => Math.max(0, m - 1))}
                className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-gray-700">{MONTHS[currentMonth].slice(0, 3)} {currentYear}</span>
              <button
                onClick={() => setCurrentMonth(m => Math.min(11, m + 1))}
                className="w-7 h-7 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            {/* Day headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS.map(d => (
                <div key={d} className="text-center text-[10px] font-semibold text-gray-400 py-1">{d[0]}</div>
              ))}
            </div>
            {/* Days grid */}
            <div className="grid grid-cols-7 gap-0.5">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const marked = markedDays[day]
                const isToday = day === 21 && currentMonth === 6
                return (
                  <div
                    key={day}
                    className={`
                      text-center text-xs py-1.5 rounded-lg cursor-pointer transition-all font-medium
                      ${isToday ? 'bg-[#075E54] text-white ring-2 ring-[#075E54]/30' : ''}
                      ${marked && !isToday ? marked + ' rounded-lg' : ''}
                      ${!marked && !isToday ? 'text-gray-700 hover:bg-gray-100' : ''}
                    `}
                  >
                    {day}
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-pink-200" />
                <span className="text-[10px] text-gray-500">Sick Leave</span>
                <div className="w-3 h-3 rounded-sm bg-blue-200 ml-2" />
                <span className="text-[10px] text-gray-500">Casual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-amber-200" />
                <span className="text-[10px] text-gray-500">Work from Home</span>
                <div className="w-3 h-3 rounded-sm bg-gray-200 ml-2" />
                <span className="text-[10px] text-gray-500">Rejected</span>
              </div>
            </div>
          </div>

          {/* Upcoming Holidays */}
          <div className="border-t border-gray-100 px-4 py-3">
            <p className="text-xs font-semibold text-gray-600 mb-2">Upcoming Holidays</p>
            <div className="space-y-1.5">
              {holidays.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#075E54] w-12 flex-shrink-0">{h.date}</span>
                  <span className="text-[10px] text-gray-600">{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leave Requests Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Leave Requests</h3>
            </div>
            <div className="flex items-center gap-2">
              {['All', 'Pending', 'Approved', 'Rejected'].map(f => (
                <button key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-[#075E54] hover:text-white transition-all font-medium">
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {leaveRequests.map(req => {
              const sc = statusConfig[req.status]
              return (
                <div key={req.id} className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className={`w-9 h-9 rounded-full ${req.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {req.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-800">{req.employee}</p>
                      <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">{req.type}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {req.from} {req.to !== req.from ? `→ ${req.to}` : ''} · {req.days} day{req.days > 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${sc.class}`}>{sc.label}</span>
                    {req.status === 'pending' && (
                      <div className="flex gap-1.5">
                        <button className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all" title="Approve">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button className="w-7 h-7 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all" title="Reject">
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Summary Footer */}
          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center gap-4">
            <Info className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-amber-600">3 requests</span> pending approval ·
              <span className="font-semibold text-emerald-600 ml-1">2 approved</span> this week
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
