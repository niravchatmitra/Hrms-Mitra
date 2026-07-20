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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Everything Your HR Team Needs in One Place</h2>
          <p className="text-lg text-text-body">
            From hiring to retirement, HRMS Mitra covers every stage of the employee lifecycle
            with powerful, easy-to-use modules.
          </p>
        </div>
        
        {/* Featured Grid - First 3 items larger */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {FEATURES.slice(0, 3).map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="card-hover p-8 group"
              >
                <div className="w-16 h-16 bg-primary-extra-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.name}
                </h3>
                <p className="text-text-body mb-4">{feature.shortDescription}</p>
                <div className="flex items-center text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
        
        {/* Regular Grid - Remaining items */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURES.slice(3).map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className="card-hover group"
              >
                <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-light transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.name}
                </h4>
                <p className="text-sm text-text-body mb-3">{feature.shortDescription}</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
