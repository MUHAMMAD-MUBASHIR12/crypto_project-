"use client"

import { motion } from "framer-motion"

export function WicketStakeLogo() {
  return (
    <motion.div
      className="relative w-10 h-10"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cricket bat */}
        <motion.path
          d="M10 5L15 10L25 20L30 25L25 30L20 25L10 15L5 10L10 5Z"
          fill="url(#gradient1)"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Cricket ball */}
        <motion.circle
          cx="28"
          cy="12"
          r="5"
          fill="url(#gradient2)"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Wickets */}
        <motion.g
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <rect x="8" y="30" width="2.5" height="8" fill="url(#gradient1)" rx="1" />
          <rect x="13" y="30" width="2.5" height="8" fill="url(#gradient1)" rx="1" />
          <rect x="18" y="30" width="2.5" height="8" fill="url(#gradient1)" rx="1" />
          <rect x="7" y="29" width="15" height="1.5" fill="url(#gradient1)" rx="0.5" />
        </motion.g>

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
