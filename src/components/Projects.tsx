"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { portfolioItems } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-accent/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="text-center space-y-4 mb-16 md:mb-20">
            <motion.p
              variants={fadeInUp}
              className="text-sm font-mono text-accent-light tracking-wider uppercase"
            >
              Selected Work
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Project list */}
          <motion.div variants={fadeInUp}>
            {portfolioItems.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group w-full text-left border-t border-white/10 last:border-b transition-all duration-300 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-5 md:gap-8 py-7 md:py-9 px-3 md:px-6">
                    {/* Index */}
                    <span className="hidden md:block text-sm font-mono text-white/25 w-8">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Favicon */}
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white/[0.06] border border-white/10 flex-shrink-0 group-hover:border-accent/30 group-hover:bg-white/[0.08] transition-all duration-300">
                      <Image
                        src={project.favicon}
                        alt=""
                        fill
                        className="object-contain p-2 md:p-2.5"
                      />
                    </div>

                    {/* Title + services */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-accent-light transition-colors duration-300 truncate">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="text-xs text-white/40 group-hover:text-white/60 transition-colors"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack — desktop only */}
                    <div className="hidden lg:flex gap-2 flex-shrink-0">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-xs rounded-full bg-white/[0.05] text-white/35 border border-white/[0.08] group-hover:text-white/60 group-hover:border-white/15 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-white/25 group-hover:text-accent-light group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0a0a12] border border-white/[0.06] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Hero image */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="px-8 pb-8 -mt-12 relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 shadow-lg">
                    <Image
                      src={selectedProject.favicon}
                      alt=""
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                      {selectedProject.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] text-accent-light"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Stats */}
                {selectedProject.stats && selectedProject.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <p className="text-2xl md:text-3xl font-display font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-white/40 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-xl bg-white/[0.04] text-white/70 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-accent-light transition-colors duration-300"
                >
                  Visit Live Site
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
