import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Invalid Indian phone number'),
  company: z.string().min(2, 'Company name is required'),
  employeeCount: z.string().min(1, 'Please select employee count'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

export const demoFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, 'Invalid Indian phone number'),
  company: z.string().min(2, 'Company name is required'),
  employeeCount: z.string().min(1, 'Please select employee count'),
  jobTitle: z.string().optional(),
  city: z.string().optional(),
  modules: z.array(z.string()).optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
})

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type DemoFormData = z.infer<typeof demoFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
