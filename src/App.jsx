import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ConnectStrip from './components/ConnectStrip'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Seminars from './components/Seminars'
import Footer from './components/Footer'
import ContactDialog from './components/ContactDialog'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  // FormSubmit redirects back with ?sent=1 after a message goes through.
  const [sent, setSent] = useState(
    () => new URLSearchParams(window.location.search).get('sent') === '1',
  )

  useEffect(() => {
    if (!sent) return
    window.history.replaceState(null, '', window.location.pathname + window.location.hash)
    const timer = setTimeout(() => setSent(false), 6000)
    return () => clearTimeout(timer)
  }, [sent])

  const openContact = () => setContactOpen(true)

  return (
    <>
      <Header />
      <main>
        <Hero onContact={openContact} />
        <ConnectStrip />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Seminars />
      </main>
      <Footer onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
      {sent && (
        <div className="toast" role="status">
          Message sent. I'll get back to you soon.
          <button type="button" className="text-button" onClick={() => setSent(false)}>
            Dismiss
          </button>
        </div>
      )}
    </>
  )
}

export default App
