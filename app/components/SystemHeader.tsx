"use client"

import { useEffect, useState } from "react"

export default function SystemHeader() {
  const [currentTime, setCurrentTime] = useState("")
  const [systemStatus, setSystemStatus] = useState("INITIALIZING")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Simulate system initialization
    setTimeout(() => setSystemStatus("ACTIVE"), 2000)
    setTimeout(() => setSystemStatus("MONITORING"), 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm border-b border-terminal-green/30">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-mono">
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green">UMBRAL</span>
          <span className="text-terminal-cyan">v2.1.0</span>
          <span
            className={`${systemStatus === "ACTIVE" ? "text-terminal-green" : systemStatus === "MONITORING" ? "text-terminal-cyan" : "text-error"}`}
          >
            [{systemStatus}]
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-terminal-green">{currentTime}</span>
          <span className="text-terminal-cyan">USER: READER</span>
          <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
