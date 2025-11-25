"use client"

import { motion } from "framer-motion"
import { Tag } from "lucide-react"

const expenses = [
  {
    category: "Food",
    items: [
      { name: "Chicken", amount: 800, tag: "Protein" },
      { name: "Eggs", amount: 300, tag: "Protein" },
      { name: "Protein Powder", amount: 1000, tag: "Protein" },
      { name: "Vegetables", amount: 800, tag: "Fresh" },
      { name: "Fruits", amount: 520, tag: "Fresh" },
      { name: "Other Groceries", amount: 2150, tag: "Staples" },
    ],
    total: 6570,
  },
  { category: "Travel", total: 1400, items: [{ name: "Transport", amount: 1400, tag: "Transit" }] },
  {
    category: "Personal Care",
    total: 600,
    items: [
      { name: "Skincare", amount: 300, tag: "Skin" },
      { name: "Haircare", amount: 300, tag: "Hair" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}

export function ExpenseTracker() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-lg bg-card border border-border p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">Detailed Expenses</h3>

      <div className="space-y-6">
        {expenses.map((expenseGroup, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-muted">
              <h4 className="font-semibold text-foreground">{expenseGroup.category}</h4>
              <span className="font-mono font-bold text-accent">₹{expenseGroup.total.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              {expenseGroup.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  variants={itemVariants}
                  className="flex items-center justify-between text-sm p-2 rounded hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Tag size={12} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground">{item.name}</p>
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary mt-1">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-muted-foreground">₹{item.amount.toLocaleString()}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
