import { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch With HRMS Mitra',
  description: 'Contact HRMS Mitra for sales inquiries, product support, or general questions. We\'re here to help you transform your HR operations.',
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-text-body leading-relaxed">
              Have questions about HRMS Mitra? Our team is here to help. Reach out and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-heading mb-1">Email</div>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="text-text-body hover:text-primary transition-colors">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-heading mb-1">Phone</div>
                      <a href={`tel:${SITE_CONFIG.phone}`} className="text-text-body hover:text-primary transition-colors">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-heading mb-1">Location</div>
                      <p className="text-text-body">{SITE_CONFIG.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-heading mb-1">Business Hours</div>
                      <p className="text-text-body">Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="font-semibold text-text-heading mb-3">Looking for Support?</h3>
                <p className="text-text-body text-sm mb-4">
                  Existing customers can reach out to our support team for technical assistance.
                </p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary font-medium hover:underline text-sm">
                  Contact Support →
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
