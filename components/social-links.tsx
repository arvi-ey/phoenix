'use client'

import { Mail } from 'lucide-react'
import { gmailWebUrl, gmailAppUrl } from '@/lib/constants'
import type { MouseEvent } from 'react'

export default function SocialLinks() {
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
    <div className="flex gap-3">
      <a
        href={gmailWebUrl}
        onClick={openGmail}
        aria-label="Email Tuhin"
        className="text-muted-foreground hover:text-foreground"
      >
        <Mail size={17} />
      </a>
      <a
        href="https://github.com/arvi-ey"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-muted-foreground hover:text-foreground"
      >
        <span className="font-mono text-[10px] font-medium">GH</span>
      </a>
      <a
        href="https://linkedin.com/in/tuhin-roy-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground hover:text-foreground"
      >
        <span className="font-mono text-[10px] font-medium">in</span>
      </a>
    </div>
  )
}
