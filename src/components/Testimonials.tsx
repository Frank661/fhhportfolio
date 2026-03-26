"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-pink/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.p
              variants={fadeInUp}
              className="text-sm font-mono text-accent-light tracking-wider uppercase"
            >
              What People Say
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Client <span className="gradient-text">Testimonials</span>
            </motion.h2>
          </div>

          {/* Featured testimonial */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl glass">
              {/* Large quote mark */}
              <svg
                className="absolute top-6 left-8 md:top-10 md:left-12 w-16 h-16 md:w-24 md:h-24 text-accent/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <div className="relative z-10">
                {/* Quote text — animates between testimonials */}
                <div className="min-h-[120px] md:min-h-[100px] mb-10">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/90 leading-relaxed font-medium"
                    >
                      &ldquo;{testimonials[active].quote}&rdquo;
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                {/* Author info + navigation */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[active].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground text-lg">
                          {testimonials[active].name}
                        </p>
                        <p className="text-sm text-muted">
                          {testimonials[active].title}
                        </p>
                      </div>
                      <a
                        href={testimonials[active].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-muted hover:text-accent-light transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation dots + arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setActive(
                          (active - 1 + testimonials.length) %
                            testimonials.length
                        )
                      }
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === active
                              ? "w-8 bg-accent-light"
                              : "w-3 bg-white/10 hover:bg-white/20"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setActive((active + 1) % testimonials.length)
                      }
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
