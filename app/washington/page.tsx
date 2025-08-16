import type { Metadata } from "next"
import { WashingtonLanding } from "@/components/washington/washington-landing"
import { CountyGrid } from "@/components/washington/county-grid"
import { StrategicStats } from "@/components/washington/strategic-stats"

export const metadata: Metadata = {
  title: "Washington State Counties - TerraFusion OS",
  description: "12 Washington Counties | 2.3M Parcels | $847B Property Value | 72-Hour Migration",
}

export default function WashingtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark/95 to-primary/10">
      <WashingtonLanding />
      <StrategicStats />
      <CountyGrid />
    </div>
  )
}
