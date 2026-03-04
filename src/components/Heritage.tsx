import { useEffect, useRef, useState } from 'react'

export default function Heritage() {
  const [isVisible, setIsVisible] = useState(false)
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
      className="py-24 bg-gradient-to-b from-navy-dark to-navy"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 relative pb-2">
                A Century of
                <br />
                <span className="text-gold">Trusted Expertise</span>
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-gold"></div>
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 font-sans leading-relaxed">
              <p className="text-lg">
                For more than a century, we have advised businesses,
                entrepreneurs and families with integrity, discretion and
                technical excellence.
              </p>
              <p className="text-lg">
                Our long-standing client relationships are built on trust and
                results. While our heritage defines us, our strategic and
                forward-thinking approach ensures our clients remain ahead in an
                evolving financial landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
