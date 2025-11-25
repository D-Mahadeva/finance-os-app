"use client"

import { motion } from "framer-motion"
import { TrendingUp, Coins } from "lucide-react"

export function AssetsInvestments() {
  const assets = [
    { name: "Digital Gold", amount: 50000, change: 2.5 },
    { name: "Fixed Deposit", amount: 120000, change: 1.2 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-card border border-border p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Coins size={20} className="text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Assets & Investments</h3>
      </div>

      <div className="space-y-4">
        {assets.map((asset, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-accent/50 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-foreground">{asset.name}</p>
              <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono">+{asset.change}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-lg font-bold text-accent">₹{asset.amount.toLocaleString()}</span>
              <TrendingUp size={16} className="text-primary" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-xs text-muted-foreground mb-1">Total Assets</p>
        <p className="font-mono text-2xl font-bold text-primary">₹1,70,000</p>
      </div>
    </motion.div>
  )
}
