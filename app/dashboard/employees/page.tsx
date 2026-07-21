'use client'

import { useState } from 'react'
import { Search, Filter, LayoutGrid, List, Mail, Phone, ChevronDown, UserPlus, Download } from 'lucide-react'
import type { Metadata } from 'next'

const employees = [
  { id: 1, name: 'Arjun Rathore', role: 'Engineering Manager', dept: 'Engineering', email: 'arjun@hrmsmitra.com', phone: '+91 98765 43210', location: 'Mumbai', status: 'active', joinDate: 'Jan 2021', avatar: 'AR', avatarColor: 'bg-[#075E54]' },
  { id: 2, name: 'Priya Sharma', role: 'Senior Developer', dept: 'Engineering', email: 'priya@hrmsmitra.com', phone: '+91 98123 45678', location: 'Bengaluru', status: 'active', joinDate: 'Mar 2022', avatar: 'PS', avatarColor: 'bg-pink-500' },
  { id: 3, name: 'Karan Mehta', role: 'Sales Manager', dept: 'Sales', email: 'karan@hrmsmitra.com', phone: '+91 97654 32109', location: 'Delhi', status: 'active', joinDate: 'Jun 2020', avatar: 'KM', avatarColor: 'bg-blue-500' },
  { id: 4, name: 'Ananya Singh', role: 'UX Designer', dept: 'Engineering', email: 'ananya@hrmsmitra.com', phone: '+91 96543 21098', location: 'Pune', status: 'on-leave', joinDate: 'Sep 2022', avatar: 'AS', avatarColor: 'bg-violet-500' },
  { id: 5, name: 'Dev Patel', role: 'Finance Analyst', dept: 'Finance', email: 'dev@hrmsmitra.com', phone: '+91 95432 10987', location: 'Ahmedabad', status: 'active', joinDate: 'Feb 2023', avatar: 'DP', avatarColor: 'bg-amber-500' },
  { id: 6, name: 'Meera Pillai', role: 'HR Business Partner', dept: 'HR & Admin', email: 'meera@hrmsmitra.com', phone: '+91 94321 09876', location: 'Chennai', status: 'active', joinDate: 'Apr 2021', avatar: 'MP', avatarColor: 'bg-pink-400' },
  { id: 7, name: 'Rohit Nair', role: 'Marketing Lead', dept: 'Marketing', email: 'rohit@hrmsmitra.com', phone: '+91 93210 98765', location: 'Kochi', status: 'active', joinDate: 'Jul 2019', avatar: 'RN', avatarColor: 'bg-teal-500' },
  { id: 8, name: 'Sanjay Gupta', role: 'Backend Engineer', dept: 'Engineering', email: 'sanjay@hrmsmitra.com', phone: '+91 92109 87654', location: 'Hyderabad', status: 'active', joinDate: 'Nov 2022', avatar: 'SG', avatarColor: 'bg-blue-600' },
  { id: 9, name: 'Fatima Khan', role: 'Product Manager', dept: 'Engineering', email: 'fatima@hrmsmitra.com', phone: '+91 91098 76543', location: 'Mumbai', status: 'active', joinDate: 'Jan 2020', avatar: 'FK', avatarColor: 'bg-orange-500' },
  { id: 10, name: 'Vijay Krishnan', role: 'Sales Executive', dept: 'Sales', email: 'vijay@hrmsmitra.com', phone: '+91 90987 65432', location: 'Bengaluru', status: 'inactive', joinDate: 'May 2023', avatar: 'VK', avatarColor: 'bg-gray-500' },
  { id: 11, name: 'Sneha Joshi', role: 'Content Writer', dept: 'Marketing', email: 'sneha@hrmsmitra.com', phone: '+91 89876 54321', location: 'Jaipur', status: 'active', joinDate: 'Oct 2023', avatar: 'SJ', avatarColor: 'bg-rose-500' },
  { id: 12, name: 'Rahul Verma', role: 'DevOps Engineer', dept: 'Engineering', email: 'rahul@hrmsmitra.com', phone: '+91 88765 43210', location: 'Noida', status: 'active', joinDate: 'Jul 2024', avatar: 'RV', avatarColor: 'bg-cyan-600' },
]

const depts = ['All', 'Engineering', 'Sales', 'HR & Admin', 'Finance', 'Marketing', 'Operations']
const statusLabels: Record<string, { label: string; class: string }> = {
  active: { label: 'Active', class: 'bg-emerald-50 text-emerald-600' },
  'on-leave': { label: 'On Leave', class: 'bg-amber-50 text-amber-600' },
  inactive: { label: 'Inactive', class: 'bg-gray-100 text-gray-500' },
}

export default function EmployeesPage() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('All')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filtered = employees.filter(e => {
    const matchDept = dept === 'All' || e.dept === dept
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase()) ||
      e.dept.toLowerCase().includes(search.toLowerCase())
    return matchDept && matchSearch
  })

  return (
    <div className="space-y-5 max-w-[1400px]">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-900">People</h1>
          <p className="text-sm text-gray-500">{employees.length} employees across {depts.length - 1} departments</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#075E54] text-white text-sm font-semibold hover:bg-[#086C61] transition-all shadow-sm">
            <UserPlus className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, role, department..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#075E54]/20 focus:border-[#075E54] transition-all"
          />
        </div>

        {/* Department Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {depts.map(d => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                dept === d
                  ? 'bg-[#075E54] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-gray-100 rounded-lg p-0.5 ml-auto">
          <button
            onClick={() => setView('grid')}
            className={`p-1.5 rounded-md transition-all ${view === 'grid' ? 'bg-white shadow-sm text-[#075E54]' : 'text-gray-500'}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-[#075E54]' : 'text-gray-500'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-xs text-gray-500">Showing {filtered.length} of {employees.length} employees</p>

      {/* Grid View */}
      {view === 'grid' && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(emp => {
            const status = statusLabels[emp.status]
            return (
              <div
                key={emp.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full ${emp.avatarColor} flex items-center justify-center text-white text-lg font-bold mb-3 shadow-md`}>
                    {emp.avatar}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{emp.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{emp.role}</p>
                  <span className={`mt-2 px-2 py-0.5 rounded-full text-[10px] font-medium ${status.class}`}>{status.label}</span>
                  <p className="text-[10px] text-gray-400 mt-1">{emp.dept} · {emp.location}</p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 border-t border-gray-100 pt-3">
                  <a href={`mailto:${emp.email}`} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#EFF8F5] hover:text-[#075E54] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a href={`tel:${emp.phone}`} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#EFF8F5] hover:text-[#075E54] transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a href={`/dashboard/my-info`} className="flex-1 text-center text-[10px] font-semibold text-[#075E54] hover:underline">
                    View Profile
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Employee</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Department</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Location</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Joined</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(emp => {
                const status = statusLabels[emp.status]
                return (
                  <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${emp.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {emp.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{emp.name}</p>
                          <p className="text-xs text-gray-500">{emp.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{emp.dept}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">{emp.location}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 hidden lg:table-cell">{emp.joinDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${status.class}`}>{status.label}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <a href="/dashboard/my-info" className="text-xs font-medium text-[#075E54] hover:underline">View</a>
                        <span className="text-gray-300">|</span>
                        <button className="text-xs font-medium text-gray-500 hover:text-gray-800">Edit</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
