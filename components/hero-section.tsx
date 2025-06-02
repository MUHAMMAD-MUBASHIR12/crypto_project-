"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Zap, Trophy } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="border-blue-500/30 bg-blue-500/10 text-blue-300 backdrop-blur-sm px-4 py-2 text-sm font-medium"
            >
              🏈 The Future of NFL Betting
            </Badge>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent leading-tight">
              GridironStake
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Bet on NFL games in real-time. Stake your <span className="text-green-400 font-semibold">$GRS</span>{" "}
              tokens and win big! Join the most exciting football betting platform with live games and instant payouts.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/admin">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5" />
                Create Game
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/matches">
              <Button
                size="lg"
                variant="outline"
                className="border-green-500/50 bg-green-500/10 text-green-300 hover:bg-green-500/20 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Game
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-96 h-96 mx-auto">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-red-500/30 to-green-500/30 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Main circle */}
            <motion.div
              className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500/20 via-red-500/20 to-green-500/20 backdrop-blur-xl border border-white/20 shadow-2xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Inner circle with logo */}
            <motion.div
              className="absolute inset-20 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-8xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                🏈
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-3xl shadow-xl backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              💰
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-3xl shadow-xl backdrop-blur-sm"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              🎯
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-4 w-12 h-12 rounded-xl bg-gradient-to-r from-red-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg"
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Trophy className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
