import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { Puzzle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations - Connect HRMS Mitra With Your Tools',
  description: 'Integrate HRMS Mitra with your existing business tools and systems. API access for custom integrations.',
}

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Integrations', href: '/integrations' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-light rounded-full mb-6">
              <Puzzle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="mb-6">Connect HRMS Mitra With Your Tools</h1>
            <p className="text-xl text-text-body leading-relaxed">
              Integrate HRMS Mitra with your existing business systems for seamless data flow and automation.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">API Access</h2>
              <p className="text-text-body mb-6 leading-relaxed">
                HRMS Mitra provides REST API access for custom integrations with your payroll systems,
                accounting software, project management tools, and other business applications.
              </p>
              <p className="text-text-body mb-6">
                Popular integration use cases include:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 text-text-body mb-8">
                <li>• Sync attendance data with biometric devices</li>
                <li>• Export payroll data to accounting software</li>
                <li>• Connect with project management tools for resource allocation</li>
                <li>• Integrate with communication platforms for notifications</li>
                <li>• Custom reporting and data analytics</li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Discuss Integration Needs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center card p-8">
            <h2 className="text-2xl font-semibold mb-4">Need a Custom Integration?</h2>
            <p className="text-text-body mb-6">
              Our team can help you build custom integrations tailored to your specific business processes and systems.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Integration Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
