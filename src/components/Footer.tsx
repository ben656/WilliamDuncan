const pillars = ['Authentic Support', 'Dynamic Solutions', 'Evolutionary Advice']

export default function Footer() {
  return (
    <footer className="border-t border-gold/10" style={{ background: 'linear-gradient(to bottom, #1a1814, #111009)' }}>

      {/* Scrolling pillars ticker */}
      <div className="border-b border-gold/10 overflow-hidden" style={{ height: '38px', display: 'flex', alignItems: 'center' }}>
        <style>{`
          @keyframes pillars-ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .pillars-track {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            animation: pillars-ticker 28s linear infinite;
            will-change: transform;
          }
          .pillars-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="pillars-track">
          {[0, 1].map(copy => (
            <span key={copy} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {pillars.map((pillar, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span
                    className="font-sans font-light"
                    style={{
                      fontSize: 'clamp(0.48rem, 1.1vw, 0.6rem)',
                      letterSpacing: '0.30em',
                      color: 'rgba(198,167,94,0.62)',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      padding: '0 40px',
                    }}
                  >
                    {pillar}
                  </span>
                  <span style={{ color: 'rgba(198,167,94,0.3)', fontSize: '5px', lineHeight: 1 }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-2 h-9 flex items-center">
        <div className="flex justify-center items-center gap-4 text-[9px] text-gray-400 w-full">
          <span className="font-semibold text-white tracking-wide">William Duncan CA</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
