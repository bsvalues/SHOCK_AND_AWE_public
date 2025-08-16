import { HeroSection } from "@/components/landing/hero-section"
import { AudienceSelector } from "@/components/landing/audience-selector"
import { FeatureShowcase } from "@/components/landing/feature-showcase"
import { TranscendenceStats } from "@/components/landing/transcendence-stats"
import { CallToAction } from "@/components/landing/call-to-action"
import { WashingtonShowcase } from "@/components/landing/washington-showcase"
import { NationalExpansionPreview } from "@/components/landing/national-expansion-preview"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AudienceSelector />
      <TranscendenceStats />
      <FeatureShowcase />
      <WashingtonShowcase />
      <NationalExpansionPreview />
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Real-Time Migration Monitoring</h2>
          <p className="text-slate-300 mb-8">Track county migrations across America with our advanced control tower</p>
          <a
            href="/migration/tracker"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View Migration Control Tower
          </a>
        </div>
      </div>
      <CallToAction />
    </div>
  )
}
