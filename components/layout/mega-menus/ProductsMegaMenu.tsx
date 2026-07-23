import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import * as Icons from 'lucide-react'

export default function ProductsMegaMenu() {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any
    return Icon ? <Icon className="mega-menu-icon" strokeWidth={1.5} /> : null
  }

  // Group products into categories for BambooHR-style layout
  const productCategories = [
    {
      title: 'Core Modules',
      items: NAVIGATION.products.flatMap(cat => cat.items).slice(0, 6)
    },
    {
      title: 'Additional Modules',
      items: NAVIGATION.products.flatMap(cat => cat.items).slice(6)
    }
  ]

  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-5xl">
      <div className="bg-white rounded-2xl shadow-large border border-border-light p-8">
        {/* Two-column grouped layout - BambooHR style */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {productCategories.map((category) => (
            <div key={category.title} className="mega-menu-section">
              {/* Category heading */}
              <h3 className="mega-menu-heading">{category.title}</h3>
              
              {/* Items in this category */}
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="mega-menu-item group"
                  >
                    {/* Line-art icon */}
                    {getIcon(item.name === 'Core HR' ? 'Users' : 
                            item.name === 'Attendance Management' ? 'Clock' :
                            item.name === 'Leave Management' ? 'Calendar' :
                            item.name === 'Payroll Management' ? 'Banknote' :
                            item.name === 'Recruitment' ? 'UserPlus' :
                            item.name === 'Onboarding' ? 'Rocket' :
                            item.name === 'Performance Management' ? 'Target' :
                            item.name === 'Expenses' ? 'Receipt' :
                            item.name === 'Asset Management' ? 'Laptop' :
                            item.name === 'Employee Helpdesk' ? 'Headphones' :
                            item.name === 'Employee Self-Service' ? 'User' :
                            'FileText')}
                    
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-text-heading text-sm group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      {item.description && (
                        <div className="text-xs text-text-muted leading-relaxed mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
