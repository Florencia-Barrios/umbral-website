"use client"

import { Linkedin, Github } from "lucide-react"

export default function AuthorSection() {
  return (
    <section id="autor" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <section className="sinopsis-panel">
          {" "}
          {/* Using same panel style as SINOPSIS */}
          {/* Encabezado */}
          <h2 className="sinopsis-title">AUTOR</h2>
          {/* Ficha técnica */}
          <div className="space-y-2 font-mono text-[0.95rem] leading-relaxed text-cyan-200/90">
            <div>
              &gt; autor: <span className="text-white/90">Federico Daniel Ara</span>
            </div>
            <div>
              &gt; origen: <span className="text-white/90">Argentina</span>
            </div>
            <div>
              &gt; background: <span className="text-white/90">desarrollo tecnológico</span>
            </div>
            <div>
              &gt; inspiración: <span className="text-white/90">la intersección entre mente y máquinas</span>
            </div>
            <div>
              &gt; primera obra: <span className="text-white/90">UMBRAL (2025)</span>
            </div>
          </div>
          {/* Mini bio */}
          <p className="mt-6 text-[1.05rem] leading-relaxed text-white/85 max-w-prose mx-auto">
            Federico es un autor argentino con residencia en España. Su obra <span className="italic">Umbral</span>{" "}
            indaga en cómo la tecnología se incrusta en la vida cotidiana, la mente y las emociones, explorando la
            frontera entre lo humano y lo digital.
          </p>
          {/* Conexiones */}
          <div className="mt-8">
            <div className="text-center font-mono text-sm text-cyan-300/80 mb-4">&gt; conexiones_activas()</div>

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
