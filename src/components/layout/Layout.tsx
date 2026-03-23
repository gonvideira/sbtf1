import type { ReactNode } from "react"
import { VerticalAnchor } from "./VerticalAnchor"

// Define the sections for navigation
const SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "macro-context", label: "Macro Context" },
  { id: "funding-gap", label: "Funding Gap" },
  { id: "protein-efficiency", label: "Efficiency" },
  { id: "european-deficit", label: "European Deficit" },
  { id: "team", label: "Team" },
]

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-ice-white">
      {/* Vertical Anchor Navigation */}
      <VerticalAnchor sections={SECTIONS} />

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
