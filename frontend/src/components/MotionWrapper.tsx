'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** 'up' | 'fade' | 'left' | 'right' */
  variant?: 'up' | 'fade' | 'left' | 'right';
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function MotionWrapper({
  children,
  className,
  delay = 0,
  duration = 0.5,
  variant = 'up',
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

/** Card-level hover wrapper: adds lift + shadow on hover */
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
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}
