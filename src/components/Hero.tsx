"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

const roles = [
  "Full-Stack Developer",
  "AI Developer",
  "Back-End Engineer",
  "Web Designer",
  "SEO Expert",
];

function useTypewriter(words: string[], typeSpeed = 70, deleteSpeed = 40, pauseMs = 2200, delayMs = 0) {
  const [display, setDisplay] = useState("");
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const phase = useRef<"typing" | "deleting">("typing");

  useEffect(() => {
    let cancelled = false;

    function step() {
      if (cancelled) return;
      const word = words[wordIdx.current];

      if (phase.current === "typing") {
        if (charIdx.current < word.length) {
          charIdx.current++;
          setDisplay(word.slice(0, charIdx.current));
          setTimeout(step, typeSpeed + Math.random() * 30);
        } else {
          setTimeout(() => {
            phase.current = "deleting";
            if (!cancelled) step();
          }, pauseMs);
        }
      } else {
        if (charIdx.current > 0) {
          charIdx.current--;
          setDisplay(word.slice(0, charIdx.current));
          setTimeout(step, deleteSpeed);
        } else {
          wordIdx.current = (wordIdx.current + 1) % words.length;
          phase.current = "typing";
          setTimeout(step, 300);
        }
      }
    }

    // Wait for loading screen to finish before starting
    const delayTimer = setTimeout(step, delayMs);
    return () => { cancelled = true; clearTimeout(delayTimer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}

export default function Hero() {
  const typedText = useTypewriter(roles, 70, 40, 2200, 5000);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      grid.style.setProperty("--mouse-x", `${x}px`);
      grid.style.setProperty("--mouse-y", `${y}px`);
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-pink/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Interactive grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-40"
        style={{
          maskImage:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 50%)",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 50%)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Frank</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted font-medium">
                {typedText}
                <span className="inline-block w-[3px] h-[1em] bg-accent-light ml-1 animate-pulse align-middle" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted max-w-xl leading-relaxed"
            >
              I&apos;m a full-stack & AI developer with <span className="text-foreground font-medium">7+ years</span> of experience
              shipping web applications that perform and convert. I work across
              React, Node.js, AWS, and AI-powered tooling — from pixel-perfect
              frontends to serverless backends and everything in between.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-cyan text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-foreground font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com/Frank661"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/devfrank/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <div className="w-px h-6 bg-white/10" />
              <a
                href="https://devtable.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent-light transition-colors duration-300"
              >
                devtable.co
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Avatar with effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent via-accent-cyan to-accent-pink opacity-20 blur-2xl animate-pulse-glow" />
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-accent via-accent-cyan to-accent-pink opacity-60" style={{ animation: "gradient-rotate 6s linear infinite" }} />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-surface">
                <Image
                  src="/assets/frank-profile.jpeg"
                  alt="Frank Hernandez - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 glass rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold font-display gradient-text">7+</p>
                <p className="text-xs text-muted">Years Exp.</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-12 glass rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold font-display gradient-text">50+</p>
                <p className="text-xs text-muted">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-accent-light" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
