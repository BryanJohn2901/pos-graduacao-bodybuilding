'use client'

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'reveal'
  delay?: number
  duration?: number
  className?: string
  stagger?: boolean
  staggerSelector?: string
}

const AnimatedSection = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className = '',
  stagger = false,
  staggerSelector = '',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const getAnimation = () => {
      switch (animation) {
        case 'fadeUp':
          return { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } }
        case 'fadeIn':
          return { from: { opacity: 0 }, to: { opacity: 1 } }
        case 'slideLeft':
          return { from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 } }
        case 'slideRight':
          return { from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 } }
        case 'scale':
          return { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } }
        case 'reveal':
          return {
            from: { opacity: 0, y: 100, clipPath: 'inset(100% 0% 0% 0%)' },
            to: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' },
          }
        default:
          return { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } }
      }
    }

    const { from, to } = getAnimation()

    if (stagger && staggerSelector) {
      const elements = element.querySelectorAll(staggerSelector)
      gsap.fromTo(elements, from, {
        ...to,
        duration,
        delay,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    } else {
      gsap.fromTo(element, from, {
        ...to,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration, stagger, staggerSelector])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default AnimatedSection

