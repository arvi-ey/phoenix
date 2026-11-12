import Header from '@/components/header'
import Hero from '@/components/hero'
import ProjectsSection from '@/components/projects-section'
import SkillsSection from '@/components/skills-section'
import Contact from '@/components/contact'
import CustomCursor from '@/components/custom-cursor'

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="premium-section-label mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-foreground" />
      {children}
    </p>
  )
}

export default function Home() {
  return (
    <div className="jarvis-shell min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      <CustomCursor />
      <Header />

      <main id="top" className="jarvis-main flex flex-col">
        <div aria-hidden="true" className="hud-grid" />
        <Hero />

        <section
          id="work"
          className="order-4 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"
        >
          <SectionLabel>02 — Work experience</SectionLabel>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.05em] text-foreground">
            4 years of industry experience<span className="text-[var(--neon)]">.</span>
            <span className="mt-2 block font-mono text-[clamp(1rem,2vw,1.35rem)] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              As a software developer
            </span>
          </h2>
        </section>

        <ProjectsSection />
        <SkillsSection />

        <section
          id="education"
          className="order-6 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10"
        >
          <SectionLabel>05 — Education</SectionLabel>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-t border-foreground/20 pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                01
              </p>
              <h3 className="mt-6 font-display text-2xl">
                Master of Computer Applications
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">Brainware University</p>
            </div>
            <div className="border-t border-foreground/20 pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                02
              </p>
              <h3 className="mt-6 font-display text-2xl">Bachelor of Commerce</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Calcutta University (City Collage)
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t border-foreground/10 bg-background text-muted-foreground transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 font-mono text-sm font-medium uppercase tracking-[0.12em] sm:flex-row lg:px-10">
          <span>Tuhin Roy © {new Date().getFullYear()}</span>
          <span>Designed & built with intention</span>
        </div>
      </footer>
    </div>
  )
}
