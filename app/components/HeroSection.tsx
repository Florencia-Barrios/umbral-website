"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, Headphones, ChevronRight, Play, Maximize2, ChevronLeft, X } from "lucide-react"
import ScanningSequence from "./ScanningSequence"

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [systemReady, setSystemReady] = useState(false)
  const [showScanning, setShowScanning] = useState(false)
  const [showBackCover, setShowBackCover] = useState(false)
  const [showSkipButton, setShowSkipButton] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // New Image Viewer Modal States
  const [showImageModal, setShowImageModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const systemSteps = [
    "INICIALIZANDO SISTEMA UMBRAL...",
    "Autenticación aceptada",
    "Cargando entorno inmersivo...",
    "Portal activo. Iniciar experiencia",
  ]

  const images = [
    {
      src: "/images/UMBRAL_PORTADA_OFICIAL.png",
      alt: "UMBRAL - Portada Oficial",
      title: "PORTADA",
    },
    {
      src: "/images/CONTRATAPA_UMBRAL_OFICIAL.png",
      alt: "UMBRAL - Contratapa Oficial",
      title: "CONTRATAPA",
    },
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showImageModal) {
        switch (e.key) {
          case "Escape":
            closeImageModal()
            break
          case "ArrowLeft":
            e.preventDefault()
            navigateImage(-1)
            break
          case "ArrowRight":
            e.preventDefault()
            navigateImage(1)
            break
        }
      } else if (systemReady) {
        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault()
            setShowBackCover(false)
            break
          case "ArrowRight":
            e.preventDefault()
            setShowBackCover(true)
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showImageModal, currentImageIndex, systemReady])

  useEffect(() => {
    if (!systemReady) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return

      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Only trigger if horizontal swipe is more significant than vertical and threshold is met
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX > 0) {
          // Swipe left - show back cover
          setShowBackCover(true)
        } else {
          // Swipe right - show front cover
          setShowBackCover(false)
        }
      }

      startX = 0
      startY = 0
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [systemReady])

  // Touch/Swipe handling for image modal
  useEffect(() => {
    if (!showImageModal) return

    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return

      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY

      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next image
          navigateImage(1)
        } else {
          // Swipe right - previous image
          navigateImage(-1)
        }
      }

      startX = 0
      startY = 0
    }

    document.addEventListener("touchstart", handleTouchStart)
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [showImageModal])

  const handleStartExperience = () => {
    // Save that user has initiated the experience
    localStorage.setItem("experiencia_iniciada", "true")
    setShowScanning(true)
  }

  const handleSkipToContent = () => {
    // Skip scanning and go directly to main content (portada section)
    document.body.style.overflow = "unset"
    setSystemReady(true)
    setShowScanning(false)

    // Smooth scroll to the beginning of main content (not synopsis)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
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

  const openImageModal = () => {
    const imageIndex = showBackCover ? 1 : 0
    setCurrentImageIndex(imageIndex)
    setShowImageModal(true)
    document.body.style.overflow = "hidden"
  }

  const closeImageModal = () => {
    setShowImageModal(false)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: number) => {
    const newIndex = (currentImageIndex + direction + images.length) % images.length
    setCurrentImageIndex(newIndex)
  }

  const scrollToPodcast = () => {
    const podcastSection = document.getElementById("podcast")
    if (podcastSection) {
      podcastSection.scrollIntoView({ behavior: "smooth" })
    }
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
                      style={{
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        hyphens: "none",
                      }}
                    >
                      <span className="text-electric-pink mr-2 flex-shrink-0">{">"}</span>
                      <span className="flex-1 min-w-0">
                        {index === currentStep ? (
                          <>
                            {typedText}
                            <span className="system-cursor"></span>
                          </>
                        ) : (
                          step
                        )}
                      </span>
                      {index < currentStep && <span className="text-electric-pink ml-2 flex-shrink-0">✔</span>}
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

                    {/* Skip Button - Rediseñado */}
                    {showSkipButton && (
                      <button
                        onClick={handleSkipToContent}
                        className="bg-transparent text-gray-400 px-4 py-2 rounded font-space-mono text-sm transition-colors duration-300 hover:text-neon-cyan cursor-pointer mx-auto block"
                      >
                        Ingresar sin iniciar protocolo
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Interface */}
          {systemReady && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
              {/* Book Cover with Manual Controls and 3D Effects */}
              <div className="order-2 lg:order-1 fade-in-sequence">
                <div className="system-panel p-6 sm:p-8 bg-void/90 backdrop-blur-xl hologram-effect" aria-live="polite">
                  {/* Nueva barra de controles superior */}
                  <div className="flex items-center justify-between mb-4 text-xs font-space-mono">
                    <button
                      onClick={toggleCover}
                      className="text-ghost hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
                      aria-pressed={showBackCover ? "true" : "false"}
                    >
                      <span>
                        {">"} [{showBackCover ? "VER PORTADA" : "VER CONTRATAPA"}]
                      </span>
                    </button>

                    <button
                      onClick={openImageModal}
                      className="text-ghost hover:text-electric-pink transition-colors duration-300 cursor-pointer p-1"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>

                  <div className="relative mb-4">
                    <div className="cover-card group">
                      <div className="relative">
                        {/* New umbral-flip-stage structure */}
                        <div className={`umbral-flip-stage ${showBackCover ? "isBack" : ""}`}>
                          {/* Front Face - Portada */}
                          <figure className="umbral-flip-card front">
                            <Image
                              src="/images/UMBRAL_PORTADA_OFICIAL.png"
                              alt="Portada de UMBRAL"
                              width={400}
                              height={600}
                              className="w-full h-full object-contain"
                              priority
                            />
                          </figure>
                          {/* Back Face - Contratapa */}
                          <figure className="umbral-flip-card back">
                            <Image
                              src="/images/CONTRATAPA_UMBRAL_OFICIAL.png"
                              alt="Contratapa de UMBRAL"
                              width={400}
                              height={600}
                              className="w-full h-full object-contain"
                              priority
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
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
                  <div
                    className="system-panel p-6 sm:p-8 bg-void/90 backdrop-blur-xl"
                    role="region"
                    aria-labelledby="hero-title"
                  >
                    <div className="flex items-center mb-6 text-sm font-space-mono">
                      <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse flex-shrink-0"></div>
                      <span className="text-neon-cyan">SISTEMA_INICIADO</span>
                    </div>

                    <div className="mb-8">
                      <div
                        className="text-sm text-ghost/74 mb-3 font-inter leading-relaxed"
                        style={{ fontSize: "clamp(14px, 0.9vw + 12px, 18px)" }}
                      >
                        "La puerta no es el destino. Es lo que uno se convierte al cruzarla."
                      </div>

                      <h1
                        id="hero-title"
                        className="text-neon-cyan font-orbitron font-bold leading-tight mb-4"
                        style={{
                          fontSize: "clamp(28px, 3vw + 12px, 48px)",
                          lineHeight: "1.15",
                          letterSpacing: "0.02em",
                          textShadow: "0 0 18px rgba(0,255,255,0.12)",
                          marginBottom: "clamp(12px, 2vw, 20px)",
                        }}
                      >
                        ¿Te atreverías a cruzar el umbral?
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 fade-in-sequence">
                  <div className="cta-row">
                    {/* Primary CTA - Amazon */}
                    <a
                      href="https://amazon.com/dp/B0DJQXQXQX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-primary"
                      aria-label="Leer UMBRAL en Amazon"
                    >
                      <Download size={18} className="flex-shrink-0" />
                      <span>Leer en Amazon</span>
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform flex-shrink-0"
                      />
                    </a>

                    {/* Secondary CTA - Podcast */}
                    <button
                      onClick={scrollToPodcast}
                      className="cta-secondary"
                      aria-label="Escuchar el podcast de UMBRAL"
                    >
                      <Headphones size={18} className="flex-shrink-0" />
                      <span>Escuchar el podcast</span>
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform flex-shrink-0"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Viewer Modal - Final Optimized Version */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-void/95 backdrop-blur-xl z-50 flex items-center justify-center"
          onClick={closeImageModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-viewer-title"
          style={{
            paddingTop: "max(1rem, env(safe-area-inset-top))",
            paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
          }}
        >
          <div
            className="relative bg-void/90 border border-neon-cyan/30 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "clamp(360px, 92vw, 980px)",
              height: "min(92vh, 980px)",
              maxWidth: "980px",
              maxHeight: "92vh",
            }}
          >
            {/* Header - Compact with 8px gap */}
            <div className="sticky top-0 bg-void/95 backdrop-blur-xl border-b border-neon-cyan/20 px-3 py-2 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse flex-shrink-0"></div>
                <h2
                  id="image-viewer-title"
                  className="font-orbitron text-neon-cyan text-sm leading-tight"
                  style={{
                    wordBreak: "keep-all",
                    overflowWrap: "break-word",
                    textWrap: "balance",
                  }}
                >
                  VISTA_PREVIA / {images[currentImageIndex].title}
                </h2>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Navigation arrows - Exact 44x44px with 8px gap */}
                <button
                  onClick={() => navigateImage(-1)}
                  className="w-11 h-11 bg-void/60 hover:bg-void/80 border border-neon-cyan/30 hover:border-neon-cyan/50 text-ghost hover:text-neon-cyan rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={() => navigateImage(1)}
                  className="w-11 h-11 bg-void/60 hover:bg-void/80 border border-neon-cyan/30 hover:border-neon-cyan/50 text-ghost hover:text-neon-cyan rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Close button - Exact 44x44px */}
                <button
                  onClick={closeImageModal}
                  className="w-11 h-11 bg-void/60 hover:bg-void/80 border border-neon-cyan/30 hover:border-neon-cyan/50 text-ghost hover:text-neon-cyan rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  aria-label="Cerrar"
                  autoFocus
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Image Container - Homogeneous padding, no image border */}
            <div
              className="bg-void overflow-hidden"
              style={{
                height: "calc(100% - 52px)", // Header is now 52px (py-2 = 16px + content ~36px)
                padding: "0.75rem", // 12px base for mobile
              }}
            >
              <div
                className="w-full h-full bg-void overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "2 / 3", // Default book cover ratio
                }}
              >
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  width={800}
                  height={1200}
                  className="max-w-full max-h-full w-auto h-auto"
                  style={{
                    objectFit: "contain",
                    border: "none", // NO BORDER on image
                  }}
                  quality={85}
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
