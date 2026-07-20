import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import { Building2, Briefcase, Users2 } from 'lucide-react'

export default function SolutionsMegaMenu() {
  const allSolutions = [
    ...NAVIGATION.solutions.bySize.map(item => ({ ...item, icon: Building2, category: 'By Company Size' })),
    ...NAVIGATION.solutions.byIndustry.map(item => ({ ...item, icon: Briefcase, category: 'By Industry' })),
    ...NAVIGATION.solutions.byRole.map(item => ({ ...item, icon: Users2, category: 'By Role' })),
  ]

  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-3xl">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Single column stacked list */}
        <div className="space-y-1">
          {allSolutions.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="mega-menu-item"
              >
                {/* Icon in rounded square */}
                <div className="mega-menu-icon">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {/* Heading only (no description in solutions) */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text-heading text-sm">
                    {item.name}
                  </div>
                  <div className="text-sm text-text-muted leading-relaxed">
                    {item.category}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
