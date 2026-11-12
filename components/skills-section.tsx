import { skills, technologyImages } from '@/lib/constants'

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="premium-section-label mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-foreground" />
      {children}
    </p>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="order-2 border-y border-foreground/10 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <SectionLabel>04 — Skills & tools</SectionLabel>
        <div className="grid gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-background p-5 sm:p-7">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {category}
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 border border-foreground/15 px-3 py-2.5 font-mono text-sm font-medium"
                  >
                    <img
                      src={technologyImages[item]}
                      alt=""
                      aria-hidden="true"
                      className="size-5 object-contain"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div aria-hidden="true" className="min-h-40 bg-background" />
        </div>
      </div>
    </section>
  )
}
