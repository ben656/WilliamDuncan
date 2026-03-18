import { useEffect, useRef, useState } from 'react'

const reasons = [
  'Over 100 years of professional expertise',
  'Partner-led, relationship-driven service',
  'Strategic thinking with practical delivery',
  'Discreet advisers to businesses and families',
  'UK-wide expertise with international perspective',
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-navy-dark to-navy relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold metallic-chrome mb-4">
            Why Clients <span className="text-gold">Trust Us</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold"></div>
              <p className="font-sans text-lg metallic-chrome leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
