"use client"

import { useState, useEffect, useRef } from "react"
import { FileText, Eye } from "lucide-react"

export default function SynopsisSection() {
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

  return (
    <section id="sinopsis" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-8 sm:p-10 hologram-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <FileText size={24} className="text-neon-cyan flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-orbitron text-neon-cyan">SINOPSIS</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <Eye size={14} className="text-electric-pink" />
                  <span className="text-electric-pink">ACCESO_PÚBLICO</span>
                </div>
              </div>

              <div className="system-panel p-6 sm:p-8 bg-void/30 border-neon-cyan/10">
                <div className="flex items-center mb-6 text-sm font-space-mono text-neon-cyan">
                  <span className="mr-2">{">"}</span>
                  <span>cat sinopsis.txt</span>
                </div>

                <div className="text-center space-y-6">
                  <p className="text-ghost leading-relaxed text-lg sm:text-xl">
                    John Johnson despierta en un vacío absoluto: sin luz, sin sonido, sin certezas. Apenas quedan
                    fragmentos de lo que parece haber sido una vida… y una pregunta que no lo suelta:{" "}
                    <span className="text-electric-pink font-semibold">¿cómo carajo llegó acá?</span>
                  </p>

                  <p className="text-ghost leading-relaxed text-lg sm:text-xl">
                    En un mundo donde la tecnología observa, sugiere… y tal vez decide, la búsqueda de quién sos se
                    vuelve un laberinto. <span className="text-neon-cyan font-semibold italic">Umbral</span> es un
                    thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial
                    empiezan a hablar el mismo lenguaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
