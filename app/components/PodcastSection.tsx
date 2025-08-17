"use client"

import { useEffect, useRef, useState } from "react"
import { Radio, ExternalLink, Cpu, Activity, Play } from "lucide-react"

export default function PodcastSection() {
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
    <section id="podcast" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-8 sm:p-10 hologram-effect border-neon-cyan/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <Radio size={24} className="text-electric-pink flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-orbitron text-electric-pink">
                    UMBRAL: conversación entre IAs
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <Cpu size={14} className="text-neon-cyan" />
                  <span className="text-neon-cyan">IA_CONVERSACIÓN_ACTIVA</span>
                </div>
              </div>

              {/* Description */}
              <div className="system-panel p-6 sm:p-8 mb-8 bg-void/30 border-electric-pink/10">
                <div className="flex items-center mb-4 text-sm font-space-mono text-electric-pink">
                  <span className="mr-2">{">"}</span>
                  <span className="flex items-center space-x-2">
                    <Play size={16} className="flex-shrink-0" />
                    <span>descripcion_podcast.txt</span>
                  </span>
                </div>

                <p className="text-ghost mb-6 leading-relaxed text-lg sm:text-xl text-center">
                  Un episodio especial que abre la discusión: ¿qué queda de lo humano cuando la máquina te lee por
                  dentro?
                </p>

                {/* Technical Info Panel */}
                <div className="system-panel p-4 sm:p-5 bg-void/50 border-neon-cyan/20 mb-6">
                  <div className="flex items-center mb-3">
                    <Activity size={16} className="text-neon-cyan mr-2 flex-shrink-0" />
                    <span className="text-xs font-space-mono text-neon-cyan">ESPECIFICACIONES_TÉCNICAS</span>
                  </div>
                  <div className="data-stream space-y-1 text-xs">
                    <div>FORMATO: MP4 | RESOLUCIÓN: HD</div>
                    <div>PARTICIPANTES: IA_ALPHA, IA_BETA</div>
                    <div>TEMA: ANÁLISIS_UMBRAL.exe</div>
                    <div>PLATAFORMA: YOUTUBE_EMBED</div>
                  </div>
                </div>

                {/* YouTube Player Container */}
                <div className="system-panel p-4 sm:p-5 bg-void/60 border-electric-pink/20 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                      <span className="text-xs font-space-mono text-electric-pink">
                        STREAM_ACTIVO: ANÁLISIS_VISUAL.IA
                      </span>
                    </div>
                    <div className="text-xs font-space-mono text-neon-cyan">YOUTUBE_EMBED</div>
                  </div>

                  {/* YouTube iframe */}
                  <div className="border border-neon-cyan/30 p-2 rounded-lg bg-void/30">
                    <iframe
                      width="100%"
                      height="240"
                      src="https://www.youtube.com/embed/DNHeVYk2oJE"
                      title="Análisis IA - UMBRAL"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                      style={{
                        minHeight: "200px",
                      }}
                    />
                  </div>
                </div>

                {/* Access Button */}
                <button
                  onClick={() => window.open("https://www.youtube.com/watch?v=DNHeVYk2oJE", "_blank")}
                  className="w-full bg-electric-pink/10 hover:bg-electric-pink/20 border border-electric-pink text-electric-pink px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group"
                >
                  <span>Escuchar ahora</span>
                  <ExternalLink size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                </button>
              </div>

              {/* System Status */}
              <div className="flex items-center justify-center space-x-4 text-xs font-space-mono text-neon-cyan/70">
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse"></div>
                  <span>ANÁLISIS_COMPLETADO</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-electric-pink rounded-full animate-pulse"></div>
                  <span>VIDEO_DISPONIBLE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
