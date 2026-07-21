import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

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
  icon: React.ReactNode
  title: string
  description: string
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
  challenges,
  solutions,
  modules,
  benefits,
  faqs,
}: IndustryPageLayoutProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-light rounded-2xl mb-6">
              {icon}
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
            <h1 className="mb-6">{title}</h1>
            <p className="text-xl text-text-body leading-relaxed">{description}</p>
          </div>
        </div>
      </section>
      
      {/* HR Challenges */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Common HR Challenges</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-background-alt rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-error">{challenge.title}</h3>
                <p className="text-text-body">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How HRMS Mitra Helps */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">How HRMS Mitra Helps</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-background-alt rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-text-body text-lg">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Relevant Modules */}
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Relevant HRMS Modules</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Link
                key={index}
                href={module.href}
                className="bg-background-alt rounded-xl p-6 group block"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {module.name}
                </h3>
                <p className="text-text-body mb-4">{module.description}</p>
                <div className="flex items-center text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Key Benefits for Your Industry</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-background-alt p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-body text-lg">{benefit}</p>
              </div>
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
            <h2 className="text-white mb-6">Ready to Transform Your HR Operations?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              See how HRMS Mitra can address your industry-specific HR challenges with tailored solutions.
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
