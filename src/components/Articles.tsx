"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { articles } from "@/lib/data";
import Image from "next/image";

export default function Articles() {
  return (
    <section id="articles" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
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
              From the Blog
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="gradient-text">Articles</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted max-w-lg mx-auto">
              Insights on web development, SEO strategies, and digital marketing
              from my blog at DevTable.
            </motion.p>
          </div>

          {/* Articles grid */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6"
          >
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden glass hover:border-accent/20 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent-light transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-light pt-2">
                    Read article
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
