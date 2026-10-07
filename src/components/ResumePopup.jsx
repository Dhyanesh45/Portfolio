import { useEffect } from 'react'
import './ResumePopup.css'

export default function ResumePopup({ open, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="rp-backdrop" onClick={onClose}>
      <div className="rp-card" onClick={e => e.stopPropagation()}>
        <button className="rp-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="rp-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>

        <h2 className="rp-title">My Resume</h2>
        <p className="rp-sub">S J Dhyanesh &mdash; BI Developer</p>
        <p className="rp-desc">
          Download or view my full resume covering my experience at Neurealm, skills,
          education, certifications, and research.
        </p>

        <div className="rp-actions">
          <a
            href="./certificates/Resume%202026.docx.pdf"
            download="SJ_Dhyanesh_Resume.pdf"
            className="rp-btn rp-btn--primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <a
            href="./certificates/Resume%202026.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rp-btn rp-btn--secondary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in Browser
          </a>
        </div>

        <p className="rp-hint">Press <kbd>Esc</kbd> to close</p>
      </div>
    </div>
  )
}
