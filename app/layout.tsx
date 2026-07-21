import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'HRMS Mitra - Simple HR. Smarter Workplaces.',
    template: '%s | HRMS Mitra',
  },
  description: 'Automate employee records, attendance, leave, payroll, hiring, performance and everyday HR operations with HRMS Mitra. All-in-One HRMS for Modern Indian Businesses.',
  keywords: ['HRMS', 'HR software', 'payroll', 'attendance', 'leave management', 'Indian HRMS', 'employee management', 'HR automation'],
  authors: [{ name: 'HRMS Mitra' }],
  creator: 'HRMS Mitra',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'HRMS Mitra',
    title: 'HRMS Mitra - Simple HR. Smarter Workplaces.',
    description: 'All-in-One HRMS for Modern Indian Businesses. Manage Your Entire Workforce From One Simple HR Platform.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HRMS Mitra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRMS Mitra - Simple HR. Smarter Workplaces.',
    description: 'All-in-One HRMS for Modern Indian Businesses',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Add Google Search Console verification code after domain setup
  // verification: {
  //   google: 'your-actual-verification-code',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}
