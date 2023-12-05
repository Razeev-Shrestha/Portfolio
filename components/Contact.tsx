'use client'

import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'
import { SectionHeading } from './SectionHeading'
import { sendEmail } from '@/lib/sendEmail'
import { SubmitButton } from './SubmitButton'
import toast from 'react-hot-toast'

const Contact = () => {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:mail@rajeevshrestha.info.np">
          mail@rajeevshrestha.info.np
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error('Something went wrong. Please try again later.')
            return
          }
          if (data && data.error) {
            toast.error(data.error.message)
            return
          }
          toast.success('Message sent successfully.')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Enter Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Enter Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}

export default Contact
