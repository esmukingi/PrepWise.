'use client'

import { useEffect } from 'react'

interface ClientAnimatedSectionProps {
  children: React.ReactNode
  animationType: string
}

export default function ClientAnimatedSection({ children, animationType }: ClientAnimatedSectionProps) {
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === 'undefined' || window.gsap) return

      const gsapScript = document.createElement('script')
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
      gsapScript.async = true

      const scrollTriggerScript = document.createElement('script')
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
      scrollTriggerScript.async = true

      document.body.appendChild(gsapScript)
      document.body.appendChild(scrollTriggerScript)

      await new Promise<void>((resolve) => {
        gsapScript.onload = () => {
          scrollTriggerScript.onload = () => resolve()
        }
      })

      const { gsap, ScrollTrigger } = window as any
      gsap.registerPlugin(ScrollTrigger)

      // Fallback styles
      gsap.set('[data-animate="cta-button"]', { opacity: 1, scale: 1 })

      // Animation configurations
      if (animationType === 'hero') {
        gsap.fromTo(
          '[data-animate="hero-text"]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        )
        gsap.fromTo(
          '[data-animate="hero-image"]',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
        )
      } else if (animationType === 'stats') {
        document.querySelectorAll('[data-animate^="stat-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'past-interviews' || animationType === 'upcoming-interviews') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate="interview-card"], [data-animate="no-interviews"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'testimonials') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="testimonial-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'features') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="feature-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'benefits') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="benefit-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'how-it-works') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="step-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'breakdown') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="category-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'strengths' || animationType === 'improvements') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        document.querySelectorAll('[data-animate^="item-"]').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
            }
          )
        })
      } else if (animationType === 'cta') {
        gsap.fromTo(
          '[data-animate="section-title"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-title"]', start: 'top 90%' },
          }
        )
        gsap.fromTo(
          '[data-animate="section-text"]',
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="section-text"]', start: 'top 90%' },
          }
        )
        gsap.fromTo(
          '[data-animate="cta-button"]',
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: { trigger: '[data-animate="cta-button"]', start: 'top 90%' },
          }
        )
      }
    }

    loadGSAP()

    return () => {
      const scripts = document.querySelectorAll('script[src*="gsap"]')
      scripts.forEach((script) => script.remove())
    }
  }, [animationType])

  return <>{children}</>
}