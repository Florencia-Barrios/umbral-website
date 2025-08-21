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

          <div className="mt-8 author-layout">
            {/* Left column: Avatar + Connection buttons */}
            <div className="author-left-column">
              <div className="author-avatar">
                <svg viewBox="0 0 120 120" className="w-full h-full">
                  <defs>
                    <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
                      <stop offset="100%" stopColor="rgba(255,0,127,0.3)" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="58"
                    fill="none"
                    stroke="url(#avatarGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                  />
                  <circle cx="60" cy="45" r="18" fill="none" stroke="rgba(0,255,255,0.6)" strokeWidth="1.5" />
                  <path d="M35 85 Q60 70 85 85" fill="none" stroke="rgba(0,255,255,0.6)" strokeWidth="1.5" />
                  <rect x="50" y="25" width="20" height="3" fill="rgba(255,0,127,0.4)" />
                  <rect x="45" y="95" width="30" height="2" fill="rgba(255,0,127,0.4)" />
                </svg>
              </div>

              <div className="author-connections">
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

            {/* Right column: Data + Bio text */}
            <div className="author-right-column">
              <div className="author-info-grid">
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

              <div className="author-bio">
                <p>Federico es un autor argentino con residencia en España.</p>
                <p>
                  Su obra <span className="italic">Umbral</span> indaga en cómo la tecnología se incrusta en la vida
                  cotidiana, la mente y las emociones, explorando la frontera entre lo humano y lo digital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
