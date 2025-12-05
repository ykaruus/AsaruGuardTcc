"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "História", href: "#history-section" },
    { label: "Parceiros", href: "#trusted-section" },
    { label: "Contato", href: "#contact-section" }
  ]

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleDrawer}
        className="md:hidden fixed left-4 top-4 z-40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 p-2 rounded-lg transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-black via-black/95 to-black border-r border-cyan-500/20 z-40 transition-transform duration-300 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-cyan-500/10 flex items-center justify-between">
          {/* Close button visible only on mobile when drawer is open */}
          {isOpen && isMobile && (
            <button onClick={() => setIsOpen(false)} className="md:hidden text-cyan-400 hover:text-cyan-300">
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 px-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 font-medium group"
              >
                <span className="h-1 w-1 rounded-full bg-cyan-400 mr-3 group-hover:w-2 transition-all duration-300" />
                {item.label}
              </a>
            </li>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="p-6 border-t border-cyan-500/10 space-y-4">
          <p className="text-xs text-gray-500 text-center">© 2025 AsaruGuard. Todos os direitos reservados.</p>
        </div>
      </aside>

      {/* Main content spacer on desktop */}
      <div className="hidden md:block w-64" />
    </>
  )
}

export default MenuDrawer
