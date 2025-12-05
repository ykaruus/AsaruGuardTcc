"use client"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"
import Navbar from "@/components/navbar"

const HomeSection = forwardRef<HTMLDivElement>((_, ref) => {
  const handleScroll = () => {
    const historySection = document.getElementById("history-section")
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={ref} className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center space-y-8 animate-slide-in-left">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Logo size={120} />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">AsaruGuard</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Protegendo seu futuro digital
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Segurança web de classe mundial. Proteção avançada contra ameaças digitais com tecnologia de ponta e
            confiança que você merece.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              onClick={handleScroll}
              className="px-8 py-6 text-lg bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
})

HomeSection.displayName = "HomeSection"

export default HomeSection
