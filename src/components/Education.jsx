import './Education.css'

const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'Madras Institute of Technology, Anna University',
    location: 'Chennai, India',
    period: 'Nov 2020 – May 2024',
    score: '7.7 CGPA',
    scoreLabel: 'Aggregate',
    level: 'undergraduate',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science Stream',
    institution: 'Vels Vidyashram',
    location: 'Chennai, India',
    period: 'Jun 2018 – Apr 2020',
    score: '86.7%',
    scoreLabel: 'Percentage',
    level: 'higher-secondary',
  },
  {
    degree: 'Secondary Education',
    field: '',
    institution: 'Vels Vidyashram',
    location: 'Chennai, India',
    period: 'Jul 2005 – Apr 2018',
    score: '72.8%',
    scoreLabel: 'Percentage',
    level: 'secondary',
  },
]

export default function Education() {
  return (
    <section id="education" className="education section alt-bg">
      <div className="container">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>

        <div className="edu-cards">
          {EDUCATION.map((edu, i) => (
            <div key={i} className={`edu-card edu-card--${edu.level}`}>
              <div className="edu-icon">
                {edu.level === 'undergraduate'
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                }
              </div>
              <div className="edu-body">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    {edu.field && <p className="edu-field">{edu.field}</p>}
                    <p className="edu-inst">{edu.institution}</p>
                    <p className="edu-location">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </p>
                  </div>
                  <div className="edu-score-box">
                    <span className="edu-score">{edu.score}</span>
                    <span className="edu-score-label">{edu.scoreLabel}</span>
                  </div>
                </div>
                <div className="edu-period">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
