"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function DoubleEntryFlow() {
  const flows = [
    {
      label: "Income",
      amount: 40000,
      color: "from-green-500 to-emerald-500",
      icon: "📈",
    },
    {
      label: "Fixed Obligations",
      amount: -17000,
      color: "from-red-500 to-rose-500",
      icon: "🏠",
    },
    {
      label: "Expenses",
      amount: -8570,
      color: "from-orange-500 to-yellow-500",
      icon: "💳",
    },
    {
      label: "Surplus",
      amount: 14430,
      color: "from-cyan-500 to-blue-500",
      icon: "💰",
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-lg bg-card border border-border p-6 md:col-span-2"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">Monthly Cash Flow</h3>

      <div className="space-y-4">
        {flows.map((flow, idx) => (
          <div key={idx}>
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span>{flow.icon}</span>
                    {flow.label}
                  </span>
                  <span className={`font-mono font-bold ${flow.amount > 0 ? "text-green-400" : "text-red-400"}`}>
                    {flow.amount > 0 ? "+" : ""}₹{Math.abs(flow.amount).toLocaleString()}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                    className={`h-full bg-gradient-to-r ${flow.color}`}
                  />
                </div>
              </div>
              {idx < flows.length - 1 && <ArrowRight size={20} className="text-muted-foreground" />}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
        <p className="text-xs text-muted-foreground mb-1">Allocation</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">SIP Investment</p>
            <p className="font-mono font-bold text-green-400">₹1,000</p>
          </div>
          <div>
            <p className="text-muted-foreground">Emergency Fund</p>
            <p className="font-mono font-bold text-cyan-400">₹6,715</p>
          </div>
          <div>
            <p className="text-muted-foreground">Loan Repayment</p>
            <p className="font-mono font-bold text-yellow-400">₹6,715</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
