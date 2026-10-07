import Cell from './Cell'
import './Experience.css'

const ROLES = [
  { role: 'Data Engineer', company: 'Neurealm (formerly GAVS Technologies)', from: '2024-07', to: 'now', current: true },
  { role: 'Data Science & ML Intern', company: 'Gilbert Research Center', from: '2025-09', to: '2025-12' },
  { role: 'Co-founder & CTO', company: 'Climacraft', from: '2023-09', to: '2024-06', href: '#climacraft' },
  { role: 'AI Developer Intern', company: 'Truetech Solutions', from: '2022-07', to: '2022-08' },
]

const NOTES = [
  {
    title: 'Pipelines and models',
    items: [
      'Write the SQL and PySpark in Azure Databricks that cleans, transforms and validates large healthcare datasets.',
      'Model the result into curated, reusable layers so reporting and analytics read from one place.',
      'Led the 2TB+ move from Teradata to Databricks without losing reporting continuity.',
      'Tune and troubleshoot slow SQL as data volume grows, to keep query times down.',
    ],
  },
  {
    title: 'Reporting',
    items: [
      'Build MicroStrategy dashboards, reports, Intelligent Cubes, advanced metrics, prompts, filters, attributes and custom groups for operational and clinical KPIs.',
      'Sit with client BAs and stakeholders to turn a request into a clearly defined metric, and help resolve incidents when something looks off.',
      'Document critical metrics, sources and mappings so definitions stay consistent.',
    ],
  },
  {
    title: 'Keeping it correct and safe',
    items: [
      'Data profiling, quality checks, regression testing and anomaly investigation for UAT and internal QA, so problems are caught before a client sees them.',
      'Row-level security, object security, anonymization and PHI access controls for HIPAA-compliant reporting.',
    ],
  },
  {
    title: 'Shipping changes',
    items: [
      'Schema changes and deployments through Liquibase, tracked across dev, QA, demo and production.',
      'Databricks Asset Bundles and the Databricks CLI inside CI/CD to deploy schema and view changes and manage database scripts.',
      'Agile Scrum on Azure Boards, GitHub for version control.',
    ],
  },
]

export default function Experience() {
  return (
    <>
      <Cell
        n={3}
        id="work"
        lang="sql"
        duration={0.37}
        code={`SELECT role, company, from_date, to_date\nFROM   dhyanesh.experience\nORDER  BY from_date DESC;`}
      >
        <h2 className="visually-hidden">Work history</h2>
        <div className="result-wrap">
          <table className="result">
            <thead>
              <tr><th></th><th>role</th><th>company</th><th>from_date</th><th>to_date</th></tr>
            </thead>
            <tbody>
              {ROLES.map((r, i) => (
                <tr key={r.company} className={r.current ? 'is-current' : ''}>
                  <td className="rownum">{i + 1}</td>
                  <td className="xp-role">{r.role}</td>
                  <td>{r.href ? <a className="link" href={r.href}>{r.company}</a> : r.company}</td>
                  <td className="mono">{r.from}</td>
                  <td className="mono">{r.current ? <span className="xp-now">now</span> : r.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="result-meta">4 rows · Gilbert ran alongside Neurealm</p>
      </Cell>

      <Cell n={4} id="neurealm" lang="md" duration={0.08} label>
        <div className="md">
          <h2 id="neurealm-title">What I actually do at Neurealm</h2>
          <p className="xp-intro">
            I started on dashboards in July 2024. The role has grown into the whole data lifecycle for
            US hospital clients, from ingestion and transformation to validation and delivery.
          </p>
          <div className="xp-notes">
            {NOTES.map(group => (
              <div key={group.title} className="xp-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="xp-before">
            Before this, in the summer of 2022, I interned at Truetech Solutions as an AI developer and
            built a face-recognition interview chatbot with Flask, OpenCV and Dlib that checked a
            candidate's identity in real time.
          </p>
        </div>
      </Cell>
    </>
  )
}
