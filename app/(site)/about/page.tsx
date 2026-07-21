import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, Shield, Heart } from 'lucide-react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About HRMS Mitra - Our Story & Mission | HRMS Mitra',
  description: 'Learn about HRMS Mitra, our mission to simplify HR for Indian businesses, and how we help companies manage their workforce effectively.',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About HRMS Mitra</h1>
            <p className="text-xl text-text-body leading-relaxed">
              We believe HR should empower businesses to grow, not hold them back with paperwork
              and manual processes. HRMS Mitra was built to make HR simple, efficient, and accessible
              for Indian businesses of all sizes.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="mb-6">Our Mission</h2>
                <p className="text-lg text-text-body leading-relaxed mb-6">
                  To make professional HR management accessible to every Indian business—from
                  startups with 10 employees to enterprises with thousands—through simple,
                  affordable, and powerful software.
                </p>
                <p className="text-lg text-text-body leading-relaxed">
                  We understand the unique challenges of managing HR in India: complex compliance
                  requirements, diverse workforce needs, and the need for affordable solutions that
                  actually work.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-border">
                <h3 className="text-2xl font-semibold mb-6">Why HRMS Mitra?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-extra-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-text-body">Built specifically for Indian businesses and compliance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-extra-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-text-body">Easy to use—no HR or tech expertise required</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-extra-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-text-body">Affordable pricing that scales with your business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-extra-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-text-body">Dedicated support to help you succeed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-text-body">
                We build features that solve real problems for real businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Simplicity</h3>
              <p className="text-text-body">
                Complex problems deserve simple solutions. We make HR easy.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-text-body">
                Your data security and privacy are non-negotiable priorities.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-text-body">
                We&apos;re here to help you succeed, every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Join Our Growing Community</h2>
            <p className="text-lg text-text-body mb-8 leading-relaxed">
              Businesses across India trust HRMS Mitra to manage their most important asset—their
              people. We&apos;d love to help your business too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo" className="btn-primary btn-lg">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
