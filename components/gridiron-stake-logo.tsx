"use client"

import { motion } from "framer-motion"

export function GridironStakeLogo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Football field */}
        <motion.rect
          x="5"
          y="12"
          width="30"
          height="16"
          rx="2"
          fill="url(#gradient1)"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Yard lines */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
          <line x1="12" y1="12" x2="12" y2="28" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="12" x2="20" y2="28" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <line x1="28" y1="12" x2="28" y2="28" stroke="white" strokeWidth="1" opacity="0.6" />
        </motion.g>

        {/* Football */}
        <motion.ellipse
          cx="20"
          cy="20"
          rx="4"
          ry="2.5"
          fill="url(#gradient2)"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Football laces */}
        <motion.g
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <line x1="20" y1="18" x2="20" y2="22" stroke="white" strokeWidth="1" />
          <line x1="19" y1="19" x2="21" y2="19" stroke="white" strokeWidth="0.5" />
          <line x1="19" y1="20" x2="21" y2="20" stroke="white" strokeWidth="0.5" />
          <line x1="19" y1="21" x2="21" y2="21" stroke="white" strokeWidth="0.5" />
        </motion.g>

        {/* Goal posts */}
        <motion.g
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <rect x="4" y="8" width="1" height="8" fill="url(#gradient1)" />
          <rect x="2" y="8" width="5" height="1" fill="url(#gradient1)" />
          <rect x="35" y="8" width="1" height="8" fill="url(#gradient1)" />
          <rect x="33" y="8" width="5" height="1" fill="url(#gradient1)" />
        </motion.g>

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
