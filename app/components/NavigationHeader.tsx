"use client"

import { useEffect, useState } from "react"

interface NavigationHeaderProps {
  isVisible: boolean
}

export default function NavigationHeader({ isVisible }: NavigationHeaderProps) {
  const [activeSection, setActiveSection] = useState("")

  const navLinks = [
    { id: "sinopsis", label: "SINOPSIS" },
    { id: "como-leerlo", label: "CÓMO LEERLO" },
    { id: "podcast", label: "PODCAST" },
    { id: "autor", label: "AUTOR" },
  ]

  useEffect(() => {
    if (!isVisible) return

    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 200 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    )

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) observer.observe(element)
    })

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [isVisible])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120 // Account for system header
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <nav
      className="fixed top-16 left-0 right-0 z-40 bg-void/90 backdrop-blur-xl border-b border-neon-cyan/10"
      aria-label="Secciones del libro"
      style={{ display: isVisible ? "block" : "none" }}
    >
      {/* Desktop Navigation (≥768px) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-3 items-center">
            {/* Left spacer */}
            <div></div>

            {/* Center navigation */}
            <div className="flex items-center justify-center gap-6 lg:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-space-mono text-xs lg:text-sm transition-all duration-300 px-3 py-2 rounded-md border ${
                    activeSection === link.id
                      ? "text-neon-cyan border-neon-cyan bg-neon-cyan/10"
                      : "text-ghost/70 hover:text-neon-cyan border-transparent hover:border-neon-cyan/30"
                  }`}
                  aria-current={activeSection === link.id ? "true" : undefined}
                  style={{
                    wordBreak: "keep-all",
                    overflowWrap: "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right spacer */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (<768px) */}
      <div className="block md:hidden">
        <div
          className="flex gap-2 px-3 py-3 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-space-mono text-xs px-3 py-2 rounded-md border flex-shrink-0 transition-all duration-300 ${
                activeSection === link.id
                  ? "text-neon-cyan border-neon-cyan bg-neon-cyan/10"
                  : "text-ghost/70 border-neon-cyan/20 bg-void/50"
              }`}
              style={{
                scrollSnapAlign: "start",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                whiteSpace: "nowrap",
              }}
              aria-current={activeSection === link.id ? "true" : undefined}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
