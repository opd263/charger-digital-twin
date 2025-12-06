// src/components/left-panel/ChargerVisualization.tsx
"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"

export default function ChargerVisualization() {
  return (
    <div className="w-[420px] bg-[rgba(7,15,36,0.98)] border border-white/6 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.55)]">
      <Card className="p-6 flex flex-col items-center">
        <div className="w-full flex items-center justify-center">
          {/* Charger illustration exported from Figma */}
          <Icon name="leftpanel" className="w-6 h-6 ml-2 mr-4 opacity-70" />
          {/* <img src="/images/charger-illustration.png" alt="charger" className="max-h-[680px]" /> */}
        </div>

        <div className="w-full mt-4 flex items-center justify-between text-sm text-slate-300">
          <Icon name="back" />
            <div>Front View</div>
          <Icon name="rightarrow" />
        </div>
      </Card>
    </div>
  )
}
