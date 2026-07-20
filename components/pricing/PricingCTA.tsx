import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function PricingCTA() {
  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary to-primary-medium rounded-3xl p-12 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            
            <h2 className="text-white mb-6">
              Still Have Questions About Pricing?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team is here to help you find the perfect plan for your business. Book a demo to
              see HRMS Mitra in action and get a personalized quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-primary-extra-light transition-colors shadow-lg"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
