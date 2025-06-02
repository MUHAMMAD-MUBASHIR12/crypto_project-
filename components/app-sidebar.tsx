"use client"
import { motion } from "framer-motion"
import { Home, Coins, User, Trophy, TrendingUp, HelpCircle, Settings, Target, Wallet } from "lucide-react"
import { useAccount, useConnect, useDisconnect } from "wagmi"
import { injected } from "wagmi/connectors"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { GridironStakeLogo } from "@/components/gridiron-stake-logo"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Games", url: "/matches", icon: Target },
  { title: "Tokens", url: "/tokens", icon: Coins },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Stake & Earn", url: "/stake", icon: TrendingUp, badge: "•" },
  { title: "FAQ", url: "/faq", icon: HelpCircle },
  { title: "Admin", url: "/admin", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  const handleConnect = () => {
    connect({ connector: injected() })
  }

  return (
    <Sidebar className="border-r border-white/10 bg-black/20 backdrop-blur-xl">
      <SidebarHeader className="p-6">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GridironStakeLogo />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent">
            GridironStake
          </span>
        </motion.div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{item.title}</span>
                        {item.badge && (
                          <motion.span
                            className="ml-auto text-green-400 text-xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {item.badge}
                          </motion.span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-2xl p-1 backdrop-blur-sm"
        >
          <div className="bg-black/40 rounded-xl p-3">
            {!isConnected ? (
              <Button
                onClick={handleConnect}
                className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => disconnect()}
                  className="text-left text-sm text-white/80 hover:text-white transition-colors"
                >
                  {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connected"}
                </button>
                <div className="text-xs text-green-400 font-medium">1,250 $GRS</div>
              </div>
            )}
          </div>
        </motion.div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
