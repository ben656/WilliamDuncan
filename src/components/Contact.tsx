const reasons = [
  'Over 100 years of professional expertise',
  'Partner-led, relationship-driven service',
  'Strategic thinking with practical delivery',
  'Discreet advisers to businesses and families',
  'UK-wide expertise with international perspective',
]

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold metallic-chrome mb-4">
            <span className="text-gold">Contact Us</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="rounded-lg overflow-hidden shadow-xl h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.7453456789!2d-3.67!3d55.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488641fa2f00f6fb%3A0x6b00f00f6b00f6b!2s4D%20Auchingramont%20Rd%2C%20Hamilton%20ML3%206JT!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold metallic-chrome mb-2">Our Location</h3>
              <p className="font-sans metallic-chrome">
                4D Auchingramont Rd<br />
                Hamilton ML3 6JT
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-base font-bold text-gold mb-1">Email</h3>
                <a
                  href="mailto:wmdadmin@williamduncan-ca.co.uk"
                  className="font-sans metallic-chrome hover:text-gold transition-colors text-sm"
                >
                  wmdadmin@williamduncan-ca.co.uk
                </a>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold text-gold mb-1">Phone</h3>
                <a
                  href="tel:01698283103"
                  className="font-sans metallic-chrome hover:text-gold transition-colors text-sm"
                >
                  01698 283103
                </a>
              </div>
            </div>

            <p className="font-sans metallic-chrome text-sm leading-relaxed">
              We welcome confidential discussions with business owners, entrepreneurs and families seeking trusted financial guidance.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-xl font-bold metallic-chrome mb-6">
              Why Clients <span className="text-gold">Trust Us</span>
            </h3>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gold"></div>
                  <p className="font-sans text-sm metallic-chrome leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
