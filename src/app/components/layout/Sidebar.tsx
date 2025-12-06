// src/components/layout/Sidebar.tsx
import React from "react"
import Icon from "../ui/Icon"

export default function Sidebar() {
  const items = ["grid", "circle", "plug", "bell", "alert", "user", "number"]
  return (
    <aside className="w-[97px] bg-[#06151c] min-h-screen py-[53px] flex flex-col items-center justify-between">
      <div className="space-y-6">
        <div className="w-[99px] h-[130px] flex items-start justify-center">
          <Icon name="logo" className="w-10 h-10" alt="logo" />
        </div>
        <div className="flex flex-col gap-[12px] items-center">
          {items.map((it, idx) => (
            <div key={idx} className="p-2 rounded-md hover:bg-[#0f2630]">
              <Icon name={it} className="w-8 h-8 opacity-90" />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <img src="/icons/account.svg" alt="avatar" className="w-12 h-12 rounded-full" />
      </div>
    </aside>
  )
}
