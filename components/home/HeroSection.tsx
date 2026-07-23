'use client'

import Link from 'next/link'
import HeroFeatureTabs from './hero-tabs/HeroFeatureTabs'

export default function HeroSection() {
  return (
    <section className="relative bg-[#075E54] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
      {/* Dark green diagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative w-full py-12 lg:py-16">
        {/* Main Headline - Responsive scaling for 1366×768 */}
        <div className="text-center mb-10 lg:mb-12">
          <h1 className="font-serif font-bold text-white mb-5 leading-[1.02] tracking-tight mx-auto max-w-[1050px]"
              style={{ fontSize: 'clamp(44px, 4.3vw, 64px)' }}>
            From HR platform to HR partner
            <br />
            <span className="text-[#8DD63F]">with HRMS Mitra AI™</span>
          </h1>

          {/* Subheadline - Compact */}
          <p className="text-lg lg:text-xl text-white/90 max-w-[880px] mx-auto leading-[1.45]">
            Meet the intelligence layer built into HRMS Mitra® that handles work for you so you can{' '}
            <span className="font-semibold text-white">put your people first.</span>
          </p>
        </div>

        {/* Feature Tabs Component */}
        <HeroFeatureTabs />

        {/* CTA Button - Compact spacing */}
        <div className="text-center mt-8">
          <Link 
            href="/book-demo"
            className="inline-flex items-center justify-center px-9 h-[50px] text-base font-bold text-[#073A32] bg-[#8DD63F] hover:bg-[#A0E154] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8DD63F] focus:ring-offset-2 focus:ring-offset-[#075E54]"
          >
            Get My Free Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
