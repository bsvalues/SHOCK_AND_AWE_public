import { Suspense } from "react"
import { MigrationControlTower } from "@/components/migration/migration-control-tower"
import { LoadingSpinner } from "@/components/ui/loading"

export default function MigrationTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Suspense fallback={<LoadingSpinner message="Initializing Control Tower..." />}>
        <MigrationControlTower />
      </Suspense>
    </div>
  )
}
