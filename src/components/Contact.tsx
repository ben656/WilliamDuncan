import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'honeypot': '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.honeypot) {
      return
    }

    setIsLoading(true)

    const formDataToSend = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/xqedrdow', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '', honeypot: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Begin the <span className="text-gold">Conversation</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-sans text-lg text-gray-300">
            We welcome confidential discussions with business owners,
            entrepreneurs and families seeking trusted financial guidance.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-navy border border-gold/20 rounded-lg p-8 shadow-xl"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-sans text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-navy-dark border border-gold/30 rounded text-gray-100 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-sans text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-navy-dark border border-gold/30 rounded text-gray-100 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-sans text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-navy-dark border border-gold/30 rounded text-gray-100 focus:outline-none focus:border-gold transition-colors resize-none"
            ></textarea>
          </div>

          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) =>
              setFormData({ ...formData, honeypot: e.target.value })
            }
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {submitted && (
            <div className="animate-fade-in bg-gold/10 border border-gold/30 rounded p-4 text-center">
              <p className="font-sans text-sm text-gold">
                Thank you. A member of our team will respond shortly.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitted || isLoading}
            className="w-full bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
