import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">About Me</div>
        <h2 className="section-title">Professional Summary</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I hold a <strong>Bachelor of Engineering in Electronics and Communication Engineering</strong> from
              Madras Institute of Technology, Anna University. Currently working as a
              <strong> BI Developer at Neurealm</strong> (formerly GAVS Technologies), I specialize
              in business intelligence and data analytics for US-based healthcare clients.
            </p>
            <p>
              I am proficient in <strong>SQL, Python, and Azure Databricks</strong>, with a strong foundation
              in Artificial Intelligence. I leverage Generative AI tools like GitHub Copilot to enhance
              development efficiency. I also use <strong>MicroStrategy and Power BI</strong> for crafting
              interactive KPI dashboards that translate complex healthcare data into actionable insights.
            </p>
            <p>
              I aspire to combine <strong>AI expertise with Business Intelligence and Data Analytics</strong>,
              bridging advanced data modeling with machine learning techniques to create impactful,
              data-driven solutions at scale.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="hi-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <strong>Healthcare Domain</strong>
                  <span>US-based hospital clients</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div>
                  <strong>2TB+ Data Migration</strong>
                  <span>Teradata to Azure Databricks</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <div>
                  <strong>Published Research</strong>
                  <span>ML-based authentication (ECG &amp; PPG)</span>
                </div>
              </div>
              <div className="highlight-item">
                <div className="hi-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div>
                  <strong>3 Languages</strong>
                  <span>English, Tamil &amp; German</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card-stack">
            <div className="info-card">
              <div className="ic-row">
                <span className="ic-label">Location</span>
                <span className="ic-value">Chennai, India</span>
              </div>
              <div className="ic-row">
                <span className="ic-label">Company</span>
                <span className="ic-value">Neurealm</span>
              </div>
              <div className="ic-row">
                <span className="ic-label">Role</span>
                <span className="ic-value">BI Developer</span>
              </div>
              <div className="ic-row">
                <span className="ic-label">Experience</span>
                <span className="ic-value">Jul 2024 – Present</span>
              </div>
              <div className="ic-row">
                <span className="ic-label">Education</span>
                <span className="ic-value">B.E ECE (7.7 CGPA)</span>
              </div>
              <div className="ic-row">
                <span className="ic-label">Email</span>
                <a href="mailto:dhyanesh0402@gmail.com" className="ic-link">dhyanesh0402@gmail.com</a>
              </div>
              <div className="ic-row">
                <span className="ic-label">Phone</span>
                <span className="ic-value">+91 90809 21803</span>
              </div>
            </div>

            <div className="domain-tags">
              {['Healthcare Analytics', 'Cloud Data Engineering', 'Business Intelligence', 'Machine Learning', 'ETL/ELT Pipelines'].map(tag => (
                <span key={tag} className="domain-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
