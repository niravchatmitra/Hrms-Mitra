import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import { Building2, Briefcase, Users2 } from 'lucide-react'

export default function SolutionsMegaMenu() {
  // Group by categories - BambooHR style
  const solutionCategories = [
    {
      title: 'By Company Size',
      icon: Building2,
      items: NAVIGATION.solutions.bySize
    },
    {
      title: 'By Industry',
      icon: Briefcase,
      items: NAVIGATION.solutions.byIndustry
    },
    {
      title: 'By Role',
      icon: Users2,
      items: NAVIGATION.solutions.byRole
    }
  ]

  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl">
      <div className="bg-white rounded-2xl shadow-large border border-border-light p-8">
        {/* Three-column grouped layout */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
          {solutionCategories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title} className="mega-menu-section">
                {/* Category heading with icon */}
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <h3 className="mega-menu-heading mb-0">{category.title}</h3>
                </div>
                
                {/* Items in this category */}
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg hover:bg-background-alt transition-colors text-sm text-text-heading hover:text-primary font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
