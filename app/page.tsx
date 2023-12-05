import dynamic from 'next/dynamic'

import { About } from '@/components/About'
import { Divider } from '@/components/Divider'
import { Intro } from '@/components/Intro'
import { Loader } from '@/components/Loader'

const DynamicProjects = dynamic(() => import('@/components/Projects'), {
  loading: () => <Loader />,
})

const DynamicExperience = dynamic(() => import('@/components/Experience'), {
  loading: () => <Loader />,
})

const DynamicSkills = dynamic(() => import('@/components/Skills'), {
  loading: () => <Loader />,
})

const DynamicContact = dynamic(() => import('@/components/Contact'), {
  loading: () => <Loader />,
})

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <DynamicProjects />
      <Divider />
      <DynamicSkills />
      <Divider />
      <DynamicExperience />
      <DynamicContact />
    </main>
  )
}
