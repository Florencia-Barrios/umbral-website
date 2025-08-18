"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function SynopsisSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const previewText = (
    <>
      John Johnson despierta en un vacío absoluto: sin luz, sin sonido, sin certezas. Apenas quedan fragmentos de lo que
      parece haber sido una vida… y una pregunta que no lo suelta:{" "}
      <span className="magenta italic">¿cómo carajo llegó acá?</span>
    </>
  )

  const fullText = (
    <>
      <p>
        John Johnson despierta en un vacío absoluto: sin luz, sin sonido, sin certezas. Apenas quedan fragmentos de lo
        que parece haber sido una vida… y una pregunta que no lo suelta:{" "}
        <span className="magenta italic">¿cómo carajo llegó acá?</span>
      </p>

      <p>
        En un mundo donde la tecnología observa, sugiere… y tal vez decide, la búsqueda de quién sos se vuelve un
        laberinto. <span className="cyan italic">Umbral</span> es un thriller psicológico sobre identidad, memoria y lo
        que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.
      </p>
    </>
  )

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <section className="sinopsis-panel" id="sinopsis">
              <h2 className="sinopsis-title">SINOPSIS</h2>

              <div className="sinopsis-content">{isExpanded ? fullText : <p>{previewText}</p>}</div>

              <div className="sinopsis-meta">
                <span className="chip">Thriller psicológico</span>
                <span className="chip">320 páginas</span>
                <span className="chip">2025</span>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-3 text-neon-cyan hover:text-electric-pink transition-colors duration-300 font-space-mono text-sm group mt-6"
              >
                <span>{">"}</span>
                {isExpanded ? (
                  <>
                    <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    <span>contraer_descripcion()</span>
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                    <span>expandir_descripcion()</span>
                  </>
                )}
              </button>
            </section>
          </div>
        )}
      </div>
    </section>
  )
}
