import Header from './components/Header'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import ConnectStrip from './components/ConnectStrip'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ConnectStrip />
        <WhatIDo />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
      </main>
    </>
  )
}

export default App
