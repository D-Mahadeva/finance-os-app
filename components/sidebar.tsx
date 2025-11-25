"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, LayoutDashboard, TrendingUp, CreditCard, Briefcase, BarChart3, Settings } from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: TrendingUp, label: "Assets", id: "assets" },
  { icon: CreditCard, label: "Liabilities", id: "liabilities" },
  { icon: Briefcase, label: "Budget", id: "budget" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: Settings, label: "Settings", id: "settings" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-card border border-border hover:border-accent transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 w-64 h-screen bg-card border-r border-border p-6 z-40 lg:static lg:translate-x-0 flex flex-col"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Finance.OS
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Personal Finance Dashboard</p>
        </div>

        <nav className="space-y-2 flex-1">
          {menuItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground group"
              >
                <Icon size={18} className="group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </nav>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">Quick Stats</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Net Worth</span>
              <span className="font-mono font-bold text-accent">₹2.5L</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monthly Surplus</span>
              <span className="font-mono font-bold text-green-400">₹14.4K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Assets</span>
              <span className="font-mono font-bold text-primary">₹1.7L</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  )
}
