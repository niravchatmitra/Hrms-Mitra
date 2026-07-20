import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="section bg-gradient-to-br from-primary to-primary-medium relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-white mb-6">
            Ready to Simplify HR for Your Entire Team?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            See how HRMS Mitra can bring people, payroll, attendance and performance together in
            one powerful platform built for Indian businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-primary-extra-light transition-colors shadow-lg"
            >
              Book Your Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free implementation guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Data security guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
