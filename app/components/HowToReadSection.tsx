"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ExternalLink } from "lucide-react"

export default function HowToReadSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetailedGuide, setShowDetailedGuide] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("how-to-read-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const toggleDetailedGuide = () => {
    setShowDetailedGuide(!showDetailedGuide)
  }

  return (
    <section
      id="how-to-read-section"
      className={`py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="umbral-panel">
          {/* Header */}
          <div className="flex items-center mb-6 text-sm font-space-mono">
            <div className="w-3 h-3 bg-neon-cyan rounded-full mr-3 animate-pulse flex-shrink-0"></div>
            <span className="text-neon-cyan">SISTEMA_LECTURA</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold text-neon-cyan mb-4 glow-text text-center">
            CÓMO LEERLO
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-ghost mb-6 font-inter leading-relaxed text-center">
            Elegí cómo querés leer <em className="text-electric-pink">Umbral</em>: en versión digital (Kindle) o en
            papel.
          </p>

          {/* Brief description */}
          <div className="mb-8 text-center">
            <p className="text-sm sm:text-base text-ghost/90 font-inter leading-relaxed mb-6">
              Podés leer <em className="text-electric-pink">Umbral</em> en formato Kindle desde cualquier dispositivo
              con la app Kindle, o pedirlo en versión impresa con envío internacional.
            </p>
            <p className="text-sm sm:text-base text-ghost/90 font-inter leading-relaxed">
              Seleccioná la opción que prefieras:
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://amazon.com/dp/B0DJJQX8VH"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-amazon text-void px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 group border border-transparent hover:scale-105 active:scale-95"
            >
              <ExternalLink size={18} className="flex-shrink-0" />
              <span>IR A AMAZON</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            <div className="relative group">
              <button className="neon-button-kindle w-full text-void px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 border border-transparent hover:scale-105 active:scale-95">
                <ExternalLink size={18} className="flex-shrink-0" />
                <span>DESCARGAR APP KINDLE</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </button>

              {/* Dropdown for Kindle apps */}
              <div className="absolute top-full left-0 right-0 mt-2 bg-void/95 border border-neon-cyan/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <a
                  href="https://play.google.com/store/apps/details?id=com.amazon.kindle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-ghost hover:text-neon-cyan hover:bg-neon-cyan/10 transition-colors duration-300 border-b border-neon-cyan/20"
                >
                  Google Play Store
                </a>
                <a
                  href="https://apps.apple.com/app/amazon-kindle/id302584613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-ghost hover:text-neon-cyan hover:bg-neon-cyan/10 transition-colors duration-300"
                >
                  Apple App Store
                </a>
              </div>
            </div>
          </div>

          {/* Console-style expandable guide */}
          <div className="border-t border-neon-cyan/20 pt-6">
            <button
              onClick={toggleDetailedGuide}
              className="text-electric-pink hover:text-neon-cyan transition-colors duration-300 font-space-mono text-sm cursor-pointer group"
            >
              <span className="mr-2">{">"}</span>
              <span className="group-hover:underline">ver_guía_detallada()</span>
            </button>

            {/* Expandable detailed guide */}
            {showDetailedGuide && (
              <div className="mt-6 system-panel p-4 sm:p-6 bg-void/50 border-neon-cyan/10 animate-in slide-in-from-top-2 duration-300">
                <div className="font-space-mono text-xs sm:text-sm leading-relaxed text-ghost space-y-4 text-left">
                  <div>
                    <div className="text-electric-pink mb-3 font-semibold">Opción 1 – Versión Kindle</div>

                    <div className="mb-4">
                      <div className="text-neon-cyan mb-2 text-xs">{">"} A) Comprar en Amazon</div>
                      <div className="space-y-1 ml-2 text-xs text-left">
                        <div>1. Entrá a Amazon con el botón principal.</div>
                        <div>2. Si no tenés cuenta de Amazon, creala (gratis).</div>
                        <div className="ml-4 text-neon-cyan">→ Usá un email y contraseña que recuerdes.</div>
                        <div>3. Elegí "Versión Kindle".</div>
                        <div>
                          4. Si Amazon te pide un método de pago, agregalo (lo solicita aunque el precio sea 0).
                        </div>
                        <div className="ml-4 text-ghost/70">No se te cobra si el precio es 0.</div>
                        <div>5. Confirmá la compra. Listo.</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-neon-cyan mb-2 text-xs">{">"} B) Leer en la App Kindle</div>
                      <div className="space-y-1 ml-2 text-xs text-left">
                        <div>1. Descargá la app Kindle (gratis):</div>
                        <div className="ml-4 space-y-1">
                          <div>- Google Play – Descargar app Kindle</div>
                          <div>- App Store – Descargar app Kindle</div>
                        </div>
                        <div>2. Iniciá sesión con la MISMA cuenta de Amazon que usaste para comprar el libro.</div>
                        <div>
                          3. En "Biblioteca", esperá unos segundos y tocá "Sincronizar" (o arrastrá hacia abajo para
                          refrescar).
                        </div>
                        <div>4. Abrí "UMBRAL".</div>
                        <div>5. Opcional: Ajustá tamaño de letra, modo oscuro y márgenes.</div>
                        <div>6. Para leer sin conexión: abrí el libro y dejá que se descargue por completo.</div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-neon-cyan/25 my-4"></div>

                    <div>
                      <div className="text-electric-pink mb-3 font-semibold">Opción 2 – Libro en Papel</div>
                      <div className="space-y-1 text-xs text-left">
                        <div>- Disponible con envío internacional (desde USA o España).</div>
                        <div>- Necesitás cuenta de Amazon para comprar.</div>
                        <div>
                          - Completá tu dirección real para que Amazon calcule costo y confirme el envío antes de pagar.
                        </div>
                        <div>
                          - El precio final (incluyendo posibles costos de importación) se muestra antes de confirmar la
                          compra.
                        </div>
                        <div>
                          - Disponibilidad y costos pueden variar según tu ubicación y el stock del marketplace.
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-neon-cyan/25 my-4"></div>

                    <div className="text-neon-cyan text-xs text-left">
                      {">"} Nota: No necesitás un Kindle físico. La app Kindle es gratis y funciona en celular, tablet o
                      PC.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
