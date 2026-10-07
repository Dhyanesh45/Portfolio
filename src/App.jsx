import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Climacraft from './components/Climacraft'
import Certifications from './components/Certifications'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumePopup from './components/ResumePopup'

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <Navbar onResumeClick={() => setResumeOpen(true)} />
      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Climacraft />
        <Certifications />
        <Research />
        <Contact />
      </main>
      <Footer />

      <ResumePopup open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
