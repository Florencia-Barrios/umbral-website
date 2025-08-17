"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Download, ExternalLink } from "lucide-react"

export default function DownloadSection() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
      <section id="descarga" className="py-20 px-4 bg-void/50">
        <div className="container mx-auto max-w-4xl">
          <div className="system-panel p-8 md:p-12">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan">CÓMO LEERLO</h2>

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Book Cover Miniature */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-48 relative">
                    <Image
                      src="/images/UMBRAL_PORTADA_OFICIAL.png"
                      alt="Portada del libro UMBRAL"
                      fill
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-orbitron font-semibold text-ghost">
                    ¿Cómo conseguir <span className="text-electric-pink italic">Umbral</span> gratis?
                  </h3>

                  <p className="text-ghost/80 text-lg">
                    Durante los días de promoción, podés descargar el libro completamente gratis desde Amazon Kindle.
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={openModal}
                      className="cta-button-guide w-full md:w-auto px-8 py-4 rounded-lg font-orbitron font-semibold transition-all duration-300 hover:scale-105 focus:scale-105 flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      VER GUÍA DE DESCARGA
                    </button>

                    <a
                      href="https://amazon.com/dp/B0DJJQX8QY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button-amazon inline-flex items-center gap-2 px-8 py-4 rounded-lg font-orbitron font-semibold text-void transition-all duration-300 hover:scale-105 focus:scale-105"
                    >
                      <ExternalLink size={20} />
                      IR A AMAZON AHORA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="system-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neon-cyan/20">
                <h3 className="text-xl font-orbitron font-bold text-neon-cyan">
                  GUÍA PARA DESCARGAR UMBRAL GRATIS EN AMAZON
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-ghost hover:text-electric-pink transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Steps */}
              <div className="space-y-6 font-space-mono">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-cyan text-void rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <div>
                      <p className="text-ghost">
                        <strong>Crea una cuenta en Amazon</strong> (si aún no tenés una).
                      </p>
                      <p className="text-ghost/70 text-sm mt-1">Podés usar cualquier correo electrónico.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-cyan text-void rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <div>
                      <p className="text-ghost">
                        <strong>Descargá la app Kindle</strong> (gratis) en tu celular o computadora.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-cyan text-void rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </span>
                    <div>
                      <p className="text-ghost">
                        Inicia sesión en Amazon y buscá <strong>"Umbral Federico Daniel Ara"</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-cyan text-void rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </span>
                    <div>
                      <p className="text-ghost">
                        Seleccioná la edición Kindle y hacé clic en <strong>"Comprar en 1 clic"</strong>.
                      </p>
                      <p className="text-electric-pink text-sm mt-1">
                        Durante los días de promoción el precio será 0 € / 0 $.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-cyan text-void rounded-full flex items-center justify-center font-bold text-sm">
                      5
                    </span>
                    <div>
                      <p className="text-ghost">
                        <strong>Abrí la app Kindle</strong>: el libro ya estará disponible en tu biblioteca.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tip Section */}
                <div className="border-l-4 border-electric-pink pl-4 py-2 bg-electric-pink/10 rounded-r">
                  <p className="text-electric-pink font-semibold text-sm">TIP:</p>
                  <p className="text-ghost text-sm">
                    Si preferís, también podés pedir la versión en tapa blanda o tapa dura, con envío a tu país desde
                    Amazon.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="cta-button-guide px-8 py-3 rounded-lg font-orbitron font-semibold transition-all duration-300 hover:scale-105 focus:scale-105"
                >
                  CERRAR GUÍA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
