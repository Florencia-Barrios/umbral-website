import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import SynopsisSection from "./components/SynopsisSection"
import HowToReadSection from "./components/HowToReadSection"
import PodcastSection from "./components/PodcastSection"
import AuthorSection from "./components/AuthorSection"
import Footer from "./components/Footer"
import SystemInterface from "./components/SystemInterface"
import BackgroundEffects from "./components/BackgroundEffects"

export const metadata: Metadata = {
  title: "SISTEMA UMBRAL - Acceso Iniciado",
  description: "Estás accediendo al sistema UMBRAL. No es solo información. Es una experiencia.",
  keywords: "UMBRAL, Federico Daniel Ara, novela, libro, tecnología, identidad, simulación",
  authors: [{ name: "Federico Daniel Ara" }],
  openGraph: {
    title: "SISTEMA UMBRAL - Experiencia Iniciada",
    description: "La puerta no es el destino. Es lo que uno se convierte al cruzarla.",
    type: "website",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=UMBRAL+Sistema",
        width: 1200,
        height: 630,
        alt: "UMBRAL - Sistema de Experiencia",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-ghost font-inter relative overflow-hidden">
      <BackgroundEffects />
      <SystemInterface />
      <HeroSection />
      <SynopsisSection />
      <HowToReadSection />
      <PodcastSection />
      <AuthorSection />
      <Footer />
    </main>
  )
}
