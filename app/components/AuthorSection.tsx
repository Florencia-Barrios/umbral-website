"use client"

import { Linkedin, Github } from "lucide-react"

export default function AuthorSection() {
  return (
    <section id="autor" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <section className="umbral-panel">
          <h2 className="sinopsis-title">AUTOR</h2>

          <p className="mt-[14px] text-center text-lg italic text-white/90 font-light max-w-prose mx-auto">
            "No soy escritor. Soy desarrollador. Esta es mi primera novela."
          </p>

          <div className="mt-5 author-info-grid">
            <div className="author-info-row">
              <span className="author-info-label">autor</span>
              <span className="author-info-arrow">→</span>
              <span className="author-info-value">Federico Daniel Ara</span>
            </div>
            <div className="author-info-row">
              <span className="author-info-label">origen</span>
              <span className="author-info-arrow">→</span>
              <span className="author-info-value">Argentina (residencia en España)</span>
            </div>
            <div className="author-info-row">
              <span className="author-info-label">background</span>
              <span className="author-info-arrow">→</span>
              <span className="author-info-value">desarrollo tecnológico</span>
            </div>
            <div className="author-info-row">
              <span className="author-info-label">inspiración</span>
              <span className="author-info-arrow">→</span>
              <span className="author-info-value">la intersección entre mente y máquinas</span>
            </div>
            <div className="author-info-row">
              <span className="author-info-label">primera_obra</span>
              <span className="author-info-arrow">→</span>
              <span className="author-info-value">UMBRAL (2025)</span>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-[1.05rem] leading-[1.65] text-white/85 max-w-[60ch] text-left">
            <p>Federico es un autor argentino con residencia en España.</p>
            <p>
              Su obra <span className="italic">Umbral</span> indaga en cómo la tecnología se incrusta en la vida
              cotidiana, la mente y las emociones, explorando la frontera entre lo humano y lo digital.
            </p>
          </div>

          <div className="mt-6">
            <div className="text-center font-mono text-sm text-cyan-300/80 mb-4">Conexiones</div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/federico-daniel-ara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn del autor"
                className="author-connection-btn author-connection-btn--linkedin"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Lartweib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub del autor"
                className="author-connection-btn author-connection-btn--github"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
