"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);
  // 0: pitch black
  // 1: light beam sweeps
  // 2: logo revealed with glow
  // 3: shimmer + rays + particles
  // 4: peak brightness burn
  // 5: collapse to black
  // 6: fade out overlay, reveal site
  // 7: unmount

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 1900),
      setTimeout(() => setPhase(4), 2700),
      setTimeout(() => setPhase(5), 3400),
      setTimeout(() => setPhase(6), 4100),
      setTimeout(() => setPhase(7), 4900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Fully unmounted — nothing renders
  if (phase >= 7) return null;

  return (
    <motion.div
      animate={{ opacity: phase >= 6 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden"
      style={{ pointerEvents: phase >= 6 ? "none" : "auto" }}
    >
      {/* ── Ambient fog ── */}
      <motion.div
        animate={{ opacity: phase >= 1 && phase < 5 ? 1 : 0 }}
        transition={{ duration: phase >= 5 ? 0.6 : 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Horizontal light beam sweep ── */}
      {phase >= 1 && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #fff, transparent)",
            boxShadow:
              "0 0 80px 30px rgba(167,139,250,0.3), 0 0 160px 60px rgba(34,211,238,0.12)",
          }}
        />
      )}

      {/* ── Vertical beam ── */}
      {phase >= 1 && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 1.4,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.15,
          }}
          className="absolute left-1/2 -translate-x-1/2 h-[300px] w-[1px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,255,255,0.7), transparent)",
            boxShadow: "0 0 40px 10px rgba(109,40,217,0.2)",
          }}
        />
      )}

      {/* ── Logo container ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glow behind text */}
          <motion.div
            animate={{
              opacity: phase >= 2 && phase < 5 ? 1 : 0,
              scale: phase >= 4 ? 1.6 : 1,
            }}
            transition={{ duration: phase >= 5 ? 0.5 : 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(109,40,217,0.25) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Logo text */}
          <motion.div
            className="flex items-baseline select-none"
            animate={{
              opacity: phase >= 5 ? 0 : phase >= 2 ? 1 : 0,
            }}
            transition={{ duration: phase >= 5 ? 0.4 : 0.5 }}
          >
            {/* "dev" */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{
                y: phase >= 2 ? 0 : 60,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.span
                animate={{
                  filter:
                    phase >= 4
                      ? "drop-shadow(0 0 40px rgba(255,255,255,0.3))"
                      : phase >= 3
                      ? "drop-shadow(0 0 15px rgba(255,255,255,0.12))"
                      : "drop-shadow(0 0 0px transparent)",
                }}
                transition={{ duration: 0.6 }}
                className="block text-7xl md:text-[8rem] lg:text-[10rem] font-display font-bold text-white tracking-tighter leading-none"
              >
                dev
              </motion.span>
            </motion.div>

            {/* "frank" */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{
                y: phase >= 2 ? 0 : 60,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              <motion.span
                animate={{
                  filter:
                    phase >= 4
                      ? "drop-shadow(0 0 40px rgba(167,139,250,0.4))"
                      : phase >= 3
                      ? "drop-shadow(0 0 15px rgba(167,139,250,0.2))"
                      : "drop-shadow(0 0 0px transparent)",
                }}
                transition={{ duration: 0.6 }}
                className="block text-7xl md:text-[8rem] lg:text-[10rem] font-display font-bold tracking-tighter leading-none"
                style={{
                  background:
                    "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 25%, #22d3ee 60%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                frank
              </motion.span>
            </motion.div>
          </motion.div>

          {/* ── Light rays ── */}
          {phase >= 3 && phase < 5 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 360;
                const colors = [
                  "rgba(167,139,250,0.5)",
                  "rgba(34,211,238,0.4)",
                  "rgba(236,72,153,0.4)",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{
                      opacity: [0, 0.3, phase >= 4 ? 0 : 0.15],
                      scaleY: [0, 1, phase >= 4 ? 1.8 : 1],
                    }}
                    transition={{
                      duration: phase >= 4 ? 0.5 : 0.8,
                      delay: i * 0.03,
                      ease: "easeOut",
                    }}
                    style={{
                      position: "absolute",
                      width: "1px",
                      height: "180px",
                      top: "-90px",
                      left: "0",
                      transformOrigin: "bottom center",
                      transform: `rotate(${angle}deg)`,
                      background: `linear-gradient(to top, ${colors[i % 3]}, transparent)`,
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* ── Lens flare streak ── */}
          <motion.div
            animate={{
              opacity: phase >= 3 && phase < 5 ? 0.6 : 0,
              scaleX: phase >= 4 ? 1.5 : phase >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[1px] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.4) 50%, transparent 90%)",
            }}
          />
        </div>
      </div>

      {/* ── Floating particles ── */}
      {phase >= 2 && phase < 5 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => {
            const colors = ["#a78bfa", "#22d3ee", "#ec4899", "#fff"];
            const color = colors[i % 4];
            const size = 1 + Math.random() * 2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  y: [0, -80 - Math.random() * 60],
                  x: [0, (Math.random() - 0.5) * 40],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 1.5,
                  ease: "easeOut",
                }}
                className="absolute rounded-full"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${30 + Math.random() * 40}%`,
                  width: size,
                  height: size,
                  background: color,
                  boxShadow: `0 0 ${size * 4}px ${color}`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* ── Black overlay for collapse phase ── */}
      <motion.div
        animate={{ opacity: phase >= 5 && phase < 6 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />
    </motion.div>
  );
}
