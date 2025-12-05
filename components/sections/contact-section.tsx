import { Instagram, Mail } from "lucide-react"
import { useRef, useState, useEffect } from "react"







export default function ContactSection() {

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
        <>
            <div
                id="contact-section"
                ref={sectionRef}
                className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl" />
                </div>






                <div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        {/* Section Title */}
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
                            Entre em contato
                        </h2>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-2 gap-12 mt-12">
                            {/* Left Content */}
                            <div className="space-y-6 animate-slide-in-left">

                                <h3 className="text-2xl font-semibold text-cyan-400">Nossas redes sociais</h3>
                                <div className="flex flex-items gap-4">
                                    <a href="https://www.instagram.com/asaru_guard" className=" w-8 h-8 hover:text-cyan-400 transition">
                                        <Instagram />
                                    </a>
                                    <a href="mailto:asaruguard@asaruguard.com.br" className="w-8 h-8 hover:text-cyan-400 transition">
                                        <Mail />
                                    </a>
                                </div>
                            </div>
                            z
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}
