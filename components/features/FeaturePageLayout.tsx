import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Benefit {
  title: string
  description: string
  icon?: React.ReactNode
}

interface Feature {
  title: string
  description: string
}

interface UseCaseType {
  title: string
  description: string
}

interface FAQType {
  question: string
  answer: string
}

interface FeaturePageLayoutProps {
  breadcrumbs: Array<{ label: string; href: string }>
  badge: string
  title: string
  description: string
  benefits: Benefit[]
  features: Feature[]
  useCases: UseCaseType[]
  advantages: string[]
  relatedModules: Array<{ name: string; href: string }>
  faqs: FAQType[]
  ctaTitle: string
  ctaDescription: string
  visualComponent?: React.ReactNode
}

export default function FeaturePageLayout({
  breadcrumbs,
  badge,
  title,
  description,
  benefits,
  features,
  useCases,
  advantages,
  relatedModules,
  faqs,
  ctaTitle,
  ctaDescription,
  visualComponent,
}: FeaturePageLayoutProps) {
  return (
    <>
      {/* Hero Section - BambooHR clean style */}
      <section className="section bg-gradient-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 shadow-soft border border-border-light">
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
            
            {/* Serif headline */}
            <h1 className="font-serif text-5xl md:text-6xl text-text-heading mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
              {description}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn-primary btn-lg group">
                Get a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing" className="btn-secondary btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Benefits - Cream cards with line icons */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Key benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-cream p-8">
                {benefit.icon && (
                  <div className="mb-5">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-text-heading mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Visual */}
      {visualComponent && (
        <section className="section-alt">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">{visualComponent}</div>
          </div>
        </section>
      )}
      
      {/* Detailed Features - Clean list */}
      <section className={!visualComponent ? 'section-alt' : 'section'}>
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Everything included
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-text-heading mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-body text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases - Cream cards */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center font-serif text-4xl md:text-5xl text-text-heading mb-16">
            Common use cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="card-cream p-8">
                <h3 className="text-lg font-semibold text-text-heading mb-3">
                  {useCase.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Modules - Simple pills */}
      {relatedModules.length > 0 && (
        <section className="section-alt">
          <div className="container-custom">
            <h2 className="text-center font-serif text-3xl md:text-4xl text-text-heading mb-8">
              Related modules
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedModules.map((module, index) => (
                <Link
                  key={index}
                  href={module.href}
                  className="px-5 py-2.5 bg-white border border-border-light text-primary rounded-full font-medium hover:bg-primary-extra-light hover:border-primary transition-all text-sm"
                >
                  {module.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* FAQs - Cream cards */}
      <section className="section">
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
              {ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn bg-white text-primary hover:bg-background-alt btn-lg shadow-soft">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
