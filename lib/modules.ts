export interface TerraFusionModule {
  id: string
  name: string
  description: string
  icon: string
  category: ModuleCategory
  status: ModuleStatus
  version: string
  permissions: string[]
  dependencies: string[]
  config: ModuleConfig
  routes: ModuleRoute[]
}

export interface ModuleConfig {
  enabled: boolean
  settings: Record<string, any>
  theme?: {
    primaryColor?: string
    accentColor?: string
  }
}

export interface ModuleRoute {
  path: string
  component: string
  title: string
  description?: string
  permissions?: string[]
}

export type ModuleCategory =
  | "assessment"
  | "permits"
  | "planning"
  | "finance"
  | "citizen-services"
  | "administration"
  | "analytics"
  | "security"

export type ModuleStatus = "active" | "inactive" | "updating" | "error" | "maintenance"

export const TERRAFUSION_MODULES: TerraFusionModule[] = [
  {
    id: "costforge-ai",
    name: "CostForge AI",
    description: "AI-powered property valuations with 94% accuracy and lightning-fast processing",
    icon: "Calculator",
    category: "assessment",
    status: "active",
    version: "2.1.0",
    permissions: ["assessment.read", "assessment.write", "ai.access"],
    dependencies: [],
    config: {
      enabled: true,
      settings: {
        aiModel: "costforge-v2",
        accuracyThreshold: 0.94,
        batchSize: 1000,
        autoProcess: true,
      },
      theme: {
        primaryColor: "#00ffaa",
        accentColor: "#00cc88",
      },
    },
    routes: [
      { path: "/costforge", component: "CostForgeMain", title: "Property Valuations" },
      { path: "/costforge/batch", component: "BatchProcessor", title: "Batch Processing" },
      { path: "/costforge/analytics", component: "ValuationAnalytics", title: "Accuracy Analytics" },
    ],
  },
  {
    id: "permitflow",
    name: "PermitFlow",
    description: "Streamlined permit processing and approval workflows",
    icon: "FileText",
    category: "permits",
    status: "active",
    version: "1.8.2",
    permissions: ["permits.read", "permits.write", "workflow.manage"],
    dependencies: ["citizen-connect"],
    config: {
      enabled: true,
      settings: {
        autoApproval: false,
        notificationEnabled: true,
        slaTracking: true,
        digitalSignatures: true,
      },
    },
    routes: [
      { path: "/permits", component: "PermitDashboard", title: "Permit Dashboard" },
      { path: "/permits/applications", component: "ApplicationManager", title: "Applications" },
      { path: "/permits/workflow", component: "WorkflowDesigner", title: "Workflow Designer" },
    ],
  },
  {
    id: "geointel",
    name: "GeoIntel",
    description: "Intelligent mapping and geographic information systems",
    icon: "MapPin",
    category: "planning",
    status: "active",
    version: "3.0.1",
    permissions: ["gis.read", "gis.write", "mapping.access"],
    dependencies: ["asset-track"],
    config: {
      enabled: true,
      settings: {
        mapProvider: "esri",
        layerCaching: true,
        realTimeUpdates: true,
        satelliteImagery: true,
      },
    },
    routes: [
      { path: "/geointel", component: "GISViewer", title: "GIS Viewer" },
      { path: "/geointel/layers", component: "LayerManager", title: "Layer Management" },
      { path: "/geointel/analysis", component: "SpatialAnalysis", title: "Spatial Analysis" },
    ],
  },
  {
    id: "citizen-connect",
    name: "CitizenConnect",
    description: "Unified citizen portal for all county services",
    icon: "Users",
    category: "citizen-services",
    status: "active",
    version: "2.5.0",
    permissions: ["citizen.portal", "public.access"],
    dependencies: [],
    config: {
      enabled: true,
      settings: {
        selfService: true,
        chatSupport: true,
        mobileApp: true,
        notifications: true,
      },
    },
    routes: [
      { path: "/citizen", component: "CitizenPortal", title: "Citizen Portal" },
      { path: "/citizen/services", component: "ServiceCatalog", title: "Service Catalog" },
      { path: "/citizen/requests", component: "RequestTracker", title: "Request Tracking" },
    ],
  },
  {
    id: "secure-core",
    name: "SecureCore",
    description: "Enterprise security with SOC 2 Type II compliance",
    icon: "Shield",
    category: "security",
    status: "active",
    version: "4.2.1",
    permissions: ["security.admin", "audit.access", "compliance.manage"],
    dependencies: [],
    config: {
      enabled: true,
      settings: {
        mfaRequired: true,
        auditLogging: true,
        encryptionLevel: "AES-256",
        complianceMode: "SOC2-TypeII",
      },
    },
    routes: [
      { path: "/security", component: "SecurityDashboard", title: "Security Center" },
      { path: "/security/audit", component: "AuditLogs", title: "Audit Logs" },
      { path: "/security/compliance", component: "ComplianceReports", title: "Compliance" },
    ],
  },
  {
    id: "flash-process",
    name: "FlashProcess",
    description: "Lightning-fast document processing and automation",
    icon: "Zap",
    category: "administration",
    status: "active",
    version: "1.9.0",
    permissions: ["documents.process", "automation.manage"],
    dependencies: ["secure-core"],
    config: {
      enabled: true,
      settings: {
        ocrEnabled: true,
        autoClassification: true,
        batchProcessing: true,
        aiExtraction: true,
      },
    },
    routes: [
      { path: "/flash-process", component: "DocumentProcessor", title: "Document Processing" },
      { path: "/flash-process/queue", component: "ProcessingQueue", title: "Processing Queue" },
      { path: "/flash-process/templates", component: "TemplateManager", title: "Templates" },
    ],
  },
  {
    id: "intelli-board",
    name: "IntelliBoard",
    description: "AI-driven analytics and decision support dashboard",
    icon: "Brain",
    category: "analytics",
    status: "active",
    version: "2.3.0",
    permissions: ["analytics.read", "dashboard.manage", "ai.insights"],
    dependencies: ["costforge-ai", "revenue-max"],
    config: {
      enabled: true,
      settings: {
        realTimeAnalytics: true,
        predictiveModels: true,
        customDashboards: true,
        alertSystem: true,
      },
    },
    routes: [
      { path: "/intelliboard", component: "AnalyticsDashboard", title: "Analytics Dashboard" },
      { path: "/intelliboard/insights", component: "AIInsights", title: "AI Insights" },
      { path: "/intelliboard/reports", component: "ReportBuilder", title: "Report Builder" },
    ],
  },
  {
    id: "asset-track",
    name: "AssetTrack",
    description: "Comprehensive asset and property management",
    icon: "Building",
    category: "administration",
    status: "active",
    version: "1.7.3",
    permissions: ["assets.read", "assets.write", "property.manage"],
    dependencies: ["geointel"],
    config: {
      enabled: true,
      settings: {
        maintenanceScheduling: true,
        depreciationTracking: true,
        locationTracking: true,
        photoDocumentation: true,
      },
    },
    routes: [
      { path: "/assets", component: "AssetDashboard", title: "Asset Management" },
      { path: "/assets/inventory", component: "AssetInventory", title: "Asset Inventory" },
      { path: "/assets/maintenance", component: "MaintenanceScheduler", title: "Maintenance" },
    ],
  },
  {
    id: "revenue-max",
    name: "RevenueMax",
    description: "Revenue optimization and financial planning tools",
    icon: "DollarSign",
    category: "finance",
    status: "active",
    version: "2.0.4",
    permissions: ["finance.read", "finance.write", "revenue.optimize"],
    dependencies: ["costforge-ai"],
    config: {
      enabled: true,
      settings: {
        budgetForecasting: true,
        revenueProjections: true,
        taxOptimization: true,
        financialReporting: true,
      },
    },
    routes: [
      { path: "/revenue", component: "RevenueDashboard", title: "Revenue Management" },
      { path: "/revenue/forecasting", component: "BudgetForecaster", title: "Budget Forecasting" },
      { path: "/revenue/optimization", component: "RevenueOptimizer", title: "Revenue Optimization" },
    ],
  },
  {
    id: "time-sync",
    name: "TimeSync",
    description: "Synchronized scheduling and resource allocation",
    icon: "Clock",
    category: "administration",
    status: "active",
    version: "1.5.1",
    permissions: ["scheduling.read", "scheduling.write", "resources.manage"],
    dependencies: [],
    config: {
      enabled: true,
      settings: {
        calendarIntegration: true,
        resourceBooking: true,
        conflictResolution: true,
        mobileSync: true,
      },
    },
    routes: [
      { path: "/timesync", component: "SchedulingDashboard", title: "Scheduling" },
      { path: "/timesync/calendar", component: "CalendarManager", title: "Calendar Management" },
      { path: "/timesync/resources", component: "ResourceAllocator", title: "Resource Allocation" },
    ],
  },
  {
    id: "compliance-check",
    name: "ComplianceCheck",
    description: "Automated compliance monitoring and reporting",
    icon: "CheckCircle",
    category: "administration",
    status: "active",
    version: "1.4.2",
    permissions: ["compliance.read", "compliance.audit", "reporting.generate"],
    dependencies: ["secure-core"],
    config: {
      enabled: true,
      settings: {
        autoMonitoring: true,
        alertThresholds: true,
        reportGeneration: true,
        regulatoryUpdates: true,
      },
    },
    routes: [
      { path: "/compliance", component: "ComplianceDashboard", title: "Compliance Center" },
      { path: "/compliance/monitoring", component: "ComplianceMonitor", title: "Monitoring" },
      { path: "/compliance/reports", component: "ComplianceReports", title: "Reports" },
    ],
  },
  {
    id: "trend-scope",
    name: "TrendScope",
    description: "Predictive analytics for county planning",
    icon: "TrendingUp",
    category: "analytics",
    status: "active",
    version: "1.8.0",
    permissions: ["analytics.read", "predictions.access", "planning.insights"],
    dependencies: ["intelli-board"],
    config: {
      enabled: true,
      settings: {
        demographicAnalysis: true,
        economicForecasting: true,
        growthProjections: true,
        scenarioModeling: true,
      },
    },
    routes: [
      { path: "/trendscope", component: "TrendAnalytics", title: "Trend Analytics" },
      { path: "/trendscope/forecasting", component: "PredictiveModels", title: "Forecasting" },
      { path: "/trendscope/scenarios", component: "ScenarioPlanner", title: "Scenario Planning" },
    ],
  },
  {
    id: "data-vault",
    name: "DataVault",
    description: "Secure, centralized data management platform",
    icon: "Database",
    category: "administration",
    status: "active",
    version: "3.1.0",
    permissions: ["data.admin", "backup.manage", "storage.access"],
    dependencies: ["secure-core"],
    config: {
      enabled: true,
      settings: {
        autoBackup: true,
        encryption: "AES-256",
        compression: true,
        versionControl: true,
      },
    },
    routes: [
      { path: "/datavault", component: "DataManager", title: "Data Management" },
      { path: "/datavault/backup", component: "BackupManager", title: "Backup & Recovery" },
      { path: "/datavault/storage", component: "StorageAnalytics", title: "Storage Analytics" },
    ],
  },
  {
    id: "public-link",
    name: "PublicLink",
    description: "Public-facing services and transparency portal",
    icon: "Globe",
    category: "citizen-services",
    status: "active",
    version: "2.2.1",
    permissions: ["public.access", "transparency.manage"],
    dependencies: ["citizen-connect"],
    config: {
      enabled: true,
      settings: {
        publicRecords: true,
        meetingStreaming: true,
        budgetTransparency: true,
        publicNotifications: true,
      },
    },
    routes: [
      { path: "/public", component: "PublicPortal", title: "Public Portal" },
      { path: "/public/records", component: "PublicRecords", title: "Public Records" },
      { path: "/public/meetings", component: "MeetingCenter", title: "Meeting Center" },
    ],
  },
]

export function getModuleById(id: string): TerraFusionModule | undefined {
  return TERRAFUSION_MODULES.find((module) => module.id === id)
}

export function getModulesByCategory(category: ModuleCategory): TerraFusionModule[] {
  return TERRAFUSION_MODULES.filter((module) => module.category === category)
}

export function getActiveModules(): TerraFusionModule[] {
  return TERRAFUSION_MODULES.filter((module) => module.config.enabled && module.status === "active")
}

export function getModuleDependencies(moduleId: string): TerraFusionModule[] {
  const module = getModuleById(moduleId)
  if (!module) return []

  return module.dependencies.map((depId) => getModuleById(depId)).filter(Boolean) as TerraFusionModule[]
}

export function validateModuleDependencies(moduleId: string): boolean {
  const dependencies = getModuleDependencies(moduleId)
  return dependencies.every((dep) => dep.status === "active" && dep.config.enabled)
}
