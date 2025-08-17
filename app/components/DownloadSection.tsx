"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Download, X, ExternalLink } from "lucide-react"

export default function DownloadSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
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

  const openModal = () => {
    setShowModal(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow = "unset"
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showModal])

  return (
    <section id="descarga" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-void/50">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <div className="system-panel p-8 sm:p-10 hologram-effect">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-orbitron text-neon-cyan mb-4">
                  ¿Cómo conseguir UMBRAL gratis?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Book Cover Miniature */}
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neon-cyan/20 to-electric-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    <div className="relative system-panel p-4 bg-void/50 max-w-xs">
                      <Image
                        src="/images/UMBRAL_PORTADA_OFICIAL.png"
                        alt="UMBRAL - Portada del libro"
                        width={300}
                        height={450}
                        className="w-full rounded-lg shadow-2xl border border-neon-cyan/30"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Download Info */}
                <div className="space-y-6">
                  <div className="system-panel p-6 bg-void/30 border-neon-cyan/10">
                    <div className="flex items-center mb-4 text-sm font-space-mono text-neon-cyan">
                      <span className="mr-2">{">"}</span>
                      <span>info_descarga.txt</span>
                    </div>
                    <p className="text-ghost leading-relaxed text-base sm:text-lg mb-6">
                      Durante el período de lanzamiento, UMBRAL está disponible{" "}
                      <span className="text-electric-pink font-semibold">completamente gratis</span> en Amazon Kindle.
                      También disponible en formato físico con envío internacional.
                    </p>
                  </div>

                  <button
                    onClick={openModal}
                    className="w-full bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group"
                  >
                    <Download size={20} className="flex-shrink-0" />
                    <span>Ver guía de descarga</span>
                    <ExternalLink size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Guide Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-void/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-void/90 border border-neon-cyan/30 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-title"
          >
            {/* Header */}
            <div className="sticky top-0 bg-void/95 backdrop-blur-xl border-b border-neon-cyan/20 p-6 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                <h2 id="guide-title" className="text-xl font-orbitron text-neon-cyan">
                  GUÍA PARA DESCARGAR UMBRAL GRATIS EN AMAZON
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="w-11 h-11 bg-void/60 hover:bg-void/80 border border-neon-cyan/30 hover:border-neon-cyan/50 text-ghost hover:text-neon-cyan rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                aria-label="Cerrar guía"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
              <div className="system-panel p-6 bg-void/50 border-neon-cyan/10">
                <div className="flex items-center mb-6 text-sm font-space-mono text-neon-cyan">
                  <span className="mr-2">{">"}</span>
                  <span>cat guia_descarga_amazon.txt</span>
                </div>

                <div className="space-y-8 font-space-mono text-sm leading-relaxed text-ghost">
                  {/* Step by step guide */}
                  <div className="space-y-6">
                    <div className="border-l-2 border-neon-cyan/30 pl-4">
                      <div className="text-neon-cyan font-semibold mb-2">PASO 1</div>
                      <p>
                        Crea una cuenta en Amazon (si aún no tenés una).
                        <br />
                        Podés usar cualquier correo electrónico.
                      </p>
                    </div>

                    <div className="border-l-2 border-neon-cyan/30 pl-4">
                      <div className="text-neon-cyan font-semibold mb-2">PASO 2</div>
                      <p>Descargá la app Kindle (gratis) en tu celular o computadora.</p>
                    </div>

                    <div className="border-l-2 border-neon-cyan/30 pl-4">
                      <div className="text-neon-cyan font-semibold mb-2">PASO 3</div>
                      <p>Inicia sesión en Amazon y buscá "Umbral Federico Daniel Ara".</p>
                    </div>

                    <div className="border-l-2 border-neon-cyan/30 pl-4">
                      <div className="text-neon-cyan font-semibold mb-2">PASO 4</div>
                      <p>
                        Seleccioná la edición Kindle y hacé clic en "Comprar en 1 clic".
                        <br />
                        <span className="text-electric-pink">
                          Durante los días de promoción el precio será 0 € / 0 $.
                        </span>
                      </p>
                    </div>

                    <div className="border-l-2 border-neon-cyan/30 pl-4">
                      <div className="text-neon-cyan font-semibold mb-2">PASO 5</div>
                      <p>Abrí la app Kindle: el libro ya estará disponible en tu biblioteca.</p>
                    </div>
                  </div>

                  {/* Tip section */}
                  <div className="system-panel p-4 bg-electric-pink/5 border-electric-pink/20">
                    <div className="text-electric-pink font-semibold mb-2">💡 TIP</div>
                    <p>
                      Si preferís, también podés pedir la versión en tapa blanda o tapa dura,
                      <br />
                      con envío a tu país desde Amazon.
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan text-neon-cyan px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 font-space-mono"
                >
                  CERRAR GUÍA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
