"use client"

import { useEffect, useState } from "react"
import { Eye, Shield } from "lucide-react"

interface ScanningSequenceProps {
  onComplete: () => void
}

export default function ScanningSequence({ onComplete }: ScanningSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [progress, setProgress] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const scanningSteps = [
    "Detección de consciencia activa...",
    "Señales de disociación presentes...",
    "Compatible con protocolo UMBRAL.",
  ]

  useEffect(() => {
    const executeScanningSequence = async () => {
      for (let i = 0; i < scanningSteps.length; i++) {
        await new Promise<void>((resolve) => {
          setTimeout(
            () => {
              setCurrentStep(i)
              // Faster typing animation
              let charIndex = 0
              const currentText = scanningSteps[i]
              setTypedText("")

              const typeInterval = setInterval(() => {
                if (charIndex < currentText.length) {
                  setTypedText(currentText.slice(0, charIndex + 1))
                  charIndex++
                } else {
                  clearInterval(typeInterval)

                  // Add completed step to the list after typing is done
                  setTimeout(() => {
                    setCompletedSteps((prev) => [...prev, currentText])
                    // Update progress
                    setProgress(((i + 1) / scanningSteps.length) * 100)
                    resolve()
                  }, 500) // Small delay to show the completed line
                }
              }, 40) // Faster typing
            },
            i === 0 ? 300 : 800, // Faster sequence
          )
        })
      }

      // Wait for the last step to be visible in both panels before completing
      setTimeout(() => {
        setScanComplete(true)
        setTimeout(() => {
          onComplete()
        }, 1500) // Shorter wait time
      }, 1500) // Additional delay to see the third step in the lower panel
    }

    executeScanningSequence()
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-void z-50 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital noise particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Glitch overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/5 to-transparent animate-pulse" />
      </div>

      {/* HUD Interface */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 max-h-screen overflow-hidden">
        {/* HUD Frame */}
        <div className="relative">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-neon-cyan"></div>
          <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-neon-cyan"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-neon-cyan"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-neon-cyan"></div>

          {/* Scanning lines */}
          <div className="absolute inset-0 border border-neon-cyan/30 rounded-lg">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-pink to-transparent animate-pulse"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-pulse"></div>
          </div>

          {/* Main Content */}
          <div className="relative p-6 sm:p-8 lg:p-12 max-h-screen overflow-hidden">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Eye size={20} className="sm:w-6 sm:h-6 text-electric-pink mr-3 animate-pulse flex-shrink-0" />
                <span className="font-orbitron text-lg sm:text-xl lg:text-2xl text-electric-pink break-words">
                  PROTOCOLO DE IDENTIFICACIÓN
                </span>
              </div>
            </div>

            {/* Scanning Display */}
            <div className="space-y-6 mb-8">
              {/* Current scan line */}
              <div className="bg-void/50 border border-neon-cyan/20 rounded-lg p-4 sm:p-6">
                <div className="font-space-mono text-sm sm:text-base lg:text-lg text-ghost leading-relaxed break-words flex items-center">
                  <span className="text-electric-pink mr-2">{">"}</span>
                  <span className="flex-1">
                    {typedText}
                    {currentStep < scanningSteps.length && <span className="system-cursor"></span>}
                  </span>
                  {currentStep < scanningSteps.length && typedText === scanningSteps[currentStep] && (
                    <span className="text-electric-pink ml-2">✔</span>
                  )}
                </div>
              </div>

              {/* Previous scan results - Now shows all completed steps including the current one */}
              {completedSteps.length > 0 && (
                <div className="space-y-2">
                  {completedSteps.map((step, index) => (
                    <div
                      key={index}
                      className="font-space-mono text-xs sm:text-sm text-neon-cyan/60 flex items-center break-words"
                    >
                      <span className="text-electric-pink mr-2">{">"}</span>
                      <span className="flex-1 min-w-0">{step}</span>
                      <span className="ml-2 text-electric-pink flex-shrink-0">✔</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-space-mono text-xs text-neon-cyan">PROGRESO_ESCANEO</span>
                <span className="font-space-mono text-xs text-electric-pink">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-void border border-neon-cyan/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan to-electric-pink transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Scan Complete Message */}
            {scanComplete && (
              <div className="text-center fade-in-sequence">
                <div className="flex items-center justify-center mb-4">
                  <Shield size={20} className="sm:w-6 sm:h-6 text-electric-pink mr-3 flex-shrink-0" />
                  <span className="font-orbitron text-lg sm:text-xl text-electric-pink break-words">
                    IDENTIDAD VÁLIDA
                  </span>
                </div>
                <div className="font-space-mono text-xs sm:text-sm text-neon-cyan mb-4 break-words">
                  Desplegando entorno...
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
