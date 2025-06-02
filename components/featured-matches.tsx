"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const featuredMatches = [
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
    team1: "Dallas Cowboys",
    team2: "Philadelphia Eagles",
    team1Logo: "⭐",
    team2Logo: "🦅",
    status: "Starting Soon",
    time: "8:20 PM ET",
    venue: "AT&T Stadium",
    team1Odds: 2.1,
    team2Odds: 1.75,
    totalBets: "$89K",
    bettors: 1920,
  },
]

export function FeaturedMatches() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
          Featured Games
        </h2>
        <p className="text-slate-300 text-lg">Don't miss these exciting NFL matchups</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {featuredMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="bg-black/20 border-white/10 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
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
                      <span className="text-sm">{match.time}</span>
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
                  <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{match.team1Logo}</div>
                    <div className="font-bold text-lg text-white mb-1">{match.team1}</div>
                    {match.team1Score && (
                      <div className="text-green-400 font-mono text-2xl mb-2">{match.team1Score}</div>
                    )}
                    <div className="text-green-400 font-medium">Odds: {match.team1Odds}</div>
                  </motion.div>

                  {/* VS */}
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-slate-400 mb-2"
                      animate={match.status === "Live" ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      VS
                    </motion.div>
                    {match.status === "Live" && (
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
                  <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl mb-3">{match.team2Logo}</div>
                    <div className="font-bold text-lg text-white mb-1">{match.team2}</div>
                    {match.team2Score && (
                      <div className="text-green-400 font-mono text-2xl mb-2">{match.team2Score}</div>
                    )}
                    <div className="text-green-400 font-medium">Odds: {match.team2Odds}</div>
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

                  <Link href="/matches">
                    <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white rounded-xl px-6 py-2 transition-all duration-300 hover:scale-105">
                      Place Bet
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link href="/matches">
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            View All Games
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
