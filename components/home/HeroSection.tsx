'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Play, ChevronRight } from 'lucide-react'

const HRMS_APP_URL = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'

const modules = [
  { label: 'Payroll & Compliance', emoji: '💰', color: 'hover:bg-emerald-50' },
  { label: 'Attendance & Leave', emoji: '📅', color: 'hover:bg-blue-50' },
  { label: 'Hiring & Onboarding', emoji: '🎯', color: 'hover:bg-violet-50' },
  { label: 'Employee Experience', emoji: '⭐', color: 'hover:bg-amber-50' },
  { label: 'Performance', emoji: '📈', color: 'hover:bg-pink-50' },
  { label: 'WhatsApp Notifications', emoji: '💬', color: 'hover:bg-green-50' },
]

const trustItems = [
  'No credit card required',
  'Free onboarding support',
  'Indian payroll compliant',
]

export default function HeroSection() {
  const [activeModule, setActiveModule] = useState(0)

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-16 md:pt-10 md:pb-24">
      {/* ── Background decorations ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-extra-light/70 to-white blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary-light/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #075E54 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center min-h-[80vh] lg:min-h-0 lg:py-8">

          {/* ══ LEFT: COPY ══ */}
          <div className="space-y-6 max-w-xl">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/15 text-primary text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              All-in-One HRMS · Built for India
            </div>

            {/* ── HEADLINE (exact per spec) ── */}
            <h1 className="text-[38px] md:text-[50px] xl:text-[58px] font-extrabold leading-[1.08] text-text-heading tracking-tight">
              Simple HR,{' '}
              <span className="relative">
                <span className="text-primary">Smarter</span>
                {/* Underline squiggle */}
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,4 Q25,0 50,4 Q75,8 100,4 Q125,0 150,4 Q175,8 200,4" stroke="#E8753A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              Workplaces.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-text-body leading-relaxed">
              HRMS Mitra automates payroll, attendance, leave, hiring and performance—with{' '}
              <strong className="text-text-heading font-semibold">WhatsApp-native notifications</strong>{' '}
              every employee actually reads. No app installs, no spreadsheets, no chaos.
            </p>

            {/* Module tab pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product modules">
              {modules.map((mod, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={activeModule === i}
                  onClick={() => setActiveModule(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    activeModule === i
                      ? 'bg-primary text-white border-primary shadow-sm scale-[1.02]'
                      : `bg-white text-text-body border-border hover:border-primary/30 hover:text-primary ${mod.color}`
                  }`}
                >
                  <span aria-hidden="true">{mod.emoji}</span>
                  <span>{mod.label}</span>
                </button>
              ))}
            </div>

            {/* ── CTAs ── */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={`${HRMS_APP_URL}/book-demo`}
                id="hero-get-demo-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg group flex items-center justify-center gap-2"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`${HRMS_APP_URL}/signup`}
                id="hero-start-trial-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-lg flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-body">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-3 pt-1 border-t border-border">
              <div className="flex -space-x-2.5">
                {[
                  { initials: 'AR', bg: 'bg-[#075E54]' },
                  { initials: 'PS', bg: 'bg-pink-500' },
                  { initials: 'KM', bg: 'bg-blue-500' },
                  { initials: 'DP', bg: 'bg-violet-500' },
                  { initials: 'SJ', bg: 'bg-amber-500' },
                ].map(({ initials, bg }, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-text-body">
                Trusted by <span className="font-bold text-text-heading">500+ growing</span> Indian businesses
              </div>
            </div>
          </div>

          {/* ══ RIGHT: PRODUCT MOCKUP ══ */}
          <div className="relative mt-6 lg:mt-0">
            {/* Floating WhatsApp badge */}
            <div
              className="absolute -top-5 left-4 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border flex items-center gap-2.5"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <span className="text-2xl" aria-hidden="true">💬</span>
              <div>
                <p className="text-xs font-bold text-text-heading">WhatsApp Alert</p>
                <p className="text-[10px] text-success font-medium">Leave approved ✅</p>
              </div>
            </div>

            {/* Floating payroll badge */}
            <div className="absolute -bottom-4 -right-2 z-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border flex items-center gap-2.5">
              <span className="text-2xl" aria-hidden="true">🟢</span>
              <div>
                <p className="text-xs font-bold text-success">PF & ESI Compliant</p>
                <p className="text-[10px] text-text-body">Auto-calculated</p>
              </div>
            </div>

            {/* Browser frame */}
            <div className="rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
                  app.hrmsmitra.com/dashboard
                </div>
              </div>

              {/* Product screenshot */}
              <div className="relative group">
                <Image
                  src="/images/hero-mockup.jpg"
                  alt="HRMS Mitra Dashboard — Payroll, Attendance & WhatsApp Alerts in one platform"
                  width={720}
                  height={480}
                  className="w-full object-cover"
                  priority
                />
                {/* Play overlay on hover */}
                <a
                  href={`${HRMS_APP_URL}/book-demo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Watch product demo"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
