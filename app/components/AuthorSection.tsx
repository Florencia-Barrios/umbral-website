"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { User, Database } from "lucide-react"

export default function AuthorSection() {
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
    <section id="autor" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-void/50">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-8 sm:p-10 hologram-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <Database size={24} className="text-neon-cyan flex-shrink-0" />
                  <span className="text-xl sm:text-2xl font-orbitron text-neon-cyan">PERFIL_AUTOR</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                  <span className="text-electric-pink">CONECTADO</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Author Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-neon-cyan/20 to-electric-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="relative system-panel p-3 bg-void/50">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Federico+Daniel+Ara"
                        alt="Federico Daniel Ara - Autor"
                        width={300}
                        height={300}
                        className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-void/90 px-3 py-1 rounded text-xs font-space-mono text-neon-cyan border border-neon-cyan/30">
                        ID: FDA_001
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="md:col-span-2 space-y-6">
                  <div className="system-panel p-6 bg-void/30">
                    <div className="flex items-center mb-4">
                      <User size={20} className="text-electric-pink mr-3 flex-shrink-0" />
                      <span className="font-space-mono text-sm text-electric-pink">DATOS_USUARIO</span>
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-ghost mb-4">Federico Daniel Ara</h3>
                    <div className="font-space-mono text-xs text-neon-cyan mb-4 space-y-1">
                      <div>CLASIFICACIÓN: DESARROLLADOR_ESCRITOR</div>
                      <div>NIVEL: ACTIVO</div>
                      <div>ESTADO: ONLINE</div>
                      <div>ESPECIALIZACIÓN: NARRATIVA_TECNOLÓGICA</div>
                    </div>
                  </div>

                  <div className="system-panel p-6 bg-void/30 hologram-effect">
                    <div className="flex items-center mb-4 text-sm font-space-mono text-neon-cyan">
                      <span className="mr-2">{">"}</span>
                      <span>cat biografia_autor.txt</span>
                    </div>
                    <div className="space-y-4 text-ghost leading-relaxed text-base sm:text-lg">
                      <p>
                        <span className="text-electric-pink font-semibold">No soy escritor. Soy desarrollador.</span>{" "}
                        Esta es mi primera novela.
                      </p>
                      <p>
                        Nació de observar cómo la tecnología se pegó a lo cotidiano… a la mente, a las emociones, a lo
                        real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
