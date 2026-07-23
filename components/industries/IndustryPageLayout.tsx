import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Image from 'next/image'

interface Challenge {
  title: string
  description: string
}

interface Solution {
  title: string
  description: string
}

interface RelevantModule {
  name: string
  description: string
  href: string
}

interface IndustryPageLayoutProps {
  breadcrumbs: Array<{ label: string; href: string }>
  badge: string
  icon?: React.ReactNode
  title: string
  description: string
  heroImage?: string
  heroImageAlt?: string
  challenges: Challenge[]
  solutions: Solution[]
  modules: RelevantModule[]
  benefits: string[]
  faqs: Array<{ question: string; answer: string }>
}

export default function IndustryPageLayout({
  breadcrumbs,
  badge,
  icon,
  title,
  description,
  heroImage,
  heroImageAlt,
  challenges,
  solutions,
  modules,
  benefits,
  faqs,
}: IndustryPageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Hero Section - Two-column SaaS style */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background-alt to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">{badge}</span>
              </div>
              
              {/* H1 Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-heading mb-6 leading-tight">
                {title}
              </h1>
              
              {/* Description */}
              <p className="text-xl text-text-body leading-relaxed mb-8">
                {description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/book-demo" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-full shadow-soft hover:shadow-medium transition-all duration-200 group"
                >
                  Get a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/features" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-primary-extra-light rounded-full border-2 border-primary-light hover:border-primary transition-all duration-200 group"
                >
                  Explore Features
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="order-1 lg:order-2">
              {heroImage ? (
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-large">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt || title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              ) : icon ? (
                <div className="flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-primary-extra-light to-white rounded-3xl shadow-large">
                  <div className="w-32 h-32 text-primary">
                    {icon}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      
      {/* HR Challenges - Cream cards */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Common HR challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="card-cream p-8">
                <h3 className="text-xl font-semibold text-text-heading mb-3">
                  {challenge.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How HRMS Mitra Helps - White cards with checkmarks */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            How HRMS Mitra helps
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="card-white p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-semibold text-text-heading mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-text-body text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Relevant Modules - Cream cards with hover */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Relevant modules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="card-cream-hover group p-8"
              >
                <h3 className="text-xl font-semibold text-text-heading mb-3 group-hover:text-primary transition-colors">
                  {module.name}
                </h3>
                <p className="text-text-body mb-4 leading-relaxed">
                  {module.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs - Cream cards */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-cream p-8">
                <h3 className="font-semibold text-text-heading text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Clean green */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Ready to transform your HR operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              See how HRMS Mitra can address your industry-specific HR challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn bg-white text-primary hover:bg-background-alt btn-lg shadow-soft">
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
