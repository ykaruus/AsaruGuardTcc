"use client"

import { useEffect, useRef, useState } from "react"
import FintechCarousel from "@/components/fintech-carousel"

const TrustedBySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="trusted-section"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Confiam em <span className="text-cyan-400">nós</span>
          </h2>
          <p
            className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            As principais fintechs e empresas tecnológicas confiam em nossa segurança
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          <FintechCarousel isVisible={isVisible} />
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-2 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
            E muitos mais...
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection
