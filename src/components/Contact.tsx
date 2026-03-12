export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            <span className="text-gold">Get in Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden shadow-xl h-96 md:h-full min-h-96">
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

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-100 mb-2">Our Location</h3>
              <p className="font-sans text-gray-300 text-lg">
                4D Auchingramont Rd<br />
                Hamilton ML3 6JT
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-gold mb-2">Email</h3>
                <a
                  href="mailto:wmdadmin@williamduncan-ca.co.uk"
                  className="font-sans text-gray-300 hover:text-gold transition-colors text-lg"
                >
                  wmdadmin@williamduncan-ca.co.uk
                </a>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold text-gold mb-2">Phone</h3>
                <a
                  href="tel:01698283103"
                  className="font-sans text-gray-300 hover:text-gold transition-colors text-lg"
                >
                  01698 283103
                </a>
              </div>
            </div>

            <p className="font-sans text-gray-400 leading-relaxed">
              We welcome confidential discussions with business owners, entrepreneurs and families seeking trusted financial guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
