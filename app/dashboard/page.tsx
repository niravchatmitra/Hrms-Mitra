import { Users, UserCheck, CalendarX2, TrendingUp, Award } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import TimeOffWidget from '@/components/dashboard/TimeOffWidget'
import BirthdayWidget from '@/components/dashboard/BirthdayWidget'
import QuickActions from '@/components/dashboard/QuickActions'
import HeadcountWidget from '@/components/dashboard/HeadcountWidget'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | HRMS Mitra Dashboard',
}

const statsData = [
  {
    title: 'Total Employees',
    value: 120,
    change: '+3 this month',
    changeType: 'up' as const,
    icon: Users,
    iconColor: 'text-[#075E54]',
    iconBg: 'bg-[#EFF8F5]',
  },
  {
    title: 'On Leave Today',
    value: 7,
    change: 'From 120 total',
    changeType: 'neutral' as const,
    icon: CalendarX2,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    title: 'New Hires (Jul)',
    value: 3,
    change: '+1 vs last month',
    changeType: 'up' as const,
    icon: UserCheck,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    title: 'Avg. Performance',
    value: '4.2',
    suffix: '/ 5',
    change: '+0.3 vs last quarter',
    changeType: 'up' as const,
    icon: Award,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    title: 'Attrition Rate',
    value: '2.1',
    suffix: '%',
    change: '-0.4% vs last month',
    changeType: 'up' as const,
    icon: TrendingUp,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50',
  },
]

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#075E54] to-[#168A78] rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative z-10">
          <p className="text-white/70 text-sm mb-1">{today}</p>
          <h2 className="text-2xl font-bold">Good Morning, Arjun! 👋</h2>
          <p className="text-white/80 text-sm mt-1">
            You have <span className="text-white font-semibold">8 pending approvals</span> and <span className="text-white font-semibold">3 employees on leave</span> today.
          </p>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="white">
            <circle cx="60" cy="30" r="20" />
            <ellipse cx="60" cy="85" rx="40" ry="20" />
            <circle cx="20" cy="40" r="12" opacity="0.6" />
            <ellipse cx="20" cy="72" rx="20" ry="12" opacity="0.6" />
            <circle cx="100" cy="40" r="12" opacity="0.6" />
            <ellipse cx="100" cy="72" rx="20" ry="12" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {statsData.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column — 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          <TimeOffWidget />
          <HeadcountWidget />
        </div>

        {/* Right Column — 1/3 width */}
        <div className="space-y-6">
          <QuickActions />
          <BirthdayWidget />
        </div>
      </div>
    </div>
  )
}
