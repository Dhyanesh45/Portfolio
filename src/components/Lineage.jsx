import { useLayoutEffect, useRef, useState } from 'react'
import Cell from './Cell'
import './Lineage.css'

const STAGES = [
  { key: 'source', label: 'source' },
  { key: 'platform', label: 'transform' },
  { key: 'serve', label: 'serve' },
  { key: 'people', label: 'consumers' },
]

const NODES = [
  {
    id: 'mysql', stage: 'source', name: 'MySQL', sub: 'hospital systems',
    title: 'Hospital management systems',
    body: 'The raw operational data. I connect these sources into Databricks and shape them into curated datasets that reports can trust.',
  },
  {
    id: 'teradata', stage: 'source', name: 'Teradata', sub: 'legacy warehouse',
    title: 'Teradata → Databricks, 2TB+',
    body: 'I led the migration of more than 2TB from Teradata into Azure Databricks, validating as we moved so client reports stayed correct through the switch.',
  },
  {
    id: 'databricks', stage: 'platform', name: 'Azure Databricks', sub: 'SQL · PySpark · Delta',
    title: 'Where most of my day goes',
    body: 'SQL and PySpark to cleanse, transform and validate large healthcare datasets, modelled into reusable layers for reporting. When a query gets slow as volume grows, this is where I tune it.',
  },
  {
    id: 'governance', stage: 'platform', name: 'Access rules', sub: 'RLS · PHI · HIPAA',
    title: 'Patient data, so access matters as much as accuracy',
    body: 'Row-level security, object security, anonymization and PHI access controls, so every report stays HIPAA-compliant and people only see what they should.',
  },
  {
    id: 'mstr', stage: 'serve', name: 'MicroStrategy', sub: 'dossiers · cubes',
    title: 'What the client actually looks at',
    body: 'Dashboards, dossiers, Intelligent Cubes, advanced metrics, prompts, filters and custom groups that carry the operational and clinical KPIs.',
  },
  {
    id: 'hospitals', stage: 'people', name: 'US hospital teams', sub: 'BAs · stakeholders',
    title: 'The people the numbers are for',
    body: 'I work with client BAs and stakeholders to pin down what a metric should mean, then document it, so anyone picking up the work later can see exactly how a number is calculated.',
  },
]

const EDGES = [
  { from: 'mysql', to: 'databricks' },
  { from: 'teradata', to: 'databricks', label: '2TB+ migrated' },
  { from: 'databricks', to: 'mstr' },
  { from: 'governance', to: 'mstr' },
  { from: 'mstr', to: 'hospitals' },
]

function edgePath(a, b) {
  // Left-to-right when the target sits to the right, otherwise top-to-bottom.
  if (b.left >= a.right - 4) {
    const x1 = a.right, y1 = a.top + a.height / 2
    const x2 = b.left, y2 = b.top + b.height / 2
    const dx = (x2 - x1) / 2
    return { d: `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 }
  }
  const x1 = a.left + a.width / 2, y1 = a.bottom
  const x2 = b.left + b.width / 2, y2 = b.top
  const dy = (y2 - y1) / 2
  return { d: `M${x1},${y1} C${x1},${y1 + dy} ${x2},${y2 - dy} ${x2},${y2}`, mx: (x1 + x2) / 2, my: (y1 + y2) / 2 }
}

export default function Lineage() {
  const [selected, setSelected] = useState('databricks')
  const [paths, setPaths] = useState([])
  const wrap = useRef(null)
  const refs = useRef({})

  useLayoutEffect(() => {
    const el = wrap.current
    if (!el) return
    const measure = () => {
      const base = el.getBoundingClientRect()
      const rect = id => {
        const r = refs.current[id].getBoundingClientRect()
        return {
          left: r.left - base.left, right: r.right - base.left,
          top: r.top - base.top, bottom: r.bottom - base.top,
          width: r.width, height: r.height,
        }
      }
      setPaths(EDGES.map(e => ({ ...e, ...edgePath(rect(e.from), rect(e.to)) })))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const active = NODES.find(n => n.id === selected)
  const touches = id => id === selected
  const lit = e => touches(e.from) || touches(e.to)

  return (
    <Cell
      n={2}
      id="lineage"
      lang="python"
      duration={1.84}
      code={`# Where my work sits, end to end. Click any step.\ndisplay(lineage("healthcare_reporting"))`}
    >
      <h2 className="visually-hidden">Where my work sits</h2>
      <div className="lin" ref={wrap}>
        <svg className="lin-edges" aria-hidden="true">
          {paths.map(p => (
            <g key={p.from + p.to} className={lit(p) ? 'is-lit' : ''}>
              <path className="lin-base" d={p.d} />
              <path className="lin-flow" d={p.d} />
            </g>
          ))}
        </svg>
        {paths.filter(p => p.label).map(p => (
          <span key={p.label} className="lin-label" style={{ left: p.mx, top: p.my }}>{p.label}</span>
        ))}

        {STAGES.map(stage => (
          <div key={stage.key} className={`lin-stage lin-stage--${stage.key}`}>
            <span className="lin-stage-label">{stage.label}</span>
            {NODES.filter(n => n.stage === stage.key).map(node => (
              <button
                key={node.id}
                ref={el => { refs.current[node.id] = el }}
                className={`lin-node${selected === node.id ? ' is-selected' : ''}`}
                onClick={() => setSelected(node.id)}
                aria-pressed={selected === node.id}
              >
                <span className="lin-node-name">{node.name}</span>
                <span className="lin-node-sub">{node.sub}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="lin-detail" aria-live="polite">
        <h3>{active.title}</h3>
        <p>{active.body}</p>
      </div>

      <p className="lin-envs">
        <span className="lin-env">dev</span>→<span className="lin-env">qa</span>→<span className="lin-env">demo</span>→<span className="lin-env">prod</span>
        <span className="lin-envs-note">Schema and view changes ship through Liquibase and Databricks Asset Bundles in CI/CD, so nothing breaks quietly between environments.</span>
      </p>
    </Cell>
  )
}
