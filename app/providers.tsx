'use client'

import { ReactNode, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    AOS.init({
      duration: 450,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: () => window.innerWidth < 768,
    })
  }, [])

  return <>{children}</>
}
