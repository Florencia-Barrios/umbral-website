"use client"

import { Linkedin, Github } from "lucide-react"

export default function AuthorSection() {
  return (
    <section id="autor" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        <section className="umbral-panel author-panel-mobile">
          <h2 className="sinopsis-title author-title-mobile">AUTOR</h2>

          <p className="author-quote-mobile">"No soy escritor. Soy desarrollador. Esta es mi primera novela."</p>

          <div className="author-commands-mobile">
            <div className="author-command-line">
              <span className="author-prompt">umbral@system/$</span> autor <span className="author-arrow">→</span>{" "}
              <span className="author-value">Federico Daniel Ara</span>
            </div>
            <div className="author-command-line">
              <span className="author-prompt">umbral@system/$</span> origen <span className="author-arrow">→</span>{" "}
              <span className="author-value">Argentina (residencia en España)</span>
            </div>
            <div className="author-command-line">
              <span className="author-prompt">umbral@system/$</span> background <span className="author-arrow">→</span>{" "}
              <span className="author-value">desarrollo tecnológico</span>
            </div>
            <div className="author-command-line">
              <span className="author-prompt">umbral@system/$</span> inspiración <span className="author-arrow">→</span>{" "}
              <span className="author-value">la intersección entre mente y máquinas</span>
            </div>
            <div className="author-command-line">
              <span className="author-prompt">umbral@system/$</span> primera_obra{" "}
              <span className="author-arrow">→</span> <span className="author-value">UMBRAL (2025)</span>
            </div>
          </div>

          <div className="author-bio-mobile">
            <p>Federico es un autor argentino con residencia en España.</p>
            <p>
              Su obra <span className="italic">Umbral</span> indaga en cómo la tecnología se incrusta en la vida
              cotidiana, la mente y las emociones, explorando la frontera entre lo humano y lo digital.
            </p>
          </div>

          <div className="mt-6">
            <div className="author-connections-header">Conexiones</div>

            <div className="author-connections-mobile">
              <a
                href="https://www.linkedin.com/in/federico-daniel-ara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn del autor"
                className="author-chip author-chip-linkedin"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Lartweib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub del autor"
                className="author-chip author-chip-github"
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
