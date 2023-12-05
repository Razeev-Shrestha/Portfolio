'use server'

import { Resend } from 'resend'
import { validate, getErrorMessage } from '@/lib/utils'
import { EmailTemplate } from '@/components/EmailTemplate'
import { createElement } from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email')
  const message = formData.get('message')

  if (!email || typeof email !== 'string') {
    return {
      error: 'Invalid sender email',
    }
  }

  if (!message || typeof message !== 'string') {
    return {
      error: 'Invalid message',
    }
  }

  if (!validate(email, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validate(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: email.trim(),
      to: process.env.MY_EMAIL as string,
      subject: 'Message from contact form',
      reply_to: email.trim(),
      text: message.trim(),
      // react: createElement(EmailTemplate, {
      //   message: message,
      //   email: email,
      // }),
    })
  } catch (error: unknown) {
    console.log(error)
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
