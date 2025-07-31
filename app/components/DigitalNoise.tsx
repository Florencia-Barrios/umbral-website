"use client"

import { useEffect, useRef } from "react"

export default function DigitalNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.fillStyle = "rgba(15, 15, 15, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Digital noise effect
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2

        ctx.fillStyle = Math.random() > 0.5 ? "rgba(122, 255, 212, 0.1)" : "rgba(255, 87, 87, 0.1)"
        ctx.fillRect(x, y, size, size)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />
}
