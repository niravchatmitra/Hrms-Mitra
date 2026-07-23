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
      <div className="bg-white rounded-2xl shadow-large border border-border-light p-6">
        <div className="space-y-1">
          {NAVIGATION.company.map((item) => {
            const Icon = icons[item.name as keyof typeof icons] || Building
            return (
              <Link
                key={item.name}
                href={item.href}
                className="mega-menu-item group"
              >
                <Icon className="mega-menu-icon" strokeWidth={1.5} />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-heading text-sm group-hover:text-primary transition-colors">
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
