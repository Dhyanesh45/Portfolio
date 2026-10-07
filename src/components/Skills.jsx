import Cell from './Cell'

const TOOLS = [
  { area: 'languages', tools: 'Python, SQL, PySpark' },
  { area: 'platform', tools: 'Azure Databricks, Delta Lake, Databricks Asset Bundles, Databricks CLI, Azure Data Factory' },
  { area: 'reporting', tools: 'MicroStrategy, Power BI' },
  { area: 'databases', tools: 'MySQL, PostgreSQL, Teradata' },
  { area: 'shipping', tools: 'Git, GitHub, GitLab, Azure DevOps, CI/CD, Docker, Liquibase' },
  { area: 'governance', tools: 'Data validation, row-level security, PHI controls, anonymization, HIPAA' },
  { area: 'python_libs', tools: 'Pandas, NumPy, scikit-learn, Flask, OpenCV, Dlib' },
  { area: 'ai_tools', tools: 'GitHub Copilot, Claude, OpenAI API' },
]

export default function Skills() {
  return (
    <Cell
      n={6}
      id="tools"
      lang="sql"
      duration={0.21}
      code={`SELECT area, tools\nFROM   dhyanesh.toolbox;`}
    >
      <h2 className="visually-hidden">Tools I use</h2>
      <div className="result-wrap">
        <table className="result">
          <thead><tr><th></th><th>area</th><th>tools</th></tr></thead>
          <tbody>
            {TOOLS.map((t, i) => (
              <tr key={t.area}>
                <td className="rownum">{i + 1}</td>
                <td className="mono">{t.area}</td>
                <td>{t.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="result-meta">{TOOLS.length} rows</p>
    </Cell>
  )
}
