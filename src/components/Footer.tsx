export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#050d1a] border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-6">
            <div className="text-gray-400">
              <span className="font-semibold text-white">William Duncan & Co.</span>
              <span className="mx-2">|</span>
              Chartered Accountants & Business Advisers
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a href="mailto:wmdadmin@williamduncan-ca.co.uk" className="hover:text-gold transition-colors">
              wmdadmin@williamduncan-ca.co.uk
            </a>
            <span className="text-gray-600">|</span>
            <a href="tel:01698283103" className="hover:text-gold transition-colors">
              01698 283103
            </a>
            <span className="text-gray-600">|</span>
            <span>4D Auchingramont Rd, Hamilton ML3 6JT</span>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gold/10">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} William Duncan & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
