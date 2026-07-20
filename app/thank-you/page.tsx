import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You - HRMS Mitra',
  description: 'Thank you for contacting HRMS Mitra. We will get back to you soon.',
}

export default function ThankYouPage() {
  return (
    <section className="section min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>
          
          <h1 className="mb-6">Thank You!</h1>
          
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            We've received your request and our team will get back to you within 24 hours.
            Check your email for a confirmation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Link href="/features" className="btn-secondary">
              Explore Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-3">What Happens Next?</h2>
            <ul className="text-left space-y-3 text-text-body">
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">1.</span>
                <span>Our team reviews your requirements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">2.</span>
                <span>We'll contact you to schedule a convenient time</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">3.</span>
                <span>Get a personalized demo tailored to your needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
