"use client";

import React from "react";
import Icon from "../ui/Icon";

export default function Topbar() {
  // Compose classes as arrays and join — guarantees identical single-line strings
  const headerClass = [
    "w-full",
    "h-[126px]",
    "bg-gradient-to-r",
    "from-[#15172780]",
    "via-[#050b16]",
    "to-[#0a2340]",
    "shadow-topbar",
    "border-b",
    "border-white/5",
    "flex",
    "items-center",
  ].join(" ");

  const containerClass = [
    "w-full",
    "h-[42px]",
    "max-w-[1713px]",
    "mx-auto",
    "px-[133px]",
    "flex",
    "items-center",
    "justify-between",
  ].join(" ");

  const vendorBtnClass = [
    "inline-flex",
    "items-center",
    "gap-2",
    "h-[42px]",
    "px-5",
    "rounded-[6px]",
    "bg-[#0B1623]",
    "border",
    "border-white/10",
    "text-[16px]",
    "shadow-[0_4px_14px_rgba(0,0,0,0.55)]",
    "backdrop-blur-[2px]",
    "focus:outline-none",
  ].join(" ");

  const vendorTextClass = ["text-[#F2F6FF]", "font-medium", "select-none"].join(" ");

  const searchClass = [
    "inline-flex",
    "items-center",
    "gap-[16px]",
    "h-[42px]",
    "min-w-[300px]",
    "px-[16px]",
    "m-[8px]",
    "rounded-[4px]",
    "bg-panel",
    "border",
    "border-white/15",
    "text-[16px]",
    "text-white/70",
    "shadow-[0_6px_18px_rgba(35,52,77,0.45)]",
  ].join(" ");

  const smallBtnClass = (extra: string) =>
    [
      "inline-flex",
      "items-center",
      "gap-2",
      "h-[42px]",
      "px-[16px]",
      "rounded-[4px]",
      "bg-[#091728]",
      "border",
      "border-white/15",
      "text-[16px]",
      "text-white/85",
      "shadow-[0_6px_18px_rgba(0,0,0,0.6)]",
      extra,
    ]
      .filter(Boolean)
      .join(" ");

  const iconBtnClass = [
    "inline-flex",
    "items-center",
    "justify-center",
    "h-10",
    "w-10",
    "rounded-full",
    "bg-transparent",
    "border",
    "text-white",
    "hover:bg-white/5",
    "transition-colors",
  ].join(" ");

  const plusBtnClass = [
    "inline-flex",
    "items-center",
    "justify-center",
    "h-5",
    "w-5",
    "rounded-full",
    "bg-accentGreen",
    "shadow-[0_0_20px_rgba(0,0,0,0.55)]",
  ].join(" ");

  return (
    <header className={headerClass}>
      <div className={containerClass}>
        {/* LEFT: Breadcrumb */}
        <div className={["flex", "items-center", "gap-3", "text-[16px]", "text-white/75"].join(" ")}>
          <Icon name="home" className="w-5 h-5 text-white/70" />
          <Icon name="right" className="w-5 h-5 text-white/40" />
          <span className="truncate">Charger Management</span>
        </div>

        {/* RIGHT: Controls group */}
        <div className={["flex", "items-center", "gap-4"].join(" ")}>
          <button aria-label="Vendor" className={vendorBtnClass} type="button">
            <span className={vendorTextClass}>Vendor</span>
            <Icon name="down" className="w-3 h-3 text-white/80" />
          </button>

          <div role="search" className={searchClass}>
            <Icon name="search" className="w-3.5 h-3.5 text-white/70" />
            <span className="truncate text-[#F2F6FF]">Charger/Hub</span>
             <span className="text-[#F2F6FF] ml-[80px]">All</span>
            <Icon name="down" className="w-3 h-3 text-white/80" />
          </div>

          <button aria-label="Filter" className={smallBtnClass("hover:bg-[#091728] transition-colors")}>
            <Icon name="filter" className="w-3.5 h-3.5 text-white/90" />
            <span className="text-[#F2F6FF]">Filter</span>
          </button>

          <button aria-label="Notifications" className={iconBtnClass} type="button">
            <Icon name="notifications" className="w-4 h-4 text-white/95" />
          </button>

          <button aria-label="Help" className={iconBtnClass} type="button">
            <Icon name="help" className="w-4 h-4 text-white/95" />
          </button>

          <button aria-label="Add new" className="bg-[#091728]  rounded-full h-5 w-5" type="button">
            <Icon name="add" className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </header>
  );
}
