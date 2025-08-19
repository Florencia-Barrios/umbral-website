"use client"

import { Linkedin, Github } from "lucide-react"

export default function AuthorSection() {
  return (
    <section id="autor" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <section className="umbral-panel">
          <h2 className="sinopsis-title">AUTOR</h2>

          <p className="mt-4 text-center text-lg italic text-white/90 font-light">
            "No soy escritor. Soy desarrollador. Esta es mi primera novela."
          </p>

          <div className="mt-8 space-y-2 font-mono text-[0.95rem] leading-relaxed text-cyan-200/90">
            <div>
              umbral@system/$ autor → <span className="text-white/90">Federico Daniel Ara</span>
            </div>
            <div>
              umbral@system/$ origen → <span className="text-white/90">Argentina (residencia en España)</span>
            </div>
            <div>
              umbral@system/$ background → <span className="text-white/90">desarrollo tecnológico</span>
            </div>
            <div>
              umbral@system/$ inspiración →{" "}
              <span className="text-white/90">la intersección entre mente y máquinas</span>
            </div>
            <div>
              umbral@system/$ primera_obra → <span className="text-white/90">UMBRAL (2025)</span>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-[1.05rem] leading-relaxed text-white/85 max-w-prose mx-auto">
            <p>Federico es un autor argentino con residencia en España.</p>
            <p>
              Su obra <span className="italic">Umbral</span> indaga en cómo la tecnología se incrusta en la vida
              cotidiana, la mente y las emociones, explorando la frontera entre lo humano y lo digital.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-center font-mono text-sm text-cyan-300/80 mb-4">Conexiones</div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/federico-daniel-ara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn del autor"
                className="author-link-btn"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Lartweib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub del autor"
                className="author-link-btn author-link-btn--pink"
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
