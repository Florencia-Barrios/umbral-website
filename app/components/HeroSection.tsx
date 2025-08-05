"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, Headphones, ChevronRight, Play, Maximize2, SkipForward } from "lucide-react"
import ScanningSequence from "./ScanningSequence"

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [systemReady, setSystemReady] = useState(false)
  const [showScanning, setShowScanning] = useState(false)
  const [showBackCover, setShowBackCover] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [showSkipButton, setShowSkipButton] = useState(false)

  const systemSteps = [
    "INICIALIZANDO SISTEMA UMBRAL...",
    "Autenticación aceptada",
    "Cargando entorno inmersivo...",
    "Portal activo. Iniciar experiencia",
  ]

  useEffect(() => {
    // Disable scroll initially
    document.body.style.overflow = "hidden"

    // Check if user has already experienced the system
    const hasExperienced = localStorage.getItem("experiencia_iniciada") === "true"
    if (hasExperienced) {
      setShowSkipButton(true)
    }

    // System initialization sequence - SOLO UNA VEZ
    let isInitialized = false

    const initializeSystem = async () => {
      if (isInitialized) return
      isInitialized = true

      for (let i = 0; i < systemSteps.length; i++) {
        await new Promise<void>((resolve) => {
          setTimeout(
            () => {
              setCurrentStep(i)
              let charIndex = 0
              const currentText = systemSteps[i]
              setTypedText("")

              const typeInterval = setInterval(() => {
                if (charIndex < currentText.length) {
                  setTypedText(currentText.slice(0, charIndex + 1))
                  charIndex++
                } else {
                  clearInterval(typeInterval)
                  resolve()
                }
              }, 30) // Faster typing
            },
            i === 0 ? 500 : 800, // Faster sequence
          )
        })
      }
    }

    initializeSystem()

    return () => {
      // Re-enable scroll when component unmounts
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleStartExperience = () => {
    // Save that user has initiated the experience
    localStorage.setItem("experiencia_iniciada", "true")
    setShowScanning(true)
  }

  const handleSkipToContent = () => {
    // Skip scanning and go directly to main content
    document.body.style.overflow = "unset"
    setSystemReady(true)
    setShowScanning(false)

    // Smooth scroll to main content
    setTimeout(() => {
      const mainContent = document.querySelector("main")
      if (mainContent) {
        const heroHeight = window.innerHeight
        window.scrollTo({
          top: heroHeight,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const handleScanningComplete = () => {
    // Enable scroll and show main content
    document.body.style.overflow = "unset"
    setSystemReady(true)
    setShowScanning(false)
  }

  const toggleCover = () => {
    setShowBackCover(!showBackCover)
  }

  const openModal = () => {
    const imageSrc = showBackCover ? "/images/CONTRATAPA_UMBRAL_OFICIAL.png" : "/images/UMBRAL_PORTADA_OFICIAL.png"
    setModalImage(imageSrc)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = "unset"
  }

  // Show scanning sequence
  if (showScanning && !systemReady) {
    return <ScanningSequence onComplete={handleScanningComplete} />
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-electric-pink/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-neon-cyan/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto max-w-7xl">
          {/* System Initialization Phase */}
          {!systemReady && (
            <div className="text-center space-y-8">
              {/* System Console */}
              <div className="system-panel p-6 sm:p-8 max-w-2xl mx-auto bg-void/90 backdrop-blur-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
                    <span className="text-neon-cyan font-space-mono text-sm">SISTEMA_UMBRAL_v2.1.0</span>
                  </div>
                </div>

                {/* System Steps Display with checkmarks */}
                <div className="space-y-4 mb-8">
                  {systemSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`text-left font-space-mono text-sm transition-all duration-500 flex items-center ${
                        index < currentStep
                          ? "text-neon-cyan opacity-70"
                          : index === currentStep
                            ? "text-neon-cyan"
                            : "text-ghost/30"
                      }`}
                    >
                      <span className="text-electric-pink mr-2">{">"}</span>
                      <span className="flex-1">
                        {index === currentStep ? (
                          <>
                            {typedText}
                            <span className="system-cursor"></span>
                          </>
                        ) : (
                          step
                        )}
                      </span>
                      {index < currentStep && <span className="text-electric-pink ml-2">✔</span>}
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-void border border-neon-cyan/30 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-electric-pink transition-all duration-1000"
                    style={{ width: `${((currentStep + 1) / systemSteps.length) * 100}%` }}
                  />
                </div>

                {/* Entry Button - Unified for all devices */}
                {currentStep === systemSteps.length - 1 && !systemReady && (
                  <div className="fade-in-sequence space-y-4">
                    <button
                      onClick={handleStartExperience}
                      className="gradient-button text-void px-8 py-4 sm:px-12 sm:py-6 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 flex items-center justify-center space-x-3 group mx-auto w-full max-w-sm"
                    >
                      <Play size={20} className="sm:w-6 sm:h-6" />
                      <span>INICIAR EXPERIENCIA</span>
                      <ChevronRight
                        size={16}
                        className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      />
                    </button>

                    {/* Skip Button - Only shown if user has experienced before */}
                    {showSkipButton && (
                      <button
                        onClick={handleSkipToContent}
                        className="bg-transparent border-none text-neon-cyan px-4 py-2 rounded font-space-mono text-sm transition-all duration-300 hover:text-electric-pink hover:underline hover:shadow-lg hover:shadow-neon-cyan/20 cursor-pointer mx-auto block"
                        style={{
                          textShadow: "0 0 10px rgba(0, 250, 255, 0.3)",
                          marginTop: "1rem",
                        }}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <SkipForward size={14} />
                          <span>Ingresar sin iniciar protocolo</span>
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Interface */}
          {systemReady && (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Book Cover with Manual Controls */}
              <div className="order-2 lg:order-1 fade-in-sequence">
                <div className="system-panel p-6 sm:p-8 bg-void/90 backdrop-blur-xl hologram-effect">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-xs font-space-mono gap-2">
                    <span className="text-neon-cyan break-all">
                      {showBackCover ? "CONTRATAPA_OFICIAL.png" : "PORTADA_OFICIAL.png"}
                    </span>

                  </div>

                  {/* Image Container - Shared for both images */}
                  <div className="relative mb-6">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 to-electric-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="relative">
                        {/* Pre-loaded images - only one visible at a time */}
                        <div className="relative w-full max-w-sm mx-auto">
                          <Image
                            src="/images/UMBRAL_PORTADA_OFICIAL.png"
                            alt="UMBRAL - Portada Oficial"
                            width={400}
                            height={600}
                            className={`w-full rounded-lg shadow-2xl border border-neon-cyan/30 transition-all duration-500 ${
                              showBackCover ? "opacity-0 absolute inset-0" : "opacity-100"
                            }`}
                            style={{ objectFit: "contain" }}
                            priority
                          />
                          <Image
                            src="/images/CONTRATAPA_UMBRAL_OFICIAL.png"
                            alt="UMBRAL - Contratapa Oficial"
                            width={400}
                            height={600}
                            className={`w-full rounded-lg shadow-2xl border border-neon-cyan/30 transition-all duration-500 ${
                              showBackCover ? "opacity-100" : "opacity-0 absolute inset-0"
                            }`}
                            style={{ objectFit: "contain" }}
                            priority
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-electric-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  {/* Control Buttons - Clear and Visible */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    {/* Toggle Cover Button */}
                    <button
                      onClick={toggleCover}
                      className="flex-1 bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan text-neon-cyan px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group neon-glow"
                    >
                      <span className="text-lg">⭮</span>
                      <span>{showBackCover ? "VER PORTADA" : "VER CONTRATAPA"}</span>
                    </button>

                    {/* Expand Button */}
                    <button
                      onClick={openModal}
                      className="bg-electric-pink/10 hover:bg-electric-pink/20 border border-electric-pink text-electric-pink px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group electric-glow"
                    >
                      <Maximize2 size={16} className="group-hover:scale-110 transition-transform" />
                      <span>EXPANDIR</span>
                    </button>
                  </div>

                  <div className="data-stream space-y-1 text-xs break-words">
                    <div>FORMATO: PNG | RESOLUCIÓN: ALTA</div>
                    <div>ESTADO: PORTAL_ACTIVO</div>
                    <div>AUTOR: FEDERICO_DANIEL_ARA</div>
                    <div>VISTA: {showBackCover ? "CONTRATAPA" : "PORTADA"}</div>
                  </div>
                </div>
              </div>

              {/* System Information */}
              <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
                <div className="fade-in-sequence">
                  <div className="system-panel p-6 sm:p-8 bg-void/90 backdrop-blur-xl">
                    <div className="flex items-center mb-6 text-sm font-space-mono">
                      <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse flex-shrink-0"></div>
                      <span className="text-neon-cyan">SISTEMA_INICIADO</span>
                    </div>

                    <div className="mb-8">
                      <div className="text-xs text-electric-pink mb-2 font-space-mono">ARCHIVO_PRINCIPAL:</div>
                      <h1 className="glitch-text font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-ghost leading-tight break-words">
                        UMBRAL
                      </h1>
                    </div>

                    <div className="system-panel p-4 sm:p-6 mb-6 lg:mb-8 bg-void/50 border-electric-pink/20">
                      <div className="text-xs text-electric-pink mb-2 font-space-mono">MENSAJE_PRINCIPAL:</div>
                      <blockquote className="text-base sm:text-lg text-ghost italic font-inter leading-relaxed break-words">
                        "La puerta no es el destino. Es lo que uno se convierte al cruzarla."
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 fade-in-sequence">
                  <button className="w-full gradient-button text-void px-6 sm:px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group">
                    <Download size={20} className="flex-shrink-0" />
                    <span className="text-sm sm:text-base break-words">DESCARGAR DESDE AMAZON</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </button>

                  <button className="w-full bg-electric-pink/10 hover:bg-electric-pink/20 border border-electric-pink text-electric-pink px-6 sm:px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group electric-glow">
                    <Headphones size={20} className="flex-shrink-0" />
                    <span className="text-sm sm:text-base break-words">ACCEDER A PODCAST</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for image expansion */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-void/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full w-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute -top-16 right-4 sm:-top-12 sm:right-0 w-12 h-12 bg-electric-pink/20 border border-electric-pink text-electric-pink rounded-full flex items-center justify-center hover:bg-electric-pink/30 hover:scale-110 transition-all duration-300 z-10 text-xl font-bold"
              style={{ margin: "16px" }}
            >
              ×
            </button>
            <div className="relative inline-block">
              <Image
                src={modalImage || "/placeholder.svg"}
                alt="UMBRAL - Vista ampliada"
                width={800}
                height={1200}
                className="max-w-full max-h-[90vh] object-contain rounded-lg border border-neon-cyan/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
