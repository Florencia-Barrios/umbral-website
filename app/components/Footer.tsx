export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-neon-cyan/20 bg-void/80">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="font-orbitron font-bold text-2xl text-neon-cyan">UMBRAL</div>

          <div className="font-space-mono text-sm text-ghost/60 space-y-2">
            <p>© 2024 Federico Daniel Ara. Todos los derechos reservados.</p>
            <p>Thriller psicológico • Primera novela • Disponible en Amazon</p>
          </div>

          <div className="flex justify-center space-x-8 text-sm">
            <a
              href="https://amazon.com/dp/B0DJJQX8QY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghost/60 hover:text-neon-cyan transition-colors"
            >
              Amazon
            </a>
            <a href="#podcast" className="text-ghost/60 hover:text-neon-cyan transition-colors">
              Podcast
            </a>
            <a href="mailto:contacto@example.com" className="text-ghost/60 hover:text-neon-cyan transition-colors">
              Contacto
            </a>
          </div>

          <div className="pt-6 border-t border-neon-cyan/10">
            <p className="font-space-mono text-xs text-ghost/40">
              SISTEMA_NEURAL_v2.1 • CONEXIÓN_ESTABLE • UMBRAL_ACTIVO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
