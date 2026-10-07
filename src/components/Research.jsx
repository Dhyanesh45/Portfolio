import './Research.css'

const ITEMS = [
  {
    type: 'Publication',
    icon: '📄',
    title: 'IoT-Based Surveillance System for Flood Monitoring Using Computer Vision',
    venue: 'ICAML 2025 · MIT Anna University, Chandigarh · Feb 22–23, 2025',
    description: 'Presented and published at the International Conference on Advances in Machine Learning (ICAML 2025). The paper proposes an IoT-driven flood monitoring system leveraging computer vision techniques to enable real-time surveillance, early warning, and disaster response.',
    tags: ['IoT', 'Computer Vision', 'Flood Monitoring', 'Surveillance', 'Machine Learning', 'ICAML 2025'],
    color: 'teal',
    badge: 'Published',
    link: 'https://psou.ac.in/asset/docs/files/202505161524319c90724728.pdf',
  },
  {
    type: 'Publication',
    icon: '📄',
    title: 'ML Based Enhanced Authentication Using ECG and PPG Signals for Remote Monitoring of Patients',
    venue: 'PriMera Scientific Engineering · Vol. 4 Issue 3 · DOI: 10.56831/PSEN-04-112 · Feb 2024',
    description: 'Co-authored research paper exploring biometric authentication combining ECG and PPG signals using Machine Learning, providing a novel passive continuous authentication approach for remote patient monitoring. Authors: SJ Dhyanesh, Partha Sarathy S, Harrish Kesavan, S Vallisree.',
    tags: ['Machine Learning', 'Biometrics', 'ECG', 'PPG', 'Authentication', 'Signal Processing'],
    color: 'olive',
    badge: 'Published',
    link: 'https://primerascientific.com/pdf/psen/PSEN-04-112.pdf',
  },
  {
    type: 'Internship',
    icon: '🏥',
    title: 'Data Science & AI Internship — Healthcare Domain',
    venue: 'Gilbert Research Center · Sep – Dec 2025',
    description: 'Worked on Data Science and Machine Learning projects focused on the healthcare domain. Applied AI algorithms and analytical techniques to healthcare datasets, contributing to research initiatives in clinical data analysis, predictive modeling, and algorithm development for health monitoring systems.',
    tags: ['Data Science', 'Machine Learning', 'Healthcare AI', 'Python', 'Algorithms', 'Predictive Modeling'],
    color: 'olive',
    badge: 'Internship',
  },
]

export default function Research() {
  return (
    <section id="research" className="research section">
      <div className="container">
        <div className="section-label">Research &amp; Projects</div>
        <h2 className="section-title">Notable Work &amp; <span>Publications</span></h2>

        <div className="research-cards">
          {ITEMS.map((item, i) => (
            <div key={i} className={`research-card research-card--${item.color}`}>
              <div className="rc-left">
                <div className="rc-icon">{item.icon}</div>
              </div>
              <div className="rc-body">
                <div className="rc-top-row">
                  <span className={`rc-badge rc-badge--${item.color}`}>{item.badge}</span>
                  <span className="rc-type">{item.type}</span>
                </div>
                <h3 className="rc-title">{item.title}</h3>
                <p className="rc-venue">{item.venue}</p>
                <p className="rc-desc">{item.description}</p>
                <div className="rc-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className={`rc-tag rc-tag--${item.color}`}>{tag}</span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rc-view-btn rc-view-btn--${item.color}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
