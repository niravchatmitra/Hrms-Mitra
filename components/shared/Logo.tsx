import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: 'light' | 'dark'
}

export default function Logo({ className, showTagline = false, variant = 'light' }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className={cn(
        'flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0',
        variant === 'light' ? 'bg-primary text-white' : 'bg-white/10 text-white'
      )}>
        <Building2 className="w-5 h-5" />
      </div>
      <div className="whitespace-nowrap">
        <div className={cn(
          'text-[19px] font-bold leading-none',
          variant === 'light' ? 'text-[#17332D]' : 'text-white'
        )}>
          HRMS Mitra
        </div>
        {showTagline && (
          <div className={cn(
            'text-[10px] leading-tight mt-0.5',
            variant === 'light' ? 'text-text-muted' : 'text-white/90'
          )}>
            Simple HR. Smarter Workplaces.
          </div>
        )}
      </div>
    </div>
  )
}
