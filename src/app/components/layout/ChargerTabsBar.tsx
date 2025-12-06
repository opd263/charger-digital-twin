"use client"

import React from "react"
import Icon from "../ui/Icon"

type Tab = {
  id: string
  label: string
  icon: string
}

const TABS: Tab[] = [
  { id: "info", label: "Info", icon: "info" },
  { id: "digital-twin", label: "Digital Twin", icon: "digital_twin" },
  { id: "fault", label: "Fault", icon: "fault" },
  { id: "alarm", label: "Alarm", icon: "alarm" },
  { id: "configuration", label: "Configuration", icon: "config" },
  { id: "maintenance", label: "Maintenance", icon: "maintenance" },
]

const ACTIVE_ID = "digital-twin"

export default function ChargerTabsBar() {
  return (
    <div className="mt-4 bg-[rgba(7,15,36,1)]">
      <div className="border-b border-white/15">
        <div className="flex items-center justify-center gap-[20px] px-4">
          {TABS.map((tab) => {
            const isActive = tab.id === ACTIVE_ID

            return (
              <button
                key={tab.id}
                type="button"
                className="bg-[rgba(7,15,36,1)] group flex flex-col items-center pt-3 pb-1 text-xs"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    name={tab.icon}
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#9EE36B]" : "text-[#F2F6FF]"
                    }`}
                  />
                  <span
                    className={`text-[13px] tracking-wide ${
                      isActive
                        ? "text-[#9EE36B]"
                        : "text-[#F2F6FF] group-hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>

                <div
                  className={`mt-2 h-[2px] w-full rounded-full ${
                    isActive ? "bg-[#9EE36B]" : "bg-transparent"
                  }`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
