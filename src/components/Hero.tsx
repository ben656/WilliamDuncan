export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-20 md:h-24" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-100 leading-tight">
            Chartered Accountants &<br />
            <span className="text-gold">Business Advisers</span>
          </h1>

          <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            For over 100 years, we have proudly delivered Chartered accountancy
            services to clients across the UK and beyond.
          </p>

          <p className="font-sans text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Combining heritage, precision and forward-thinking strategy, we
            deliver tailored financial solutions that protect wealth, support
            growth, and create long-term value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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
