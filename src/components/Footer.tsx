const phrases = [
  'Authentic relations, entrenched client support',
  'Dynamic solutions to every challenge faced',
  'Intrinsic and evolving advice tailored to our valued clients',
]

export default function Footer() {
  return (
    <footer className="border-t border-gold/10" style={{ background: '#080e1a' }}>

      {/* Italic phrases */}
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

      {/* Copyright row */}
      <div className="px-6 h-12 flex items-center justify-end border-b border-gold/5">
        <div className="flex items-center gap-4 text-[10px]">
          <span className="font-semibold text-white tracking-widest text-xs">William Duncan CA</span>
          <span style={{ color: 'rgba(229,228,226,0.15)' }}>|</span>
          <span style={{ color: 'rgba(229,228,226,0.35)' }}>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>

      {/* Bottom row — client alert left */}
      <div className="px-6 h-12 flex items-center">
        <a
          href="/wd-hub-client-alert.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans flex items-center gap-3"
          style={{
            textDecoration: 'none',
            border: '1px solid rgba(140,31,46,0.40)',
            borderRadius: '2px',
            padding: '5px 14px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(140,31,46,0.75)'
            el.style.background = 'rgba(140,31,46,0.05)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(140,31,46,0.40)'
            el.style.background = 'transparent'
          }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '0.28em', fontWeight: 700, color: '#8c1f2e', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Client Alert
          </span>
          <span style={{ color: 'rgba(140,31,46,0.3)', fontSize: '7px' }}>◆</span>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', color: 'rgba(229,228,226,0.6)', fontWeight: 500, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            HMRC Digital Enforcement
          </span>
        </a>
      </div>

    </footer>
  )
}
