// src/components/ui/Card.tsx
import React from "react"

type Props = {
  children?: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`bg-bgCard border ${"border-card"} rounded-card p-5 ${className}`}>
      {children}
    </div>
  )
}
