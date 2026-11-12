import { Mail } from 'lucide-react'
import { gmailWebUrl } from '@/lib/constants'

export default function Contact() {
  return (
    <section
      id="contact"
      className="order-7 border-t border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <p className="mb-8 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">
          06 — Contact
        </p>
        <h2 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
          Let&apos;s build
          <br />
          <span className="text-muted-foreground">something great</span>
          <br />
          together<span className="text-lime-500">.</span>
        </h2>
        <div className="mt-14 flex flex-col justify-between gap-10 border-t border-foreground/20 pt-6 sm:flex-row sm:items-end">
          <a
            href={gmailWebUrl}
            className="font-mono text-base underline decoration-foreground/30 underline-offset-8"
          >
            tuhinroyand@gmail.com
          </a>
          <div className="flex gap-5">
            <a
              href="https://github.com/arvi-ey"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="font-mono text-sm font-medium">GH</span>
            </a>
            <a
              href="https://linkedin.com/in/tuhin-roy-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="font-mono text-sm font-medium">in</span>
            </a>
            <a
              href={gmailWebUrl}
              className="border-b border-foreground pb-2 font-mono text-xs uppercase tracking-widest"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
