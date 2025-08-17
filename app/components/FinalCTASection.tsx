"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Headphones, ChevronRight } from "lucide-react"

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence text-center">
            <div className="system-panel p-8 sm:p-12 hologram-effect">
              {/* Main CTA Title */}
              <div className="mb-12">
                <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-ghost mb-6 leading-tight">
                  Cruzá el umbral
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-electric-pink mx-auto rounded-full"></div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 max-w-lg mx-auto">
                {/* Primary CTA */}
                <button
                  onClick={() => window.open("https://amazon.com", "_blank")}
                  className="w-full cta-button-amazon text-void px-8 py-5 h-16 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group border border-transparent"
                >
                  <Download size={24} className="flex-shrink-0" />
                  <span>Leer gratis en Amazon</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => scrollToSection("podcast")}
                  className="w-full cta-button-podcast text-electric-pink px-8 py-5 h-16 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group border border-electric-pink bg-electric-pink/10"
                >
                  <Headphones size={24} className="flex-shrink-0" />
                  <span>Escuchar el podcast</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>

              {/* System Status */}
              <div className="mt-12 flex items-center justify-center space-x-6 text-xs font-space-mono text-neon-cyan/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span>SISTEMA_ACTIVO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                  <span>PORTAL_ABIERTO</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
