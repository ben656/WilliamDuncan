export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#050d1a] border-t border-gold/10 py-3 h-12">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="flex flex-wrap justify-center items-center gap-2 text-[9px] text-gray-400 w-full">
          <span className="font-semibold text-white">William Duncan CA</span>
          <span className="text-gray-600">|</span>
          <span>Chartered Accountants & Business Advisers</span>
          <span className="text-gray-600">|</span>
          <a href="mailto:wmdadmin@williamduncan-ca.co.uk" className="hover:text-gold transition-colors">
            wmdadmin@williamduncan-ca.co.uk
          </a>
          <span className="text-gray-600">|</span>
          <a href="tel:01698283103" className="hover:text-gold transition-colors">
            01698 283103
          </a>
          <span className="text-gray-600">|</span>
          <span>4d Auchingramont Rd, Hamilton ML3 6JT</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
