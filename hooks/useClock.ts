"use client"

import { useState, useEffect } from "react"

interface ClockData {
  time: string
  timestamp: string
  timezone: string
}

export function useClock(): ClockData {
  const [clockData, setClockData] = useState<ClockData>({
    time: "",
    timestamp: "",
    timezone: "",
  })

  useEffect(() => {
    // Detectar zona horaria del usuario
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

    const updateClock = () => {
      const now = new Date()

      // Formatear hora para header (HH:MM:SS)
      const timeStr = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: tz,
      }).format(now)

      // Timestamp local para footer (YYYY-MM-DD HH:MM:SS)
      const timestampStr = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: tz,
      })
        .format(now)
        .replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}:\d{2})/, "$3-$1-$2 $4")

      setClockData({
        time: timeStr,
        timestamp: timestampStr,
        timezone: tz,
      })
    }

    // Ejecutar inmediatamente para evitar flash
    updateClock()

    // Actualizar cada segundo
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return clockData
}
