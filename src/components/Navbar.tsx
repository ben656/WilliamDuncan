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
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end">
        <a
          href="#"
          className="font-sans text-[10px] font-light tracking-widest uppercase text-[#a8a8b0] hover:text-[#c8c8d0] transition-colors duration-300"
        >
          Client updated news &amp; guidance
        </a>
      </div>
    </nav>
  )
}
