import Cell from './Cell'
import './Project.css'

export default function Project() {
  return (
    <Cell n={5} id="climacraft" lang="md" duration={0.06} label>
      <div className="md proj">
        <div className="proj-head">
          <h2 id="climacraft-title">Climacraft</h2>
          <p className="proj-meta">Co-founder & CTO · Sep 2023 – Jun 2024 · climate tech</p>
        </div>

        <div className="proj-body">
          <div>
            <p>
              While still at university, a few of us built <strong>AI-driven hydroponics for restaurants</strong>,
              growing produce on site and letting software manage the water and energy.
            </p>
            <p>
              Pilot deployments used around <strong>30% less water and energy</strong>, and we made it to the
              semifinals of <strong>Startup India 4.0</strong>. I owned the product story: how we positioned it,
              early go-to-market messaging, and MVP write-ups that were explicit about what the system
              did, its constraints and its limits.
            </p>
            <p>
              We decided to shut it down after the MVP. It taught me to keep the story told about a product
              in line with what the product actually does, which is most of what good data work comes down to as well.
            </p>
            <a className="link proj-pdf" href="./certificates/climacraft.pdf" download="Climacraft_Project.pdf">
              Download the project write-up (PDF)
            </a>
          </div>

          <dl className="proj-facts">
            <div><dt>pilot_saving</dt><dd>~30% water + energy</dd></div>
            <div><dt>recognition</dt><dd>Startup India 4.0 semifinalist</dd></div>
            <div><dt>status</dt><dd>shut down after MVP</dd></div>
          </dl>
        </div>
      </div>
    </Cell>
  )
}
