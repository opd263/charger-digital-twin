"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"
import useChargerStatus from "../../../hooks/useChargerStatus"

export default function DoorStatusCard() {
  const { data } = useChargerStatus()

  // fallback demo values
  const doors = data?.doors || { front: "Closed", left: "Closed", right: "Open" }

  return (
    <Card className="mb-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#F2F6FF] text-lg font-semibold">
            Door Status <Icon name="toggle" />
          </h3>
          <p className="text-[#F2F6FF] text-sm text-slate-400">Status of Charger Doors</p>
        </div>
      </div>

      <div className="text-[#F2F6FF] mt-4 grid grid-cols-3 gap-4">
        {["front", "left", "right"].map((k) => {
          const value = doors[k as keyof typeof doors]
          const isOpen = value === "Open"
          const icon = isOpen ? "opendoor" : "door"

          return (
            <div key={k} className="text-center py-4">
              {/* Label */}
              <div className="text-xs text-slate-400 uppercase">
                {k === "front"
                  ? "Front Door"
                  : k === "left"
                  ? "Left Door"
                  : "Right Door"}
              </div>

              {/* ICON */}
              <div className="flex justify-center mt-2 mb-2">
                <Icon name={icon} className="w-6 h-6 opacity-80" />
              </div>

              {/* Status */}
              <div
                className={`text-2xl font-semibold ${
                  isOpen ? "text-accentYellow" : "text-white"
                }`}
              >
                {value}
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
