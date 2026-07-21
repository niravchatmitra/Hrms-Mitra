import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'up' | 'down' | 'neutral'
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  suffix?: string
  description?: string
}

export default function StatsCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-[#075E54]',
  iconBg = 'bg-[#EFF8F5]',
  suffix,
  description,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {suffix && <span className="text-sm text-gray-500 font-medium">{suffix}</span>}
          </div>
          {change && (
            <div className="flex items-center gap-1 mt-2">
              {changeType === 'up' && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
              {changeType === 'down' && <TrendingDown className="w-3.5 h-3.5 text-red-500" />}
              {changeType === 'neutral' && <Minus className="w-3.5 h-3.5 text-gray-400" />}
              <span
                className={`text-xs font-medium ${
                  changeType === 'up' ? 'text-emerald-600' : changeType === 'down' ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                {change}
              </span>
            </div>
          )}
          {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
        </div>
        <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 ml-3`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
    </div>
  )
}
