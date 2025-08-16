import { FloridaConquestDashboard } from "@/components/states/florida-conquest-dashboard"
import { FloridaCountyGrid } from "@/components/states/florida-county-grid"
import { FloridaTimeline } from "@/components/states/florida-timeline"

export default function FloridaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-blue to-dark">
      <div className="relative">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transcend/5 animate-pulse pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 bg-dark-blue/30 border-b-2 border-transcend backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-5xl font-black bg-gradient-to-r from-primary via-transcend to-accent bg-clip-text text-transparent mb-4 tracking-wider">
                FLORIDA CONQUEST
              </h1>
              <p className="text-transcend text-xl font-light mb-2">
                15+ Counties • 5.8M Parcels • $2.1T Property Value
              </p>
              <p className="text-accent text-lg italic">"From the Panhandle to the Keys, Government Transcended"</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <FloridaConquestDashboard />
          <FloridaCountyGrid />
          <FloridaTimeline />
        </div>
      </div>
    </div>
  )
}
