import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import CrawlHero from './components/CrawlHero.jsx'
import Experience from './components/Experience.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import StarField from './components/StarField.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020205] text-white">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <CrawlHero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
