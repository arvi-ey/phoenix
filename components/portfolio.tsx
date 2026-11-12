'use client'

import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'

const projects = [
  {
    name: 'Soul Fitness',
    type: 'Gym website',
    number: '01',
    description: 'Soul Fitness is a modern, fully responsive gym website designed to showcase gym facilities, equipment, and workout experiences. It features an interactive gym setup gallery, video gallery, FAQ section, and client testimonials, providing visitors with an engaging overview of the fitness center.',
    liveDemo: 'https://soul-fitness-seven.vercel.app/',
    show_live: true,
    workin_progress: false,
    accent: 'bg-[#d9f99d]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-17-52_gj3sp0.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-16-38_mhl3cx.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153294/Screenshot_From_2026-11-08_21-16-45_wd153c.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153292/Screenshot_From_2026-11-08_21-17-41_efem3j.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794153290/Screenshot_From_2026-11-08_21-17-36_sm0xee.png',
    ],
  },
  {
    name: 'Yuno',
    type: 'Multi-Tenant Project Management SaaS',
    number: '02',
    description: 'Yuno is a multi-tenant project management platform designed to manage multiple organizations, departments, and projects in one place. It provides role-based access control, employee management, task tracking, Kanban boards, and email notifications, helping teams collaborate, organize workflows, and monitor project progress efficiently.',
    liveDemo: 'https://baazaaar.netlify.app',
    show_live: false,
    workin_progress: false,
    accent: 'bg-[#fbcfe8]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794147823/Screenshot_From_2026-11-08_18-56-37_qywfzr.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-27_uwsg2g.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-18_dyl8ad.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-11_phuraf.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794152550/Screenshot_From_2026-11-08_21-10-45_dxu62t.png',
    ],
  },
  {
    name: 'Zenvy Admin Dashboard',
    type: 'Fullstack E-commerce Admin Panel',
    number: '03',
    description: 'A centralized e-commerce administration platform built to streamline store operations. It enables efficient management of products, categories, inventory, customers, and orders, with sales analytics, promotional campaigns, and push notifications — all through a clean, responsive dashboard with light and dark mode support.',
    show_live: false,
    workin_progress: false,
    accent: 'bg-[#bfdbfe]',
    mainPhoto: 'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-27-24_ciqzfu.png',
    subPhotos: [
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-27-32_oknifu.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-29_dkxc9l.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-50_gqugxy.png',
      'https://res.cloudinary.com/dnpbnppjt/image/upload/v1794150138/Screenshot_From_2026-11-08_20-29-40_ka4fyi.png',
    ],
  },
  {
    name: 'Zenvy',
    type: 'Full-Stack E-Commerce Application',
    number: '04',
    description: 'Zenvy is a full-stack e-commerce platform offering seamless online shopping, product and inventory management, secure authentication, and order processing. Built with Next.js, Node.js, Express.js, and PostgreSQL, it features a responsive storefront and a dedicated admin dashboard.',
    show_live: false,
    workin_progress: true,
    accent: 'bg-[#fed7aa]',
    mainPhoto: 'https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-48-32.png',
    subPhotos: [
      'https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-48-32.png',
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-29%2000-09-58.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-50-23.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-28%2023-50-55.png",
      "https://ik.imagekit.io/nslkabdza/portfolio/zenvy/Screenshot%20From%202026-10-29%2000-08-34.png"
    ],
  },
]

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Mobile: ['React Native', 'TypeScript'],
  Databases: ['PostgreSQL', 'MongoDB', 'SQL'],
  'Tools & Integrations': ['Git', 'GitHub', 'Stripe', 'Firebase', 'Supabase'],
}

const technologyImages: Record<string, string> = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Stripe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
}

const gmailWebUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=tuhinroyand@gmail.com&su=Hello%20Tuhin%20Roy'
const gmailAppUrl = 'googlegmail://co?to=tuhinroyand@gmail.com&subject=Hello%20Tuhin%20Roy'

