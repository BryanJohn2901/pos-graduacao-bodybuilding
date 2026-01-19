'use client'

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const sections = wrapperRef.current.querySelectorAll('section')
    const headings = wrapperRef.current.querySelectorAll('h1, h2, h3')
    const cards = wrapperRef.current.querySelectorAll('[class*="card"]')
    const buttons = wrapperRef.current.querySelectorAll('button')

    // Animate sections on scroll
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          delay: index === 0 ? 0.3 : 0,
        }
      )
    })

    // Animate headings with text reveal
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Animate cards with stagger
    const cardGroups = wrapperRef.current.querySelectorAll('[class*="grid"], [class*="carouselTrack"]')
    cardGroups.forEach((group) => {
      const groupCards = group.querySelectorAll('[class*="card"]')
      if (groupCards.length > 0) {
        gsap.fromTo(
          groupCards,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })

    // Animate buttons
    buttons.forEach((button) => {
      gsap.fromTo(
        button,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: button,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={wrapperRef} className="page-wrapper">
      {children}
    </div>
  )
}

export default PageWrapper

