// src/components/ui/Icon.tsx
import React from "react"
type Props = { name: string; className?: string; alt?: string }
export default function Icon({ name, className = "", alt = "" }: Props) {
  // Expect icons in /public/icons/<name>.svg
  return <img src={`/icons/${name}.svg`} alt={alt || name} className={className} />
}
