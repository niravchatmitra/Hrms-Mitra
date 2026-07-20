import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/form-schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Check honeypot field
    if (body.website) {
      // This is likely a bot, silently reject
      return NextResponse.json({ success: true }, { status: 200 })
    }
    
    // TODO: Send email notification
    // Option 1: Use Resend (recommended)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'HRMS Mitra <noreply@hrmsmitra.com>',
    //   to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL!,
    //   subject: `Contact Form: ${validatedData.subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Company:</strong> ${validatedData.company}</p>
    //     <p><strong>Employees:</strong> ${validatedData.employeeCount}</p>
    //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
    //     <p><strong>Message:</strong><br/>${validatedData.message}</p>
    //   `
    // });
    
    // Option 2: Send to webhook/CRM
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validatedData)
    // });
    
    console.log('Contact form submission:', validatedData)
    
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon.'
    }, { status: 200 })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Something went wrong. Please try again or email us directly.'
    }, { status: 500 })
  }
}
