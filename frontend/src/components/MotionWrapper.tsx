'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** 'up' | 'fade' | 'left' | 'right' | 'scale' | 'blur' */
  variant?: 'up' | 'fade' | 'left' | 'right' | 'scale' | 'blur';
}

const variants: Record<string, Variants> = {
  up: {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0  },
  },
  fade: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden:  { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0   },
  },
  right: {
    hidden:  { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0  },
  },
  scale: {
    hidden:  { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1    },
  },
  blur: {
    hidden:  { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0,  filter: 'blur(0px)'  },
  },
};

export default function MotionWrapper({
  children,
  className,
  delay    = 0,
  duration = 0.55,
  variant  = 'up',
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}

/** Stagger wrapper — children animate in one after another */
export function MotionStagger({
  children,
  className,
  stagger  = 0.09,
  delayStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayStart?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delayStart } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger child — use inside MotionStagger */
export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Card with 3D tilt + lift on hover */
export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        rotateY: 4,
        rotateX: -3,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
    >
      {children}
    </motion.div>
  );
}
