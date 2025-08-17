import Image from "next/image"

export default function AuthorSection() {
  return (
    <section id="autor" className="py-20 px-4 bg-void/50">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-8 md:p-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan">AUTOR</h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Author Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 relative rounded-full overflow-hidden grayscale">
                  <Image src="/placeholder-user.jpg" alt="Federico Daniel Ara" fill className="object-cover" />
                </div>
              </div>

              {/* Author Info */}
              <div className="flex-1 space-y-6 text-left md:text-left">
                <div className="space-y-4">
                  <p className="text-xl text-ghost leading-relaxed">
                    <strong>No soy escritor. Soy desarrollador.</strong> Esta es mi primera novela.
                  </p>

                  <p className="text-lg text-ghost/80 leading-relaxed">
                    Nació de observar cómo la tecnología se pegó a lo cotidiano… a la mente, a las emociones, a lo real.
                  </p>
                </div>

                {/* Technical Profile */}
                <div className="space-y-3 font-space-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">{">"}</span>
                    <span className="text-ghost">Federico Daniel Ara</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">{">"}</span>
                    <span className="text-ghost">Desarrollador Full Stack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">{">"}</span>
                    <span className="text-ghost">Primera novela: UMBRAL (2024)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">{">"}</span>
                    <span className="text-ghost">Especialidad: Thriller psicológico + Tech</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-block px-4 py-2 border border-electric-pink/30 rounded">
                    <span className="font-space-mono text-xs text-electric-pink">
                      STATUS: ESCRIBIENDO_SEGUNDA_NOVELA.exe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
