import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { FEATURES } from '@/lib/constants'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

export const metadata: Metadata = {
  title: 'HRMS Features - Complete HR Management Solution | HRMS Mitra',
  description: 'Explore all HRMS Mitra features: Core HR, Attendance, Leave, Payroll, Recruitment, Performance, Expenses, Assets, Helpdesk, Self-Service, and Analytics.',
  openGraph: {
    title: 'Complete HRMS Features for Modern Businesses',
    description: 'All-in-one HR solution with 12+ powerful modules',
  },
}

export default function FeaturesPage() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any
    return IconComponent || Icons.Circle
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Features', href: '/features' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Everything Your HR Team Needs in One Platform</h1>
            <p className="text-xl text-text-body leading-relaxed">
              From employee records to payroll processing, HRMS Mitra covers every aspect of HR
              management with powerful, easy-to-use modules designed for Indian businesses.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => {
              const Icon = getIcon(feature.icon)
              return (
                <Link
                  key={feature.id}
                  href={feature.href}
                  className="group card-hover p-8"
                >
                  <div className="w-16 h-16 bg-primary-extra-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-light transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.name}
                  </h2>
                  <p className="text-text-body mb-4">{feature.shortDescription}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="section bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to See HRMS Mitra in Action?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a personalized demo to see how HRMS Mitra can streamline your HR operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn bg-white text-primary hover:bg-primary-extra-light btn-lg">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/pricing" className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
