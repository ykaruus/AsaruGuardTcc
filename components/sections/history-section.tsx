"use client"

import { useEffect, useRef, useState } from "react"

const HistorySection = () => {
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
      id="history-section"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
            Nossa <span className="text-cyan-400">História</span>
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-cyan-400">Origem e Propósito</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Fundada em 2018, AsaruGuard nasceu da visão de criar uma solução de segurança web que fosse moderna,
                confiável e acessível para empresas de todos os tamanhos.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Combinamos tecnologia de ponta com expertise em cibersegurança para proteger seus ativos digitais contra
                ameaças emergentes.
              </p>
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-cyan-400">Nossos Valores</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Inovação",
                    desc: "Sempre buscando as melhores soluções tecnológicas",
                  },
                  {
                    title: "Confiança",
                    desc: "Segurança e transparência em cada interação",
                  },
                  {
                    title: "Excelência",
                    desc: "Qualidade impecável em todos os nossos serviços",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="pb-4 border-b border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300"
                  >
                    <h4 className="text-cyan-400 font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-500">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-cyan-500/20">
            {[
              { label: "Clientes", value: "5000+" },
              { label: "Proteções", value: "1M+" },
              { label: "Anos", value: "6+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistorySection
