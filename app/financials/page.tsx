import { FinancialHeader } from "@/components/financials/financial-header"
import { FinancialDashboard } from "@/components/financials/financial-dashboard"

export default function FinancialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <FinancialHeader />
      <main className="container mx-auto px-4 py-8">
        <FinancialDashboard />
      </main>
    </div>
  )
}
