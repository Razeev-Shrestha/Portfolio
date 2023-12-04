import { Icon } from './Icons'

import restroversePublic from '@/public/restroverse.png'
import restroversePrivate from '@/public/restroverse_business.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Graduated college',
    location: 'Lalitpur, Nepal',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: <Icon type="graduation" />,
    date: '2017-2022',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Lalitpur, Nepal',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: <Icon type="work" />,
    date: '2021-2022',
  },
  {
    title: 'Front-end Developer',
    location: 'Lalitpur, Nepal',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <Icon type="react" />,
    date: '2022-2023',
  },
] as const

export const projectsData = [
  {
    title: 'Restroverse Public',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: restroversePublic,
  },
  {
    title: 'Restroverse Business',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: restroversePrivate,
  },
] as const

export type ProjectData = (typeof projectsData)[number]

export const skillsData = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'Fastify',
  'PostgreSQL',
  'Docker',
  'AWS Amplify',
] as const
