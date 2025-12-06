// src/components/middle-panel/DiagnoseCard.tsx
"use client"

import React from "react"
import Card from "../ui/Card"
import Button from "../ui/Button"
import Icon from "../ui/Icon"
import useDiagnostics from "../../../hooks/useDiagnostics"

export default function DiagnoseCard() {
  const { running, result, runDiagnostics } = useDiagnostics()

  async function handle() {
    await runDiagnostics()
    alert("Diagnostics started") // simple feedback; replace with toast if desired
  }

  return (
    <Card className="mb-2">
      <div className="flex items-start justify-between">
        <div className="text-[#F2F6FF]">
          <h3 className="text-lg font-semibold">Diagnose Charger</h3>
          <p className="text-sm text-slate-400">Scan to Start Diagnosis</p>
        </div>
      </div>

      <div className="mt-4">
        <Button onClick={handle} className="bg-[#9EE36B] text-black hover:opacity-90">
          {running ? "Scanning..." : "Scan"}
        </Button>
      </div>
    </Card>
  )
}
