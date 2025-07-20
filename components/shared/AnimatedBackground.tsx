'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-accent/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-orange-500/20 to-secondary/20 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}
