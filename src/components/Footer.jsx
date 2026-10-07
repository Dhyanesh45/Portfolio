import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">D</span>
          <span className="footer-name">S J Dhyanesh</span>
        </div>

        <p className="footer-tagline">
          BI Developer · Data Analytics · AI Enthusiast
        </p>

        <div className="footer-divider" />

        <div className="footer-links">
          <a href="mailto:dhyanesh0402@gmail.com">dhyanesh0402@gmail.com</a>
          <span className="fdot">·</span>
          <a href="https://linkedin.com/in/dhyanesh-s-j-947320211" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="fdot">·</span>
          <a href="./certificates/Resume%202026.docx.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} S J Dhyanesh. Built with React &amp; Vite.</p>
      </div>

      <button className="back-top" onClick={scrollTop} aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </footer>
  )
}
