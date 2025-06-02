"use client"

import { motion } from "framer-motion"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { TokensContent } from "@/components/tokens-content"

export default function TokensPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 overflow-hidden">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 via-violet-900 to-emerald-900">
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl" />
            </motion.div>
            <TokensContent />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
