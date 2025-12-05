"use client"

import { useEffect, useState } from "react"

interface FintechCarouselProps {
  isVisible: boolean
}

const FintechCarousel = ({ isVisible }: FintechCarouselProps) => {
  const [offset, setOffset] = useState(0)

  // List of fintech companies
  const companies = [
    { name: "Nubank", initials: "NU" },
    { name: "PicPay", initials: "PP" },
    { name: "Mercado Pago", initials: "MP" },
    { name: "Stripe", initials: "ST" },
    { name: "PayPal", initials: "PL" },
    { name: "Wise", initials: "WS" },
    { name: "Revolut", initials: "RV" },
    { name: "N26", initials: "N2" },
  ]

  // Duplicate for seamless loop
  const displayCompanies = [...companies, ...companies]

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (companies.length * 100))
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, companies.length])

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Carousel container */}
        <div
          className="flex gap-8 py-12 px-4"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: "transform 0.03s linear",
          }}
        >
          {displayCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-40 h-32 border border-cyan-500/20 rounded-lg bg-gradient-to-br from-cyan-500/5 to-transparent hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/40 flex items-center justify-center transition-colors duration-300">
                  <span className="text-cyan-400 font-bold text-sm group-hover:text-cyan-300">{company.initials}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {company.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FintechCarousel
