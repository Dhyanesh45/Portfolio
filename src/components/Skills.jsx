import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Cloud & Big Data',
    icon: '☁️',
    color: 'teal',
    skills: ['Azure Databricks', 'PySpark', 'Delta Lake', 'Azure Data Factory', 'Azure Cloud'],
  },
  {
    category: 'Languages',
    icon: '💻',
    color: 'olive',
    skills: ['Python', 'SQL', 'PySpark', 'DAX'],
  },
  {
    category: 'Python Libraries',
    icon: '🐍',
    color: 'teal',
    skills: ['Pandas', 'NumPy', 'Flask', 'OpenCV', 'Dlib', 'Scikit-learn'],
  },
  {
    category: 'BI & Visualization',
    icon: '📊',
    color: 'olive',
    skills: ['MicroStrategy', 'Power BI', 'KPI Dashboards', 'Analytical Reports'],
  },
  {
    category: 'Data Engineering',
    icon: '🔧',
    color: 'teal',
    skills: ['ETL / ELT', 'Data Modeling', 'Data Governance', 'Data Anonymization', 'SQL Optimization', 'DDL / DML'],
  },
  {
    category: 'Tools & Practices',
    icon: '⚙️',
    color: 'olive',
    skills: ['GIT', 'DevOps / CI-CD', 'GitHub Copilot', 'Regression Testing', 'EDA'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section alt-bg">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">What I Work With</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className={`skill-card skill-card--${group.color}`}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
