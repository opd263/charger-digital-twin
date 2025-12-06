"use client"

import React from "react"
import Card from "../ui/Card"
import Icon from "../ui/Icon"
import useChargerStatus from "../../../hooks/useChargerStatus"

export default function TemperatureCard() {
  const { data } = useChargerStatus()

  const externalTemp = data?.temperature ?? 37
  const chargerTemp = data?.gun?.charger ?? 42
  const gun1Temp = data?.gun?.g1 ?? 29
  const gun2Temp = data?.gun?.g2 ?? 39

  const humidityExternal = data?.humidity?.external ?? 30
  const humidityCharger = data?.humidity?.charger ?? 34

  return (
    <Card className="mb-2">
      {/* Title */}
      <h3 className="text-[#F2F6FF] text-lg font-semibold text-white">Temperature</h3>
      <p className="text-[#F2F6FF] text-sm text-white/50 mt-1">
        Temperature and Humidity in and around Charger
      </p>

      {/* CONTENT */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        {/* ------------------ EXTERNAL ------------------ */}
        <div className="text-[#F2F6FF] text-center">
          <div className="flex flex-col items-center">
            <Icon name="temp" className="w-5 h-5 opacity-80 mb-1" />
            <span className="text-xs text-white/60">EXTERNAL</span>
          </div>

          <div className="text-2xl font-semibold mt-2 text-white">
            {externalTemp}°C
          </div>

          <div className="flex flex-col items-center mt-3">
            <Icon name="humidity" className="w-4 h-4 opacity-70" />
            <span className="text-sm text-white/60 mt-1">
              {humidityExternal}%
            </span>
          </div>
        </div>

        {/* ------------------ CHARGER ------------------ */}
        <div className="text-[#F2F6FF] text-center">
          <div className="flex flex-col items-center">
            <Icon name="charger" className="w-5 h-5 opacity-80 mb-1" />
            <span className="text-xs text-white/60">CHARGER</span>
          </div>

          <div className="text-2xl font-semibold mt-2 text-white">
            {chargerTemp}°C
          </div>

          <div className="flex flex-col items-center mt-3">
            <Icon name="humidity" className="w-4 h-4 opacity-70" />
            <span className="text-sm text-white/60 mt-1">
              {humidityCharger}%
            </span>
          </div>
        </div>

        {/* ------------------ GUN TEMPERATURES ------------------ */}
        <div className="text-[#F2F6FF] text-center">
          {/* Gun 1 */}
          <div className="flex flex-col items-center">
            <Icon name="gun" className="w-5 h-5 opacity-80 mb-1" />
            <span className="text-xs text-white/60">GUN 1</span>
          </div>

          <div className="text-2xl font-semibold mt-2 text-white">
            {gun1Temp}°C
          </div>

          {/* Gun 2 */}
          <div className="flex flex-col items-center mt-4">
            <Icon name="gun" className="w-5 h-5 opacity-80 mb-1" />
            <span className="text-xs text-white/60">GUN 2</span>
          </div>

          <div className="text-2xl font-semibold mt-2 text-accentGreen">
            {gun2Temp}°C
          </div>
        </div>
      </div>
    </Card>
  )
}
