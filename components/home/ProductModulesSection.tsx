import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { FEATURES } from '@/lib/constants'

export default function ProductModulesSection() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any
    return IconComponent || Icons.Circle
  }

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="mb-6">Everything Your HR Team Needs in One Place</h2>
          <p className="text-lg text-text-body">
            From hiring to retirement, HRMS Mitra covers every stage of the employee lifecycle
            with powerful, easy-to-use modules.
          </p>
        </div>
        
        {/* Featured Grid - First 3 items larger with flat green cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {FEATURES.slice(0, 3).map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="card-flat p-8 group hover:scale-105 transition-transform"
              >
                {/* Outlined icon - no filled background */}
                <Icon className="w-12 h-12 text-primary stroke-[1.5] mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.name}
                </h3>
                <p className="text-text-body leading-relaxed">{feature.shortDescription}</p>
              </Link>
            )
          })}
        </div>
        
        {/* Regular Grid - Remaining items with flat green cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURES.slice(3).map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="card-flat group hover:scale-105 transition-transform"
              >
                {/* Outlined icon - no filled background */}
                <Icon className="w-10 h-10 text-primary stroke-[1.5] mb-3" />
                <h4 className="text-lg font-bold text-primary mb-2">
                  {feature.name}
                </h4>
                <p className="text-sm text-text-body leading-relaxed">{feature.shortDescription}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
