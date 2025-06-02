"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      value: "32+",
      label: "Active Games",
      color: "from-blue-400 to-cyan-400",
      icon: Target,
      description: "Live NFL games",
    },
    {
      value: "15K+",
      label: "Active Users",
      color: "from-red-400 to-pink-400",
      icon: Users,
      description: "Registered bettors",
    },
    {
      value: "$2.5M+",
      label: "Total Volume",
      color: "from-green-400 to-emerald-400",
      icon: TrendingUp,
      description: "Betting volume",
    },
    {
      value: "98%",
      label: "Payout Rate",
      color: "from-yellow-400 to-orange-400",
      icon: Zap,
      description: "Instant payouts",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${stat.color} p-3 shadow-lg`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                <motion.div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                >
                  {stat.value}
                </motion.div>

                <div className="text-white/90 font-medium mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
