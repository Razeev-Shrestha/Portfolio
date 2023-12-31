import { FC } from 'react'
import { IconBaseProps } from 'react-icons/lib'

import { CgWorkAlt } from 'react-icons/cg'
import { FaReact, FaGithubSquare, FaSchool, FaPaperPlane } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import { BsArrowRight, BsLinkedin, BsMoon, BsSun } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { TbBrandNextjs } from 'react-icons/tb'

const iconsCollection = {
  work: CgWorkAlt,
  react: FaReact,
  graduation: LuGraduationCap,
  rightArrow: BsArrowRight,
  download: HiDownload,
  github: FaGithubSquare,
  linkedin: BsLinkedin,
  school: FaSchool,
  nextjs: TbBrandNextjs,
  plane: FaPaperPlane,
  sun: BsSun,
  moon: BsMoon,
}

type IconProps = IconBaseProps & {
  type: keyof typeof iconsCollection
}

export const Icon: FC<IconProps> = ({ type, ...props }) => {
  const IconComponent = iconsCollection[type]

  if (!IconComponent) throw new Error(`Icon with type ${type} not found.`)

  return <IconComponent {...props} />
}
