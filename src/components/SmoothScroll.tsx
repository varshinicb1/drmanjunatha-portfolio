'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, touchMultiplier: 2 })
    const updateScroll = () => ScrollTrigger.update()
    lenis.on('scroll', updateScroll)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.off('scroll', updateScroll)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
