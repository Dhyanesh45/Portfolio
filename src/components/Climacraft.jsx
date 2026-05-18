import { useState } from 'react'
import './Climacraft.css'

const HIGHLIGHTS = [
  'Built a climate-tech product from inception, owning product storytelling, positioning, and early GTM communication.',
  'Designed MVP narratives that explicitly communicated system behavior, constraints, and limitations.',
  'Achieved ~30% reduction in water and energy usage during pilot deployments.',
  'Semifinalist at Startup India 4.0, gaining exposure to early-stage pitching and real user feedback loops.',
  'Made the decision to shut down post-MVP, developing strong judgment around narrative misalignment.',
]

export default function Climacraft() {
  const [open, setOpen] = useState(false)

  return (
    <section id="climacraft" className="climacraft section">
      <div className="container">
        <div className="section-label">Featured Project</div>
        <h2 className="section-title">Projects & <span>Ventures</span></h2>

        <div className="cc-card">
          {/* Tags */}
          <div className="cc-tags-row">
            <span className="cc-tag cc-tag--green">Climate-Tech</span>
            <span className="cc-tag cc-tag--amber">Co-founder & CTO</span>
          </div>

          {/* Header row — click to toggle */}
          <button className="cc-header" onClick={() => setOpen(v => !v)} aria-expanded={open}>
            <div className="cc-header-left">
              <div className="cc-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="cc-header-info">
                <h3 className="cc-name">Climacraft</h3>
                <p className="cc-meta">Co-founder & CTO · Sep 2023 – Jun 2024</p>
                <p className="cc-tagline">
                  AI-driven hydroponics for restaurants. Shut down post-MVP. Learned to protect narrative.
                </p>
              </div>
            </div>
            <div className={`cc-chevron${open ? ' cc-chevron--open' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </button>

          {/* Expandable body */}
          <div className={`cc-body${open ? ' cc-body--open' : ''}`}>
            <div className="cc-body-inner">
              <ul className="cc-highlights">
                {HIGHLIGHTS.map((h, i) => (
                  <li key={i}>
                    <span className="cc-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="cc-footer">
                <div className="cc-skill-tags">
                  {['Python', 'Data Pipelines', 'Product Strategy', 'AI/ML', 'Leadership', 'GTM'].map(t => (
                    <span key={t} className="cc-skill">{t}</span>
                  ))}
                </div>
                <a
                  href="./certificates/climacraft.pdf"
                  download="Climacraft_Project.pdf"
                  className="cc-download-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Project PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
