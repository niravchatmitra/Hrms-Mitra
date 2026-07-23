import { Metadata } from 'next'
import Link from 'next/link'
import { Puzzle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations - Connect HRMS Mitra With Your Tools',
  description: 'Integrate HRMS Mitra with your existing business tools and systems. API access for custom integrations.',
}

export default function IntegrationsPage() {
  return (
    <>
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Puzzle className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6 text-white">Connect HRMS Mitra With Your Tools</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Integrate HRMS Mitra with your existing business systems for seamless data flow and automation.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
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
      
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Need a Custom Integration?</h2>
            <p className="text-white/90 mb-6">
              Our team can help you build custom integrations tailored to your specific business processes and systems.
            </p>
            <Link href="/contact" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20">
              Contact Integration Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
