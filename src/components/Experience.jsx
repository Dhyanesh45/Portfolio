import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Business Intelligence Developer',
    company: 'Neurealm (formerly GAVS Technologies)',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    domain: 'Healthcare',
    highlights: [
      'Build and maintain data pipelines and reporting systems that US hospital clients rely on for daily operations and clinical decision making; over the past year, ownership has grown from building dashboards to owning the full data lifecycle, from ingestion to modeling to delivery.',
      'Own the delivery of KPI dashboards in MicroStrategy, working directly with hospital leadership to translate operational and clinical questions into clear, well-defined metrics and reporting requirements.',
      'Build and maintain dashboards by connecting multiple raw data sources, including MySQL hospital management systems, into curated datasets in Azure Databricks, ensuring the numbers on screen are accurate and traceable back to source.',
      'Maintain documentation of critical metrics, data sources, and data mapping, so definitions stay consistent and anyone picking up the work later understands exactly how a number is calculated.',
      'Supervise data quality through ongoing validation, catching inconsistencies or anomalies in large healthcare datasets before they reach a client-facing report.',
      'Apply data governance and anonymization practices as standard, since access, roles, and consistency matter as much as accuracy when handling sensitive patient data.',
      'Led a large-scale migration of over 2TB of data from Teradata into Azure Databricks, collaborating closely with technical teams and following a clear plan to keep reporting accurate throughout the transition.',
      'Coordinate with IT and engineering teams on schema changes and deployments using Liquibase, tracking releases across Dev, QA, Demo, and Production so nothing breaks silently.',
      'Use SQL performance tuning and optimization regularly, including query troubleshooting, to keep reporting systems fast and reliable as data volume grows.',
      'Implement HIPAA-compliant reporting through Row-Level Security (RLS), object security, and PHI access controls.',
      'Work with Databricks Asset Bundles (DABs) and the Databricks CLI within CI/CD workflows, implementing schema-view changes and managing DDL/DML scripts based on business and technical requirements across deployment environments.',
      'Perform data profiling, quality validation, regression testing, and anomaly investigation to ensure accuracy and consistency across reporting systems.',
      'Collaborate within Agile Scrum teams using Azure Boards for sprint management and retrospectives, and GitHub for version control, with CI/CD-based deployments across multiple environments.',
      'Develop Reports, Dossiers, Intelligent Cubes, advanced metrics, prompts, filters, derived elements, consolidations, and custom groups.',
      'Collaborate with IT, engineering, and business stakeholders to gather requirements, resolve data issues, and deliver reliable data and reporting solutions.',
    ],
    tags: ['Azure Databricks', 'MicroStrategy', 'PySpark', 'ETL/ELT', 'SQL', 'ADF', 'HIPAA/RLS', 'Liquibase', 'Teradata', 'DABs'],
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
