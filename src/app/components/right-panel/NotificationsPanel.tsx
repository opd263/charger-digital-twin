// src/components/right-panel/NotificationsPanel.tsx
"use client"

import React, { useState } from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"
import useNotifications from "../../../hooks/useNotifications"

export default function NotificationsPanel() {
  const { items } = useNotifications()
  const [showAll, setShowAll] = useState(false)

  // Show exactly 9 by default
  const visibleItems = showAll ? items : items.slice(0, 9)

  return (
    <div className="w-[360px]">
      <Card className="p-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="expand" className="w-5 h-5 text-white/80" />
            <h3 className="text-lg font-semibold">Live Notifications</h3>
          </div>

        {/* More / Less Button */}
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-1 text-sm text-slate-300 hover:text-white"
          >
            {showAll ? "Less" : "More"}
            <Icon name="arrow_forward" className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {visibleItems.map((n: any, index: number) => {
            const isWarning = n.type === "warning"
            const isCritical = n.type === "critical"

            return (
              <div
                key={`${n.id}-${index}`}
                className="
                  flex items-center justify-between
                  bg-[#0d141c]
                  rounded-md
                  px-4 py-3
                  border border-white/5
                  hover:bg-[#131c27]
                  transition
                "
              >
                {/* Left Side */}
                <div>
                  <div className="text-[11px] text-slate-400">{n.time}</div>
                  <div className="text-[14px] mt-1 text-white">{n.message}</div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end gap-2">
                  <div
                    className="
                      flex items-center gap-1
                      px-2 py-[2px]
                      rounded-sm
                      text-[11px]
                      font-semibold
                      tracking-wide
                    "
                    style={{
                      backgroundColor: isWarning ? "#FFE08A22" : "#FF8A8A22",
                      color: isWarning ? "#E9B400" : "#D9534F",
                    }}
                  >
                    <Icon
                      name={isWarning ? "warning_yellow" : "notification_red"}
                      className="w-3.5 h-3.5"
                    />
                    {n.id}
                  </div>

                  {/* Arrow */}
                  <Icon
                    name="arrow_forward"
                    className="w-4 h-4 text-white/70 hover:text-white cursor-pointer"
                  />
                </div>
              </div>
            )
          })}
        </div>

      </Card>
    </div>
  )
}