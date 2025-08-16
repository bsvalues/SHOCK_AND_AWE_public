import { ModuleRegistryProvider } from "@/components/modules/module-registry"
import { ModuleLauncher } from "@/components/modules/module-launcher"

export default function ModulesPage() {
  return (
    <ModuleRegistryProvider>
      <div className="container mx-auto px-4 py-8">
        <ModuleLauncher />
      </div>
    </ModuleRegistryProvider>
  )
}
