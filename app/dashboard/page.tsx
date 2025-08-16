import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SystemOverview } from "@/components/dashboard/system-overview"
import { ModuleGrid } from "@/components/dashboard/module-grid"
import { AnalyticsSummary } from "@/components/dashboard/analytics-summary"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { ModuleRegistryProvider } from "@/components/modules/module-registry"

export default function DashboardPage() {
  return (
    <ModuleRegistryProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-tf-clarity/5 to-background">
        <DashboardHeader />

        <main className="container mx-auto px-4 py-6 space-y-6">
          <SystemOverview />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ModuleGrid />
              <AnalyticsSummary />
            </div>

            <div className="space-y-6">
              <QuickActions />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </ModuleRegistryProvider>
  )
}
