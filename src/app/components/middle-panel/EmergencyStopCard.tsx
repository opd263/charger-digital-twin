"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"

export default function EmergencyStopCard() {
  return (
    <Card className="mb-2">
      <div className="flex flex-col h-full justify-between">
        {/* Title */}
        <div>
          <h3 className="text-[#F2F6FF] text-lg font-semibold">Emergency stop</h3>
          <p className="text-[#F2F6FF] text-sm text-slate-400 mt-1">Emergency Stop Status</p>
        </div>

        {/* Stop Button Status */}
        <div className="text-[#F2F6FF] flex items-center gap-3 mt-8">
          {/* STOP ICON (circle) */}
          <Icon
            name="stop"
            className="w-6 h-6 opacity-90"
          />

          {/* Text beside the icon */}
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] text-white/60 tracking-wide">
              STOP BUTTON
            </span>

            <span className="text-[15px] text-white font-semibold mt-1">
              Not Engaged
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
