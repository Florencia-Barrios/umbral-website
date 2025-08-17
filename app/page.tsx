import Navigation from "./components/Navigation"
import HeroSection from "./components/HeroSection"
import SynopsisSection from "./components/SynopsisSection"
import DownloadSection from "./components/DownloadSection"
import PodcastSection from "./components/PodcastSection"
import AuthorSection from "./components/AuthorSection"
import FinalCTASection from "./components/FinalCTASection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-ghost">
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
