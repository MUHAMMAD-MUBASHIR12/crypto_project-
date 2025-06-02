"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Gift, Lock, Unlock, Calculator, Trophy, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const stakingPools = [
  {
    id: 1,
    name: "Flexible Staking",
    apy: 12,
    minStake: 100,
    lockPeriod: "None",
    totalStaked: "2.5M GRS",
    participants: 1250,
    description: "Stake and unstake anytime with competitive rewards",
    risk: "Low",
    color: "from-green-400 to-emerald-500",
    utilization: 65,
  },
  {
    id: 2,
    name: "30-Day Lock",
    apy: 18,
    minStake: 500,
    lockPeriod: "30 Days",
    totalStaked: "1.8M GRS",
    participants: 890,
    description: "Higher rewards for 30-day commitment",
    risk: "Medium",
    color: "from-blue-400 to-cyan-500",
    utilization: 78,
  },
  {
    id: 3,
    name: "90-Day Lock",
    apy: 25,
    minStake: 1000,
    lockPeriod: "90 Days",
    totalStaked: "3.2M GRS",
    participants: 650,
    description: "Maximum rewards for long-term stakers",
    risk: "High",
    color: "from-red-400 to-pink-500",
    utilization: 85,
  },
]

export function StakeContent() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")
  const [selectedPool, setSelectedPool] = useState(stakingPools[0])
  const { toast } = useToast()

  // Mock user data
  const userStats = {
    totalStaked: 2500,
    totalEarned: 156.75,
    pendingRewards: 23.45,
    stakingPower: 0.025, // 2.5% of total pool
  }

  const calculateRewards = (amount: number, apy: number) => {
    return (amount * apy) / 100 / 365 // Daily rewards
  }

  const handleStake = () => {
    if (!stakeAmount || Number.parseFloat(stakeAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid stake amount",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Staking Successful! 🎉",
      description: `You staked ${stakeAmount} $GRS in ${selectedPool.name}. Start earning ${selectedPool.apy}% APY!`,
    })
    setStakeAmount("")
  }

  const handleUnstake = () => {
    if (!unstakeAmount || Number.parseFloat(unstakeAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid unstake amount",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Unstaking Initiated",
      description: `${unstakeAmount} $GRS will be available after the cooldown period`,
    })
    setUnstakeAmount("")
  }

  return (
    <div className="relative z-10 container mx-auto px-6 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
          Stake & Earn
        </h1>
        <p className="text-slate-300 text-lg">Stake your $GRS tokens to earn passive rewards and platform benefits</p>
      </motion.div>

      {/* User Stats Overview */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          {
            title: "Total Staked",
            value: `${userStats.totalStaked.toLocaleString()} GRS`,
            icon: Lock,
            color: "from-yellow-400 to-orange-400",
          },
          {
            title: "Total Earned",
            value: `${userStats.totalEarned} GRS`,
            icon: TrendingUp,
            color: "from-green-400 to-emerald-400",
          },
          {
            title: "Pending Rewards",
            value: `${userStats.pendingRewards} GRS`,
            icon: Gift,
            color: "from-blue-400 to-cyan-400",
          },
          {
            title: "Staking Power",
            value: `${(userStats.stakingPower * 100).toFixed(2)}%`,
            icon: Trophy,
            color: "from-red-400 to-pink-400",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{stat.title}</p>
                    <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                  </div>
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} p-3`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Staking Pools */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Staking Pools
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl"
                disabled={userStats.pendingRewards === 0}
              >
                <Gift className="h-4 w-4 mr-2" />
                Claim {userStats.pendingRewards} GRS
              </Button>
            </motion.div>
          </motion.div>

          {stakingPools.map((pool, index) => (
            <motion.div
              key={pool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${pool.color}`} />
                        {pool.name}
                      </CardTitle>
                      <p className="text-slate-400 text-sm mt-2">{pool.description}</p>
                    </div>
                    <Badge
                      variant={pool.risk === "Low" ? "secondary" : pool.risk === "Medium" ? "default" : "destructive"}
                      className="ml-2"
                    >
                      {pool.risk} Risk
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-slate-400 mb-1">APY</p>
                      <p className={`font-bold text-lg bg-gradient-to-r ${pool.color} bg-clip-text text-transparent`}>
                        {pool.apy}%
                      </p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-slate-400 mb-1">Min Stake</p>
                      <p className="font-semibold text-white">{pool.minStake} GRS</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-slate-400 mb-1">Lock Period</p>
                      <p className="font-semibold text-white">{pool.lockPeriod}</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-slate-400 mb-1">Participants</p>
                      <p className="font-semibold text-white">{pool.participants}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Pool Utilization</span>
                      <span className="text-white font-medium">
                        {pool.totalStaked} ({pool.utilization}%)
                      </span>
                    </div>
                    <Progress value={pool.utilization} className="h-3 rounded-full" />
                  </div>

                  <div className="flex gap-3">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className={`w-full bg-gradient-to-r ${pool.color} hover:opacity-90 rounded-xl py-3 transition-all duration-300`}
                        onClick={() => setSelectedPool(pool)}
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Stake Now
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-xl px-4">
                        <Calculator className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Staking Actions */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Zap className="h-4 w-4 text-white" />
                  </motion.div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stake" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2 bg-white/5 rounded-xl p-1">
                    <TabsTrigger
                      value="stake"
                      className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Stake
                    </TabsTrigger>
                    <TabsTrigger
                      value="unstake"
                      className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300"
                    >
                      <Unlock className="h-4 w-4 mr-2" />
                      Unstake
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="stake" className="space-y-4">
                    <div className="space-y-3">
                      <Label htmlFor="stake-amount" className="text-white">
                        Amount to Stake
                      </Label>
                      <Input
                        id="stake-amount"
                        type="number"
                        placeholder="Enter GRS amount"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Available: 1,250 GRS</span>
                        <button
                          className="text-green-400 hover:text-green-300 transition-colors"
                          onClick={() => setStakeAmount("1250")}
                        >
                          Max
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Selected Pool</Label>
                      <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-white">{selectedPool.name}</span>
                          <Badge className={`bg-gradient-to-r ${selectedPool.color} text-white border-0`}>
                            {selectedPool.apy}% APY
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {stakeAmount && (
                      <motion.div
                        className="p-4 bg-white/5 rounded-xl space-y-2 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Daily Rewards:</span>
                          <span className="text-green-400 font-medium">
                            {calculateRewards(Number.parseFloat(stakeAmount), selectedPool.apy).toFixed(4)} GRS
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Monthly Rewards:</span>
                          <span className="text-green-400 font-medium">
                            {(calculateRewards(Number.parseFloat(stakeAmount), selectedPool.apy) * 30).toFixed(2)} GRS
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleStake}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl py-3 text-lg font-medium transition-all duration-300"
                      >
                        <Lock className="h-5 w-5 mr-2" />
                        Stake {stakeAmount || "0"} GRS
                      </Button>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="unstake" className="space-y-4">
                    <div className="space-y-3">
                      <Label htmlFor="unstake-amount" className="text-white">
                        Amount to Unstake
                      </Label>
                      <Input
                        id="unstake-amount"
                        type="number"
                        placeholder="Enter GRS amount"
                        value={unstakeAmount}
                        onChange={(e) => setUnstakeAmount(e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Staked: {userStats.totalStaked.toLocaleString()} GRS</span>
                        <button
                          className="text-green-400 hover:text-green-300 transition-colors"
                          onClick={() => setUnstakeAmount(userStats.totalStaked.toString())}
                        >
                          Max
                        </button>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-yellow-400 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>Unstaking may have a 24-hour cooldown period</span>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleUnstake}
                        variant="outline"
                        className="w-full border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl py-3 text-lg font-medium transition-all duration-300"
                      >
                        <Unlock className="h-5 w-5 mr-2" />
                        Unstake {unstakeAmount || "0"} GRS
                      </Button>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Staking Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <Card className="bg-gradient-to-br from-red-500/10 via-blue-500/10 to-green-500/10 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Staking Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: "💰", text: "Earn passive GRS rewards", color: "text-green-400" },
                  { icon: "⚡", text: "Reduced betting fees", color: "text-blue-400" },
                  { icon: "🎯", text: "Exclusive game access", color: "text-red-400" },
                  { icon: "🗳️", text: "Governance voting rights", color: "text-yellow-400" },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className={`text-sm font-medium ${benefit.color}`}>{benefit.text}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
