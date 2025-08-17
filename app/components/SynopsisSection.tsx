export default function SynopsisSection() {
  return (
    <section id="sinopsis" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-8 md:p-12 hologram-effect">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan mb-8">SINOPSIS</h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-ghost">
                John Johnson despierta en un vacío absoluto: sin luz, sin sonido, sin certezas. Apenas quedan fragmentos
                de lo que parece haber sido una vida… y una pregunta que no lo suelta:
                <span className="text-electric-pink font-semibold"> ¿cómo carajo llegó acá?</span>
              </p>

              <p className="text-ghost">
                En un mundo donde la tecnología observa, sugiere… y tal vez decide, la búsqueda de quién sos se vuelve
                un laberinto. <span className="text-neon-cyan font-semibold italic">Umbral</span> es un thriller
                psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el
                mismo lenguaje.
              </p>
            </div>

            <div className="pt-6">
              <div className="inline-block px-6 py-3 border border-electric-pink/30 rounded-lg">
                <span className="font-space-mono text-sm text-electric-pink">
                  GÉNERO: THRILLER PSICOLÓGICO • PÁGINAS: 280 • AÑO: 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
