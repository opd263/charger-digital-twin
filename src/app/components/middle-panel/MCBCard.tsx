"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"
import useChargerStatus from "../../../hooks/useChargerStatus"

type VerticalBarProps = {
  icon: string
  label: string
}

function VerticalBar({ icon, label }: VerticalBarProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Label on top (L1 / L2 / L3) */}
      <div className="text-xs mb-2 text-white/80">{label}</div>

      {/* Icon instead of colored div */}
      <Icon name={icon} className="w-6 h-28" />

      {/* Bottom text like in design */}
      <div className="mt-2 text-[11px] text-white/80 text-center leading-tight">
        1000 V
        <br />
        60 A
      </div>
    </div>
  )
}

export default function MCBCard() {
  const { data } = useChargerStatus()
  // still here if you want to use it later
  const mcb = data?.mcb || { l1: 1000, l2: 1000, l3: 1000 }

  return (
    <Card className="mb-2">
      <div className="text-[#F2F6FF] flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          MCB <span className="ml-2 text-accentGreen">●</span>
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-6">
        {/* Left text block */}
        <div className="text-[#F2F6FF] text-sm text-slate-300">
          <div className="py-1">
            kWh <span className="float-right text-white">62 kWh</span>
          </div>
          <div className="py-1">
            Hz <span className="float-right text-white">60 Hz</span>
          </div>
          <div className="py-1">
            PF <span className="float-right text-white">0.8 PF</span>
          </div>
          <div className="py-1">
            Earthing <span className="float-right text-white">Earthing</span>
          </div>
        </div>

        {/* Right 3-phase “sliders” */}
        <div className="text-[#F2F6FF] flex items-center justify-around">
          <VerticalBar icon="redmcb" label="L1" />
          <VerticalBar icon="whitemcb" label="L2" />
          <VerticalBar icon="bluemcb" label="L3" />
        </div>
      </div>
    </Card>
  )
}
