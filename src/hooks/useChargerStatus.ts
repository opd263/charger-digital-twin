// src/hooks/useChargerStatus.ts
import { useEffect, useState } from "react"

export type ChargerStatus = {
  id?: string
  status?: string
  temperature?: number
  weather?: string
  location?: string
  health?: string
  power?: { l1: number; l2: number; l3: number }
  connectivity?: { wifi: boolean; lan: boolean; sim: boolean }
  doors?: { front: string; left: string; right: string }
  mcb?: any
  gun?: any
  humidity?: any
  energyConsumed?: number
}

export default function useChargerStatus(id = "zynind001", pollInterval = 10000) {
  const [data, setData] = useState<ChargerStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchStatus() {
    try {
      setLoading(true)
      const res = await fetch(`/api/charger/${id}/status`)
      const json = await res.json()
      setData(json)
      setError(null)
    } catch (err: any) {
      setError(err.message || "Failed to load")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
    const iv = setInterval(fetchStatus, pollInterval)
    return () => clearInterval(iv)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return { data, loading, error, refresh: fetchStatus }
}
