import Cell from './Cell'
import { RESUME_URL } from './TopBar'
import './Hero.css'

const EMAIL = 'dhyanesh0402@gmail.com'

export default function Hero() {
  return (
    <Cell n={1} id="top" lang="md" duration={0.12}>
      <div className="hero md">
        <div className="hero-text">
          <h1 className="hero-name">S J Dhyanesh</h1>
          <p className="hero-role">Data Engineer at Neurealm, Chennai</p>

          <p className="hero-lede">
            For the past two years I've been building the pipelines and reports that US hospitals
            use to run their day: SQL and PySpark in Azure Databricks, ending up in MicroStrategy
            dashboards that hospital operations and clinical teams make decisions from.
          </p>
          <p className="hero-lede">
            Most of the job is making sure a number on a dashboard is right, and that anyone can
            trace it back to where it came from.
          </p>

          <div className="hero-actions">
            <a className="btn btn--primary" href={RESUME_URL} download="SJ_Dhyanesh_Resume.pdf">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5v8m0 0L4.75 7.25M8 10.5l3.25-3.25M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Download resume
            </a>
            <a className="btn btn--ghost" href={`mailto:${EMAIL}`}>Email me</a>
            <a className="link hero-li" href="https://linkedin.com/in/dhyanesh-s-j-947320211" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <dl className="hero-facts">
            <div><dt>Certified</dt><dd>Databricks Data Engineer Professional, Sep 2026</dd></div>
            <div><dt>Published</dt><dd>2 papers, on ECG/PPG authentication and flood monitoring</dd></div>
            <div><dt>Looking for</dt><dd>Data engineering roles</dd></div>
          </dl>
        </div>

        <figure className="hero-photo">
          <img src="./Photo/Photo.jpeg" alt="S J Dhyanesh in a navy blazer against a blue wall" width="1086" height="1448" />
        </figure>
      </div>
    </Cell>
  )
}
