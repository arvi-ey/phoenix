'use client'

import { Mail, Download } from 'lucide-react'
import { gmailWebUrl, gmailAppUrl } from '@/lib/constants'
import type { MouseEvent } from 'react'

export default function ContactButtons() {
  const openGmail = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    window.open(
      isMobile ? gmailAppUrl : gmailWebUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:max-w-lg sm:gap-4">
      <a
        href={gmailWebUrl}
        onClick={openGmail}
        className="neon-button group relative inline-flex min-h-14 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-foreground via-foreground to-foreground/80 px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.08em] text-background shadow-[0_12px_30px_-10px_hsl(var(--foreground)/0.7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_-12px_hsl(var(--foreground)/0.85)] sm:min-h-16 sm:px-6 sm:py-4 sm:text-base"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative whitespace-nowrap">Get in touch</span>
        <Mail
          size={16}
          className="relative transition-transform duration-300 group-hover:translate-x-0.5 sm:size-[18px]"
        />
      </a>
      <a
        href="/TuhinRoy_Resume.pdf"
        download
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-foreground px-4 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:-translate-y-1 hover:bg-foreground hover:text-background sm:min-h-16 sm:px-6 sm:py-4 sm:text-base"
      >
        <Download size={17} />{' '}
        <span className="whitespace-nowrap leading-none">Resume</span>
      </a>
    </div>
  )
}
