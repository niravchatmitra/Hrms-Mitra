import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'
import * as Icons from 'lucide-react'

export default function ProductsMegaMenu() {
  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-5xl -ml-32">
      <div className="bg-white rounded-lg shadow-xl border border-border p-8 text-text-body">
        <div className="grid grid-cols-3 gap-8">
          {NAVIGATION.products.map((category) => (
            <div key={category.category}>
              <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wide mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block p-2 rounded-lg hover:bg-background-alt transition-colors group"
                    >
                      <div className="font-medium text-text-heading group-hover:text-primary">
                        {item.name}
                      </div>
                      <div className="text-sm text-text-muted">
                        {item.description}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
