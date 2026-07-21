import { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import DemoForm from '@/components/forms/DemoForm'
import { CheckCircle, Calendar, Video, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Demo - See HRMS Mitra in Action',
  description: 'Schedule a personalized demo of HRMS Mitra. See how our HR software can transform your workforce management in just 30 minutes.',
}

export default function BookDemoPage() {
  const benefits = [
    'See HRMS Mitra in action with real workflows',
    'Discuss your specific HR requirements',
    'Understand implementation process and timeline',
    'Get answers to all your questions',
    'Receive personalized pricing based on your needs',
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Book a Demo', href: '/book-demo' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Book Your Free Demo</h1>
            <p className="text-xl text-text-body leading-relaxed">
              See how HRMS Mitra can simplify your HR operations. Schedule a personalized demo with our team.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Demo Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-text-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <Video className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-text-heading">Virtual Demo</h3>
                </div>
                <p className="text-text-body text-sm">
                  Join from anywhere via video call. No travel required.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-text-heading">30-45 Minutes</h3>
                </div>
                <p className="text-text-body text-sm">
                  Typical demo duration. We adapt to your schedule.
                </p>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-text-heading">No Obligation</h3>
                </div>
                <p className="text-text-body text-sm">
                  Free demo with no commitment. See if we&apos;re the right fit.
                </p>
              </div>
            </div>
            
            {/* Demo Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
                <h2 className="text-2xl font-semibold mb-6">Schedule Your Demo</h2>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
