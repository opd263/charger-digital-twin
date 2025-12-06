"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"

export default function GunStatusCard() {
  return (
    <Card className="mb-2">
      {/* Title */}
      <h3 className="text-[#F2F6FF] text-lg font-semibold text-white">Gun Status</h3>
      <p className="text-[#F2F6FF] text-sm text-white/50 mt-1">Gun Armed/Charging Status</p>

      {/* Content */}
      <div className="mt-6 grid grid-cols-1 gap-5">

        {/* ---------------- Gun 1 ---------------- */}
        <div className="text-[#F2F6FF] flex items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-md bg-[#0b1015] flex items-center justify-center border border-white/10">
            <Icon name="gunstatus" className="w-7 h-7 opacity-90" />
          </div>

          {/* Text */}
          <div>
            <div className="text-sm text-white/60">GUN 1</div>
            <div className="text-lg font-semibold text-white">ARMED</div>
          </div>
        </div>

        {/* ---------------- Gun 2 ---------------- */}
        <div className="text-[#F2F6FF] flex items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-md bg-[#0b1015] flex items-center justify-center border border-white/10">
            <Icon name="gunstatus" className="w-7 h-7 opacity-90" />
          </div>

          {/* Text */}
          <div>
            <div className="text-sm text-white/60">GUN 2</div>
            <div className="text-lg font-semibold text-accentGreen">Charging</div>
          </div>
        </div>

      </div>
    </Card>
  )
}
