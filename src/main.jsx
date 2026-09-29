import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  Menu,
  Server,
  Sparkles,
  X,
} from 'lucide-react';
import GithubIcon from "./components/icons/GithubIcon.jsx";
import LinkedinIcon from "./components/icons/LinkedinIcon.jsx";
import './styles/global.css';
import { projects } from './data/projects.js';
import { skills } from './data/skills.js';
import { experience } from './data/experience.js';
import { interests } from './data/interests.js';
import { personal } from './data/personal.js';
import { certifications } from "./data/certifications.js";
import ScrollProgress from "./components/layout/ScrollProgress.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from './sections/HeroSections.jsx';
import AboutSection from './sections/AboutSections.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ProjectModal from './components/modals/ProjectModal.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener('resize', closeMenu);

    const sections = document.querySelectorAll('main > section');

    // Fall back to visible sections if the browser lacks this API.
    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => {
        section.classList.add('is-visible');
      });

      return () => {
        window.removeEventListener('resize', closeMenu);
      };
    }

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('resize', closeMenu);
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);


  return (
    <div className="min-h-screen bg-ink text-primary selection:bg-accent selection:text-white">
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo('home')} className="group text-left" aria-label="Go to home">
            <div className="text-sm font-black tracking-[0.22em] text-primary">
              MGG<span className="text-accentRed">.</span>
            </div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-secondary">SHIN YAMAUCHI</div>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {['about', 'projects', 'experience', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="nav-link">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="/assets/Michael-G-Gonzaga-Resume.pdf" download className="button-dark">
              Resume <Download size={15} />
            </a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
            {['about', 'projects', 'experience', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full py-3 text-left text-sm font-semibold capitalize text-secondary hover:text-primary">
                {item}
              </button>
            ))}
            <a href="/assets/Michael-G-Gonzaga-Resume.pdf" download className="button-dark mt-2 w-full justify-center">
              Download Resume <Download size={15} />
            </a>
          </div>
        )}
      </header>

      <main>
          <HeroSection scrollTo={scrollTo} />

        <AboutSection />

        <ProjectsSection setActiveProject={setActiveProject} />

        <section id="experience" className="border-t border-white/10 bg-paper text-primary">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.55fr_1fr] lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow-light">03 / Experience</p>
              <h2 className="section-title text-primary">Different domain.<br />Same problem-solving mindset.</h2>
            </div>
            <div>
              {experience.map((item) => (
                <div key={item.role} className="border-t border-white/10 py-8 first:pt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">{item.period}</p>
                  <div className="mt-3 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <h3 className="text-2xl font-black tracking-tight text-primary">{item.role}</h3>
                    <span className="font-semibold text-secondary">{item.company}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">{item.detail}</p>
                </div>
              ))}
              <div className="mt-5 rounded-2xl border border-white/10 bg-ink/70 p-6">
                <p className="text-sm leading-7 text-secondary">I bring an operations-first perspective to development: understand the workflow, protect the data, simplify the process, then build the system around it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="mb-12">
              <p className="eyebrow">04 / Capabilities</p>
              <h2 className="section-title">What I work with.</h2>
            </div>
            <div className="grid border-l border-t border-white/10 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} className="border-b border-r border-white/10 bg-ink/40 p-7 lg:p-9">
                  <h3 className="text-lg font-black text-primary">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="tag tag-large">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="eyebrow">Currently building</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-primary">A stronger backend foundation.</h3>
                <p className="mt-4 max-w-xl text-secondary leading-7">Exploring Python, PostgreSQL, software architecture, reusable systems, security, and scalable backend development.</p>
              </div>
              <div>
                <p className="eyebrow">Credentials</p>
                <div className="mt-4 space-y-3">
                  {certifications.map((certifications) => (
                  <div className="credential"><span>{certifications.provider}</span><strong>{certifications.certificate}</strong></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.7fr_1fr] lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow">05 / Beyond code</p>
              <h2 className="section-title">A little more<br />about me.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map(([n, title, text]) => (
                <div key={n} className="rounded-2xl border border-white/10 bg-paper p-6">
                  <span className="text-xs font-bold tracking-wider text-secondary">{n}</span>
                  <h3 className="mt-7 text-xl font-black text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-secondary">{text}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl bg-paper p-7 text-primary">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Personal philosophy</p>
                <p className="mt-4 text-2xl font-black tracking-tight text-primary md:text-3xl">“I believe there is no such thing as impossible.”</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-paper">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="eyebrow">06 / Contact</p>
            <div className="mt-4 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[.88] tracking-[-.065em] text-primary">LET&apos;S BUILD<br /><span className="text-secondary">SOMETHING.</span></h2>
                <p className="mt-7 max-w-xl text-base leading-7 text-secondary">For backend development, business systems, automation, or project collaboration.</p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[280px]">
                <a className="contact-link" href="mailto:gonzagamichael110@gmail.com"><Mail size={18} /> Email <ArrowUpRight size={16} className="ml-auto" /></a>
                <a className="contact-link" href="https://github.com/JinKaien110" target="_blank" rel="noreferrer"><GithubIcon size={18} /> GitHub <ArrowUpRight size={16} className="ml-auto" /></a>
                <a className="contact-link" href="https://www.linkedin.com/in/michael-gonzaga-490828253/" target="_blank" rel="noreferrer"><LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={16} className="ml-auto" /></a>
                <a className="button-dark mt-2 justify-center" href="/assets/Michael-G-Gonzaga-Resume.pdf" download><Download size={16} /> Download Resume</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink p-5">
      <div className="mb-6 text-accent">{icon}</div>
      <div className="font-black text-primary">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-secondary">{label}</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
