const phrases = [
  'Authentic relations, entrenched client support',
  'Dynamic solutions to every challenge faced',
  'Intrinsic and evolving advice tailored to our valued clients',
]

export default function Footer() {
  return (
    <footer className="border-t border-gold/10" style={{ background: 'linear-gradient(to bottom, #1a1814, #111009)' }}>

      <div className="border-b border-gold/10 flex flex-col items-start justify-center gap-2" style={{ padding: '18px 24px' }}>
        {phrases.map((phrase, i) => (
          <p
            key={i}
            className="font-serif text-left"
            style={{
              fontSize: 'clamp(0.6rem, 1.5vw, 0.78rem)',
              letterSpacing: '0.16em',
              color: 'rgba(198,167,94,0.62)',
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            {phrase}
          </p>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 py-4 h-14 flex items-center">
        <div className="flex justify-start items-center gap-5 text-[10px] text-gray-400 w-full">
          <span className="font-semibold text-white tracking-widest text-xs">William Duncan CA</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
