import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`)
    window.open(`https://mail.google.com/mail/?view=cm&to=dhyanesh0402@gmail.com&su=${subject}&body=${body}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="contact section alt-bg">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">
          Open to BI, Data Engineering, Data Science, and AI-focused opportunities.
        </p>

        {/* ── Info cards ── */}
        <div className="cinfo-grid">

          <a href="https://mail.google.com/mail/?view=cm&to=dhyanesh0402@gmail.com" target="_blank" rel="noopener noreferrer" className="cinfo-card">
            <div className="cinfo-icon-box cinfo-icon-box--teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <span className="cinfo-label">Email</span>
            <span className="cinfo-value">dhyanesh0402@gmail.com</span>
          </a>

          <a href="tel:+919080921803" className="cinfo-card">
            <div className="cinfo-icon-box cinfo-icon-box--olive">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16.5z"/>
              </svg>
            </div>
            <span className="cinfo-label">Phone</span>
            <span className="cinfo-value">+91 90809 21803</span>
          </a>

          <a href="https://linkedin.com/in/dhyanesh-s-j-947320211" target="_blank" rel="noopener noreferrer" className="cinfo-card">
            <div className="cinfo-icon-box cinfo-icon-box--teal">
              <svg viewBox="0 0 24 24" fill="#0F766E">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="cinfo-label">LinkedIn</span>
            <span className="cinfo-value">dhyanesh-s-j-947320211</span>
          </a>

          <div className="cinfo-card">
            <div className="cinfo-icon-box cinfo-icon-box--olive">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span className="cinfo-label">Location</span>
            <span className="cinfo-value">Chennai, India</span>
          </div>

        </div>

        {/* ── Contact form ── */}
        <div className="cform-wrap">
          <h3 className="cform-title">Send a Message</h3>
          <p className="cform-sub">Fill in the form — it opens your email app pre-filled and sends directly to my inbox.</p>

          <form onSubmit={handleSubmit}>
            <div className="cform-row">
              <div className="cform-field">
                <label htmlFor="cf-name">Your Name</label>
                <input id="cf-name" name="name" type="text" placeholder=""
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="cform-field">
                <label htmlFor="cf-email">Your Email</label>
                <input id="cf-email" name="email" type="email" placeholder=""
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="cform-field">
              <label htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" name="subject" type="text"
                placeholder=""
                value={form.subject} onChange={handleChange} />
            </div>
            <div className="cform-field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message"
                placeholder=""
                value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="cform-submit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>
            {sent && (
              <div className="cform-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Email client opened — just hit Send!
              </div>
            )}
          </form>
        </div>

        <div className="contact-cta">
          <p>Currently at <strong>Neurealm</strong> — open to new opportunities in Data &amp; AI.</p>
          <a href="https://mail.google.com/mail/?view=cm&to=dhyanesh0402@gmail.com" target="_blank" rel="noopener noreferrer" className="cta-btn">Email Directly</a>
        </div>
      </div>
    </section>
  )
}
