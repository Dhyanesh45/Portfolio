import Cell from './Cell'
import './Research.css'

const PAPERS = [
  {
    year: '2025',
    title: 'IoT-Based Surveillance System for Flood Monitoring Using Computer Vision',
    venue: 'ICAML 2025, International Conference on Advances in Machine Learning · Feb 22–23, 2025',
    note: 'An IoT flood-monitoring setup that uses computer vision for real-time surveillance and early warning.',
    link: 'https://psou.ac.in/asset/docs/files/202505161524319c90724728.pdf',
  },
  {
    year: '2024',
    title: 'ML Based Enhanced Authentication Using ECG and PPG Signals for Remote Monitoring of Patients',
    venue: 'PriMera Scientific Engineering, Vol. 4 Issue 3 · DOI 10.56831/PSEN-04-112',
    note: 'Continuous, passive authentication from ECG and PPG signals for remote patient monitoring. With Partha Sarathy S, Harrish Kesavan and S Vallisree.',
    link: 'https://primerascientific.com/pdf/psen/PSEN-04-112.pdf',
  },
]

export default function Research() {
  return (
    <Cell n={8} id="papers" lang="md" duration={0.05} label>
      <div className="md">
        <h2 id="papers-title">Papers</h2>
        <ol className="papers">
          {PAPERS.map(p => (
            <li key={p.title}>
              <span className="papers-year">{p.year}</span>
              <div>
                <h3>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
                </h3>
                <p className="papers-venue">{p.venue}</p>
                <p className="papers-note">{p.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Cell>
  )
}
