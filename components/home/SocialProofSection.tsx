import { ArrowRight, BookOpen } from 'lucide-react'

const HRMS_APP_URL = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'

const stats = [
  { value: '68%', label: 'Cut payroll processing time by', suffix: '', color: 'text-[#075E54]' },
  { value: '12x', label: 'Faster leave approval', suffix: '', color: 'text-blue-600' },
  { value: '500+', label: 'Growing Indian businesses', suffix: '', color: 'text-violet-600' },
  { value: '99.9%', label: 'Platform uptime SLA', suffix: '', color: 'text-amber-600' },
  { value: '60%', label: 'Reduction in HR support tickets', suffix: '', color: 'text-pink-600' },
]

export default function SocialProofSection() {
  return (
    <section className="section bg-primary relative overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Top label */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 mb-5">
            📊 Proven Results
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-200"
            >
              <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <p className="text-white/70 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${HRMS_APP_URL}/book-demo`}
            id="social-proof-demo-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-primary-light transition-all shadow-lg"
          >
            Get a Free Demo <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`${HRMS_APP_URL}/case-studies`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            See Case Studies
          </a>
        </div>
      </div>
    </section>
  )
}
