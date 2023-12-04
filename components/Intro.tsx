'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Icon } from '@/lib/Icons'

export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem]">
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
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl "
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
      <motion.p
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Rajeev Shrestha.</span> I&apos;m a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">2 years</span> of experience. I enjoy building{' '}
        <i className="italic">sites & apps</i>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
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
        >
          Contact me
          <Icon
            type="rightArrow"
            className="opacity-70 group-hover:translate-x-2 mt-[0.1rem] transition"
          />
        </Link>
        <a
          href="/rajeev_shrestha_resume.pdf"
          download
          className="bg-white cursor-pointer border border-black/10 px-7 py-3 flex items-center gap-2 rounded-full
                  outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition

        "
        >
          Download resume
          <Icon type="download" className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/rajeev-shrestha-a1475b1b7/"
          target="_blank"
          className="bg-white p-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full
           outline-none focus:scale-[1.15] hover:scale-[1.15] group active:scale-105 transition border border-black/10 hover:text-gray-950
          "
        >
          <Icon type="linkedin" />
        </a>
        <a
          href="https://github.com/Razeev-Shrestha"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
                     outline-none focus:scale-[1.15] hover:scale-[1.15] group active:scale-105 transition border border-black/10 hover:text-gray-950

          "
        >
          <Icon type="github" />
        </a>
      </motion.div>
    </section>
  )
}
