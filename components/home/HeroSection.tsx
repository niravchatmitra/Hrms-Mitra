import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import HRMSProductPreview from '@/components/shared/HRMSProductPreview'

export default function HeroSection() {
  return (
    <section className="section bg-gradient-to-b from-primary-extra-light to-background-main relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-medium/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-6">
              <span className="text-sm font-medium text-primary">
                All-in-One HRMS for Modern Indian Businesses
              </span>
            </div>
            
            <h1 className="mb-6">
              Manage Your Entire Workforce From One Simple HR Platform.
            </h1>
            
            <p className="text-xl text-text-body mb-8 leading-relaxed">
              Automate employee records, attendance, leave, payroll, hiring, performance and
              everyday HR operations with HRMS Mitra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/book-demo" className="btn-primary btn-lg">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/features" className="btn-secondary btn-lg">
                Explore Features
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-text-muted">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">No complicated setup. Built for Indian businesses.</span>
            </div>
          </div>
          
          {/* Right Preview */}
          <div className="lg:block">
            <HRMSProductPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
