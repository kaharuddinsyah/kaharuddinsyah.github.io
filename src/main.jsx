import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Mail,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  Server,
} from 'lucide-react'
import './index.css'

const projects = [
  {
    title: 'Coal Production Management',
    description: 'Web application for monitoring and managing coal production data.',
    stack: ['Laravel', 'React', 'Inertia', 'MySQL'],
    image: '/images/project-1.svg',
    link: '#',
  },
  {
    title: 'ID Card Management',
    description: 'Employee ID card management and print-ready card generation.',
    stack: ['Laravel', 'React', 'Fargo Printer'],
    image: '/images/project-2.svg',
    link: '#',
  },
  {
    title: 'Fatigue Monitoring',
    description: 'Android application for collecting device activity events for fatigue monitoring.',
    stack: ['React Native', 'Android', 'TypeScript'],
    image: '/images/project-3.svg',
    link: '#',
  },
  {
    title: 'LV Downtime Report',
    description: 'Monthly reporting interface for LV equipment downtime and operational data.',
    stack: ['Laravel', 'React', 'MySQL'],
    image: '/images/project-4.svg',
    link: '#',
  },
]

const skills = [
  { icon: Code2, title: 'Frontend', items: 'React, Inertia, Tailwind CSS, JavaScript' },
  { icon: Server, title: 'Backend', items: 'Laravel, PHP, REST API' },
  { icon: Database, title: 'Database', items: 'MySQL, MariaDB' },
  { icon: Smartphone, title: 'Mobile', items: 'React Native, Android' },
]

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-bold tracking-tight">
            KS<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-zinc-400 sm:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-white/20 hover:bg-white/5"
          >
            <Github size={16} />
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Available for opportunities
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">
              Kaharuddin
              <span className="block text-zinc-500">Syah.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Web Developer focused on building practical applications with
              Laravel, React, PHP, MySQL, and React Native.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              <Social href="https://github.com/" icon={<Github size={20} />} label="GitHub" />
              <Social href="https://linkedin.com/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <Social href="mailto:your@email.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">01 / About</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A little about me.</h2>
            </div>
            <div className="space-y-4 leading-8 text-zinc-400">
              <p>
                I build business applications and internal systems that turn
                operational requirements into usable digital products.
              </p>
              <p>
                My main focus is full-stack web development, especially Laravel
                on the backend and React on the frontend.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">02 / Skills</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tools I work with.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <Icon className="text-blue-400" size={24} />
                <h3 className="mt-5 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">03 / Projects</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected work.</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="aspect-video overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-500">{project.description}</p>
                      </div>
                      <a
                        href={project.link}
                        aria-label={`Open ${project.title}`}
                        className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                      >
                        <ExternalLink size={17} />
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">04 / Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-5xl">
              Let's build something useful.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Interested in working together or want to know more about my projects?
              Feel free to reach out.
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              <Mail size={18} />
              Send me an email
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kaharuddin Syah. All rights reserved.</p>
          <p>Built with React + Vite + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

function Social({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
    >
      {icon}
    </a>
  )
}

export default App
