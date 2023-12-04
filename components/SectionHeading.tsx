import { FC, PropsWithChildren } from 'react'

export const SectionHeading: FC<PropsWithChildren> = ({ children, ...props }) => (
  <h2 className="text-3xl font-medium mb-8">{children}</h2>
)
