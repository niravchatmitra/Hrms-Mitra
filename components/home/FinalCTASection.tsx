import { ArrowRight, CalendarDays, Zap } from 'lucide-react'

const HRMS_APP_URL = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'

export default function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #EFF8F5 0%, #ffffff 50%, #EFF8F5 100%)
          `,
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #075E54 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary to-[#168A78] rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Inner glow blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Start in 10 minutes · No credit card required
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Ready to Transform Your HR?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 500+ Indian businesses that run payroll, attendance and HR on WhatsApp with HRMS Mitra. 
              Get started free — no credit card, no setup fee, free onboarding.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`${HRMS_APP_URL}/signup`}
                id="final-cta-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-lg px-10 py-4 rounded-xl hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`${HRMS_APP_URL}/book-demo`}
                id="final-cta-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold text-lg px-10 py-4 rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                <CalendarDays className="w-5 h-5" />
                Book a Live Demo
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm">
              {[
                '✅ Free 14-day trial',
                '🔒 Your data stays in India',
                '📞 Dedicated onboarding support',
                '💬 WhatsApp-native from day 1',
              ].map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {/* Competitor trust line */}
            <p className="mt-8 text-white/50 text-xs">
              Trusted by teams migrating from Keka, greytHR, Zoho People, Darwinbox & HROne.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
