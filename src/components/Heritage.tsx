import { useEffect, useRef, useState } from 'react'

const trustReasons = [
  'Over 100 years of professional expertise',
  'Partner-led, relationship-driven service',
  'Strategic thinking with practical delivery',
  'Discreet advisers to businesses and families',
  'UK-wide expertise with international perspective',
]

export default function Heritage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="heritage"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 relative"
      style={{ background: '#080e1a' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 overflow-visible">
        <div
          className={`transition-all duration-1000 overflow-visible ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center overflow-visible">
            <div className="space-y-6 md:space-y-8 overflow-visible">
              <div
                className="relative bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/90 backdrop-blur-sm border border-gold/50 px-5 sm:px-8 py-7 sm:py-10 transition-all duration-500 shadow-2xl hover:border-gold/70 group cursor-pointer overflow-visible"
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
                onClick={() => setShowPopup(p => !p)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/70"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/70"></div>

                <div className="relative z-10">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6 opacity-70"></div>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
                    A Century of
                  </h2>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
                      Trusted Expertise
                    </span>
                  </h2>

                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"></div>
                </div>

                <div
                  className={`absolute left-full ml-8 top-0 w-80 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 backdrop-blur-sm border border-gold/60 px-6 py-8 shadow-2xl transition-all duration-500 z-50 ${
                    showPopup ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-4 pointer-events-none'
                  } hidden md:block`}
                >
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/70"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/70"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-4 opacity-70"></div>

                    <h3 className="font-serif text-xl font-bold text-white mb-4">
                      Why Clients <span className="text-gold">Trust Us</span>
                    </h3>

                    <div className="space-y-3">
                      {trustReasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold"></div>
                          <p className="font-sans text-sm text-slate-300 leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-4 opacity-70"></div>
                  </div>
                </div>

                <div
                  className={`mt-4 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 border border-gold/60 px-5 py-5 shadow-xl transition-all duration-500 ${
                    showPopup ? 'opacity-100 max-h-96 pointer-events-auto' : 'opacity-0 max-h-0 overflow-hidden pointer-events-none'
                  } md:hidden`}
                >
                  <div className="relative z-10">
                    <h3 className="font-serif text-lg font-bold text-white mb-3">
                      Why Clients <span className="text-gold">Trust Us</span>
                    </h3>

                    <div className="space-y-2">
                      {trustReasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold"></div>
                          <p className="font-sans text-sm text-slate-300 leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 font-sans leading-relaxed">
                <p className="text-base sm:text-xl text-gray-200 font-light">
                  For more than a century, we have advised businesses,
                  entrepreneurs and families with integrity, discretion and
                  technical excellence.
                </p>
                <p className="text-sm sm:text-lg text-gray-300 font-light leading-loose">
                  Our long-standing client relationships are built on trust and
                  results. While our heritage defines us, our strategic and
                  forward-thinking approach ensures our clients remain ahead in an
                  evolving financial landscape.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">100+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Years of Service</div>
                </div>
                <div className="text-center border-x border-gray-700">
                  <div className="text-2xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">3</div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Generations</div>
                </div>
              </div>
            </div>

            <div className="relative mt-2 md:mt-0">
              <div className="backdrop-blur-sm border border-gold/20 rounded-2xl p-5 sm:p-8 shadow-2xl" style={{ background: 'rgba(14,20,34,0.6)' }}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <span className="text-gold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Enduring Relationships</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Multi-generational partnerships built on mutual respect and consistent delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <span className="text-gold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Technical Excellence</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Deep expertise across accounting, advisory and tax disciplines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <span className="text-gold text-xl">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">Forward-Thinking Approach</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Innovation and strategic foresight to navigate evolving markets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
