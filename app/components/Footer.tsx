"use client"

import { useEffect, useState } from "react"
import { Terminal, Github, Twitter, Instagram } from "lucide-react"
import { useClock } from "../../hooks/useClock"

export default function Footer() {
  const { timestamp } = useClock()
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const uptimeInterval = setInterval(() => setUptime((prev) => prev + 1), 1000)
    return () => clearInterval(uptimeInterval)
  }, [])

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <footer className="bg-void/80 backdrop-blur-xl border-t border-neon-cyan/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-6 sm:p-8">
          <div className="text-center mb-8 lg:mb-12">
            <div
              className="glitch-text text-2xl sm:text-3xl lg:text-4xl font-orbitron text-ghost mb-4 lg:mb-6"
              data-text="ATRÉVETE A CRUZAR EL UMBRAL"
            >
              ATRÉVETE A CRUZAR EL UMBRAL
            </div>
            <div className="font-space-mono text-sm text-neon-cyan">SISTEMA_MENSAJE: EXPERIENCIA_COMPLETA_INICIADA</div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-12">
            {/* Conexiones */}
            <div className="system-panel p-3 lg:p-4 bg-neon-cyan/5 border-neon-cyan/20 text-center min-h-[80px] flex flex-col justify-center w-full">
              <div className="text-xs font-space-mono text-neon-cyan mb-2">CONEXIONES</div>
              <div className="flex justify-center space-x-2 lg:space-x-3">
                <a href="#" className="text-neon-cyan hover:text-electric-pink transition-colors p-1">
                  <Twitter size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="text-neon-cyan hover:text-electric-pink transition-colors p-1">
                  <Instagram size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="text-neon-cyan hover:text-electric-pink transition-colors p-1">
                  <Github size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Estado */}
            <div className="system-panel p-3 lg:p-4 bg-electric-pink/5 border-electric-pink/20 text-center min-h-[80px] flex flex-col justify-center w-full">
              <div className="text-xs font-space-mono text-electric-pink mb-2">ESTADO</div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse"></div>
                <span className="text-sm font-orbitron text-electric-pink">ACTIVO</span>
              </div>
            </div>

            {/* Uptime */}
            <div className="system-panel p-3 lg:p-4 bg-ghost/5 border-ghost/20 text-center min-h-[80px] flex flex-col justify-center w-full max-w-full">
              <div className="text-xs font-space-mono text-ghost mb-2">UPTIME</div>
              <div className="text-sm font-space-mono text-ghost">{formatUptime(uptime)}</div>
            </div>

            {/* Timestamp */}
            <div className="system-panel p-3 lg:p-4 bg-void/30 border-neon-cyan/10 text-center min-h-[80px] flex flex-col justify-center w-full max-w-full">
              <div className="text-xs font-space-mono text-neon-cyan mb-2">TIMESTAMP</div>
              <div className="text-xs font-space-mono text-neon-cyan break-all leading-tight" data-timestamp>
                {timestamp}
              </div>
            </div>
          </div>

          <div className="text-center font-space-mono text-xs text-ghost space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Terminal size={14} className="text-neon-cyan" />
              <span>SISTEMA UMBRAL v2.1.0</span>
            </div>
            <div>© 2025 Federico Daniel Ara | TODOS LOS DERECHOS RESERVADOS</div>
            <div className="text-neon-cyan">INTERFAZ WEB OPTIMIZADA | EXPERIENCIA INMERSIVA ACTIVADA</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
