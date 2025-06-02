"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock, MapPin, Users, TrendingUp, Zap, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const liveMatches = [
  {
    id: 1,
    team1: "Kansas City Chiefs",
    team2: "Buffalo Bills",
    team1Logo: "🔴",
    team2Logo: "🔵",
    status: "Live",
    time: "Q3 8:45",
    venue: "Arrowhead Stadium",
    team1Odds: 1.85,
    team2Odds: 1.95,
    totalBets: "$125K",
    bettors: 2850,
    team1Score: "21",
    team2Score: "17",
  },
  {
    id: 2,
    team1: "Green Bay Packers",
    team2: "Chicago Bears",
    team1Logo: "🟢",
    team2Logo: "🐻",
    status: "Live",
    time: "Q2 3:22",
    venue: "Lambeau Field",
    team1Odds: 1.65,
    team2Odds: 2.25,
    totalBets: "$98K",
    bettors: 2140,
    team1Score: "14",
    team2Score: "7",
  },
]

const upcomingMatches = [
  {
    id: 3,
    team1: "Dallas Cowboys",
    team2: "Philadelphia Eagles",
    team1Logo: "⭐",
    team2Logo: "🦅",
    status: "Upcoming",
    time: "Sunday 8:20 PM ET",
    venue: "AT&T Stadium",
    team1Odds: 2.1,
    team2Odds: 1.75,
    totalBets: "$89K",
    bettors: 1920,
  },
  {
    id: 4,
    team1: "San Francisco 49ers",
    team2: "Seattle Seahawks",
    team1Logo: "🔴",
    team2Logo: "🦅",
    status: "Upcoming",
    time: "Monday 8:15 PM ET",
    venue: "Levi's Stadium",
    team1Odds: 1.9,
    team2Odds: 1.9,
    totalBets: "$76K",
    bettors: 1650,
  },
]

export function MatchesContent() {
  const { toast } = useToast()

  return (
    <div className="relative z-10 container mx-auto px-6 py-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent mb-4">
          NFL Games
        </h1>
        <p className="text-slate-300 text-lg">Place your bets on live and upcoming NFL games</p>
      </motion.div>

      <Tabs defaultValue="live" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px] bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-1">
            <TabsTrigger
              value="live"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300"
            >
              <Target className="h-4 w-4 mr-2" />
              Live Games
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-green-500 data-[state=active]:text-white transition-all duration-300"
            >
              <Clock className="h-4 w-4 mr-2" />
              Upcoming Games
            </TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="live" className="space-y-6">
          {liveMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MatchCard match={match} isLive={true} />
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MatchCard match={match} isLive={false} />
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MatchCard({ match, isLive }: { match: any; isLive: boolean }) {
  return (
    <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge
              variant={match.status === "Live" ? "destructive" : "secondary"}
              className={`${
                match.status === "Live"
                  ? "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse"
                  : "bg-green-500/20 text-green-300 border-green-500/30"
              } backdrop-blur-sm px-3 py-1`}
            >
              {match.status}
            </Badge>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="h-4 w-4" />
              <span>{match.time}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{match.venue}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Team 1 */}
          <motion.div className="text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-4xl mb-3">{match.team1Logo}</div>
            <div className="font-bold text-lg text-white mb-2">{match.team1}</div>
            {isLive && match.team1Score && (
              <div className="text-green-400 font-mono text-2xl mb-2">{match.team1Score}</div>
            )}
            <div className="text-slate-400">
              Odds: <span className="text-green-400 font-semibold">{match.team1Odds}</span>
            </div>
          </motion.div>

          {/* VS */}
          <div className="text-center">
            <motion.div
              className="text-3xl font-bold text-slate-400 mb-4"
              animate={isLive ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              VS
            </motion.div>
            {isLive && (
              <motion.div
                className="flex items-center justify-center gap-2 text-red-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span className="text-sm font-medium">LIVE</span>
              </motion.div>
            )}
          </div>

          {/* Team 2 */}
          <motion.div className="text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-4xl mb-3">{match.team2Logo}</div>
            <div className="font-bold text-lg text-white mb-2">{match.team2}</div>
            {isLive && match.team2Score && (
              <div className="text-green-400 font-mono text-2xl mb-2">{match.team2Score}</div>
            )}
            <div className="text-slate-400">
              Odds: <span className="text-green-400 font-semibold">{match.team2Odds}</span>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-medium">{match.totalBets}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 font-medium">{match.bettors} bettors</span>
            </div>
          </div>

          <div className="flex gap-3">
            <BetDialog team={match.team1} odds={match.team1Odds} teamLogo={match.team1Logo} />
            <BetDialog team={match.team2} odds={match.team2Odds} teamLogo={match.team2Logo} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BetDialog({ team, odds, teamLogo }: { team: string; odds: number; teamLogo: string }) {
  const [betAmount, setBetAmount] = useState("")
  const { toast } = useToast()

  const handlePlaceBet = () => {
    if (!betAmount || Number.parseFloat(betAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid bet amount",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Bet Placed Successfully! 🎉",
      description: `You bet ${betAmount} $GRS on ${team}. Potential win: ${(Number.parseFloat(betAmount) * odds).toFixed(2)} $GRS`,
    })
    setBetAmount("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            className="border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 backdrop-blur-sm rounded-xl px-4 py-2 transition-all duration-300"
          >
            <Zap className="h-4 w-4 mr-2" />
            Bet {teamLogo}
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="bg-black/80 border-white/20 backdrop-blur-xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Place Bet on {team} {teamLogo}
          </DialogTitle>
        </DialogHeader>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-white">
              Bet Amount ($GRS)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
            />
            <div className="flex justify-between text-sm text-slate-400">
              <span>Available: 1,250 $GRS</span>
              <button
                className="text-green-400 hover:text-green-300 transition-colors"
                onClick={() => setBetAmount("100")}
              >
                Quick: 100 $GRS
              </button>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 space-y-3 backdrop-blur-sm">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Team:</span>
              <span className="font-semibold text-white">
                {team} {teamLogo}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Odds:</span>
              <span className="font-semibold text-green-400">{odds}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Potential Win:</span>
              <span className="font-semibold text-green-400">
                {betAmount ? (Number.parseFloat(betAmount) * odds).toFixed(2) : "0"} $GRS
              </span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handlePlaceBet}
              className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white rounded-xl py-3 text-lg font-medium transition-all duration-300"
            >
              <Zap className="h-5 w-5 mr-2" />
              Place Bet
            </Button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
