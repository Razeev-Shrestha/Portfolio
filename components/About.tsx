'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export const About = () => {
  const { ref } = useSectionInView('About', 0.99)

  return (
    <motion.section
      ref={ref}
      className="mb-2 max-w-[45rem] text-center leading-8 sm:mb-1 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="my-2">
        I hold a Bachelor&apos;s degree in{' '}
        <span className="font-medium">Computer Engineering </span>, a cornerstone in shaping my
        journey as a dedicated <span className="italic">software engineer</span> . With a solid
        academic foundation, I&apos;ve embraced a practical approach to problem-solving and
        innovation in the digital realm. It&apos;s this educational background that fuels my passion
        for crafting inventive solutions.
      </p>
      <p className="my-2">
        My expertise thrives in the realms of <span className="italic font-medium">ReactJS</span>{' '}
        and <span className="italic font-medium">NextJs</span> , where I&apos;ve honed my skills in
        front-end development. Beyond that, I&apos;m actively delving into the realms of backend
        development, immersing myself in Node.js, and venturing into mobile app development with
        React Native. This relentless pursuit of learning empowers me to engineer holistic solutions
        across diverse tech landscapes.
      </p>
      <p className="my-2">
        Away from the screen, I find joy in a mosaic of interests.{' '}
        <span className="italic font-medium">Cooking</span> serves as my creative outlet, where
        precision and experimentation merge into delectable dishes.{' '}
        <span className="italic font-medium">Photography</span> beckons my artistic side, capturing
        moments that resonate with stories.
        <span className="italic font-medium">Hiking and traveling</span> , on the other hand, fuel
        my sense of adventure, allowing me to explore both nature&apos;s wonders and diverse
        cultures, fostering a well-rounded perspective outside the coding sphere.
      </p>
    </motion.section>
  )
}
