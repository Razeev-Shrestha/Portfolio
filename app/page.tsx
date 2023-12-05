

import { About } from '@/components/About'
import { Divider } from '@/components/Divider'
import { Intro } from '@/components/Intro'
import {Skills} from '@/components/Skills'
import {Experience} from '@/components/Experience'
import {Projects} from '@/components/Projects'
import {Contact} from '@/components/Contact'















export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Contact />
    </main>
  )
}
