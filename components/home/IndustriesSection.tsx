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
    <section className="py-24 bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6">Built for Every Industry</h2>
          <p className="text-lg text-text-body leading-relaxed">
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
                className="group card-white p-8 hover:shadow-large transition-all"
              >
                <div className="flex items-start space-x-5">
                  <div className="icon-line-art flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-text-heading mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-text-body mb-4 leading-relaxed">
                      HR solutions tailored for {industry.name.toLowerCase()} businesses.
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm">
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
          <Link href="/industries" className="btn-secondary btn-lg">
            View All Industries
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
