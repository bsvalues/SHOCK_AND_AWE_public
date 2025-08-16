import { StrategicHeader } from "@/components/strategy/strategic-header"
import { StrategicDashboard } from "@/components/strategy/strategic-dashboard"

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <StrategicHeader />
      <main className="container mx-auto px-4 py-8">
        <StrategicDashboard />
      </main>
    </div>
  )
}
