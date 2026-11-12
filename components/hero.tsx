import ContactButtons from './contact-buttons'
import SocialLinks from './social-links'
import { HeroText, HeroProfile } from './hero-animations'

export default function Hero() {
  return (
    <section
      id="about"
      className="hud-section order-1 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10"
    >
      <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[1fr_0.42fr]">
        <div>
          <HeroText />
        </div>
        <div className="w-full max-w-xs lg:mb-2">
          <HeroProfile />
          <ContactButtons />
        </div>
      </div>
      <div className="mt-14 flex items-center justify-between border-t border-foreground/15 pt-5 sm:mt-20">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll to explore
        </span>
        <SocialLinks />
      </div>
    </section>
  )
}
