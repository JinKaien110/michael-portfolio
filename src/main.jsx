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
import './styles.css';


const projects = [
  {
    number: '01',
    title: '6Pack Iron City Gym Management',
    type: 'Client Project · Deployed',
    description:
      'A web-based gym management platform covering members, payments, classes, bookings, notifications, analytics, and AI-assisted business recommendations.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    link: 'https://github.com/JinKaien110/gym-management-6packironcity',
    status: 'Live project',
  },
  {
    number: '02',
    title: 'Barangay Management Information System',
    type: 'Client Project · Deployed',
    description:
      'A barangay information system for resident records, document requests, blotter/case management, announcements, reporting, and monitoring.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    link: 'https://github.com/JinKaien110/mis-bucandala',
    status: 'Live project',
  },
  {
    number: '03',
    title: 'Water Interruption Report System',
    type: 'Client Project · Approval Pending',
    description:
      'A reporting and monitoring system with dashboards, KPIs, work orders, and administrative features. Developed approximately 80–85% of the system.',
    stack: ['Web App', 'Dashboard', 'Workflow'],
    link: null,
    status: 'Showcase pending approval',
  },
  {
    number: '04',
    title: 'Sharap POS & Management System',
    type: 'School Project · Team',
    description:
      'A POS, inventory, sales, and online-ordering system. Worked as the backend developer within the team.',
    stack: ['Backend', 'POS', 'Inventory', 'Sales'],
    link: null,
    status: 'Repository coming soon',
  },
  {
    number: '05',
    title: '24F7 POS & Management System',
    type: 'School Project · Team',
    description:
      'A POS, inventory, sales, and online-ordering system developed as a team project, with backend development handled by me.',
    stack: ['Backend', 'POS', 'Inventory', 'Sales'],
    link: null,
    status: 'Repository coming soon',
  },
];

const skills = [
  { title: 'Backend', items: ['Node.js', 'Laravel', 'PHP', 'Python · Learning', 'Java · Basic', 'C++ · Basic'] },
  { title: 'Data', items: ['MongoDB', 'MySQL', 'PostgreSQL · Learning', 'SQL'] },
  { title: 'Engineering', items: ['REST APIs', 'Git & GitHub', 'System Workflows', 'Automation', 'Business Logic'] },
  { title: 'Business Systems', items: ['HR Operations', 'Employee Data', 'Payroll Support', 'Process Improvement', 'Reporting'] },
];

