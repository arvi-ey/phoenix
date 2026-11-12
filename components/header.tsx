'use client'

import { useState, type MouseEvent } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

export default function Header() {
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark', !dark)
  }

  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href')?.slice(1)
    if (!targetId) return

    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}`
    )
    setOpen(false)
  }

  return (
    <header className="jarvis-header fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-10">
        <a
          href="#top"
          onClick={navigateToSection}
          className="premium-logo font-display text-lg font-semibold tracking-tight sm:text-xl"
        >
          Tuhin Roy<span className="text-[var(--neon)]">.</span>
        </a>
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } absolute left-0 top-16 w-full flex-col gap-5 border-b border-foreground/10 bg-background px-4 py-5 sm:px-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {['About', 'Work', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={navigateToSection}
              className="premium-nav-link font-mono text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:text-base"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleTheme}
            className="premium-control flex size-9 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle color theme"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="premium-control flex size-9 items-center justify-center md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  )
}
