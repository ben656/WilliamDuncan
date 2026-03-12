export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
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
