'use client'

import { useState } from 'react'
import {
  Mail, Phone, MapPin, Calendar, Briefcase, Edit3, Download, Building2,
  User, FileText, Award, ChevronRight
} from 'lucide-react'

const tabs = ['Personal', 'Job', 'Time Off', 'Documents', 'Performance']

const timeOffBalance = [
  { type: 'Earned Leave', total: 18, used: 8, remaining: 10, color: 'bg-[#075E54]' },
  { type: 'Casual Leave', total: 12, used: 3, remaining: 9, color: 'bg-blue-500' },
  { type: 'Sick Leave', total: 10, used: 2, remaining: 8, color: 'bg-amber-500' },
  { type: 'Compensatory', total: 4, used: 4, remaining: 0, color: 'bg-pink-500' },
]

const documents = [
  { name: 'Offer Letter.pdf', type: 'PDF', date: 'Jan 15, 2021', size: '245 KB' },
  { name: 'Employment Agreement.pdf', type: 'PDF', date: 'Jan 15, 2021', size: '512 KB' },
  { name: 'PAN Card.jpg', type: 'Image', date: 'Jan 20, 2021', size: '128 KB' },
  { name: 'Aadhaar Card.pdf', type: 'PDF', date: 'Jan 20, 2021', size: '198 KB' },
  { name: 'Q3 2024 Appraisal.pdf', type: 'PDF', date: 'Oct 10, 2024', size: '320 KB' },
]

const orgChain = [
  { name: 'Vikram Sood', role: 'CEO', avatar: 'VS', color: 'bg-gray-700' },
  { name: 'Ritu Agarwal', role: 'VP Engineering', avatar: 'RA', color: 'bg-violet-600' },
  { name: 'Arjun Rathore', role: 'Engineering Manager', avatar: 'AR', color: 'bg-[#075E54]', isSelf: true },
]

