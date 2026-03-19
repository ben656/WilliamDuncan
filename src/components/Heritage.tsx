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
      className="py-32 bg-gradient-to-br from-[#0a1628] via-[#0f1e3a] to-[#1a2847] relative"
    >
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className="inline-block relative group cursor-pointer"
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight relative pb-4 transition-transform duration-300 group-hover:scale-105">
                  A Century of
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
                    Trusted Expertise
                  </span>
                  <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-gold to-transparent"></div>
                </h2>

                {showPopup && (
                  <div className="absolute top-full left-0 mt-6 w-80 sm:w-96 bg-gradient-to-br from-[#1a2847] to-[#0a1628] border-2 border-gold/40 rounded-xl p-6 shadow-2xl z-50 animate-fadeIn">
                    <h3 className="font-serif text-xl font-bold text-white mb-4">
                      Why Clients <span className="text-gold">Trust Us</span>
                    </h3>
                    <div className="space-y-3">
                      {trustReasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold"></div>
                          <p className="font-sans text-sm text-gray-200 leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6 font-sans leading-relaxed">
                <p className="text-xl text-gray-200 font-light">
                  For more than a century, we have advised businesses,
                  entrepreneurs and families with integrity, discretion and
                  technical excellence.
                </p>
                <p className="text-lg text-gray-300 font-light leading-loose">
                  Our long-standing client relationships are built on trust and
                  results. While our heritage defines us, our strategic and
                  forward-thinking approach ensures our clients remain ahead in an
                  evolving financial landscape.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">100+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Years of Service</div>
                </div>
                <div className="text-center border-x border-gray-700">
                  <div className="text-4xl font-bold text-gold mb-2">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">3</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Generations</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a2847]/60 to-[#0a1628]/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 shadow-2xl">
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
