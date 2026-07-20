'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { getHRMSAppUrl } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  if (!isOpen) return null

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleLinkClick = () => {
    onClose()
    setExpandedSection(null)
  }

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Products */}
          <div>
            <button
              onClick={() => toggleSection('products')}
              className="flex items-center justify-between w-full py-2 font-semibold text-text-heading"
            >
              Products
              {expandedSection === 'products' ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSection === 'products' && (
              <div className="mt-3 pl-4 space-y-4">
                {NAVIGATION.products.map((category) => (
                  <div key={category.category}>
                    <div className="text-sm font-semibold text-text-muted uppercase mb-2">
                      {category.category}
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block text-text-body hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <button
              onClick={() => toggleSection('solutions')}
              className="flex items-center justify-between w-full py-2 font-semibold text-text-heading"
            >
              Solutions
              {expandedSection === 'solutions' ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSection === 'solutions' && (
              <div className="mt-3 pl-4 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-text-muted uppercase mb-2">
                    By Company Size
                  </div>
                  <ul className="space-y-2">
                    {NAVIGATION.solutions.bySize.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block text-text-body hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-muted uppercase mb-2">
                    By Industry
                  </div>
                  <ul className="space-y-2">
                    {NAVIGATION.solutions.byIndustry.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className="block text-text-body hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            onClick={handleLinkClick}
            className="block py-2 font-semibold text-text-heading"
          >
            Pricing
          </Link>

          {/* Integrations */}
          <Link
            href="/integrations"
            onClick={handleLinkClick}
            className="block py-2 font-semibold text-text-heading"
          >
            Integrations
          </Link>

          {/* Resources */}
          <div>
            <button
              onClick={() => toggleSection('resources')}
              className="flex items-center justify-between w-full py-2 font-semibold text-text-heading"
            >
              Resources
              {expandedSection === 'resources' ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSection === 'resources' && (
              <ul className="mt-3 pl-4 space-y-2">
                {NAVIGATION.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block text-text-body hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company */}
          <div>
            <button
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full py-2 font-semibold text-text-heading"
            >
              Company
              {expandedSection === 'company' ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSection === 'company' && (
              <ul className="mt-3 pl-4 space-y-2">
                {NAVIGATION.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block text-text-body hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-border space-y-3">
            <a
              href={getHRMSAppUrl('/login')}
              className="block text-center py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary-extra-light transition-colors"
            >
              Login
            </a>
            <Link
              href="/book-demo"
              onClick={handleLinkClick}
              className="block text-center py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
            >
              Get Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
