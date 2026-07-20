'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import { getHRMSAppUrl } from '@/lib/utils'
import Logo from '@/components/shared/Logo'
import ProductsMegaMenu from './mega-menus/ProductsMegaMenu'
import SolutionsMegaMenu from './mega-menus/SolutionsMegaMenu'
import ResourcesMenu from './mega-menus/ResourcesMenu'
import CompanyMenu from './mega-menus/CompanyMenu'
import MobileMenu from './MobileMenu'
import SearchOverlay from '@/components/shared/SearchOverlay'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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
      {/* Announcement Bar */}
      <div className="bg-primary-dark text-white py-2.5 px-4">
        <div className="container-custom flex items-center justify-center text-sm">
          <p className="text-center">
            Make HR effortless with HRMS Mitra — Book your free product demo today.
            <Link 
              href="/book-demo" 
              className="ml-2 underline hover:text-primary-light font-medium"
            >
              Book Demo
            </Link>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-primary text-white transition-all duration-200 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="text-white" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('products')}
                onMouseLeave={handleMenuLeave}
              >
                <button className="px-4 py-2 rounded-lg hover:bg-primary-hover flex items-center space-x-1 transition-colors">
                  <span className="font-medium">Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === 'products' && <ProductsMegaMenu />}
              </div>

              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('solutions')}
                onMouseLeave={handleMenuLeave}
              >
                <button className="px-4 py-2 rounded-lg hover:bg-primary-hover flex items-center space-x-1 transition-colors">
                  <span className="font-medium">Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === 'solutions' && <SolutionsMegaMenu />}
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="px-4 py-2 rounded-lg hover:bg-primary-hover font-medium transition-colors"
              >
                Pricing
              </Link>

              {/* Integrations */}
              <Link
                href="/integrations"
                className="px-4 py-2 rounded-lg hover:bg-primary-hover font-medium transition-colors"
              >
                Integrations
              </Link>

              {/* Resources */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('resources')}
                onMouseLeave={handleMenuLeave}
              >
                <button className="px-4 py-2 rounded-lg hover:bg-primary-hover flex items-center space-x-1 transition-colors">
                  <span className="font-medium">Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === 'resources' && <ResourcesMenu />}
              </div>

              {/* Company */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter('company')}
                onMouseLeave={handleMenuLeave}
              >
                <button className="px-4 py-2 rounded-lg hover:bg-primary-hover flex items-center space-x-1 transition-colors">
                  <span className="font-medium">Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === 'company' && <CompanyMenu />}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-primary-hover transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Login */}
              <a
                href={getHRMSAppUrl('/login')}
                className="hidden md:inline-flex px-4 py-2 rounded-lg hover:bg-primary-hover font-medium transition-colors"
              >
                Login
              </a>

              {/* Get Free Demo */}
              <Link
                href="/book-demo"
                className="hidden md:inline-flex btn bg-white text-primary hover:bg-primary-extra-light btn-sm"
              >
                Get Free Demo
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-primary-hover transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
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

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  )
}
