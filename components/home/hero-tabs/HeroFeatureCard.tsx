'use client'

import { memo } from 'react'

interface HeroFeatureCardProps {
  id: string
  icon: JSX.Element
  label: string
  isActive: boolean
  onClick: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
}

const HeroFeatureCard = memo(({ 
  id, 
  icon, 
  label, 
  isActive, 
  onClick, 
  onKeyDown 
}: HeroFeatureCardProps) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={isActive ? 0 : -1}
      className={`
        group relative rounded-xl p-4 transition-all duration-300 ease-out cursor-pointer
        flex flex-col items-center justify-center min-h-[142px]
        focus:outline-none focus:ring-2 focus:ring-[#8DD63F] focus:ring-offset-2 focus:ring-offset-[#075E54]
        ${isActive 
          ? 'bg-[#E8F5E9] border-2 border-primary shadow-lg scale-[1.02]' 
          : 'bg-white border-2 border-transparent hover:border-primary/20 hover:shadow-lg hover:-translate-y-1.5'
        }
      `}
    >
      {/* Icon Container */}
      <div 
        className={`
          text-primary mb-2.5 flex justify-center transition-all duration-300 ease-out
          ${isActive ? 'scale-110 w-10 h-10' : 'w-9 h-9 group-hover:scale-105'}
        `}
      >
        {icon}
      </div>

      {/* Label */}
      <div 
        className={`
          text-[13px] font-semibold text-center whitespace-pre-line leading-tight transition-colors duration-200
          ${isActive ? 'text-primary' : 'text-text-heading'}
        `}
      >
        {label}
      </div>

      {/* Active Indicator - Subtle bottom accent */}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-t-full" />
      )}
    </button>
  )
})

HeroFeatureCard.displayName = 'HeroFeatureCard'

export default HeroFeatureCard
