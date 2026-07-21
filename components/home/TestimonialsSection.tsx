'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "We used to spend 3 days running payroll every month — with PF and ESI always giving us headaches. HRMS Mitra cut it down to 4 hours. The statutory compliance automation alone is worth every rupee.",
    name: 'Vikram Sood',
    designation: 'Head of HR',
    company: 'TechVista Solutions, Pune',
    employees: '280 employees',
    rating: 5,
    avatar: 'VS',
    avatarColor: 'bg-[#075E54]',
    highlight: 'Payroll: 3 days → 4 hours',
  },
  {
    quote: "The WhatsApp integration is a game-changer. Our field staff don't use email, but every single one of them is on WhatsApp. Now they get leave approvals, payslips and shift reminders instantly. Engagement is up 40%.",
    name: 'Ritu Agarwal',
    designation: 'VP Operations',
    company: 'FastTrack Logistics, Delhi',
    employees: '1,200+ employees',
    rating: 5,
    avatar: 'RA',
    avatarColor: 'bg-violet-600',
    highlight: 'Employee engagement +40%',
  },
  {
    quote: "Switched from Keka after 2 years. HRMS Mitra's onboarding was faster, the UI is cleaner, and the Indian compliance support is genuinely better. Their team actually understands India-specific HR problems.",
    name: 'Priya Nambiar',
    designation: 'HR Director',
    company: 'Sunrise Pharmaceuticals, Chennai',
    employees: '600 employees',
    rating: 5,
    avatar: 'PN',
    avatarColor: 'bg-pink-500',
    highlight: 'Switched from Keka',
  },
  {
    quote: "The AI-powered hiring pipeline helped us shortlist candidates 5x faster. We filled 8 positions in one month that usually took 3 months. The offer letter automation and e-signing alone saved us countless hours.",
    name: 'Karan Malhotra',
    designation: 'Talent Acquisition Lead',
    company: 'DigitalFirst Agency, Bengaluru',
    employees: '180 employees',
    rating: 5,
    avatar: 'KM',
    avatarColor: 'bg-blue-600',
    highlight: '5x faster candidate shortlisting',
  },
  {
    quote: "As a CA, I've seen many HR tools struggle with India's complex payroll. HRMS Mitra handles PF, ESI, PT, TDS and LWF perfectly across our 4 different state offices. It's the only tool I recommend to my SME clients.",
    name: 'CA Deepak Sharma',
    designation: 'Chartered Accountant & Advisor',
    company: 'Sharma & Associates, Mumbai',
    employees: 'Advises 50+ SMEs',
    rating: 5,
    avatar: 'DS',
    avatarColor: 'bg-amber-600',
    highlight: 'CA-recommended for Indian compliance',
  },
]

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setActive(prev => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [isAutoPlaying, next])

  const t = testimonials[active]

  return (
    <section className="section bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4">
            ❤️ Customer Love
          </div>
          <h2 className="mb-4">
            Trusted by HR Leaders{' '}
            <span className="text-primary">Across India</span>
          </h2>
          <p className="text-text-body text-lg">Real results from real customers. Not testimonials from our brochure.</p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Rating badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-text-heading">4.8 / 5</span>
            <span className="text-sm text-text-muted">from 200+ reviews</span>
          </div>

          {/* Card */}
          <div
            className="bg-white rounded-3xl border border-border shadow-medium p-8 md:p-12 relative transition-all duration-500"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Highlight badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold mb-6">
              🏆 {t.highlight}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-text-heading font-medium leading-relaxed mb-8 relative z-10">
              "{t.quote}"
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-text-heading text-lg">{t.name}</p>
                <p className="text-text-body text-sm">{t.designation}</p>
                <p className="text-text-muted text-sm">{t.company} · {t.employees}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-border bg-white shadow-soft hover:border-primary hover:text-primary flex items-center justify-center text-text-muted transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-primary w-8' : 'bg-border w-2 hover:bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-border bg-white shadow-soft hover:border-primary hover:text-primary flex items-center justify-center text-text-muted transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Review platform badges */}
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          {[
            { name: 'G2 Reviews', score: '4.8★', badge: '🟠' },
            { name: 'Capterra', score: '4.7★', badge: '🔵' },
            { name: 'Software Suggest', score: '4.9★', badge: '🟢' },
          ].map(p => (
            <div key={p.name} className="flex items-center gap-2 bg-white rounded-xl border border-border px-4 py-2.5 shadow-soft">
              <span className="text-xl">{p.badge}</span>
              <div>
                <p className="text-xs font-semibold text-text-heading">{p.name}</p>
                <p className="text-xs text-amber-500 font-bold">{p.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
