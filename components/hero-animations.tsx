'use client'

import { motion } from 'framer-motion'

export function HeroText() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="hud-status mb-6 font-mono text-[0.68rem] uppercase tracking-[0.16em] sm:mb-8 sm:text-sm sm:tracking-[0.22em]"
      >
        Software Engineer <span className="mx-1.5 text-foreground/40 sm:mx-2">/</span>{' '}
        Kolkata, West Bengal
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hero-title max-w-4xl font-display text-[clamp(2.5rem,12vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
      >
        Building digital
        <br />
        <span className="text-muted-foreground">experiences</span>
        <br />
        that matter<span className="text-lime-500">.</span>
      </motion.h1>
    </>
  )
}

export function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-xs lg:mb-2"
    >
      <div className="neon-card group relative mb-8 aspect-[4/5] overflow-hidden bg-muted">
        <img
          src="https://ik.imagekit.io/nslkabdza/portfolio/WhatsApp%20Image%202026-10-28%20at%2011.27.13%20PM.jpeg"
          alt="Portrait image shared by Tuhin Roy"
          className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-foreground/80 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-background">
          <span>Profile</span>
          <span>01</span>
        </div>
      </div>
      <div className="border-t border-foreground/15 pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Role
        </p>
        <p className="mt-3 whitespace-nowrap font-display text-[clamp(1.35rem,7vw,2.25rem)] font-semibold leading-tight tracking-tight">
          Software Developer
        </p>
      </div>
    </motion.div>
  )
}
