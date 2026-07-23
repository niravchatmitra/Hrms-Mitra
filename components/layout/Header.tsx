'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Bell } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import ProductsMegaMenu from './mega-menus/ProductsMegaMenu'
import SolutionsMegaMenu from './mega-menus/SolutionsMegaMenu'
import ResourcesMenu from './mega-menus/ResourcesMenu'
import CompanyMenu from './mega-menus/CompanyMenu'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMenuEnter = (menu: string) => {
    setActiveMenu(menu)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  return (
    <>
      {/* Main Header - Compact for 1366×768 */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-border-light transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <nav className="mx-auto max-w-[1280px] px-5">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo - Never wraps */}
            <Link href="/" className="flex-shrink-0">
              <Logo variant="light" />
            </Link>

            {/* Desktop Navigation - Compact spacing */}
            <div className="hidden xl:flex items-center flex-1 justify-center min-w-0 gap-1">
              {/* Our Platform */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('products')}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'products'}
                  aria-haspopup="true"
                  className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>Our Platform</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMenu === 'products' && <ProductsMegaMenu />}
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] transition-colors whitespace-nowrap"
              >
                Pricing
              </Link>

              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('solutions')}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'solutions'}
                  aria-haspopup="true"
                  className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMenu === 'solutions' && <SolutionsMegaMenu />}
              </div>

              {/* Why HRMS Mitra - Shortened */}
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] transition-colors whitespace-nowrap"
              >
                Why HRMS Mitra
              </Link>

              {/* Resources */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('resources')}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'resources'}
                  aria-haspopup="true"
                  className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>Resources</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMenu === 'resources' && <ResourcesMenu />}
              </div>

              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('company')}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeMenu === 'company'}
                  aria-haspopup="true"
                  className="px-3 py-2 rounded-lg hover:bg-background-alt text-text-heading font-semibold text-[15px] flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>About</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMenu === 'company' && <CompanyMenu />}
              </div>
            </div>

            {/* Right Actions - Compact */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Country Selector - Hidden on smaller desktops */}
              <button
                type="button"
                className="hidden 2xl:flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-background-alt transition-colors"
              >
                <span className="text-lg">🇮🇳</span>
                <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
              </button>

              {/* Notifications - Hidden on smaller desktops */}
              <button
                type="button"
                className="hidden 2xl:block p-2 rounded-lg hover:bg-background-alt transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4 text-text-heading" />
              </button>

              {/* Phone Number - Hidden below 1450px */}
              <a
                href="tel:+917900000000"
                className="hidden 2xl:inline-flex items-center text-primary font-semibold text-[14px] hover:text-primary-hover transition-colors whitespace-nowrap"
              >
                +91 79 0000 0000
              </a>

              {/* Log In - Compact */}
              <Link
                href="/login"
                className="hidden xl:inline-flex items-center justify-center px-4 h-[40px] rounded-full border-2 border-primary text-primary font-semibold text-[14px] hover:bg-primary-extra-light transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Log In
              </Link>

              {/* Get a Demo - Compact */}
              <Link
                href="/book-demo"
                className="hidden xl:inline-flex items-center justify-center px-5 h-[40px] rounded-full bg-primary text-white font-semibold text-[14px] hover:bg-primary-hover transition-all shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get a Demo
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg hover:bg-background-alt transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-text-heading" />
                ) : (
                  <Menu className="w-6 h-6 text-text-heading" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
