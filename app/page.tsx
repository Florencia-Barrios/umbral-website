import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import SynopsisSection from "./components/SynopsisSection"
import DownloadSection from "./components/DownloadSection"
import PodcastSection from "./components/PodcastSection"
import AuthorSection from "./components/AuthorSection"
import FinalCTASection from "./components/FinalCTASection"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import SystemInterface from "./components/SystemInterface"
import BackgroundEffects from "./components/BackgroundEffects"

export const metadata: Metadata = {
  title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
  description:
    "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
  keywords:
    "UMBRAL, Federico Daniel Ara, novela, libro, tecnología, identidad, simulación, thriller psicológico, memoria",
  authors: [{ name: "Federico Daniel Ara" }],
  openGraph: {
    title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
    description:
      "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
    type: "website",
    images: [
      {
        url: "/images/UMBRAL_PORTADA_OFICIAL.png",
        width: 400,
        height: 600,
        alt: "UMBRAL - Portada del libro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
    description:
      "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
    images: ["/images/UMBRAL_PORTADA_OFICIAL.png"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-ghost font-inter relative overflow-hidden">
      <BackgroundEffects />
      <SystemInterface />
      <Navigation />
      <HeroSection />
      <SynopsisSection />
      <DownloadSection />
      <PodcastSection />
      <AuthorSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
