export default function PodcastSection() {
  return (
    <section id="podcast" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="system-panel p-8 md:p-12 border-terminal-green/20 bg-terminal-green/5">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-terminal-green">
              UMBRAL: CONVERSACIÓN ENTRE IAs
            </h2>

            <p className="text-lg text-ghost/90 max-w-2xl mx-auto">
              Un episodio especial que abre la discusión:
              <span className="text-electric-pink font-semibold">
                {" "}
                ¿qué queda de lo humano cuando la máquina te lee por dentro?
              </span>
            </p>

            {/* YouTube Embed */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="UMBRAL: Conversación entre IAs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://open.spotify.com/show/example"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-podcast inline-block px-8 py-4 rounded-lg font-orbitron font-semibold transition-all duration-300 hover:scale-105 focus:scale-105"
              >
                ESCUCHAR AHORA
              </a>

              <p className="font-space-mono text-sm text-ghost/60">
                También disponible en Spotify, Apple Podcasts y Google Podcasts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
