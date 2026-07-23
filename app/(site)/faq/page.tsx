import { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/faq/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | HRMS Mitra',
  description:
    'Find answers to common questions about HRMS Mitra — pricing, features, implementation, security, and support for Indian businesses.',
}

export default function FAQPage() {
  return (
    <>
      <FAQAccordion />

      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Still Have Questions?</h2>
            <p className="text-white/90 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-white/90">
                Contact Support
              </Link>
              <Link href="/book-demo" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
