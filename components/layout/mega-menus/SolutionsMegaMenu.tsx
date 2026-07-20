import Link from 'next/link'
import { NAVIGATION } from '@/lib/constants'

export default function SolutionsMegaMenu() {
  return (
    <div className="absolute left-0 top-full pt-2 w-screen max-w-3xl -ml-32">
      <div className="bg-white rounded-lg shadow-xl border border-border p-8 text-text-body">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wide mb-4">
              By Company Size
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.solutions.bySize.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-lg hover:bg-background-alt hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wide mb-4">
              By Industry
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.solutions.byIndustry.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-lg hover:bg-background-alt hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wide mb-4">
              By Role
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.solutions.byRole.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-lg hover:bg-background-alt hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
