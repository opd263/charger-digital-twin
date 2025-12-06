// src/hooks/useNotifications.ts
import { useEffect, useState } from "react"

export type NotificationItem = { id: string; type: string; message: string; time: string }

export default function useNotifications(id = "zynind001") {
  const [items, setItems] = useState<NotificationItem[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchNotifications() {
    setLoading(true)
    try {
      const res = await fetch(`/api/charger/${id}/notifications`)
      const json = await res.json()
      setItems(json)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
  }, [id])

  return { items, loading, refresh: fetchNotifications }
}
