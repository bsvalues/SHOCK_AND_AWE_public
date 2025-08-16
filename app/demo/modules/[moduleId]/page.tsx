import { DemoModule } from "@/components/demo/demo-module"

interface DemoModulePageProps {
  params: {
    moduleId: string
  }
}

export default function DemoModulePage({ params }: DemoModulePageProps) {
  return <DemoModule moduleId={params.moduleId} />
}
