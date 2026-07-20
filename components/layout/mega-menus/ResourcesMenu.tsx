import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import { BookOpen, Book, FileText, HelpCircle, Headphones } from 'lucide-react'

export default function ResourcesMenu() {
  const icons = {
    'Blog': BookOpen,
    'HR Glossary': Book,
    'HR Guides': FileText,
    'Payroll Resources': FileText,
    'HR Templates': FileText,
    'FAQs': HelpCircle,
    'Help Centre': Headphones,
  }

  return (
    <div className="absolute left-0 top-full pt-2 w-80">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-1">
          {NAVIGATION.resources.map((item) => {
            const Icon = icons[item.name as keyof typeof icons] || FileText
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
