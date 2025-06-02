"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Coins, TrendingUp, Shield, Zap } from "lucide-react"

export function TokensContent() {
  return (
    <div className="relative z-10 container mx-auto px-6 py-8">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-red-400 bg-clip-text text-transparent mb-4">
          $GRS Token
        </h1>
        <p className="text-slate-300 text-lg">
          Learn about Gridiron Token and how it powers the GridironStake ecosystem
        </p>
      </motion.div>

      {/* Token Overview */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Coins className="h-6 w-6 text-white" />
                </motion.div>
                Token Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-slate-400">Token Name:</span>
                  <span className="font-semibold text-white">Gridiron Token</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-slate-400">Symbol:</span>
                  <span className="font-semibold text-green-400">$GRS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-slate-400">Total Supply:</span>
                  <span className="font-semibold text-white">500,000,000 GRS</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-slate-400">Current Price:</span>
                  <span className="font-semibold text-green-400">$0.85</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="text-slate-400">Market Cap:</span>
                  <span className="font-semibold text-white">$425M</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-400 to-red-400 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TrendingUp className="h-6 w-6 text-white" />
                </motion.div>
                Your Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-green-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  1,250 GRS
                </motion.div>
                <div className="text-slate-400 text-lg">≈ $1,062.50</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Available:</span>
                  <span className="text-white">1,250 GRS</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Staked:</span>
                  <span className="text-blue-400">500 GRS</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">In Bets:</span>
                  <span className="text-orange-400">150 GRS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-xl">
                    Buy GRS
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 rounded-xl"
                  >
                    Sell GRS
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Token Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          Token Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Secure Betting",
              description: "All bets are secured by smart contracts ensuring transparent and fair gameplay",
              color: "from-blue-400 to-cyan-400",
            },
            {
              icon: Zap,
              title: "Instant Payouts",
              description: "Win your bets and receive instant payouts directly to your wallet",
              color: "from-yellow-400 to-orange-400",
            },
            {
              icon: TrendingUp,
              title: "Staking Rewards",
              description: "Stake your GRS tokens to earn passive rewards and platform benefits",
              color: "from-green-400 to-emerald-400",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} p-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Token Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mb-12"
      >
        <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Token Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { label: "Public Sale", percentage: 40, color: "bg-green-500" },
                  { label: "Staking Rewards", percentage: 25, color: "bg-blue-500" },
                  { label: "Team & Advisors", percentage: 15, color: "bg-red-500" },
                  { label: "Development", percentage: 10, color: "bg-orange-500" },
                  { label: "Marketing", percentage: 10, color: "bg-cyan-500" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-white font-medium">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <motion.div
                  className="relative w-48 h-48"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-blue-500 via-red-500 via-orange-500 to-cyan-500 p-1">
                    <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">500M</div>
                        <div className="text-slate-400 text-sm">Total Supply</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* How to Get Started */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <Card className="bg-gradient-to-r from-blue-500/10 via-red-500/10 to-green-500/10 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How to Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Connect Wallet",
                  description: "Connect your MetaMask or WalletConnect",
                  icon: "🔗",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: 2,
                  title: "Buy GRS",
                  description: "Purchase GRS tokens to start betting",
                  icon: "💰",
                  color: "from-cyan-500 to-green-500",
                },
                {
                  step: 3,
                  title: "Place Bets",
                  description: "Bet on your favorite NFL games",
                  icon: "🎯",
                  color: "from-green-500 to-red-500",
                },
                {
                  step: 4,
                  title: "Win & Earn",
                  description: "Win bets and earn more GRS tokens",
                  icon: "🏆",
                  color: "from-red-500 to-blue-500",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.step}
                  </motion.div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h4 className="font-semibold mb-2 text-white">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