export default function MyInfoPage() {
  const [activeTab, setActiveTab] = useState('Personal')

  return (
    <div className="max-w-[1200px] space-y-5">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Cover Banner */}
        <div className="h-28 bg-gradient-to-r from-[#075E54] to-[#168A78] relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          />
        </div>

        <div className="px-6 pb-5">
          <div className="flex items-end justify-between -mt-10 flex-wrap gap-4">
            {/* Avatar */}
            <div className="flex items-end gap-4">
              <div className="w-20 h-20 rounded-2xl bg-[#E8753A] flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
                AR
              </div>
              <div className="mb-1">
                <h2 className="text-xl font-bold text-gray-900">Arjun Rathore</h2>
                <p className="text-sm text-gray-500">Engineering Manager · Mumbai, India</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-medium">Active</span>
                  <span className="text-[10px] text-gray-400">EMP-0042 · Joined Jan 2021</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mb-1">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-all">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#075E54] text-white text-sm font-medium hover:bg-[#086C61] transition-all">
                <Edit3 className="w-3.5 h-3.5" />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mt-5 border-b border-gray-100">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-[#075E54] text-[#075E54]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'Personal' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Personal Info Card */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <User className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: 'Full Name', value: 'Arjun Rathore', icon: User },
                { label: 'Date of Birth', value: 'March 15, 1990', icon: Calendar },
                { label: 'Gender', value: 'Male', icon: User },
                { label: 'Nationality', value: 'Indian', icon: MapPin },
                { label: 'Email Address', value: 'arjun@hrmsmitra.com', icon: Mail },
                { label: 'Phone Number', value: '+91 98765 43210', icon: Phone },
                { label: 'Address', value: 'Andheri West, Mumbai 400053', icon: MapPin },
                { label: 'Emergency Contact', value: 'Meena Rathore · +91 97654 32100', icon: Phone },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label}>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <p className="text-sm text-gray-800 font-medium">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reporting To / Org chain */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-4 h-4 text-[#075E54]" />
                <h3 className="text-sm font-semibold text-gray-800">Reporting Structure</h3>
              </div>
              <div className="space-y-2">
                {orgChain.map((person, i) => (
                  <div key={i}>
                    <div className={`flex items-center gap-3 p-2.5 rounded-lg ${person.isSelf ? 'bg-[#EFF8F5] ring-1 ring-[#075E54]/20' : 'hover:bg-gray-50'} transition-colors`}>
                      <div className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {person.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-semibold ${person.isSelf ? 'text-[#075E54]' : 'text-gray-800'} truncate`}>{person.name}</p>
                        <p className="text-[10px] text-gray-500 truncate">{person.role}</p>
                      </div>
                      {person.isSelf && <span className="text-[9px] font-bold text-[#075E54] bg-[#075E54]/10 px-1.5 py-0.5 rounded-full">You</span>}
                    </div>
                    {i < orgChain.length - 1 && (
                      <div className="flex items-center gap-2 pl-6 py-0.5">
                        <div className="w-px h-4 bg-gray-200 ml-1" />
                        <ChevronRight className="w-2.5 h-2.5 text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-[#075E54]" />
                <h3 className="text-sm font-semibold text-gray-800">Work Details</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Department', value: 'Engineering' },
                  { label: 'Job Title', value: 'Engineering Manager' },
                  { label: 'Employment Type', value: 'Full-Time' },
                  { label: 'Work Location', value: 'Mumbai HQ' },
                  { label: 'Manager', value: 'Ritu Agarwal' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{item.label}</span>
                    <span className="text-xs font-semibold text-gray-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Time Off' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Leave Balances */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Leave Balances — 2025</h3>
            </div>
            <div className="space-y-5">
              {timeOffBalance.map(leave => {
                const pct = Math.round((leave.used / leave.total) * 100)
                return (
                  <div key={leave.type}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{leave.type}</span>
                      <span className="text-xs text-gray-500">{leave.remaining} remaining / {leave.total}</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${leave.color}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-gray-400">Used: {leave.used}</span>
                      <span className="text-[10px] text-gray-400">{100 - pct}% available</span>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="mt-5 w-full py-2.5 rounded-lg bg-[#075E54] text-white text-sm font-semibold hover:bg-[#086C61] transition-all">
              Request Time Off
            </button>
          </div>

          {/* Leave History */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-sm font-semibold text-gray-800 mb-5">Recent Leave History</h3>
            <div className="space-y-3">
              {[
                { type: 'Earned Leave', dates: 'Jun 10–12, 2025', days: 3, status: 'Approved' },
                { type: 'Sick Leave', dates: 'May 5, 2025', days: 1, status: 'Approved' },
                { type: 'Casual Leave', dates: 'Apr 18–19, 2025', days: 2, status: 'Approved' },
                { type: 'Work From Home', dates: 'Mar 22, 2025', days: 1, status: 'Approved' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-800">{item.type}</p>
                    <p className="text-[10px] text-gray-500">{item.dates} · {item.days} day{item.days > 1 ? 's' : ''}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Documents' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Documents</h3>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#075E54] text-white text-xs font-medium hover:bg-[#086C61] transition-all">
              Upload Document
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Date Added</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Size</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {documents.map((doc, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-medium">{doc.type}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">{doc.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">{doc.size}</td>
                  <td className="px-4 py-3">
                    <button className="flex items-center gap-1 text-xs text-[#075E54] hover:underline font-medium">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Job' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Briefcase className="w-4 h-4 text-[#075E54]" />
              <h3 className="text-sm font-semibold text-gray-800">Job Information</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Job Title', value: 'Engineering Manager' },
                { label: 'Department', value: 'Engineering' },
                { label: 'Division', value: 'Product & Technology' },
                { label: 'Employment Type', value: 'Full-Time, Permanent' },
                { label: 'Pay Grade', value: 'L6 — Senior Management' },
                { label: 'Work Location', value: 'Mumbai HQ (Hybrid)' },
                { label: 'Date of Joining', value: 'January 15, 2021' },
                { label: 'Probation End', value: 'April 15, 2021' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-semibold text-gray-800">Compensation</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Annual CTC', value: '₹ 24,00,000' },
                { label: 'Basic Salary', value: '₹ 1,00,000 / month' },
                { label: 'HRA', value: '₹ 40,000 / month' },
                { label: 'Pay Schedule', value: 'Monthly (Last working day)' },
                { label: 'Bank Account', value: '****4521 — HDFC Bank' },
                { label: 'PAN Number', value: 'ABCDE1234F' },
                { label: 'PF Account', value: 'MH/BAN/12345/001' },
                { label: 'Last Increment', value: '8% — April 2025' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Performance' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-semibold text-gray-800">Performance Reviews</h3>
          </div>
          <div className="space-y-4">
            {[
              { period: 'Q3 2025', rating: 4.5, label: 'Exceptional', color: 'text-emerald-600', bg: 'bg-emerald-50', date: 'Oct 2025' },
              { period: 'Q2 2025', rating: 4.2, label: 'Exceeds Expectations', color: 'text-blue-600', bg: 'bg-blue-50', date: 'Jul 2025' },
              { period: 'Q1 2025', rating: 4.0, label: 'Meets Expectations', color: 'text-[#075E54]', bg: 'bg-[#EFF8F5]', date: 'Apr 2025' },
              { period: 'Annual 2024', rating: 4.3, label: 'Exceeds Expectations', color: 'text-blue-600', bg: 'bg-blue-50', date: 'Jan 2025' },
            ].map((review, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#075E54]/20 hover:bg-[#EFF8F5]/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#EFF8F5] flex items-center justify-center">
                  <span className="text-lg font-bold text-[#075E54]">{review.rating}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-800">{review.period} Review</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${review.color} ${review.bg}`}>{review.label}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className={`text-sm ${star <= Math.round(review.rating) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                    ))}
                    <span className="text-xs text-gray-400 ml-1">Reviewed: {review.date}</span>
                  </div>
                </div>
                <button className="text-xs text-[#075E54] font-medium hover:underline flex-shrink-0">View Report</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
