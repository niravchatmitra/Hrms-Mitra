import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import { Building, Phone, Calendar, Shield } from 'lucide-react'

export default function CompanyMenu() {
  const icons = {
    'About HRMS Mitra': Building,
    'Contact Us': Phone,
    'Book a Demo': Calendar,
    'Security': Shield,
  }

  return (
    <div className="absolute left-0 top-full pt-2 w-72">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-1">
          {NAVIGATION.company.map((item) => {
            const Icon = icons[item.name as keyof typeof icons] || Building
            return (
              <Link
                key={item.name}
                href={item.href}
                className="mega-menu-item"
              >
                <div className="mega-menu-icon">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-text-heading text-sm">
                    {item.name}
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
