// src/hooks/useDiagnostics.ts
import { useState } from "react"

export default function useDiagnostics(id = "zynind001") {
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function runDiagnostics() {
    setRunning(true)
    setError(null)
    try {
      const res = await fetch(`/api/charger/${id}/diagnose`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
      const json = await res.json()
      setResult(json)
      return json
    } catch (e: any) {
      setError(e.message || "Error")
    } finally {
      setRunning(false)
    }
  }

  return { running, result, error, runDiagnostics }
}
