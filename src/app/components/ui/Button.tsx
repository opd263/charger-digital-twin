// src/components/ui/Button.tsx
import React from "react"

export default function Button({ children, onClick, className = "" }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-semibold text-sm shadow-sm ${className}`}
    >
      {children}
    </button>
  )
}
