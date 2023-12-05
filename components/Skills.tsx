'use client'

import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'
import { SectionHeading } from './SectionHeading'
import { skillsData } from '@/lib/data'

export const Skills = () => {
  const { ref } = useSectionInView('Skills')
  return (
    <section ref={ref} className="scroll-mt-28 max-w-[53rem] text-center sm:mb-16" id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 "
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}
