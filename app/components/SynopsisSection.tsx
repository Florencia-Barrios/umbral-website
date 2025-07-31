"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, FileText, Eye } from "lucide-react"

export default function SynopsisSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  // Unified synopsis content
  const fullSynopsis =
    "En una Buenos Aires hiperconectada y cada vez más desconfiada, un grupo de amigos transforma una vieja galería en un espacio inmersivo llamado Umbral. Lo que empieza como una propuesta artística y comercial, pronto se convierte en algo mucho más inquietante. Sin saberlo, activan un sistema que no solo observa, sino que predice emociones, manipula decisiones y reescribe recuerdos. Las líneas entre el yo real y el yo inducido comienzan a desdibujarse. Escrita con ritmo cinematográfico y lenguaje visceral, UMBRAL mezcla tecnología, paranoia, afecto e identidad. ¿Y si lo que sentís no es realmente tuyo?"

  const shortSynopsis = fullSynopsis.slice(0, 280) + "..."

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Typing animation with optimized rendering
          let i = 0
          const text = shortSynopsis
          const typeTimer = setInterval(() => {
            if (i < text.length) {
              // Render in chunks to avoid layout thrashing
              const chunkSize = Math.min(3, text.length - i)
              setTypedText(text.slice(0, i + chunkSize))
              i += chunkSize
            } else {
              clearInterval(typeTimer)
            }
          }, 50)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [shortSynopsis])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-6 sm:p-8 hologram-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <FileText size={20} className="text-neon-cyan flex-shrink-0" />
                  <span className="text-lg sm:text-xl font-orbitron text-neon-cyan">SINOPSIS_SISTEMA</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <Eye size={14} className="text-electric-pink" />
                  <span className="text-electric-pink">NIVEL_ACCESO: PÚBLICO</span>
                </div>
              </div>

              <div className="system-panel p-4 sm:p-6 mb-6 lg:mb-8 bg-void/30 border-neon-cyan/10">
                <div className="flex items-center mb-4 text-xs font-space-mono text-neon-cyan">
                  <span className="mr-2">{">"}</span>
                  <span>cat descripcion_experiencia.txt</span>
                </div>

                {/* Optimized text container with reserved height */}
                <div
                  ref={textContainerRef}
                  className="text-ghost leading-relaxed text-base sm:text-lg typing-container"
                  style={{
                    minHeight: isExpanded ? "auto" : "120px",
                    willChange: "contents",
                  }}
                >
                  {isExpanded ? (
                    <p className="fade-in-sequence">{fullSynopsis}</p>
                  ) : (
                    <p>
                      {typedText}
                      {typedText && typedText.length < shortSynopsis.length && <span className="system-cursor"></span>}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-3 text-neon-cyan hover:text-electric-pink transition-colors duration-300 font-space-mono text-sm group"
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
