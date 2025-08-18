"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"

export default function PodcastSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

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

  const handleListenNow = () => {
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      iframeRef.current.focus()
    }
  }

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-labelledby="podcast_title"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="umbral-panel podcast-box">
          {/* Header */}
          <div className="flex items-center mb-6 text-sm font-space-mono">
            <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse flex-shrink-0"></div>
            <span className="text-neon-cyan">SISTEMA_PODCAST</span>
          </div>

          {/* Title */}
          <h2
            id="podcast_title"
            className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold text-neon-cyan mb-4 glow-text text-center"
          >
            <span className="font-space-mono text-electric-pink mr-2">{">"}</span>
            stream_iniciado: PODCAST_UMBRAL.exe
          </h2>

          {/* Intro */}
          <div className="text-center mb-8">
            <p className="podcast-text text-ghost mb-2 font-inter leading-relaxed">
              Un episodio especial donde dos inteligencias artificiales discuten:
            </p>
            <p className="podcast-text text-ghost font-inter leading-relaxed">
              ¿qué queda de lo humano cuando lo artificial empieza a hablar tu mismo idioma?
            </p>
          </div>

          {/* File label */}
          <div className="mb-4 font-space-mono text-sm text-electric-pink">
            <span className="mr-2">{">"}</span>
            <span>reproduciendo_podcast_umbral.mp4</span>
          </div>
          <div className="mb-6 text-xs text-ghost font-space-mono">
            Formato: VIDEO | Fuente: YouTube | Duración: 3:32 min
          </div>

          {/* YouTube Embed */}
          <div className="mb-8">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Reproductor del podcast Umbral en YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-neon-cyan/30"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-6">
            <button
              onClick={handleListenNow}
              aria-label="Reproducir el podcast ahora"
              className="bg-electric-pink/10 hover:bg-electric-pink/20 border border-electric-pink text-electric-pink px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 mx-auto group electric-glow"
            >
              <Play size={18} className="flex-shrink-0" />
              <span>🎧 ESCUCHAR AHORA</span>
            </button>
          </div>

          <div className="text-center font-space-mono text-sm text-electric-pink podcast-secret">
            <span className="mr-2">{">"}</span>
            <span>mensaje_oculto: "El umbral no se cruza, se escucha."</span>
          </div>
        </div>
      </div>
    </section>
  )
}
