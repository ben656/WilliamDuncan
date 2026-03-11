import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #C6A75E 1px, transparent 1px),
                            linear-gradient(to bottom, #C6A75E 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-16 md:h-20" />
              <div>
                <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">Established 1924</p>
              </div>
            </div>

            <h1 className="font-serif text-6xl md:text-7xl font-bold text-gray-100 leading-tight mb-6">
              <span className="block">WD - Chartered</span>
              <span className="block text-gold">Accountants</span>
            </h1>

            <p className="font-sans text-xl text-gray-300 mb-8">
              Business & Tax Advisors
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6 border-l-4 border-gold pl-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                  A Century of<br />
                  <span className="text-gold">Trusted Expertise</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 font-sans leading-relaxed">
                <p className="text-lg">
                  For more than a century, we have advised businesses, entrepreneurs and families with integrity, discretion and technical excellence.
                </p>
                <p className="text-lg">
                  Our long-standing client relationships are built on trust and results. While our heritage defines us, our strategic and forward-thinking approach ensures our clients remain ahead in an evolving financial landscape.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Speak to an Adviser
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-sans font-semibold px-8 py-4 rounded transition-all duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
