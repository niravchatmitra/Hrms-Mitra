import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import HRMSProductPreview from '@/components/shared/HRMSProductPreview'

export default function HeroSection() {
  return (
    <section className="section bg-white relative overflow-hidden pt-32 pb-24">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full">
              <span className="text-sm font-medium text-primary">
                All-in-One HRMS for Modern Indian Businesses
              </span>
            </div>
            
            <h1 className="leading-tight">
              Manage Your Entire Workforce From <span className="text-primary">One Simple</span> HR Platform.
            </h1>
            
            <p className="text-xl text-text-body leading-relaxed">
              Automate employee records, attendance, leave, payroll, hiring, performance and
              everyday HR operations with HRMS Mitra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-demo" className="btn-primary btn-lg">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/features" className="btn-secondary btn-lg">
                Explore Features
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-text-muted pt-4">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="text-sm">No complicated setup. Built for Indian businesses.</span>
            </div>
          </div>
          
          {/* Right Preview - Device mockup */}
          <div className="lg:block">
            <div className="relative">
              {/* Browser-style mockup frame */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                {/* Content area - placeholder for screenshot */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-extra-light to-white">
                  <HRMSProductPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
