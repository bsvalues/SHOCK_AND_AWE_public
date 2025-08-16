import { MigrationPlanningHeader } from "@/components/migration/migration-planning-header"
import { MigrationPlanningDashboard } from "@/components/migration/migration-planning-dashboard"

export default function MigrationPlanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <MigrationPlanningHeader />
      <main className="container mx-auto px-4 py-8">
        <MigrationPlanningDashboard />
      </main>
    </div>
  )
}
