import Cell from './Cell'
import { RESUME_URL } from './TopBar'
import './Contact.css'

const EMAIL = 'dhyanesh0402@gmail.com'

export default function Contact() {
  return (
    <Cell n={10} id="contact" lang="md" duration={0.04} label>
      <div className="md contact">
        <h2 id="contact-title">Hiring for a data engineering role?</h2>
        <p>The easiest way to reach me is email. My resume is two pages and covers everything here.</p>

        <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>

        <dl className="contact-list">
          <div><dt>phone</dt><dd><a className="link" href="tel:+919080921803">+91 90809 21803</a></dd></div>
          <div><dt>linkedin</dt><dd><a className="link" href="https://linkedin.com/in/dhyanesh-s-j-947320211" target="_blank" rel="noopener noreferrer">in/dhyanesh-s-j-947320211</a></dd></div>
          <div><dt>resume</dt><dd><a className="link" href={RESUME_URL} download="SJ_Dhyanesh_Resume.pdf">SJ_Dhyanesh_Resume.pdf</a></dd></div>
          <div><dt>based in</dt><dd>Chennai, India (IST)</dd></div>
          <div><dt>languages</dt><dd>English, Tamil, German</dd></div>
        </dl>
      </div>

      <footer className="foot">
        <span>© {new Date().getFullYear()} S J Dhyanesh</span>
        <span>Built with React and Vite.</span>
      </footer>
    </Cell>
  )
}
