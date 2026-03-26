"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_miw5sol",
        "template_cc4vurq",
        formRef.current,
        "user_uhouzasBz0gcls4FRMhSk"
      );
      setStatus("success");

      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Frank_Hernandez_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus("idle"), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-lg w-full rounded-3xl overflow-hidden glass border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-accent-light transition-colors"
            >
              <svg
                className="w-5 h-5"
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

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-4 py-4"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      Download started!
                    </h3>
                    <p className="text-sm text-muted">
                      Thanks for your interest. I&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-sm text-accent-light hover:text-foreground transition-colors"
                    >
                      Download again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center space-y-2 mb-8">
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        Download My <span className="gradient-text">Resume</span>
                      </h3>
                      <p className="text-sm text-muted">
                        Enter your details and it&apos;ll download instantly.
                      </p>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="resume-name"
                            className="text-sm font-medium text-muted"
                          >
                            Full Name{" "}
                            <span className="text-accent-pink">*</span>
                          </label>
                          <input
                            id="resume-name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="resume-email"
                            className="text-sm font-medium text-muted"
                          >
                            Email{" "}
                            <span className="text-accent-pink">*</span>
                          </label>
                          <input
                            id="resume-email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="resume-company"
                          className="text-sm font-medium text-muted"
                        >
                          Company / Role{" "}
                          <span className="text-muted/50">(optional)</span>
                        </label>
                        <input
                          id="resume-company"
                          name="message"
                          type="text"
                          placeholder="Acme Corp / Hiring Manager"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/25 transition-all duration-300 text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-cyan text-white font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {status === "sending" ? (
                          <>
                            <svg
                              className="w-4 h-4 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Preparing Download...
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3"
                              />
                            </svg>
                            Download Resume
                          </>
                        )}
                      </button>

                      {status === "error" && (
                        <p className="text-center text-sm text-red-400">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
