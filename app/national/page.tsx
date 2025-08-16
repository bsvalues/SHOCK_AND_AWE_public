import { NationalExpansionLanding } from "@/components/national/national-expansion-landing"
import { ExpansionRoadmap } from "@/components/national/expansion-roadmap"
import { StateConquestGrid } from "@/components/national/state-conquest-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NationalExpansionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-blue to-dark">
      <NationalExpansionLanding />
      <ExpansionRoadmap />
      <StateConquestGrid />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-transcend mb-4">STATE CONQUEST CENTERS</h2>
          <p className="text-primary">Deep dive into state-specific strategies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/states/florida">
            <Button className="w-full h-24 bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-2xl mb-1">🌴</div>
                <div className="font-bold">FLORIDA CONQUEST</div>
                <div className="text-xs opacity-75">15+ Counties • $2.1T Value</div>
              </div>
            </Button>
          </Link>

          <Link href="/states/arizona">
            <Button className="w-full h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-2xl mb-1">🌵</div>
                <div className="font-bold">ARIZONA CONQUEST</div>
                <div className="text-xs opacity-75">15 Counties • Fastest Growing</div>
              </div>
            </Button>
          </Link>

          <Link href="/states/michigan">
            <Button className="w-full h-24 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-2 border-blue-600/30 hover:border-blue-600 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="text-2xl mb-1">🏭</div>
                <div className="font-bold">MICHIGAN CONQUEST</div>
                <div className="text-xs opacity-75">83 Counties • $342M Market</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
