'use client'

import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="card p-6 text-left">
            <h3 className="font-semibold text-text-heading mb-4 flex items-center">
              <Search className="w-5 h-5 mr-2 text-primary" />
              Looking for something specific?
            </h3>
            <ul className="space-y-2 text-text-body">
              <li>• <Link href="/features" className="text-primary hover:underline">Explore HRMS Features</Link></li>
              <li>• <Link href="/pricing" className="text-primary hover:underline">View Pricing Plans</Link></li>
              <li>• <Link href="/book-demo" className="text-primary hover:underline">Book a Demo</Link></li>
              <li>• <Link href="/contact" className="text-primary hover:underline">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
