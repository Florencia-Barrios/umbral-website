import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
  description:
    "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
  keywords: [
    "thriller psicológico",
    "novela",
    "inteligencia artificial",
    "identidad",
    "memoria",
    "tecnología",
    "Federico Daniel Ara",
  ],
  authors: [{ name: "Federico Daniel Ara" }],
  creator: "Federico Daniel Ara",
  publisher: "Federico Daniel Ara",
  openGraph: {
    title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
    description:
      "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
    url: "https://umbral-book.vercel.app",
    siteName: "UMBRAL",
    images: [
      {
        url: "/images/UMBRAL_PORTADA_OFICIAL.png",
        width: 800,
        height: 1200,
        alt: "Portada del libro UMBRAL",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMBRAL — thriller psicológico sobre identidad, memoria y tecnología",
    description:
      "Un thriller psicológico sobre identidad, memoria y lo que pasa cuando lo humano y lo artificial empiezan a hablar el mismo lenguaje.",
    images: ["/images/UMBRAL_PORTADA_OFICIAL.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable} ${spaceMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
