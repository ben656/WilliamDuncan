interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-start justify-end pt-7 gap-5">
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 group mt-[-2px]"
          title="Client Access"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#7eb8d4] group-hover:text-[#a8d8ee] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span className="font-sans text-[7px] font-light tracking-[0.2em] uppercase text-[#7eb8d4] group-hover:text-[#a8d8ee] transition-colors duration-300 whitespace-nowrap">Client Access</span>
        </a>
      </div>
    </nav>
  )
}
