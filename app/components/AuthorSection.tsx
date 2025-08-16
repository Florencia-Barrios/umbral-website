"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { User, Database, Code, BookOpen } from 'lucide-react'

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-6 sm:p-8 hologram-effect">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 gap-4">
                <div className="flex items-center space-x-3">
                  <Database size={20} className="text-neon-cyan flex-shrink-0" />
                  <span className="text-lg sm:text-xl font-orbitron text-neon-cyan">PERFIL_AUTOR</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-space-mono">
                  <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                  <span className="text-electric-pink">CONECTADO</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div className="flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-neon-cyan/20 to-electric-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="relative system-panel p-3 bg-void/50">
                      <Image
                        src="/placeholder.svg?height=300&width=300&text=Federico+Daniel+Ara"
                        alt="Federico Daniel Ara - Perfil del Sistema"
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

                <div className="md:col-span-2 space-y-4 lg:space-y-6">
                  <div className="system-panel p-4 sm:p-6 bg-void/30">
                    <div className="flex items-center mb-4">
                      <User size={20} className="text-electric-pink mr-3 flex-shrink-0" />
                      <span className="font-space-mono text-sm text-electric-pink">DATOS_USUARIO</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-ghost mb-2">Federico Daniel Ara</h3>
                    <div className="font-space-mono text-xs text-neon-cyan mb-4 space-y-1">
                      <div>CLASIFICACIÓN: AUTOR_SISTEMA</div>
                      <div>NIVEL: ACTIVO</div>
                      <div>ESTADO: ONLINE</div>
                      <div>ESPECIALIZACIÓN: NARRATIVA_TECNOLÓGICA</div>
                    </div>
                  </div>

                  <div className="system-panel p-4 sm:p-6 bg-void/30 hologram-effect">
                    <div className="flex items-center mb-4 text-sm font-space-mono text-neon-cyan">
                      <span className="mr-2">{">"}</span>
                      <span>cat biografia_autor.txt</span>
                    </div>
                    <div className="space-y-3 lg:space-y-4 text-ghost leading-relaxed text-sm sm:text-base">
                      <p className="text-xs sm:text-sm opacity-70">
                        [DATOS BIOGRÁFICOS - PLACEHOLDER PARA COMPLETAR CON INFORMACIÓN REAL]
                      </p>
                      <p>
                        Escritor argentino especializado en narrativa tecnológica y ficción especulativa. Su obra
                        explora las intersecciones entre identidad, tecnología y percepción en el mundo contemporáneo.
                      </p>
                      <p>
                        UMBRAL representa su incursión más profunda en los territorios donde la realidad y la
                        manipulación digital convergen de manera inquietante.
                      </p>
                    </div>
                  </div>

                  {/* Tarjetas estadísticas - CORREGIDAS para ancho uniforme en mobile */}
                  <div className="flex gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex-1 system-panel p-2 sm:p-3 lg:p-4 bg-neon-cyan/5 border-neon-cyan/20 text-center min-h-[80px] flex flex-col justify-center">
                      <BookOpen size={12} className="sm:w-4 sm:h-4 text-neon-cyan mx-auto mb-1 sm:mb-2 flex-shrink-0" />
                      <div className="text-xs font-space-mono text-neon-cyan mb-1">OBRAS</div>
                      <div className="text-sm sm:text-lg font-orbitron text-neon-cyan">1</div>
                    </div>
                    <div className="flex-1 system-panel p-2 sm:p-3 lg:p-4 bg-electric-pink/5 border-electric-pink/20 text-center min-h-[80px] flex flex-col justify-center">
                      <Code size={12} className="sm:w-4 sm:h-4 text-electric-pink mx-auto mb-1 sm:mb-2 flex-shrink-0" />
                      <div className="text-xs font-space-mono text-electric-pink mb-1">GÉNERO</div>
                      <div className="text-xs sm:text-sm font-orbitron text-electric-pink">TECH-FIC</div>
                    </div>
                    <div className="flex-1 system-panel p-2 sm:p-3 lg:p-4 bg-ghost/5 border-ghost/20 text-center min-h-[80px] flex flex-col justify-center">
                      <User size={12} className="sm:w-4 sm:h-4 text-ghost mx-auto mb-1 sm:mb-2 flex-shrink-0" />
                      <div className="text-xs font-space-mono text-ghost mb-1">ESTADO</div>
                      <div className="text-xs sm:text-sm font-orbitron text-ghost">ACTIVO</div>
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
