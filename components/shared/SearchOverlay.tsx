'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const searchablePages = [
  { title: 'Home', href: '/', category: 'Pages' },
  { title: 'Pricing', href: '/pricing', category: 'Pages' },
  { title: 'About Us', href: '/about', category: 'Company' },
  { title: 'Contact Us', href: '/contact', category: 'Company' },
  { title: 'Book a Demo', href: '/book-demo', category: 'Company' },
  { title: 'Core HR', href: '/features/core-hr', category: 'Features' },
  { title: 'Attendance Management', href: '/features/attendance-management', category: 'Features' },
  { title: 'Leave Management', href: '/features/leave-management', category: 'Features' },
  { title: 'Payroll Management', href: '/features/payroll-management', category: 'Features' },
  { title: 'Recruitment', href: '/features/recruitment', category: 'Features' },
  { title: 'Performance Management', href: '/features/performance-management', category: 'Features' },
  { title: 'Employee Self-Service', href: '/features/employee-self-service', category: 'Features' },
  { title: 'Blog', href: '/blog', category: 'Resources' },
  { title: 'HR Glossary', href: '/hr-glossary', category: 'Resources' },
  { title: 'FAQ', href: '/faq', category: 'Resources' },
  { title: 'Security', href: '/security', category: 'Company' },
]

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(searchablePages)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setQuery('')
      setResults(searchablePages)
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchablePages)
    } else {
      const filtered = searchablePages.filter(
        (page) =>
          page.title.toLowerCase().includes(query.toLowerCase()) ||
          page.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    }
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container-custom pt-20 pb-10">
        <div className="max-w-2xl mx-auto">
          {/* Search Input */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Search className="w-6 h-6 text-text-muted flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages and resources..."
                className="flex-1 text-lg outline-none text-text-heading"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-background-alt rounded-lg transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={onClose}
                      className="block p-4 rounded-lg hover:bg-background-alt transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-text-heading group-hover:text-primary">
                            {page.title}
                          </div>
                          <div className="text-sm text-text-muted">{page.href}</div>
                        </div>
                        <div className="text-xs text-text-muted bg-background-alt px-2 py-1 rounded">
                          {page.category}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-text-muted">
                  No results found for &quot;{query}&quot;
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm mb-3">Popular searches</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Pricing', 'Features', 'Book Demo', 'Contact'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
