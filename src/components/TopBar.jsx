import './TopBar.css'

export const RESUME_URL = './certificates/Resume%202026.docx.pdf'

const SECTIONS = [
  { label: 'Work', href: '#work' },
  { label: 'Tools', href: '#tools' },
  { label: 'Climacraft', href: '#climacraft' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function TopBar({ onRunAll, running }) {
  return (
    <header className="bar">
      <div className="bar-inner">
        <a className="bar-name" href="#top">
          S J Dhyanesh<span className="bar-path"> / portfolio</span>
        </a>

        <nav className="bar-nav" aria-label="Sections">
          {SECTIONS.map(s => (
            <a key={s.href} href={s.href}>{s.label}</a>
          ))}
        </nav>

        <div className="bar-actions">
          <button className="btn btn--ghost btn--sm bar-run" onClick={onRunAll} disabled={running} aria-label="Run all cells">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l7-4.5z" fill="currentColor" /></svg>
            <span>{running ? 'Running…' : 'Run all'}</span>
          </button>
          <a className="btn btn--primary btn--sm" href={RESUME_URL} download="SJ_Dhyanesh_Resume.pdf">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5v8m0 0L4.75 7.25M8 10.5l3.25-3.25M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}
