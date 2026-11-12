'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects, type Project } from '@/lib/constants'

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project) => void
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="project-card neon-card group min-w-0 cursor-pointer border-t border-foreground/20 pt-5"
      onClick={() => onOpen(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') onOpen(project)
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.name} project gallery`}
    >
      <div
        className={`project-image relative mb-6 flex aspect-[1.4] min-w-0 items-center justify-center overflow-hidden rounded-sm ${project.accent} text-[#161616]`}
      >
        <img
          src={project.mainPhoto}
          alt={`${project.name} project preview`}
          className="size-full min-w-0 object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
          <span>{project.number}</span>
          <span className="h-px w-8 bg-current/40" />
        </div>
      </div>
      <div className="project-details min-w-0 px-1">
        <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
          <div className="min-w-0">
            <h3 className="project-title min-w-0 font-display text-[clamp(1rem,3.2vw,1.5rem)] font-semibold leading-snug tracking-tight">
              {project.name}
            </h3>
            <p className="project-type mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {project.type}
            </p>
          </div>
          <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </div>
        <p className="mt-4 min-w-0 text-base leading-7 text-muted-foreground">
          {project.description}
        </p>
      </div>
    </motion.article>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="premium-section-label mb-8 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-foreground" />
      {children}
    </p>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setGalleryIndex(0)
  }
  const closeProject = () => setSelectedProject(null)

  return (
    <section id="projects" className="order-5 border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="flex items-end justify-between">
          <SectionLabel>03 — Selected projects</SectionLabel>
          <span className="mb-8 hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
            A small selection of things I&apos;ve built
          </span>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} onOpen={openProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-2 backdrop-blur-md sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-gallery-title"
          onClick={closeProject}
        >
          <div
            className="project-gallery-dialog relative max-h-[96vh] w-full max-w-5xl overflow-y-auto border border-foreground/15 bg-background p-3 shadow-2xl sm:max-h-[92vh] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:gap-6">
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
                  Project gallery / {selectedProject.number}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <h2
                    id="project-gallery-title"
                    className="font-display text-2xl leading-tight tracking-tight sm:text-5xl"
                  >
                    {selectedProject.name}
                  </h2>
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={closeProject}
                className="flex size-8 shrink-0 items-center justify-center border border-foreground/15 sm:size-10"
                aria-label="Close project gallery"
              >
                <X size={18} />
              </button>
            </div>
            <div className="project-gallery-image relative flex items-center justify-center overflow-hidden bg-muted">
              <img
                src={selectedProject.subPhotos[galleryIndex]}
                alt={`${selectedProject.name} project preview ${galleryIndex + 1}`}
                className="block max-h-[65vh] w-full object-contain"
              />
              <button
                onClick={() =>
                  setGalleryIndex(
                    (galleryIndex - 1 + selectedProject.subPhotos.length) %
                      selectedProject.subPhotos.length
                  )
                }
                className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:left-5 sm:size-11"
                aria-label="Previous project image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setGalleryIndex((galleryIndex + 1) % selectedProject.subPhotos.length)
                }
                className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center bg-white/90 text-black shadow-lg transition-colors hover:bg-white sm:right-5 sm:size-11"
                aria-label="Next project image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 sm:mt-5 sm:gap-4">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                Gallery image {galleryIndex + 1} of {selectedProject.subPhotos.length}
              </p>
              {selectedProject.show_live && selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-foreground px-3 py-2 font-mono text-[9px] uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background sm:px-4 sm:py-2.5 sm:text-[10px]"
                >
                  View live site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