const experience = [
  {
    period: 'Nov 2022 — Jun 2025',
    role: 'HR Solutions Services Associate III',
    company: 'Conduent Inc.',
    detail: 'HR Shared Services & Operations · Employee lifecycle · HR data · Payroll · Benefits · Leave · Case management',
  },
  {
    period: 'Jul 2025 — Present',
    role: 'Web Developer',
    company: 'Self-Employed',
    detail: 'Client systems · Requirements gathering · Backend development · Business workflows · Testing · Deployment',
  },
];

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

  

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-black selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo('home')} className="group text-left" aria-label="Go to home">
            <div className="text-sm font-black tracking-[0.22em]">MGG<span className="text-black/35">.</span></div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-black/45">SHIN YAMAUCHI</div>
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

          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 px-5 py-4 md:hidden">
            {['about', 'projects', 'experience', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full py-3 text-left text-sm font-semibold capitalize">
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
        <section id="home" className="relative overflow-hidden pt-32 lg:pt-40">
          <div className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="mx-auto grid max-w-7xl items-end gap-14 px-5 pb-24 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:pb-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-3 py-1.5 text-xs font-semibold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-black" /> Open to backend & systems opportunities
              </div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-black/45">Michael G. Gonzaga</p>
              <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,8.4rem)] font-black leading-[0.86] tracking-[-0.075em]">
                I BUILD
                <br />
                <span className="text-black/25">SYSTEMS</span>
                <br />
                THAT WORK.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65 lg:text-xl">
                Backend Developer & Business Systems Developer combining software engineering with real-world HR and business operations experience.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('projects')} className="button-dark">View Projects <ArrowUpRight size={16} /></button>
                <button onClick={() => scrollTo('contact')} className="button-light">Let&apos;s Connect <Mail size={16} /></button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="profile-frame">
                <img src="/assets/shin.jpg" alt="Michael G. Gonzaga" className="h-full w-full object-cover grayscale" />
              </div>
              <div className="absolute -bottom-5 -left-4 max-w-[220px] rounded-2xl border border-black/10 bg-white p-4 shadow-soft lg:-left-12">
                <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/45"><Sparkles size={14} /> Current focus</div>
                <p className="text-sm font-semibold leading-6">Python · PostgreSQL · Architecture · Security · Scalable backend systems</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-black/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.55fr_1fr] lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow">01 / About</p>
              <h2 className="section-title">Business thinking.<br />Backend execution.</h2>
            </div>
            <div className="max-w-3xl">
              <p className="big-copy">I enjoy turning repetitive or complicated business processes into software that is easier to manage, understand, and improve.</p>
              <p className="body-copy mt-6">My background combines nearly three years in HR Shared Services and HR Operations with hands-on web development. That experience gives me a practical view of employee data, workflows, documentation, reporting, and operational requirements—not just the code behind them.</p>
              <p className="body-copy mt-5">My long-term direction is backend development, especially ERP and complex business systems where clean architecture, reliable data, security, and automation matter.</p>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <Stat icon={<Server size={18} />} value="Backend" label="Primary direction" />
                <Stat icon={<Database size={18} />} value="Systems" label="Business & ERP interest" />
                <Stat icon={<Code2 size={18} />} value="Automation" label="Reduce repetitive work" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">02 / Selected work</p>
                <h2 className="section-title">Systems I&apos;ve built.</h2>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-bold underline decoration-black/20 underline-offset-4" href="https://github.com/JinKaien110" target="_blank" rel="noreferrer">View GitHub <ExternalLink size={15} /></a>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {projects.map((project) => (
                <article key={project.number} className="project-row group" onClick={() => setActiveProject(project)}>
                  <div className="project-number">{project.number}</div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-black/40">{project.type}</div>
                    <h3 className="text-2xl font-black tracking-tight lg:text-4xl">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55 lg:text-base">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => <span key={item} className="tag">{item}</span>)}
                    </div>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/45 lg:flex">{project.status} <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-black/10 bg-black text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.55fr_1fr] lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow-light">03 / Experience</p>
              <h2 className="section-title text-white">Different domain.<br />Same problem-solving mindset.</h2>
            </div>
            <div>
              {experience.map((item) => (
                <div key={item.role} className="border-t border-white/15 py-8 first:pt-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">{item.period}</p>
                  <div className="mt-3 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <h3 className="text-2xl font-black tracking-tight">{item.role}</h3>
                    <span className="font-semibold text-white/60">{item.company}</span>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">{item.detail}</p>
                </div>
              ))}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[.04] p-6">
                <p className="text-sm leading-7 text-white/65">I bring an operations-first perspective to development: understand the workflow, protect the data, simplify the process, then build the system around it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="mb-12">
              <p className="eyebrow">04 / Capabilities</p>
              <h2 className="section-title">What I work with.</h2>
            </div>
            <div className="grid border-l border-t border-black/10 md:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} className="border-b border-r border-black/10 p-7 lg:p-9">
                  <h3 className="text-lg font-black">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="tag tag-large">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 border-t border-black/10 pt-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="eyebrow">Currently building</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight">A stronger backend foundation.</h3>
                <p className="mt-4 max-w-xl text-black/55 leading-7">Exploring Python, PostgreSQL, software architecture, reusable systems, security, and scalable backend development.</p>
              </div>
              <div>
                <p className="eyebrow">Credentials</p>
                <div className="mt-4 space-y-3">
                  <div className="credential"><span>NC II</span><strong>Graphic Design</strong></div>
                  <div className="credential"><span>Credential</span><strong>Ethical Hacker and Cybersecurity · Cisco</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-paper">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.7fr_1fr] lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow">05 / Beyond code</p>
              <h2 className="section-title">A little more<br />about me.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['01', 'Classical Piano', 'I enjoy the discipline and detail behind classical pieces.'],
                ['02', 'Espresso', 'One of the small rituals I genuinely enjoy.'],
                ['03', 'Games & Anime', 'Competitive games, AAA titles, anime, and animated series.'],
                ['04', 'Learning', 'I enjoy picking up new tools, ideas, and ways to build things.'],
              ].map(([n, title, text]) => (
                <div key={n} className="rounded-2xl border border-black/10 bg-white p-6">
                  <span className="text-xs font-bold tracking-wider text-black/30">{n}</span>
                  <h3 className="mt-7 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl bg-black p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Personal philosophy</p>
                <p className="mt-4 text-2xl font-black tracking-tight md:text-3xl">“I believe there is no such thing as impossible.”</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <p className="eyebrow">06 / Contact</p>
            <div className="mt-4 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black leading-[.88] tracking-[-.065em]">LET&apos;S BUILD<br /><span className="text-black/25">SOMETHING.</span></h2>
                <p className="mt-7 max-w-xl text-base leading-7 text-black/55">For backend development, business systems, automation, or project collaboration.</p>
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

      <footer className="border-t border-black/10 bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs font-semibold text-black/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Michael G. Gonzaga</span>
          <span>Michael G. Gonzaga · also known as Shin Yamauchi</span>
        </div>
      </footer>

      {activeProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-5 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div className="w-full max-w-xl rounded-3xl bg-white p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">Project {activeProject.number}</p>
                <h3 className="mt-2 text-3xl font-black tracking-tight">{activeProject.title}</h3>
              </div>
              <button onClick={() => setActiveProject(null)} className="rounded-full border border-black/10 p-2" aria-label="Close"><X size={18} /></button>
            </div>
            <p className="mt-6 leading-7 text-black/60">{activeProject.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">{activeProject.stack.map((x) => <span key={x} className="tag">{x}</span>)}</div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {activeProject.link ? (
                <a href={activeProject.link} target="_blank" rel="noreferrer" className="button-dark">View Repository <ExternalLink size={16} /></a>
              ) : (
                <span className="rounded-full bg-black/5 px-4 py-2 text-sm font-semibold text-black/55">{activeProject.status}</span>
              )}
              <button onClick={() => setActiveProject(null)} className="button-light">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-paper p-5">
      <div className="mb-6 text-black/45">{icon}</div>
      <div className="font-black">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/40">{label}</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
