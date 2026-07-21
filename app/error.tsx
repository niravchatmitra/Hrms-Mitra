'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, Home, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <section className="section min-h-[70vh] flex items-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-error/10 rounded-full mb-6">
            <AlertCircle className="w-10 h-10 text-error" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
            Something Went Wrong
          </h1>
          
          <p className="text-xl text-text-body mb-8 leading-relaxed">
            We encountered an unexpected error. This has been logged and we&apos;ll look into it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={reset}
              className="btn-primary"
            >
              <RefreshCcw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </div>
          
          <div className="card p-6 text-left">
            <h3 className="font-semibold text-text-heading mb-4">
              Need immediate help?
            </h3>
            <ul className="space-y-2 text-text-body">
              <li>
                • Email us at{' '}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                • Call us at{' '}
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE}`}
                  className="text-primary hover:underline"
                >
                  {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
                </a>
              </li>
              <li>
                • Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
