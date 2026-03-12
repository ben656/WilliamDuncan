export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/Logo.jpg" alt="William Duncan" className="h-12" />
          </div>

          <div className="text-center md:text-right">
            <p className="font-sans text-sm text-gray-400">
              &copy; {new Date().getFullYear()} William Duncan & Co. All rights
              reserved.
            </p>
            <p className="font-sans text-xs text-gray-500 mt-1">
              Chartered Accountants & Business Advisers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
