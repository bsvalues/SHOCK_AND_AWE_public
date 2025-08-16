import { MichiganConquestDashboard } from "@/components/states/michigan-conquest-dashboard"
import { MichiganCountyGrid } from "@/components/states/michigan-county-grid"
import { MichiganTimeline } from "@/components/states/michigan-timeline"

export default function MichiganPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-blue to-dark">
      <div className="relative">
        {/* Great Lakes Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-primary/5 to-transcend/5 animate-pulse pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 bg-dark-blue/30 border-b-2 border-transcend backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center">
              <h1 className="text-5xl font-black bg-gradient-to-r from-blue-400 via-primary to-transcend bg-clip-text text-transparent mb-4 tracking-wider">
                MICHIGAN CONQUEST
              </h1>
              <p className="text-transcend text-xl font-light mb-2">
                83 Counties • 10M Citizens • $342M Opportunity • Great Lakes Power
              </p>
              <p className="text-accent text-lg italic">"From Motor City to Tech City: Michigan Transcended"</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <MichiganConquestDashboard />
          <MichiganCountyGrid />
          <MichiganTimeline />
        </div>
      </div>
    </div>
  )
}
