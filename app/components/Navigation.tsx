"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "sinopsis", "descarga", "podcast", "autor"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "sinopsis", label: "Sinopsis" },
    { id: "descarga", label: "Cómo leerlo" },
    { id: "podcast", label: "Podcast" },
    { id: "autor", label: "Autor" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-xl border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-neon-cyan font-orbitron font-bold text-lg hover:text-electric-pink transition-colors duration-300"
          >
            UMBRAL
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-space-mono text-sm transition-colors duration-300 hover:text-neon-cyan focus:outline-none focus:text-neon-cyan ${
                  activeSection === item.id ? "text-neon-cyan" : "text-ghost/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-ghost hover:text-neon-cyan transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neon-cyan/20 bg-void/95 backdrop-blur-xl">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 font-space-mono text-sm transition-colors duration-300 hover:text-neon-cyan focus:outline-none focus:text-neon-cyan ${
                    activeSection === item.id ? "text-neon-cyan bg-neon-cyan/5" : "text-ghost/70"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
