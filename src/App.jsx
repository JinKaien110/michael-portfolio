import Navbar from './components/layout/Navbar';
import ScrollControls from './components/layout/ScrollControls';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import CurrentlyBuilding from './components/sections/CurrentlyBuilding';
import Interests from './components/sections/Interests';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CurrentlyBuilding />
        <Interests />
        <Contact />
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--background)]">
        <div className="container flex flex-col gap-3 py-8 text-xs font-semibold text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Michael G. Gonzaga</span>
          <span>Michael G. Gonzaga · also known as Shin Yamauchi</span>
        </div>
      </footer>

      <ScrollControls />
    </div>
  );
}
