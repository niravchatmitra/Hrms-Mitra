'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import HeroFeatureCard from './HeroFeatureCard'
import HeroFeatureContent from './HeroFeatureContent'
import { featuresData } from './features-data'

export default function HeroFeatureTabs() {
  const [activeFeature, setActiveFeature] = useState<string>('hiring-onboarding')
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeFeatureData = featuresData.find(f => f.id === activeFeature) || featuresData[0]

  const handleTabChange = useCallback((featureId: string) => {
    setActiveFeature(featureId)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        newIndex = (currentIndex + 1) % featuresData.length
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        newIndex = (currentIndex - 1 + featuresData.length) % featuresData.length
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = featuresData.length - 1
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        setActiveFeature(featuresData[currentIndex].id)
        return
      default:
        return
    }

    setActiveFeature(featuresData[newIndex].id)
    
    // Focus the new tab
    const newTabElement = document.getElementById(`tab-${featuresData[newIndex].id}`)
    newTabElement?.focus()
  }, [])

  return (
    <>
      {/* Feature Cards - 7 columns, premium interactive tabs */}
      <div className="mx-auto max-w-[1160px] mb-8">
        <div 
          ref={tabsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5"
          role="tablist"
          aria-label="HR Features"
        >
          {featuresData.map((feature, index) => (
            <HeroFeatureCard
              key={feature.id}
              id={feature.id}
              icon={feature.icon}
              label={feature.label}
              isActive={activeFeature === feature.id}
              onClick={() => handleTabChange(feature.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
      </div>

      {/* Feature Content - Animated */}
      <div className="mx-auto max-w-[900px] mb-8">
        <HeroFeatureContent
          id={activeFeatureData.id}
          title={activeFeatureData.title}
          description={activeFeatureData.description}
          highlights={activeFeatureData.highlights}
        />
      </div>
    </>
  )
}