function openGmail(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  window.open(isMobile ? gmailAppUrl : gmailWebUrl, '_blank', 'noopener,noreferrer')
}

function SectionLabel({ children }: { children: string }) {
  return <p className="premium-section-label mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground"><span className="h-px w-8 bg-foreground" />{children}</p>
}

function ProjectCard({ project, onOpen }: { project: (typeof projects)[number]; onOpen: (project: (typeof projects)[number]) => void }) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="project-card neon-card group min-w-0 cursor-pointer border-t border-foreground/20 pt-5" onClick={() => onOpen(project)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') onOpen(project) }} role="button" tabIndex={0} aria-label={`View ${project.name} project gallery`}>
      <div className={`project-image relative mb-6 flex aspect-[1.4] min-w-0 items-center justify-center overflow-hidden rounded-sm ${project.accent} text-[#161616]`}>
        <img src={project.mainPhoto} alt={`${project.name} project preview`} className="size-full min-w-0 object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest"><span>{project.number}</span><span className="h-px w-8 bg-current/40" /></div>
      </div>
      <div className="project-details min-w-0 px-1"><div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3"><div className="min-w-0"><h3 className="project-title min-w-0 font-display text-[clamp(1rem,3.2vw,1.5rem)] font-semibold leading-snug tracking-tight">{project.name}</h3><p className="project-type mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{project.type}</p></div><span className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div>
        <p className="mt-4 min-w-0 text-base leading-7 text-muted-foreground">{project.description}</p></div>
    </motion.article>
  )
}

