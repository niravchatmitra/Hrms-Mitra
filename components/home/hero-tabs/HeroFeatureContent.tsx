'use client'

import { memo, useState, useEffect } from 'react'
import { CheckCircle } from 'lucide-react'

interface HeroFeatureContentProps {
  id: string
  title: string
  description: string
  highlights: string[]
}

const HeroFeatureContent = memo(({ id, title, description, highlights }: HeroFeatureContentProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [id])

  return (
    <div 
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className={`
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/20 shadow-xl">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-lg text-white/90 leading-relaxed mb-6">
          {description}
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-3">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 group"
              style={{
                animation: `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <CheckCircle className="w-5 h-5 text-[#8DD63F] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <span className="text-sm text-white/80 leading-relaxed">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

HeroFeatureContent.displayName = 'HeroFeatureContent'

export default HeroFeatureContent
