import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FAQAccordion from '@/components/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | HRMS Mitra',
  description:
    'Find answers to common questions about HRMS Mitra — pricing, features, implementation, security, and support for Indian businesses.',
}

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />

      <FAQAccordion />

      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-background-alt rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-text-body mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Support
              </Link>
              <Link href="/book-demo" className="btn-secondary">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
