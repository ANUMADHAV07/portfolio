"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="section-container relative overflow-hidden" id="home">
      {/* Subtle particle background - Only render after mount */}
      {mounted && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Six Eyes following cursor */}
      {mounted && (
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,163,224,0.4) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            zIndex: 0,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Minimalist intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--gojo-cyan)] text-sm font-mono tracking-widest"
          >
            &gt; FULL STACK SPECIALIST
          </motion.div>

          {/* Name - Big and Bold */}
          <motion.h1
            className="text-7xl md:text-9xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="gradient-gojo infinity-symbol">Anu Madhav</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-[var(--gojo-lavender)] font-light">
              Self-taught engineer with 2 years building
            </p>
            <p className="text-2xl md:text-3xl font-light">
              <span className="text-[var(--gojo-cyan)]">
                limitless possibilities
              </span>{" "}
              ×{" "}
              <span className="text-[var(--gojo-electric)]">
                infinite solutions
              </span>
            </p>
          </motion.div>

          {/* Quick facts - Ultra minimal */}
          <motion.div
            className="flex flex-wrap gap-6 text-sm font-mono text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--gojo-cyan)] animate-pulse"></span>
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--gojo-electric)] animate-pulse"></span>
              <span>Golang • TypeScript • Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--gojo-purple)] animate-pulse"></span>
              <span>Explorer • Trader • Builder</span>
            </div>
          </motion.div>

          {/* Minimalist personality badges */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="px-3 py-1 text-xs border border-[var(--gojo-cyan)] text-[var(--gojo-cyan)] rounded-full">
              ANIME ENTHUSIAST
            </span>
            <span className="px-3 py-1 text-xs border border-[var(--gojo-electric)] text-[var(--gojo-electric)] rounded-full">
              CRICKET PRO
            </span>
            <span className="px-3 py-1 text-xs border border-[var(--gojo-purple)] text-[var(--gojo-purple)] rounded-full">
              WORLD TRAVELER
            </span>
            <span className="px-3 py-1 text-xs border border-gray-500 text-gray-400 rounded-full">
              OPTIONS TRADER
            </span>
          </motion.div>

          {/* CTA Buttons - Clean and minimal */}
          <motion.div
            className="flex gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="#about"
              className="group relative px-8 py-3 bg-transparent border-2 border-[var(--gojo-cyan)] 
                       text-[var(--gojo-cyan)] rounded-lg overflow-hidden transition-all
                       hover:text-white font-semibold"
            >
              <span className="relative z-10">Explore More</span>
              <div
                className="absolute inset-0 bg-[var(--gojo-cyan)] transform scale-x-0 
                            group-hover:scale-x-100 transition-transform origin-left"
              ></div>
            </a>

            <a
              href="#contact"
              className="px-8 py-3 text-gray-300 hover:text-[var(--gojo-cyan)] 
                       transition-colors font-semibold flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <span className="text-xl">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimalist scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-[var(--gojo-cyan)] rounded-full p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-[var(--gojo-cyan)] rounded-full mx-auto"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>

      {/* Quote - Subtle and cool */}
      <motion.div
        className="absolute bottom-20 right-10 text-right text-xs text-gray-500 
                   font-mono hidden lg:block max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        <p>"Throughout Heaven and Earth,</p>
        <p>I alone am the honored one."</p>
        <p className="mt-1 text-[var(--gojo-cyan)]">— Satoru Gojo</p>
      </motion.div>
    </section>
  );
}
