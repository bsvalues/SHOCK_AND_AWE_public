import { MichiganTechnicalHeader } from "@/components/states/michigan-technical-header"
import { MichiganTechnicalDashboard } from "@/components/states/michigan-technical-dashboard"

export default function MichiganTechnicalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <MichiganTechnicalHeader />
      <main className="container mx-auto px-4 py-8">
        <MichiganTechnicalDashboard />
      </main>
    </div>
  )
}
