// src/components/layout/PageContainer.tsx
import React from "react"

export default function PageContainer({ children }: any) {
  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </div>
  )
}
