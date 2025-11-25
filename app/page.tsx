"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Wallet, Target } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { BankConnect } from "@/components/bank-connect"
import { NetWorthChart } from "@/components/net-worth-chart"
import { DoubleEntryFlow } from "@/components/double-entry-flow"
import { ExpenseTracker } from "@/components/expense-tracker"
import { DebtAvalanche } from "@/components/debt-avalanche"
import { CalendarView } from "@/components/calendar-view"
import { ReportsSection } from "@/components/reports-section"
import { AssetsInvestments } from "@/components/assets-investments"
import { InsuranceVault } from "@/components/insurance-vault"
import { CreditCardManager } from "@/components/credit-card-manager"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        <Header />

        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            <StatCard
              icon={<DollarSign size={20} className="text-primary" />}
              label="Monthly Income"
              value={40000}
              currency
            />
            <StatCard
              icon={<Wallet size={20} className="text-accent" />}
              label="Current Surplus"
              value={14430}
              trend={12}
              currency
            />
            <StatCard
              icon={<Target size={20} className="text-secondary" />}
              label="Fixed Obligations"
              value={17000}
              trend={-5}
              currency
            />
            <StatCard
              icon={<TrendingUp size={20} className="text-primary" />}
              label="Net Worth"
              value={250000}
              trend={18}
              currency
            />
          </motion.div>

          {/* Row 1: Bank Connect & Net Worth + Double Entry Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            <div className="lg:col-span-1 space-y-6">
              <BankConnect />
              <NetWorthChart />
            </div>

            <div className="lg:col-span-2">
              <DoubleEntryFlow />
            </div>
          </motion.div>

          {/* Row 2: Assets, Insurance, Credit Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <AssetsInvestments />
            <InsuranceVault />
            <CreditCardManager />
          </motion.div>

          {/* Row 3: Expense Tracker & Debt Avalanche */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            <div className="lg:col-span-1">
              <ExpenseTracker />
            </div>
            <div className="lg:col-span-2">
              <DebtAvalanche />
            </div>
          </motion.div>

          {/* Row 4: Calendar & Reports */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            <div className="lg:col-span-1">
              <CalendarView />
            </div>
            <div className="lg:col-span-2">
              <ReportsSection />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
