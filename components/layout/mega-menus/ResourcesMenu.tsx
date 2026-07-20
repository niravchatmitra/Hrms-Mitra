import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'

export default function ResourcesMenu() {
  return (
    <div className="absolute left-0 top-full pt-2 w-64">
      <div className="bg-white rounded-lg shadow-xl border border-border p-4 text-text-body">
        <ul className="space-y-1">
          {NAVIGATION.resources.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 rounded-lg hover:bg-background-alt hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
