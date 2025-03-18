'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@/lib/Icons'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSection } from '@/context/ActiveSectionContext'

export const Intro = () => {
  const { ref } = useSectionInView('Home')
  const { setSection, setTimeOfLastClick } = useActiveSection()

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
              type: 'tween',
            }}
          >
            <Image
              src={`https://avatars.githubusercontent.com/u/56556421?v=4`}
              alt="Rajeev Shrestha"
              width={190}
              height={190}
              quality={95}
              sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 190px"
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
              aria-label="Rajeev Shrestha avatar"
            />
          </motion.div>
          <motion.span
            className="absolute text-3xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.75,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Rajeev Shrestha.</span> I&apos;m a passionate{' '}
        <span className="font-bold italic">front-end developer</span> with{' '}
        <span className="font-bold">3.5 years</span> of experience.I specialize in leveraging{' '}
        <i className="font-bold underline">React</i> and{' '}
        <i className="font-bold underline">Next.JS</i> to create seamless and engaging user-centric{' '}
        <span className="italic">web-sites and web applications.</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={'#contact'}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me
          <Icon
            type="rightArrow"
            className="opacity-70 group-hover:translate-x-2 mt-[0.1rem] transition"
          />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/RAJEEV_SHRESTHA_RESUME.pdf"
          download
        >
          Download resume
          <Icon type="download" className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/rajeev-shrestha-a1475b1b7/"
          target="_blank"
          aria-label="LinkedIn profile"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60
          "
        >
          <Icon type="linkedin" aria-hidden />
        </a>
        <a
          href="https://github.com/Razeev-Shrestha"
          target="_blank"
          aria-label="GitHub profile"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60

          "
        >
          <Icon type="github" aria-hidden />
        </a>
      </motion.div>
    </section>
  )
}
