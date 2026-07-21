import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

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
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
            <h1 className="mb-6">{title}</h1>
            <p className="text-xl text-text-body leading-relaxed">{description}</p>
          </div>
        </div>
      </section>
      
      {/* Main Benefits */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background-alt rounded-xl p-6">
                {benefit.icon && <div className="mb-4">{benefit.icon}</div>}
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-text-body">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Visual */}
      {visualComponent && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">{visualComponent}</div>
          </div>
        </section>
      )}
      
      {/* Detailed Features */}
      <section className={!visualComponent ? 'section' : 'section-alt'}>
        <div className="container-custom">
          <h2 className="text-center mb-12">Complete Feature Set</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-heading mb-1">{feature.title}</h3>
                  <p className="text-text-body text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-background-alt rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-text-body text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* HRMS Mitra Advantages */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose HRMS Mitra?</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background-alt p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-body">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Modules */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-8">Related Modules</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedModules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="px-6 py-3 bg-white border-2 border-primary-light text-primary rounded-lg font-medium hover:bg-primary-extra-light transition-colors"
              >
                {module.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background-alt rounded-xl p-6">
                <h3 className="font-semibold text-text-heading mb-3">{faq.question}</h3>
                <p className="text-text-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-medium text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">{ctaTitle}</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{ctaDescription}</p>
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
