"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

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

  const handleToggleExpansion = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleExpansion(e)
    }
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <section className="sinopsis-panel" id="sinopsis">
              <h2 className="sinopsis-title">SINOPSIS</h2>

              <div className={`sinopsis-content ${isExpanded ? "is-open" : ""}`} id="sinopsis-detalle">
                {isExpanded ? fullText : <p>{previewText}</p>}
              </div>

              <div className="sinopsis-meta">
                <span className="chip">Thriller psicológico</span>
                <span className="chip">280 páginas</span>
                <span className="chip">2024</span>
              </div>

              <button
                onClick={handleToggleExpansion}
                onKeyDown={handleKeyDown}
                className="sinopsis-trigger"
                aria-expanded={isExpanded}
                aria-controls="sinopsis-detalle"
                type="button"
              >
                <span>{">"}</span>
                <span>{isExpanded ? "contraer_descripcion()" : "expandir_descripcion()"}</span>
              </button>
            </section>
          </div>
        )}
      </div>
    </section>
  )
}
