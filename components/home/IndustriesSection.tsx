import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { INDUSTRIES } from '@/lib/constants'

export default function IndustriesSection() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any
    return IconComponent || Icons.Building
  }

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Built for Every Industry</h2>
          <p className="text-lg text-text-body">
            From startups to enterprises, HRMS Mitra adapts to the unique HR needs of different
            industries across India.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = getIcon(industry.icon)
            return (
              <Link
                key={industry.id}
                href={industry.href}
                className="group card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary-extra-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-text-body mb-3">
                      HR solutions tailored for {industry.name.toLowerCase()} businesses.
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/industries" className="btn-secondary">
            View All Industries
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
