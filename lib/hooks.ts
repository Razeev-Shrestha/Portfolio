import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { LinkNameType } from './data'
import { useActiveSection } from '@/context/ActiveSectionContext'

export const useSectionInView = (section: LinkNameType, threshold: number = 0.5) => {
  const { ref, inView } = useInView({ threshold })
  const { timeOfLastClick, setSection } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setSection(section)
    }
  }, [inView, setSection, timeOfLastClick, section])

  return { ref }
}
