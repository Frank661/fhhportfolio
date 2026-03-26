"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { frontendSkills, backendSkills, toolSkills } from "@/lib/data";
import Image from "next/image";

type Skill = { name: string; logo?: string };

const tabs: { id: string; label: string; skills: Skill[] }[] = [
  { id: "frontend", label: "Frontend", skills: frontendSkills },
  { id: "backend", label: "Backend", skills: backendSkills },
  { id: "tools", label: "Tools & More", skills: toolSkills },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
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
              What I Work With
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted max-w-lg mx-auto">
              A curated toolkit spanning the full stack — from pixel-perfect
              frontends to robust backend systems.
            </motion.p>
          </div>

          {/* Tab buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="inline-flex gap-1 p-1 rounded-full glass">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 bg-gradient-to-r from-accent to-accent-cyan rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {currentTab.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={scaleIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative p-5 rounded-2xl glass hover:border-accent/30 transition-all duration-300 cursor-default"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      {skill.logo ? (
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={36}
                          height={36}
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-accent-cyan/20 flex items-center justify-center text-sm font-bold text-accent-light transition-transform duration-300 group-hover:scale-110">
                          {skill.name.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
