"use client"

import { useState, useEffect } from "react"
import Logo from "./logo"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-white font-bold text-lg hidden sm:inline">AsaruGuard</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#history-section"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            História
          </a>
          <a
            href="#trusted-section"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
          >
            Parceiros
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
            Contato
          </a>
        </div>

        {/* Right side spacer */}
        <div className="w-24" />
      </div>
    </nav>
  )
}

export default Navbar
