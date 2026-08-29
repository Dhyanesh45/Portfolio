import './Certifications.css'

const CERTS = [
  {
    title: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    date: 'Aug 2026',
    image: './certificates/DBRX Associate_page-0001.jpg',
    file: './certificates/databricks-data-engineer-associate.pdf',
    tags: ['Databricks', 'Data Engineering', 'Azure'],
    color: 'olive',
  },
  {
    title: 'Fundamentals of Azure Databricks',
    issuer: 'Coursera',
    date: 'Mar 2026',
    image: './certificates/Azure databricks.jpeg',
    file: null,
    tags: ['Azure', 'Databricks', 'Cloud'],
    color: 'teal',
  },
  {
    title: 'Data Science & Machine Learning Internship',
    issuer: 'Gilbert Research Center',
    date: 'Sep – Dec 2025',
    image: './certificates/certificate_internship_page-0001.jpg',
    file: './certificates/gilbert-internship.pdf',
    tags: ['Data Science', 'Machine Learning'],
    color: 'olive',
  },
  {
    title: 'Data Analysis and Visualization with Power BI',
    issuer: 'Microsoft / Coursera',
    date: 'Jul 2025',
    image: './certificates/Coursera Power BI_page-0001.jpg',
    file: './certificates/power-bi.pdf',
    tags: ['Power BI', 'Data Analysis', 'Visualization'],
    color: 'teal',
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'Dec 2024',
    image: './certificates/GEN AI (1)_page-0001.jpg',
    file: './certificates/gen-ai.pdf',
    tags: ['Generative AI', 'LLMs'],
    color: 'olive',
  },
  {
    title: 'MicroStrategy for Business Intelligence',
    issuer: 'Udemy',
    date: 'Nov 2024',
    image: './certificates/MSTR BI (1)_page-0001.jpg',
    file: './certificates/microstrategy.pdf',
    tags: ['MicroStrategy', 'BI', 'Dashboards'],
    color: 'teal',
  },
  {
    title: 'Business Analytics & Text Mining Using Python',
    issuer: 'NPTEL / IIT Roorkee',
    date: 'Sep 2023',
    image: './certificates/Business Analytics & Text Mining Modeling Using Python_page-0001.jpg',
    file: './certificates/business-analytics.pdf',
    tags: ['Analytics', 'NLP', 'Python'],
    color: 'olive',
  },
  {
    title: 'Machine Learning using Python',
    issuer: 'Infosys Springboard',
    date: 'Nov 2023',
    image: './certificates/ML using Python_page-0001.jpg',
    file: './certificates/ml-python.pdf',
    tags: ['Machine Learning', 'Python'],
    color: 'teal',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section alt-bg">
      <div className="container">
        <div className="section-label">Certifications</div>
        <h2 className="section-title">Courses &amp; <span>Certificates</span></h2>
        <p className="section-subtitle">
          All earned certificates displayed below. Click any to open the PDF.
        </p>

        <div className="cert-gallery">
          {CERTS.map((cert, i) => (
            <div key={i} className={`cg-card cg-card--${cert.color}`}>

              {/* ── Image / placeholder area ── */}
              {cert.image ? (
                cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cg-image-link"
                    title={`Open ${cert.title} PDF`}
                  >
                    <div className="cg-image-wrap">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="cg-img"
                        loading="lazy"
                      />
                      <div className="cg-image-overlay">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Open PDF</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="cg-image-wrap">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cg-img"
                      loading="lazy"
                    />
                  </div>
                )
              ) : (
                <div className="cg-no-image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p>Certificate Available</p>
                  <span>File not yet uploaded</span>
                </div>
              )}

              {/* ── Metadata ── */}
              <div className="cg-meta">
                <div className="cg-meta-top">
                  <span className={`cg-issuer cg-issuer--${cert.color}`}>{cert.issuer}</span>
                  <span className="cg-date">{cert.date}</span>
                </div>
                <h3 className="cg-title">{cert.title}</h3>
                <div className="cg-tags">
                  {cert.tags.map(tag => (
                    <span key={tag} className={`cg-tag cg-tag--${cert.color}`}>{tag}</span>
                  ))}
                </div>

                {/* Download PDF button */}
                {cert.file && (
                  <a
                    href={cert.file}
                    download
                    className={`cg-dl-btn cg-dl-btn--${cert.color}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
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
