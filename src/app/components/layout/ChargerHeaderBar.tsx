"use client"

import React from "react"
import Icon from "../ui/Icon"

export default function ChargerHeaderBar() {
  return (
    <div className="w-full mt-3">
      <div className="flex items-center justify-between px-6 py-3 rounded-lg bg-[rgba(7,15,36,0.95)] border border-white/6 shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
        
        {/* LEFT: Back + charger info */}
        <div className="flex items-center gap-4">

          {/* Back Arrow */}
          <button className="bg-[#091728] w-8 h-8 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/8 transition-colors">
            <Icon name="back" className="w-3.5 h-3.5" />
          </button>

          {/* Charger Icon + Text */}
          <div className="flex items-center gap-3">
            <Icon name="evstation" className="w-5 h-5 opacity-80" />

            <div className="flex flex-col leading-tight">
              <span className="text-[#F2F6FF] text-[13px] font-medium tracking-wide">
                ZYNIND001
              </span>
              <span className="text-[#F2F6FF] text-[11px] opacity-55">
                80 kW-Dual Gun
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Add Charger + Dropdown */}
        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 px-4 py-[7px] rounded-md bg-[#15172780] border border-white/10 text-[12px] text-white/85 hover:bg-[#1a2433] transition-colors">
            <Icon name="plus" className="w-3.5 h-3.5" />
            <span className="text-[#F2F6FF] ">Add Charger</span>
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#15172780] border border-white/10 hover:bg-[#1a2433] transition-colors">
            <Icon name="bottom" className="w-3.5 h-3.5 opacity-85" />
          </button>

        </div>

      </div>
    </div>
  )
}
