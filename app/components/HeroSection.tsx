"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, Play, ChevronLeft, X } from "lucide-react"
import ScanningSequence from "./ScanningSequence"

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [systemReady, setSystemReady] = useState(false)
  const [showScanning, setShowScanning] = useState(false)
  const [showBackCover, setShowBackCover] = useState(false)
  const [showSkipButton, setShowSkipButton] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [heroTypedText, setHeroTypedText] = useState("")
  const [showMainQuestion, setShowMainQuestion] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showButtons, setShowButtons] = useState(false) // Declare setShowButtons and showButtons

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

  const heroPrompt = "UMBRAL> Entrar? [s/n] "
  const targetText = "UMBRAL> Entrar? [s/n] "

  useEffect(() => {
    // Disable scroll initially
    document.body.style.overflow = "hidden"

    // Check if user has already experienced the system
    const hasExperienced = localStorage.getItem("experiencia_iniciada") === "true"
    if (hasExperienced) {
      setShowSkipButton(true)
    }

    // System initialization sequence
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
              }, 30)
            },
            i === 0 ? 500 : 800,
          )
        })
      }
    }

    initializeSystem()

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < targetText.length) {
        setCurrentText(targetText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowMainQuestion(true), 500)
        setTimeout(() => setShowButtons(true), 1000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (systemReady) {
      // Additional logic if needed
    }
  }, [systemReady])

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
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showImageModal, currentImageIndex])

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

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          navigateImage(1)
        } else {
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
    localStorage.setItem("experiencia_iniciada", "true")
    setShowScanning(true)
  }

  const handleSkipToContent = () => {
    document.body.style.overflow = "unset"
    setSystemReady(true)
    setShowScanning(false)

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const handleScanningComplete = () => {
    document.body.style.overflow = "unset"
    setSystemReady(true)
    setShowScanning(false)
  }

  const toggleCover = () => {
    setShowBackCover(!showBackCover)
    setIsFlipped(!isFlipped)
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
    setIsFlipped(newIndex === 1)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Show scanning sequence
  if (showScanning && !systemReady) {
    return <ScanningSequence onComplete={handleScanningComplete} />
  }

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-16">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-electric-pink/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-neon-cyan/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* System Initialization Phase */}
          {!systemReady && (
            <div className="text-center space-y-8">
              <div className="system-panel p-6 sm:p-8 max-w-2xl mx-auto bg-void/90 backdrop-blur-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse"></div>
                    <span className="text-neon-cyan font-space-mono text-sm">SISTEMA_UMBRAL_v2.1.0</span>
                  </div>
                </div>

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

                <div className="w-full h-1 bg-void border border-neon-cyan/30 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-electric-pink transition-all duration-1000"
                    style={{ width: `${((currentStep + 1) / systemSteps.length) * 100}%` }}
                  />
                </div>

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

          {/* Main Hero Interface */}
          {systemReady && (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Terminal Prompt and Main Question */}
              <div className="order-1 lg:order-1 space-y-6 lg:space-y-8">
                <div className="fade-in-sequence">
                  <div className="system-panel p-8 hologram-effect">
                    <div className="space-y-6">
                      {/* System Header */}
                      <div className="flex items-center justify-between border-b border-neon-cyan/20 pb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-error"></div>
                          <div className="w-3 h-3 rounded-full bg-warning"></div>
                          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                        </div>
                        <span className="font-space-mono text-xs text-ghost/60">SISTEMA_NEURAL_v2.1</span>
                      </div>

                      {/* Terminal Content */}
                      <div className="space-y-4">
                        <div className="font-space-mono text-sm text-neon-cyan">
                          <div>INICIANDO PROTOCOLO DE ACCESO...</div>
                          <div>VERIFICANDO CREDENCIALES...</div>
                          <div className="text-terminal-green">✓ ACCESO AUTORIZADO</div>
                        </div>

                        {/* Main Prompt */}
                        <div className="font-space-mono text-lg text-ghost">
                          {heroTypedText}
                          {heroTypedText.length < heroPrompt.length && <span className="system-cursor"></span>}
                        </div>

                        {/* Question */}
                        {showMainQuestion && (
                          <div className="fade-in-sequence">
                            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-ghost leading-tight">
                              <span className="system-glitch" data-text="¿Te atreverías">
                                ¿Te atreverías
                              </span>
                              <br />
                              <span className="text-neon-cyan">a cruzar</span>
                              <br />
                              <span className="text-electric-pink">el umbral?</span>
                            </h1>
                          </div>
                        )}

                        {/* CTA Buttons */}
                        {showButtons && (
                          <div className="fade-in-sequence space-y-4 pt-6">
                            <a
                              href="https://amazon.com/dp/B0DJJQX8QY"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-button-amazon inline-block px-8 py-4 rounded-lg font-orbitron font-semibold text-void transition-all duration-300 hover:scale-105 focus:scale-105"
                            >
                              LEER EN AMAZON
                            </a>
                            <button
                              onClick={() => scrollToSection("podcast")}
                              className="cta-button-guide block w-full px-8 py-4 rounded-lg font-orbitron font-semibold text-neon-cyan transition-all duration-300 hover:scale-105 focus:scale-105"
                            >
                              ESCUCHAR EL PODCAST
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Cover with 3D Flip Effect */}
              <div className="order-2 lg:order-2 flex justify-center">
                <div className="book-3d-container w-80 max-w-full">
                  <div
                    className={`book-3d-inner ${isFlipped ? "is-flipped" : ""}`}
                    onClick={() => toggleCover()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        toggleCover()
                      }
                    }}
                    aria-label="Voltear libro para ver la contratapa"
                  >
                    {/* Front Cover */}
                    <div className="book-face book-front">
                      <Image
                        src="/images/UMBRAL_PORTADA_OFICIAL.png"
                        alt="Portada del libro UMBRAL"
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                        priority
                      />
                    </div>

                    {/* Back Cover */}
                    <div className="book-face book-back">
                      <Image
                        src="/images/CONTRATAPA_UMBRAL_OFICIAL.png"
                        alt="Contratapa del libro UMBRAL"
                        fill
                        className="object-cover rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Viewer Modal */}
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

            <div
              className="bg-void overflow-hidden"
              style={{
                height: "calc(100% - 52px)",
                padding: "0.75rem",
              }}
            >
              <div
                className="w-full h-full bg-void overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: "2 / 3",
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
                    border: "none",
                  }}
                  quality={85}
                  priority={false}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 767px) 92vw, (max-width: 1200px) 80vw, 980px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
