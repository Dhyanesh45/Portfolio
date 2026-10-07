import { useCallback, useEffect, useState } from 'react'
import { RunContext } from './components/Cell'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Lineage from './components/Lineage'
import Experience from './components/Experience'
import Project from './components/Project'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Research from './components/Research'
import Education from './components/Education'
import Contact from './components/Contact'

// Long enough for the last cell (Cmd 10) to finish.
const RUN_ALL_MS = 10 * 140 + 1900

export default function App() {
  const [runId, setRunId] = useState(0)
  const [running, setRunning] = useState(false)

  const runAll = useCallback(() => {
    setRunId(id => id + 1)
    setRunning(true)
  }, [])

  // Run the notebook once on load; content is visible the whole time.
  useEffect(() => { runAll() }, [runAll])

  useEffect(() => {
    if (!running) return
    const t = setTimeout(() => setRunning(false), RUN_ALL_MS)
    return () => clearTimeout(t)
  }, [running, runId])

  return (
    <RunContext.Provider value={{ runId }}>
      <TopBar onRunAll={runAll} running={running} />
      <main className="nb">
        <Hero />
        <Lineage />
        <Experience />
        <Project />
        <Skills />
        <Certifications />
        <Research />
        <Education />
        <Contact />
      </main>
    </RunContext.Provider>
  )
}
