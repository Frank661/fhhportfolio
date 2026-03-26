"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // If scrolled to the bottom of the page, highlight the last nav link
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].href);
        return;
      }

      const threshold = 200;
      let current = "";

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = link.href;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="relative z-50 font-display text-xl font-bold tracking-tight"
          >
            <span className="text-foreground">dev</span>
            <span className="gradient-text">frank</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}

            <button
              onClick={() => setResumeOpen(true)}
              className="relative px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 rounded-full cursor-pointer"
            >
              Resume
            </button>

            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-accent to-accent-cyan text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-foreground"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-foreground origin-center"
            />
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex items-center justify-center"
              >
                <nav className="flex flex-col items-center gap-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                      className="text-3xl font-display font-bold text-foreground hover:text-accent-light transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  <motion.button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => setResumeOpen(true), 300);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.2 }}
                    className="text-3xl font-display font-bold text-foreground hover:text-accent-light transition-colors"
                  >
                    Resume
                  </motion.button>

                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navLinks.length + 1) * 0.05 + 0.2 }}
                    className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-accent to-accent-cyan text-white"
                  >
                    Let&apos;s Talk
                  </motion.a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
