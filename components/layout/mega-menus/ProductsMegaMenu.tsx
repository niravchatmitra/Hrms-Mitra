import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import * as Icons from 'lucide-react'

export default function ProductsMegaMenu() {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any
    return Icon ? <Icon className="w-5 h-5 text-primary" /> : null
  }

  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Single column stacked list */}
        <div className="space-y-1">
          {NAVIGATION.products.flatMap((category) =>
            category.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mega-menu-item"
              >
                {/* Icon in rounded square */}
                <div className="mega-menu-icon">
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
                </div>
                {/* Heading and description */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text-heading text-sm">
                    {item.name}
                  </div>
                  <div className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
