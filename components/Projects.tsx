'use client'

import { Fragment } from 'react'
import { SectionHeading } from './SectionHeading'

import { projectsData } from '@/lib/data'
import { ProjectCard } from './ProjectCard'
import { useSectionInView } from '@/lib/hooks'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.2)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map(project => (
          <Fragment key={project.title}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
