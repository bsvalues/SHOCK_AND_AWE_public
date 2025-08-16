import { ArizonaConquestDashboard } from "@/components/states/arizona-conquest-dashboard"
import { ArizonaCountyGrid } from "@/components/states/arizona-county-grid"
import { ArizonaTimeline } from "@/components/states/arizona-timeline"

export default function ArizonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-blue to-dark">
      <div className="relative">
        {/* Desert Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-orange-500/5 via-primary/5 to-transcend/5 animate-pulse pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 bg-dark-blue/30 border-b-2 border-transcend backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-5xl font-black bg-gradient-to-r from-orange-400 via-primary to-transcend bg-clip-text text-transparent mb-4 tracking-wider">
                ARIZONA CONQUEST
              </h1>
              <p className="text-transcend text-xl font-light mb-2">
                15 Counties • 7.3M Citizens • $187M Market • Fastest Growing State
              </p>
              <p className="text-accent text-lg italic">"Desert Kingdom of Exponential Growth"</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <ArizonaConquestDashboard />
          <ArizonaCountyGrid />
          <ArizonaTimeline />
        </div>
      </div>
    </div>
  )
}
