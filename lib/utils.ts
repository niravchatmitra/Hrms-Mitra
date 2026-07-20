import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function validateIndianPhone(phone: string): boolean {
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function getHRMSAppUrl(path: string = ''): string {
  const baseUrl = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'
  return `${baseUrl}${path}`
}
