"use client"

import { useState, useEffect, useRef } from "react"

export default function ComoLeerloSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <section className="sinopsis-panel" id="como-leerlo" role="region" aria-labelledby="como_leerlo_h2">
              <h2 id="como_leerlo_h2" className="sinopsis-title">
                CÓMO LEERLO
              </h2>
              <h3 className="text-neon-cyan/70 font-space-mono text-sm mb-6">GUÍA_RÁPIDA</h3>

              <div className="sinopsis-content space-y-6">
                <div className="font-space-mono text-sm text-neon-cyan mb-4">
                  <span className="mr-2">{">"}</span>
                  <span>cat guia_compra.txt</span>
                </div>

                <div className="space-y-6">
                  {/* Opción 1 - Versión Kindle */}
                  <div>
                    <h4 className="text-electric-pink font-semibold mb-4">Opción 1 – Versión Kindle</h4>

                    <div className="space-y-4">
                      <div>
                        <div className="text-neon-cyan font-space-mono text-sm mb-2">{">"} A) Comprar en Amazon</div>
                        <div className="ml-4 space-y-1 text-sm leading-relaxed">
                          <div>1. Entrá a Amazon con el botón principal.</div>
                          <div>2. Si no tenés cuenta de Amazon, creala (gratis).</div>
                          <div className="ml-4 text-neon-cyan">→ Usá un email y contraseña que recuerdes.</div>
                          <div>3. Elegí "Versión Kindle".</div>
                          <div>4. Si hay promo de lanzamiento y el precio aparece en 0, tocá "Comprar ahora".</div>
                          <div>
                            5. Si Amazon te pide un método de pago, agregalo (lo solicita aunque el precio sea 0).
                          </div>
                          <div className="ml-4">No se cobra si el precio es 0.</div>
                          <div>6. Confirmá la compra. Listo.</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-neon-cyan font-space-mono text-sm mb-2">
                          {">"} B) Leer en la App Kindle
                        </div>
                        <div className="ml-4 space-y-1 text-sm leading-relaxed">
                          <div>1. Descargá la app Kindle (gratis):</div>
                          <div className="ml-4 space-y-2">
                            <div className="flex items-center">
                              <span className="mr-2">•</span>
                              <a
                                href="https://play.google.com/store/apps/details?id=com.amazon.kindle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip inline-flex items-center hover:bg-electric-pink/20 transition-colors"
                                aria-label="Descargar Kindle en Google Play"
                              >
                                Google Play — Descargar app Kindle
                              </a>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">•</span>
                              <a
                                href="https://apps.apple.com/app/amazon-kindle/id302584613"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip inline-flex items-center hover:bg-electric-pink/20 transition-colors"
                                aria-label="Descargar Kindle en App Store"
                              >
                                App Store — Descargar app Kindle
                              </a>
                            </div>
                          </div>
                          <div>2. Iniciá sesión con la MISMA cuenta de Amazon que usaste para comprar el libro.</div>
                          <div>3. En "Biblioteca", esperá unos segundos y tocá "Sincronizar"</div>
                          <div className="ml-4">(o arrastrá hacia abajo para refrescar).</div>
                          <div>4. Abrí "UMBRAL".</div>
                          <div>5. Opcional: Ajustá tamaño de letra, modo oscuro y márgenes.</div>
                          <div>6. Para leer sin conexión: abrí el libro y dejá que se descargue completo.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Opción 2 - Libro en Papel */}
                  <div>
                    <h4 className="text-electric-pink font-semibold mb-4">Opción 2 – Libro en Papel</h4>
                    <div className="space-y-1 text-sm leading-relaxed">
                      <div>• Disponible con envío internacional (desde USA o España).</div>
                      <div>• Necesitás cuenta de Amazon para comprar.</div>
                      <div>
                        • Completá tu dirección real para que Amazon calcule costo y confirme el envío antes de pagar.
                      </div>
                      <div>
                        • El precio final (incluyendo posibles costos de importación) se muestra antes de confirmar la
                        compra.
                      </div>
                      <div>• Disponibilidad y costos pueden variar según tu ubicación y el stock del marketplace.</div>
                    </div>
                  </div>

                  {/* Nota final */}
                  <div className="border-t border-neon-cyan/25 pt-4">
                    <div className="text-neon-cyan font-space-mono text-sm">
                      {">"} Nota: No necesitás un Kindle físico. La app Kindle es gratis y funciona en celular, tablet o
                      PC.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  )
}
