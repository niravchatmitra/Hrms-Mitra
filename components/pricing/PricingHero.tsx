export default function PricingHero() {
  return (
    <section className="section bg-gradient-cream relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-accent-purple/5 blur-3xl" aria-hidden="true" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Serif headline - BambooHR style */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text-heading mb-6 leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-xl md:text-2xl text-text-body leading-relaxed mb-8">
            Choose the plan that fits your team. All plans include our core HR features with flexible add-ons as you grow.
          </p>
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-soft border border-border-light">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-text-heading">14-day free trial • No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  )
}
