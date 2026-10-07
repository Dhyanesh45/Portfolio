import Cell from './Cell'

const EDUCATION = [
  { years: '2020–2024', what: 'B.Tech, Electronics and Communication Engineering', where: 'Madras Institute of Technology, Anna University', score: '7.7 CGPA' },
  { years: '2018–2020', what: 'Higher Secondary, science stream', where: 'Vels Vidyashram, Chennai', score: '86.7%' },
  { years: '2005–2018', what: 'Secondary', where: 'Vels Vidyashram, Chennai', score: '72.8%' },
]

export default function Education() {
  return (
    <Cell
      n={9}
      id="education"
      lang="sql"
      duration={0.11}
      code={`SELECT years, qualification, school, score\nFROM   dhyanesh.education;`}
    >
      <h2 className="visually-hidden">Education</h2>
      <div className="result-wrap">
        <table className="result">
          <thead><tr><th></th><th>years</th><th>qualification</th><th>school</th><th>score</th></tr></thead>
          <tbody>
            {EDUCATION.map((e, i) => (
              <tr key={e.years}>
                <td className="rownum">{i + 1}</td>
                <td className="mono">{e.years}</td>
                <td style={{ fontWeight: 600 }}>{e.what}</td>
                <td>{e.where}</td>
                <td className="mono">{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="result-meta">3 rows</p>
    </Cell>
  )
}
