import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { INDUSTRIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Industries We Serve - HRMS for Every Sector | HRMS Mitra',
  description: 'HRMS Mitra serves businesses across IT, manufacturing, retail, healthcare, education, and professional services with industry-specific HR solutions.',
  openGraph: {
    title: 'HRMS Solutions for Every Industry',
    description: 'Tailored HR software for your industry needs',
  },
}

export default function IndustriesPage() {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any
    return IconComponent || Icons.Building
  }

  return (
    <>
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">HRMS Solutions Built for Your Industry</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From startups to enterprises, across diverse sectors—HRMS Mitra adapts to the unique
              HR challenges and workflows of your industry.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => {
              const Icon = getIcon(industry.icon)
              return (
                <Link
                  key={industry.id}
                  href={industry.href}
                  className="group card-hover p-8"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-text-body mb-4">
                    Specialized HR solutions for {industry.name.toLowerCase()} businesses.
                  </p>
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
      
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Don&apos;t See Your Industry?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              HRMS Mitra is flexible and can be customized for any industry. Contact us to discuss
              your specific requirements.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 btn-lg">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
