import { useState } from 'react'
import Cell from './Cell'
import './Certifications.css'

const CERTS = [
  {
    issued: '2026-09',
    title: 'Databricks Certified Data Engineer Professional',
    issuer: 'Databricks',
    image: './certificates/Databricks Data Engineer Professional.jpg',
    file: './certificates/databricks-data-engineer-professional.pdf',
  },
  {
    issued: '2026-03',
    title: 'Fundamentals of Azure Databricks',
    issuer: 'Coursera',
    image: './certificates/Azure databricks.jpeg',
    file: null,
  },
  {
    issued: '2025-12',
    title: 'Data Science & Machine Learning Internship',
    issuer: 'Gilbert Research Center',
    image: './certificates/certificate_internship_page-0001.jpg',
    file: './certificates/gilbert-internship.pdf',
  },
  {
    issued: '2025-07',
    title: 'Data Analysis and Visualization with Power BI',
    issuer: 'Microsoft / Coursera',
    image: './certificates/Coursera Power BI_page-0001.jpg',
    file: './certificates/power-bi.pdf',
  },
  {
    issued: '2024-12',
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    image: './certificates/GEN AI (1)_page-0001.jpg',
    file: './certificates/gen-ai.pdf',
  },
  {
    issued: '2024-11',
    title: 'MicroStrategy for Business Intelligence',
    issuer: 'Udemy',
    image: './certificates/MSTR BI (1)_page-0001.jpg',
    file: './certificates/microstrategy.pdf',
  },
  {
    issued: '2023-11',
    title: 'Machine Learning using Python',
    issuer: 'Infosys Springboard',
    image: './certificates/ML using Python_page-0001.jpg',
    file: './certificates/ml-python.pdf',
  },
  {
    issued: '2023-09',
    title: 'Business Analytics & Text Mining Using Python',
    issuer: 'NPTEL / IIT Roorkee',
    image: './certificates/Business Analytics & Text Mining Modeling Using Python_page-0001.jpg',
    file: './certificates/business-analytics.pdf',
  },
]

export default function Certifications() {
  const [shown, setShown] = useState(0)
  const cert = CERTS[shown]

  return (
    <Cell
      n={7}
      id="certificates"
      lang="sql"
      duration={0.29}
      code={`SELECT issued, certification, issuer\nFROM   dhyanesh.certifications\nORDER  BY issued DESC;`}
    >
      <h2 className="visually-hidden">Certificates</h2>
      <div className="certs">
        <div>
          <div className="result-wrap">
            <table className="result certs-table">
              <thead><tr><th></th><th>issued</th><th>certification</th><th>issuer</th></tr></thead>
              <tbody>
                {CERTS.map((c, i) => (
                  <tr
                    key={c.title}
                    className={i === shown ? 'is-shown' : ''}
                    onMouseEnter={() => setShown(i)}
                  >
                    <td className="rownum">{i + 1}</td>
                    <td className="mono">{c.issued}</td>
                    <td>
                      <a
                        className="certs-name"
                        href={c.file || c.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        onFocus={() => setShown(i)}
                      >
                        {c.title}
                      </a>
                    </td>
                    <td className="certs-issuer">{c.issuer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="result-meta">{CERTS.length} rows · hover a row to preview, click to open</p>
        </div>

        <figure className="certs-preview">
          <a href={cert.file || cert.image} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
            <img src={cert.image} alt="" key={cert.image} />
          </a>
          <figcaption>
            <strong>{cert.title}</strong>
            <span>{cert.issuer} · {cert.issued}</span>
          </figcaption>
        </figure>
      </div>
    </Cell>
  )
}
