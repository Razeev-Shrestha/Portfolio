import { Fragment } from 'react'
import { SectionHeading } from './SectionHeading'

import { projectsData } from '@/lib/data'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section>
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
