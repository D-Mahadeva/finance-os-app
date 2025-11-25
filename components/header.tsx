"use client"

import { motion } from "framer-motion"
import { Bell, User, Settings, LogOut } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1" />

        <div className="flex items-center gap-6">
          {/* Notifications Bell */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Bell size={20} className="text-muted-foreground hover:text-accent transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </motion.button>

          {/* Profile Dropdown */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <User size={16} className="text-background" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-foreground">Alex Kumar</p>
                <p className="text-xs text-muted-foreground">Premium Member</p>
              </div>
            </motion.button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Alex Kumar</p>
                  <p className="text-xs text-muted-foreground">alex@financeOS.com</p>
                </div>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors text-sm text-foreground">
                  <Settings size={16} />
                  Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted/50 transition-colors text-sm text-destructive border-t border-border">
                  <LogOut size={16} />
                  Logout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
