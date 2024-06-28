import { createElement } from "react";

import { Icon } from "./Icons";

import restroversePublic from "@/public/restroverse.png";
import restroversePrivate from "@/public/restroverse_business.png";
import optixTec from "@/public/optix_tec.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export type LinkNameType = (typeof links)[number]["name"];

export const experiencesData = [
  {
    title: "+2 High School Diploma",
    name: "Universal College",
    location: "Kathmandu, Nepal",
    description: "",
    date: "2015 - 2017",
    icon: createElement(Icon, { type: "school" }),
  },
  {
    title: "Bachelor in Computer Engineering",
    name: "Lalitpur Engineering College",
    location: "Lalitpur, Nepal",
    description: `College became my incubator for skill refinement: I led a multi-vendor E-commerce platform, honing web development and business acumen.
      Co-authoring a Nepali Music genre classification system using CNN epitomized my fusion of theory into tangible AI innovations`,
    date: "November,2017 - April,2022",
    icon: createElement(Icon, { type: "graduation" }),
  },
  {
    title: "Software Engineer Intern",
    name: "YantraCore Tech",
    location: "Lalitpur, Nepal",
    description: `During my final college semester, I dedicated my part-time efforts to drive project milestones, harnessing JavaScript prowess to develop vital systems for hospitality services.
      Collaborating within cross-functional teams, I deepened my expertise in React, TypeScript, and Next.js, refining software solutions through hands-on learning.`,
    icon: createElement(Icon, { type: "react" }),
    date: "September,2021 - February,2022",
  },
  {
    title: "Front-end Software Developer",
    name: "YantraCore Tech",
    location: "Lalitpur, Nepal",
    description: `As a full-time developer, I spearheaded the creation of a dynamic private dashboard system, reducing operational inefficiencies by 25% across hospitality services. Additionally, co-leading a diverse team,
     we launched an in-house app, amassing over 5000 monthly users, and engineered an innovative inventory system, revolutionizing management processes.`,
    icon: createElement(Icon, { type: "nextjs" }),
    date: "February,2022 - August,2023",
  },
  {
    title: "Front-end Software Developer",
    name: "Pagoda Labs",
    location: "Kumaripati, Lalitpur, Nepal",
    description: `During my time at Pagoda Labs,I transitioned systems from jQuery and PHP to Next.JS and Django, enhancing performance and maintainability. Leading Phase 1 of a recent project, I introduced a multi-tenant SaaS platform, comprehensive timesheet reporting, job hazard analysis modules, and advanced tracking features. Collaborating closely with UI/UX designers and mobile developers, I ensured a cohesive experience across web and mobile platforms. Additionally, I participated in code reviews, mentored junior developers, and used Agile methodologies to deliver high-quality results promptly.`,
    icon: createElement(Icon, { type: "nextjs" }),
    date: "December,2023 - July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Restroverse",
    description:
      "Restroverse is a dynamic web application where user can visit,find ,search and explore hotel,restaurants and other hospitalities.",
    tags: ["React", "Next.js", "Spring boot", "PostgreSQL", "AWS Amplify"],
    imageUrl: restroversePublic,
  },
  {
    title: "Restroverse Business",
    description:
      "Restroverse business is a private dashboard system powered with authentication and authorization and various CRUD functionalities.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "React-Query",
      "Zustand",
      "Axios",
      "Framer-motion",
    ],
    imageUrl: restroversePrivate,
  },
  {
    title: "Optix Tec",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "React-Query",
      "Zustand",
      "Axios",
      "Tailwind CSS",
      "Shadcn UI",
      "SaaS",
      "Django",
      "Python",
    ],
    imageUrl: optixTec,
    description:`Optixtec is a SaaS platform for managing the contruction related projects,timesheets, and procurement management services.`
  },
] as const;

export type ProjectData = (typeof projectsData)[number];

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "React Query",
  "Zustand",
  "Axios",
  "Framer Motion",
  "Material UI",
  "React Native",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Fastify",
  "PostgreSQL",
  "Docker",
  "AWS Amplify",
] as const;
