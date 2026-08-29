import './Hero.css'

export default function Hero({ onResumeClick }) {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* ── Animated watermark layer ── */}
      <div className="hero-watermark" aria-hidden="true">
        <span className="wm-text wm-1">BI DEVELOPER</span>
        <span className="wm-text wm-2">DATA ANALYTICS</span>
        <span className="wm-text wm-3">AZURE DATABRICKS</span>
        <span className="wm-text wm-4">MICROSTRATEGY</span>
        <span className="wm-icon wm-i1">📊</span>
        <span className="wm-icon wm-i2">🗄️</span>
        <span className="wm-icon wm-i3">📈</span>
        <span className="wm-icon wm-i4">⚡</span>
        <span className="wm-icon wm-i5">🔢</span>
        <span className="wm-pill wm-p1">SQL</span>
        <span className="wm-pill wm-p2">Python</span>
        <span className="wm-pill wm-p3">Power BI</span>
        <span className="wm-pill wm-p4">ETL</span>
      </div>

      <div className="hero-inner">
        {/* ── Left column — Photo ── */}
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <div className="photo-ring photo-ring--outer" />
            <div className="photo-ring photo-ring--inner" />
            <img
              src="./Photo/Photo.jpeg"
              alt="S J Dhyanesh"
              className="hero-photo"
            />
            <div className="photo-badge photo-badge--tl">
              <span>🤖</span> AI
            </div>
            <div className="photo-badge photo-badge--br">
              <span>⚡</span> Energy
            </div>
          </div>
        </div>

        {/* ── Right column — Text ── */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name">
            S J <span className="highlight">Dhyanesh</span>
          </h1>

          <p className="hero-title">
            BI Developer
            <span className="title-divider">·</span>
            Data Analytics Professional
          </p>

          <p className="hero-energy-line">
            <span className="energy-icon">⚡</span>
            Where <strong>AI Intelligence</strong> meets <strong>Energy &amp; Healthcare Data</strong> — turning raw pipelines into decisions that power the future.
          </p>

          <div className="hero-chips">
            <span className="chip chip--teal">Azure Databricks</span>
            <span className="chip chip--olive">Machine Learning</span>
            <span className="chip chip--teal">MicroStrategy</span>
            <span className="chip chip--olive">Python</span>
            <span className="chip chip--teal">Power BI</span>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Publications</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#experience')}>
              View Work
            </button>
            <button className="btn-outline" onClick={onResumeClick}>
              Download CV
            </button>
          </div>

          <div className="hero-links">
            <a href="https://linkedin.com/in/dhyanesh-s-j-947320211" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:dhyanesh0402@gmail.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll" onClick={() => scrollTo('#about')}>
        <span>Scroll down</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </div>
    </section>
  )
}