export default function Portfolio() {
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const theme = dark ? 'dark' : ''

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])
  const openProject = (project: (typeof projects)[number]) => { setSelectedProject(project); setGalleryIndex(0) }
  const closeProject = () => setSelectedProject(null)
  const close = () => setOpen(false)
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href')?.slice(1)
    if (!targetId) return

    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    close()
  }

  return <div className={theme}>
    <div className="jarvis-shell min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div aria-hidden="true" className="site-cursor" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} />
      <div aria-hidden="true" className="site-cursor-dot" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} />
      <header className="jarvis-header fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-10"><a href="#top" onClick={navigateToSection} className="premium-logo font-display text-lg font-semibold tracking-tight sm:text-xl">Tuhin Roy<span className="text-[var(--neon)]">.</span></a><nav className={`${open ? 'flex' : 'hidden'} absolute left-0 top-16 w-full flex-col gap-5 border-b border-foreground/10 bg-background px-4 py-5 sm:px-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}>{['About', 'Work', 'Projects', 'Skills', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={navigateToSection} className="premium-nav-link font-mono text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:text-base">{item}</a>)}</nav><div className="flex items-center gap-1.5 sm:gap-2"><button onClick={() => setDark(!dark)} className="premium-control flex size-9 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-colors hover:text-foreground" aria-label="Toggle color theme">{dark ? <Sun size={15} /> : <Moon size={15} />}</button><button onClick={() => setOpen(!open)} className="premium-control flex size-9 items-center justify-center md:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19} /> : <Menu size={19} />}</button></div></div></header>

      <main id="top" className="jarvis-main flex flex-col">
        <div aria-hidden="true" className="hud-grid" />
        <section id="about" className="hud-section order-1 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10"><div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[1fr_0.42fr]"><div><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="hud-status mb-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] sm:mb-8 sm:text-sm sm:tracking-[0.22em]">Software Engineer <span className="mx-1.5 text-foreground/40 sm:mx-2">/</span> Kolkata, West Bengal</motion.p><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="hero-title max-w-4xl font-display text-[clamp(2.5rem,12vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">Building digital<br /><span className="text-muted-foreground">experiences</span><br />that matter<span className="text-lime-500">.</span></motion.h1></div><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="w-full max-w-xs lg:mb-2"><div className="neon-card group relative mb-8 aspect-[4/5] overflow-hidden bg-muted"><img src="https://ik.imagekit.io/nslkabdza/portfolio/WhatsApp%20Image%202026-10-28%20at%2011.27.13%20PM.jpeg" alt="Portrait image shared by Tuhin Roy" className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground/80 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-background"><span>Profile</span><span>01</span></div></div><div className="border-t border-foreground/15 pt-6"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Role</p><p className="mt-3 whitespace-nowrap font-display text-[clamp(1.35rem,7vw,2.25rem)] font-semibold leading-tight tracking-tight">Software Developer</p></div><div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:max-w-lg sm:gap-4"><a href={gmailWebUrl} onClick={openGmail} className="neon-button group relative inline-flex min-h-14 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-foreground via-foreground to-foreground/80 px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.08em] text-background shadow-[0_12px_30px_-10px_hsl(var(--foreground)/0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-12px_hsl(var(--foreground)/0.85)] sm:min-h-16 sm:px-6 sm:py-4 sm:text-base"><span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" /><span className="relative whitespace-nowrap">Get in touch</span><Mail size={16} className="relative transition-transform duration-300 group-hover:translate-x-0.5 sm:size-[18px]" /></a><a href="/TuhinRoy_Resume.pdf" download className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-foreground px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-1 hover:bg-foreground hover:text-background sm:min-h-16 sm:px-6 sm:py-4 sm:text-base"><Download size={17} /> <span className="whitespace-nowrap leading-none">Resume</span></a></div></motion.div></div><div className="mt-14 flex items-center justify-between border-t border-foreground/15 pt-5 sm:mt-20"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to explore</span><div className="flex gap-3"><a href={gmailWebUrl} onClick={openGmail} aria-label="Email Tuhin" className="text-muted-foreground hover:text-foreground"><Mail size={17} /></a><a href="https://github.com/arvi-ey" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><span className="font-mono text-[10px] font-medium">GH</span></a><a href="https://linkedin.com/in/tuhin-roy-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><span className="font-mono text-[10px] font-medium">in</span></a></div></div></section>

        <section id="work" className="order-4 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"><SectionLabel>02 — Work experience</SectionLabel><h2 className="max-w-3xl font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-foreground">4 years of industry experience<span className="text-[var(--neon)]">.</span><span className="mt-2 block font-mono text-[clamp(1rem,2vw,1.35rem)] font-medium uppercase tracking-[0.12em] text-muted-foreground">As a software developer</span></h2></section>

        <section id="projects" className="order-5 border-t border-foreground/10"><div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"><div className="flex items-end justify-between"><SectionLabel>03 — Selected projects</SectionLabel><span className="mb-8 hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">A small selection of things I&apos;ve built</span></div><div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16">{projects.map((project) => <ProjectCard key={project.name} project={project} onOpen={openProject} />)}</div></div></section>

        <section id="skills" className="order-2 border-y border-foreground/10 bg-muted/30"><div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"><SectionLabel>04 — Skills & tools</SectionLabel><div className="grid gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2 lg:grid-cols-3">{Object.entries(skills).map(([category, items]) => <div key={category} className="bg-background p-5 sm:p-7">        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{category}</h3><div className="mt-6 flex flex-wrap gap-3">{items.map((item) => <span key={item} className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2.5 font-mono text-sm font-medium"><img src={technologyImages[item]} alt="" aria-hidden="true" className="size-5 object-contain" />{item}</span>)}</div></div>)}<div aria-hidden="true" className="min-h-40 bg-background" /></div></div></section>

        <section id="education" className="order-6 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"><SectionLabel>05 — Education</SectionLabel><div className="grid gap-8 md:grid-cols-2"><div className="border-t border-foreground/20 pt-5"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">01</p><h3 className="mt-6 font-display text-2xl">Master of Computer Applications</h3><p className="mt-2 text-sm text-muted-foreground">Brainware University</p></div><div className="border-t border-foreground/20 pt-5"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">02</p><h3 className="mt-6 font-display text-2xl">Bachelor of Commerce</h3><p className="mt-2 text-sm text-muted-foreground">Calcutta University  (City Collage)</p></div></div></section>

        <section id="contact" className="order-7 border-t border-foreground/10 bg-background text-foreground"><div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"><p className="mb-8 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">06 — Contact</p><h2 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">Let&apos;s build<br /><span className="text-muted-foreground">something great</span><br />together<span className="text-lime-500">.</span></h2><div className="mt-14 flex flex-col justify-between gap-10 border-t border-foreground/20 pt-6 sm:flex-row sm:items-end"><a href={gmailWebUrl} onClick={openGmail} className="font-mono text-base underline decoration-foreground/30 underline-offset-8">tuhinroyand@gmail.com</a><div className="flex gap-5"><a href="https://github.com/arvi-ey" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><span className="font-mono text-sm font-medium">GH</span></a><a href="https://linkedin.com/in/tuhin-roy-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><span className="font-mono text-sm font-medium">in</span></a><a href={gmailWebUrl} onClick={openGmail} className="border-b border-foreground pb-2 font-mono text-xs uppercase tracking-widest">Say hello</a></div></div></div></section>
      </main>
      {selectedProject && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-2 backdrop-blur-md sm:p-4" role="dialog" aria-modal="true" aria-labelledby="project-gallery-title" onClick={closeProject}><div className="project-gallery-dialog relative max-h-[96vh] w-full max-w-5xl overflow-y-auto border border-foreground/15 bg-background p-3 shadow-2xl sm:max-h-[92vh] sm:p-8" onClick={(event) => event.stopPropagation()}><div className="mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:gap-6"><div className="min-w-0"><p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">Project gallery / {selectedProject.number}</p><div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3"><h2 id="project-gallery-title" className="font-display text-2xl leading-tight tracking-tight sm:text-5xl">{selectedProject.name}</h2></div><p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm">{selectedProject.description}</p></div><button onClick={closeProject} className="flex size-8 shrink-0 items-center justify-center border border-foreground/15 sm:size-10" aria-label="Close project gallery"><X size={18} /></button></div>                  <div className="project-gallery-image relative flex items-center justify-center overflow-hidden bg-muted"><img src={selectedProject.subPhotos[galleryIndex]} alt={`${selectedProject.name} project preview ${galleryIndex + 1}`} className="block max-h-[65vh] w-full object-contain" /><button onClick={() => setGalleryIndex((galleryIndex - 1 + selectedProject.subPhotos.length) % selectedProject.subPhotos.length)} className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:left-5 sm:size-11" aria-label="Previous project image"><ChevronLeft size={20} /></button><button onClick={() => setGalleryIndex((galleryIndex + 1) % selectedProject.subPhotos.length)} className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center bg-white/90 text-black shadow-lg transition-colors hover:bg-white sm:right-5 sm:size-11" aria-label="Next project image"><ChevronRight size={20} /></button></div><div className="mt-3 flex items-center justify-between gap-3 sm:mt-5 sm:gap-4"><p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">Gallery image {galleryIndex + 1} of {selectedProject.subPhotos.length}</p>{selectedProject.show_live && selectedProject.liveDemo && <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer" className="border border-foreground px-3 py-2 font-mono text-[9px] uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background sm:px-4 sm:py-2.5 sm:text-[10px]">View live site ↗</a>}</div></div></div>}

      <footer className="border-t border-foreground/10 bg-background text-muted-foreground transition-colors duration-300"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 font-mono text-sm font-medium uppercase tracking-[0.12em] sm:flex-row lg:px-10"><span>Tuhin Roy © {new Date().getFullYear()}</span><span>Designed & built with intention</span></div></footer>
    </div>
  </div>
}
