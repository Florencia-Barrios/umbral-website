import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "SISTEMA UMBRAL",
  description: "Accediendo al sistema... Cargando experiencia sensorial...",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable} ${spaceMono.variable}`}>
      <body className="font-inter antialiased bg-void text-ghost">{children}</body>
    </html>
  )
}
