"use client"

export default function FinalCTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-8 md:p-12 hologram-effect text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
              <span className="system-glitch text-ghost" data-text="Cruzá">
                Cruzá
              </span>
              <br />
              <span className="text-neon-cyan">el</span> <span className="text-electric-pink">umbral</span>
            </h2>

            <p className="text-xl text-ghost/80 max-w-2xl mx-auto">
              La frontera entre lo humano y lo artificial nunca fue tan delgada. ¿Estás listo para descubrir qué hay del
              otro lado?
            </p>

            <div className="space-y-4 pt-6">
              <a
                href="https://amazon.com/dp/B0DJJQX8QY"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-amazon inline-block px-12 py-5 rounded-lg font-orbitron font-bold text-lg text-void transition-all duration-300 hover:scale-105 focus:scale-105"
              >
                LEER GRATIS EN AMAZON
              </a>

              <button
                onClick={() => scrollToSection("podcast")}
                className="cta-button-podcast block w-full md:w-auto md:inline-block px-12 py-5 rounded-lg font-orbitron font-bold text-lg transition-all duration-300 hover:scale-105 focus:scale-105"
              >
                ESCUCHAR EL PODCAST
              </button>
            </div>

            <div className="pt-8">
              <div className="inline-block px-6 py-3 border border-neon-cyan/30 rounded-lg">
                <span className="font-space-mono text-sm text-neon-cyan">
                  DISPONIBLE EN KINDLE • TAPA BLANDA • TAPA DURA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
