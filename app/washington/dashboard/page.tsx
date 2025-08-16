import type { Metadata } from "next"
import { StrategicMessagingDashboard } from "@/components/washington/strategic-messaging-dashboard"

export const metadata: Metadata = {
  title: "Strategic Messaging Dashboard - Washington Counties",
  description: "Real-time segmentation and message optimization for Washington State counties",
}

export default function WashingtonDashboardPage() {
  return <StrategicMessagingDashboard />
}
