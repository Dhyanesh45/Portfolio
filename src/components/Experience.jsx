import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Data Engineer',
    company: 'Neurealm (Previously GAVS Technologies)',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    domain: 'Healthcare',
    highlights: [
      'I work in the healthcare domain, building data pipelines and reporting solutions for US based hospital clients. My role has grown beyond dashboard development, and I now work across the full data lifecycle, from ingestion and transformation to validation and delivery, with a focus on keeping the data accurate, reliable, and useful.',
      'Build and maintain data pipelines and data transformation workflows for US based healthcare clients, supporting operational reporting, analytics, and clinical decision making.',
      'Develop complex SQL and PySpark workflows in Azure Databricks to cleanse, transform, validate, and analyze large healthcare datasets for reporting and business requirements.',
      'Maintain documentation of critical metrics, data sources, and data mapping, so that definitions stay consistent and anyone picking up the work later understands exactly how a number is calculated.',
      'Supervise data quality through ongoing validation, catching inconsistencies or anomalies in large healthcare datasets before they reach a client facing report.',
      'Develop and maintain MicroStrategy dashboards, reports, Intelligent Cubes, advanced metrics, prompts, filters, attributes, and custom groups to deliver operational and clinical KPIs.',
      'Coordinate with other team members on schema changes and deployments using Liquibase, tracking releases across dev, QA, demo, and production so nothing breaks silently.',
      'Led the migration of 2TB+ of data from Teradata to Azure Databricks, ensuring data accuracy, validation, and reporting continuity throughout the migration.',
      'Manage schema changes and database deployments using Liquibase, coordinating releases across Dev, QA, Demo, and Production environments.',
      'Use SQL performance tuning and optimization regularly to keep reporting systems fast and reliable, especially as data volume grows.',
      'Apply Row-Level Security (RLS), object security, data anonymization, and PHI access controls to support secure and HIPAA compliant healthcare reporting.',
      'Performed SQL query troubleshooting and performance optimization, improving reporting efficiency and reducing query execution time in Databricks.',
      'Implement Databricks Asset Bundles (DABs) and Databricks CLI within CI/CD workflows to deploy schema and view changes and manage database scripts across multiple environments.',
      'Perform data profiling, quality validation, regression testing, and anomaly investigation to ensure accuracy and consistency across reporting systems for UAT and internal QA testing.',
      'Design and maintain data models and curated datasets in Azure Databricks, structuring transformed healthcare data into reliable and reusable data layers for downstream reporting, analytics, and business intelligence.',
      'Collaborate with client BAs, technical, and client stakeholders to gather data and reporting requirements, translate business needs into technical solutions, and resolve incidents.',
      'Work within Agile Scrum teams, using Azure Boards for sprint management, GitHub for version control, and CI/CD pipelines for deployments across multiple environments.',
    ],
    tags: ['Azure Databricks', 'PySpark', 'SQL', 'MicroStrategy', 'Liquibase', 'DABs', 'Databricks CLI', 'CI/CD', 'HIPAA/RLS', 'Teradata', 'Azure DevOps'],
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
