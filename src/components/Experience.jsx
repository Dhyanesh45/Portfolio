import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Business Intelligence Developer',
    company: 'Neurealm (formerly GAVS Technologies)',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    domain: 'Healthcare',
    highlights: [
      'Working in the healthcare domain, supporting analytics and reporting for US-based hospital clients, ensuring secure and reliable data processing for operational and clinical reporting.',
      'Implemented HIPAA-compliant reporting through Row-Level Security (RLS), object security, and PHI access controls.',
      'Developed and maintained interactive KPI dashboards and analytical reports using MicroStrategy, enabling senior leadership to monitor operational and clinical performance metrics in real time.',
      'Conducted exploratory data analysis (EDA) and statistical investigations on large, complex healthcare datasets to identify trends, anomalies, and actionable insights for US-based hospital clients.',
      'Performed SQL performance optimization and query troubleshooting, reducing execution time and improving overall reporting system reliability.',
      'Leveraged Azure Databricks (PySpark, Delta Lake) for large-scale data processing, transformation, and preparation of curated datasets used in analytics and reporting.',
      'Built ETL/ELT data pipelines using Azure Data Factory (ADF) to ingest and transform data from MySQL hospital management systems into Azure Databricks and modern data lake environments.',
      'Implemented SQL-based data modeling techniques to design and maintain efficient data models and reporting layers supporting dashboards and business analytics.',
      'Migrated and transformed data from hospital management databases into Azure Databricks, applying data anonymization techniques to ensure patient privacy and compliance with healthcare data protection standards.',
      'Executing migrations across DEV, SIT, UAT, and PROD, performing dependency analysis, smoke testing, post-migration validation, and release verification.',
      'Developing Command Manager scripts and Object Manager packages for migrations, cube refreshes, cache management, and deployment automation.',
      'Developed and executed DML and DDL SQL commands to manage database structures, and change view scripts based on the reporting requirements.',
      'Working in a DevOps model, supporting platform administration, MicroStrategy Server upgrades, environment maintenance, incident management, and production support.',
      'Wrote and optimized SQL scripts for schema and data changes, managing version-controlled deployments through Liquibase across dev, QA, demo, and production environments.',
      'Conducted quality assurance, regression testing, and validation to ensure reporting accuracy and system reliability.',
      'Collaborated within Agile Scrum teams using Azure Boards for sprint management and retrospectives, and GitHub for version control, with CI/CD-based deployments across multiple environments.',
      'Developing Reports, Dossiers, Intelligent Cubes, advanced metrics, prompts, filters, derived elements, consolidations, and custom groups.',
    ],
    tags: ['Azure Databricks', 'MicroStrategy', 'PySpark', 'ETL/ELT', 'SQL', 'ADF', 'HIPAA/RLS', 'Liquibase'],
  },
  {
    role: 'AI Developer Intern',
    company: 'Truetech Solutions',
    period: 'Jul 2022 – Aug 2022',
    type: 'Internship',
    domain: 'Artificial Intelligence',
    highlights: [
      'Developed a face recognition-based interview chatbot using Flask, OpenCV, and Dlib to enable real-time candidate identity verification and AI-driven authentication.',
      'Validated facial recognition of resources against their LinkedIn profiles using AI modeling tools.',
      'Built a real-time video processing pipeline integrating Flask backend with OpenCV face detection algorithms.',
    ],
    tags: ['Flask', 'OpenCV', 'Dlib', 'Python', 'Face Recognition', 'AI'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">Work Experience</div>
        <h2 className="section-title">Professional Journey</h2>

        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />

              <div className="job-card">
                <div className="job-header">
                  <div className="job-meta">
                    <h3 className="job-role">{job.role}</h3>
                    <div className="job-company">{job.company}</div>
                    <div className="job-info-row">
                      <span className="job-period">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {job.period}
                      </span>
                      <span className={`job-type job-type--${job.type === 'Full-time' ? 'full' : job.type === 'Startup' ? 'startup' : 'intern'}`}>
                        {job.type}
                      </span>
                      <span className="job-domain">{job.domain}</span>
                    </div>
                  </div>
                </div>

                <ul className="job-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="bullet" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="job-tags">
                  {job.tags.map(tag => (
                    <span key={tag} className="job-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
