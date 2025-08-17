"use client"

import { useEffect, useState } from "react"
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
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-neon-cyan/20 bg-void/90">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-6 bg-void/50">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              <span className="font-orbitron text-neon-cyan font-bold">UMBRAL</span>
              <span className="font-space-mono text-xs text-ghost/70">v2.1.0</span>
            </div>

            <div className="text-center sm:text-right">
              <p className="font-space-mono text-xs text-ghost/70">© 2024 Federico Daniel Ara</p>
              <p className="font-space-mono text-xs text-neon-cyan/70 mt-1">SISTEMA_UMBRAL.exe</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
