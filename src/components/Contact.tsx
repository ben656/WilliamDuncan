import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
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
              rows={6}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-navy-dark border border-gold/30 rounded text-gray-100 focus:outline-none focus:border-gold transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
