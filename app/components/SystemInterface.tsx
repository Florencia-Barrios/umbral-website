"use client"

import { useEffect, useState } from "react"
import { Activity, Wifi, Shield } from "lucide-react"
import { useClock } from "../../hooks/useClock"

export default function SystemInterface() {
  const { time } = useClock()
  const [systemStatus, setSystemStatus] = useState("INICIANDO")

  useEffect(() => {
    // System initialization sequence
    const initSequence = [
      { status: "INICIANDO", delay: 1000 },
      { status: "CARGANDO", delay: 2000 },
      { status: "CONECTADO", delay: 3000 },
      { status: "UMBRAL ACTIVO", delay: 4000 },
    ]

    initSequence.forEach(({ status, delay }) => {
      setTimeout(() => setSystemStatus(status), delay)
    })
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-void/90 backdrop-blur-xl border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop/Tablet Layout (>640px) */}
        <div className="hidden sm:flex sm:justify-between sm:items-center text-xs font-space-mono gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              <span className="text-neon-cyan font-orbitron text-xs sm:text-sm whitespace-nowrap">SISTEMA UMBRAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity size={12} className="sm:w-3.5 sm:h-3.5 text-electric-pink" />
              <span className="text-electric-pink text-xs whitespace-nowrap">{systemStatus}</span>
            </div>
            <button
              onClick={() => scrollToSection("como-leerlo")}
              className="text-ghost hover:text-neon-cyan transition-colors duration-300 text-xs whitespace-nowrap cursor-pointer"
            >
              CÓMO LEERLO
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <div className="flex items-center space-x-2">
              <Wifi size={12} className="sm:w-3.5 sm:h-3.5 text-neon-cyan" />
              <span className="text-ghost text-xs whitespace-nowrap">CONECTADO</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={12} className="sm:w-3.5 sm:h-3.5 text-electric-pink" />
              <span className="text-ghost text-xs whitespace-nowrap">SEGURO</span>
            </div>
            <span className="text-neon-cyan text-xs whitespace-nowrap" data-clock>
              {time}
            </span>
          </div>
        </div>

        {/* Mobile Layout (≤640px) */}
        <div className="block sm:hidden text-xs font-space-mono space-y-2">
          {/* Primera línea: SISTEMA UMBRAL - UMBRAL ACTIVO */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-neon-cyan font-orbitron text-xs whitespace-nowrap">SISTEMA UMBRAL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity size={12} className="text-electric-pink flex-shrink-0" />
              <span className="text-electric-pink text-xs whitespace-nowrap">{systemStatus}</span>
            </div>
          </div>

          {/* Segunda línea: CONECTADO - HORA */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Wifi size={12} className="text-neon-cyan flex-shrink-0" />
              <span className="text-ghost text-xs whitespace-nowrap">CONECTADO</span>
            </div>
            <span className="text-neon-cyan text-xs whitespace-nowrap" data-clock>
              {time}
            </span>
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <button
              onClick={() => scrollToSection("como-leerlo")}
              className="chip text-xs cursor-pointer hover:bg-electric-pink/20 transition-colors"
            >
              CÓMO LEERLO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
