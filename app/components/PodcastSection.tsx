"use client"

import { useEffect, useRef, useState } from "react"
import { Radio, ExternalLink, Cpu, Activity } from "lucide-react"

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-void/50">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-6 sm:p-8 hologram-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <Radio size={20} className="sm:w-6 sm:h-6 text-electric-pink flex-shrink-0" />
                  <span className="text-lg sm:text-xl font-orbitron text-electric-pink">AUDIO_STREAM</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <Cpu size={14} className="text-neon-cyan" />
                  <span className="text-neon-cyan">IA_CONVERSACIÓN</span>
                </div>
              </div>

              {/* AI Analysis Module */}
              <div className="system-panel p-4 sm:p-6 mb-6 lg:mb-8 bg-void/30 border-electric-pink/10">
                {/* Header */}
                <div className="flex items-center mb-4 text-sm font-space-mono text-electric-pink">
                  <span className="mr-2">{">"}</span>
                  <span className="flex items-center space-x-2">
                    <span>▶️</span>
                    <span>DECODIFICANDO_ANALISIS_IA.wav</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-ghost mb-6 leading-relaxed text-base sm:text-lg">
                  Dos inteligencias artificiales mantuvieron una conversación natural sobre el libro. Un análisis
                  profundo desde la perspectiva de sistemas autónomos que exploran los límites entre realidad y
                  simulación.
                </p>

                {/* Technical Info Panel */}
                <div className="system-panel p-4 sm:p-5 bg-void/50 border-neon-cyan/20 mb-6">
                  <div className="flex items-center mb-3">
                    <Activity size={16} className="text-neon-cyan mr-2 flex-shrink-0" />
                    <span className="text-xs font-space-mono text-neon-cyan">ESPECIFICACIONES_TÉCNICAS</span>
                  </div>
                  <div className="data-stream space-y-1 text-xs">
                    <div>CODEC: WAV | BITRATE: 320kbps</div>
                    <div>PARTICIPANTES: IA_ALPHA, IA_BETA</div>
                    <div>TEMA: ANÁLISIS_UMBRAL.exe</div>
                  </div>
                </div>

                {/* Spotify Player Container */}
                <div className="system-panel p-4 sm:p-5 bg-void/60 border-electric-pink/20 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                      <span className="text-xs font-space-mono text-electric-pink">STREAM_ACTIVO</span>
                    </div>
                    <div className="text-xs font-space-mono text-neon-cyan">SPOTIFY_EMBED</div>
                  </div>

                  {/* Spotify iframe - exactly as provided */}
                  <div className="relative overflow-hidden rounded-lg border border-neon-cyan/30">
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/track/1mqkRwnxI0gNZIfZqQjTW8?utm_source=generator&theme=0"
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Access Button */}
                <button
                  onClick={() =>
                    window.open(
                      "https://open.spotify.com/intl-es/artist/2M44BSyBkxIRKLmMdIrMfi?si=KwOzm6LNSW2JkJPesDkV8Q",
                      "_blank",
                    )
                  }
                  className="w-full bg-electric-pink/10 hover:bg-electric-pink/20 border border-electric-pink text-electric-pink px-6 sm:px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group electric-glow"
                >
                  <span className="text-sm sm:text-base">ACCEDER_A_SPOTIFY()</span>
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
                  <span>STREAM_DISPONIBLE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
