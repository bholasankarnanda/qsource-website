"use client";
import { motion, useScroll, useSpring, Variants } from "framer-motion"; // Added Variants import
import { ReactNode } from "react";

// --- 1. THE SCROLL REVEAL COMPONENT ---
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  offset = 30,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  offset?: number;
}) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        // FIXED: Added 'as const' so TS knows this is a fixed tuple, not a random array
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  );
}

// --- 2. THE SCROLL PROGRESS BAR ---
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "6px",
        backgroundColor: "#1976d2",
        transformOrigin: "0%",
        zIndex: 9999,
      }}
    />
  );
}

// --- 3. STAGGER CONTAINER ---
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
