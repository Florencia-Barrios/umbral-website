"use client"

import { useState, useEffect, useRef } from "react"

export default function HowToReadSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-4xl">
        {isVisible && (
          <div className="fade-in-sequence">
            <section className="sinopsis-panel" id="how-to-read" role="region" aria-labelledby="how_to_read_h2">
              <h2 id="how_to_read_h2" className="sinopsis-title">
                HOW TO READ
              </h2>
              <h3 className="text-neon-cyan/70 font-space-mono text-sm mb-6">QUICK_GUIDE</h3>

              <div className="sinopsis-content space-y-6">
                <div className="font-space-mono text-sm text-neon-cyan mb-4">
                  <span className="mr-2">{">"}</span>
                  <span>cat quick_guide.txt</span>
                </div>

                <div className="space-y-6">
                  {/* Option 1 - Kindle Version */}
                  <div>
                    <h4 className="text-electric-pink font-semibold mb-4">Option 1 – Kindle Version</h4>

                    <div className="space-y-4">
                      <div>
                        <div className="text-neon-cyan font-space-mono text-sm mb-2">{">"} A) Buy on Amazon</div>
                        <div className="ml-4 space-y-1 text-sm leading-relaxed">
                          <div>1. Go to Amazon using the main button.</div>
                          <div>2. If you don't have an Amazon account, create one (free).</div>
                          <div className="ml-4 text-neon-cyan">→ Use an email and password you will remember.</div>
                          <div>3. Choose "Kindle Version".</div>
                          <div>4. If there is a launch promo and the price is 0, click "Buy now".</div>
                          <div>
                            5. If Amazon asks for a payment method, add one (it requires it even if the price is 0).
                          </div>
                          <div className="ml-4">You will not be charged if the price is 0.</div>
                          <div>6. Confirm the purchase. Done.</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-neon-cyan font-space-mono text-sm mb-2">
                          {">"} B) Read in the Kindle App
                        </div>
                        <div className="ml-4 space-y-1 text-sm leading-relaxed">
                          <div>1. Download the free Kindle app:</div>
                          <div className="ml-4 space-y-2">
                            <div className="flex items-center">
                              <span className="mr-2">•</span>
                              <a
                                href="https://play.google.com/store/apps/details?id=com.amazon.kindle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip inline-flex items-center hover:bg-electric-pink/20 transition-colors"
                                aria-label="Download Kindle app on Google Play"
                              >
                                Google Play — Download Kindle app
                              </a>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">•</span>
                              <a
                                href="https://apps.apple.com/app/amazon-kindle/id302584613"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip inline-flex items-center hover:bg-electric-pink/20 transition-colors"
                                aria-label="Download Kindle app on App Store"
                              >
                                App Store — Download Kindle app
                              </a>
                            </div>
                          </div>
                          <div>2. Log in with the SAME Amazon account you used to buy the book.</div>
                          <div>3. In "Library", wait a few seconds and tap "Sync"</div>
                          <div className="ml-4">(or pull down to refresh).</div>
                          <div>4. Open "UMBRAL".</div>
                          <div>5. Optional: Adjust font size, dark mode, and margins.</div>
                          <div>6. To read offline: open the book and let it fully download.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Option 2 - Paperback */}
                  <div>
                    <h4 className="text-electric-pink font-semibold mb-4">Option 2 – Paperback</h4>
                    <div className="space-y-1 text-sm leading-relaxed">
                      <div>• Available with international shipping (from USA or Spain).</div>
                      <div>• You need an Amazon account to purchase.</div>
                      <div>• Enter your real address so Amazon can calculate shipping and confirm before paying.</div>
                      <div>• The final price (including possible import fees) is shown before confirming.</div>
                      <div>• Availability and costs may vary depending on your location and marketplace stock.</div>
                    </div>
                  </div>

                  {/* Final note */}
                  <div className="border-t border-neon-cyan/25 pt-4">
                    <div className="text-neon-cyan font-space-mono text-sm">
                      {">"} Note: You don't need a physical Kindle. The Kindle app is free and works on mobile, tablet,
                      or PC.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  )
}
