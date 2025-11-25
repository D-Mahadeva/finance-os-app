"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [
  { year: 2025, value: 250000 },
  { year: 2026, value: 380000 },
  { year: 2027, value: 520000 },
  { year: 2028, value: 720000 },
  { year: 2029, value: 950000 },
  { year: 2030, value: 1250000 },
  { year: 2031, value: 1620000 },
  { year: 2032, value: 2100000 },
  { year: 2033, value: 2650000 },
  { year: 2034, value: 3280000 },
  { year: 2035, value: 4000000 },
]

export function NetWorthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-lg bg-card border border-border p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Net Worth Projection</h3>
        <p className="text-sm text-muted-foreground">10-year wealth growth forecast</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="year" stroke="#a1a1a6" style={{ fontSize: 12 }} />
          <YAxis stroke="#a1a1a6" style={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "8px",
              color: "#fafafa",
            }}
            formatter={(value) => `₹${(value as number).toLocaleString()}`}
          />
          <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
