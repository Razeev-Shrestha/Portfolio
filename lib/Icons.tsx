import { FC } from 'react'
import { IconBaseProps } from 'react-icons/lib'

import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

const iconsCollection = {
  work: CgWorkAlt,
  react: FaReact,
  graduation: LuGraduationCap,
}

type IconProps = IconBaseProps & {
  type: keyof typeof iconsCollection
}

export const Icon: FC<IconProps> = ({ type, ...props }) => {
  const IconComponent = iconsCollection[type]

  if (!IconComponent) throw new Error(`Icon with type ${type} not found.`)

  return <IconComponent {...props} />
}
