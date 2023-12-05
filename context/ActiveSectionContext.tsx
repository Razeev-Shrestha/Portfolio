'use client'

import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { LinkNameType } from '@/lib/data'

export const ActiveSectionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<LinkNameType>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  const setSection = (activeLink: LinkNameType) => {
    setActiveSection(activeLink)
  }

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

type ActiveSectionContextType = {
  activeSection: LinkNameType
  setSection: (activeSection: LinkNameType) => void
  timeOfLastClick: number
  setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)

  if (!context) throw new Error('use Hook only inside Context!!')

  return context
}
