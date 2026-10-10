import './Lakehouse.css'

const REPO_URL = 'https://github.com/Dhyanesh45/healthcare-erp-lakehouse-databricks'
const IMG = './projects/lakehouse'

const HIGHLIGHTS = [
  'End-to-end healthcare ERP lakehouse on Databricks, deployed with a single Databricks Asset Bundle. All data is synthetic (generated with Faker), so no real patient information is used.',
  'Medallion pipeline (bronze → silver → gold) built with Lakeflow Spark Declarative Pipelines (SDP / DLT): AUTO CDC with SCD2 for patients, expectations, a quarantine table for bad encounters, and SQL materialized views as gold marts.',
  'Multi-task Lakeflow Job: catalog setup → security functions → data generation → medallion pipeline, followed by a data-quality report with an if/else breach check, governance, a for-each per-facility KPI task and a Genie metadata refresh.',
  'Unity Catalog governance with PHI column masks, row filters, tags, grants and audit.',
  'Databricks App web portal (Patient Lookup, Analytics, Finance, Operations) that queries gold tables on behalf of the signed-in user, so Unity Catalog masks and row filters decide what each viewer sees.',
  'Genie space that answers plain-English questions from the governed gold tables.',
]

const SHOTS = [
  { src: `${IMG}/job-dag.png`, caption: 'Multi-task Lakeflow Job' },
  { src: `${IMG}/portal-patient-lookup.jpg`, caption: 'Patient Lookup with PHI masked' },
  { src: `${IMG}/portal-analytics.jpg`, caption: 'Analytics portal' },
  { src: `${IMG}/portal-genie-chat.jpg`, caption: 'Genie Chat' },
]

const TAGS = ['Unity Catalog', 'Lakeflow SDP / DLT', 'Lakeflow Jobs', 'PySpark', 'SQL', 'Databricks Apps', 'Genie', 'Asset Bundles']

export default function Lakehouse() {
  return (
    <div className="cc-card lh-card">
      <div className="cc-tags-row">
        <span className="cc-tag cc-tag--green">Major Project</span>
        <span className="cc-tag cc-tag--amber">Databricks Lakehouse</span>
        <span className="cc-tag cc-tag--blue">Healthcare</span>
      </div>

      <div className="lh-header">
        <div className="cc-logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 12l10 5 10-5"/>
            <path d="M2 17l10 5 10-5"/>
          </svg>
        </div>
        <div className="cc-header-info">
          <h3 className="cc-name">MediCore Healthcare ERP Lakehouse on Databricks</h3>
          <p className="cc-meta">Personal project · Oct 2026 · Built after completing the Databricks Certified Data Engineer Professional</p>
          <p className="cc-tagline">
            Governed medallion lakehouse with PHI masking, a multi-task job, a Genie space and a web portal.
          </p>
        </div>
      </div>

      <div className="cc-body-inner">
        <a href={`${IMG}/pipeline-lineage.png`} target="_blank" rel="noopener noreferrer" className="lh-hero-shot">
          <img src={`${IMG}/pipeline-lineage.png`} alt="Pipeline lineage graph: bronze, silver and gold tables" loading="lazy" />
          <span>Medallion pipeline: bronze → silver → gold</span>
        </a>

        <ul className="cc-highlights">
          {HIGHLIGHTS.map((h, i) => (
            <li key={i}>
              <span className="cc-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="lh-shots">
          {SHOTS.map(shot => (
            <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer" className="lh-shot">
              <img src={shot.src} alt={shot.caption} loading="lazy" />
              <span>{shot.caption}</span>
            </a>
          ))}
        </div>

        <div className="cc-footer">
          <div className="cc-skill-tags">
            {TAGS.map(t => (
              <span key={t} className="cc-skill">{t}</span>
            ))}
          </div>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="cc-download-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
