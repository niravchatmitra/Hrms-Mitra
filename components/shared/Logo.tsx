import { Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showTagline?: boolean
}

export default function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
        <Building2 className="w-6 h-6" />
      </div>
      <div>
        <div className="text-xl font-bold leading-tight">HRMS Mitra</div>
        {showTagline && (
          <div className="text-xs opacity-90 leading-tight">Simple HR. Smarter Workplaces.</div>
        )}
      </div>
    </div>
  )
}
