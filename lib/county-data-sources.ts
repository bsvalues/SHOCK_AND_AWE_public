// County Open Data Sources and API Endpoints
export const countyDataSources = {
  
  // Washington State Counties
  washington: {
    king: {
      name: "King County, Washington",
      openDataPortal: "https://data.kingcounty.gov",
      apis: {
        parcels: "https://gis-kingcounty.opendata.arcgis.com/datasets/parcels",
        assessments: "https://info.kingcounty.gov/assessor/esales/Residential.aspx",
        gis: "https://gis.kingcounty.gov/arcgis/rest/services",
        permits: "https://data.kingcounty.gov/dataset/Building-Permits"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV", "Shapefile"],
      updateFrequency: "Daily",
      coverage: "Complete parcel coverage"
    },
    pierce: {
      name: "Pierce County, Washington", 
      openDataPortal: "https://www.co.pierce.wa.us/5887/Open-Data",
      apis: {
        parcels: "https://gisdata.piercecowa.org/arcgis/rest/services",
        assessments: "https://www.co.pierce.wa.us/1619/Property-Search",
        permits: "https://www.piercecountywa.gov/7035/Building-Permits"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Weekly",
      coverage: "Complete parcel coverage"
    },
    snohomish: {
      name: "Snohomish County, Washington",
      openDataPortal: "https://gis.snoco.org",
      apis: {
        parcels: "https://gis.snoco.org/maps/rest/services", 
        assessments: "https://epip.snoco.org/",
        permits: "https://www.snohomishcountywa.gov/1590/Building-Permits"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Monthly", 
      coverage: "Complete parcel coverage"
    }
  },

  // Florida Counties
  florida: {
    "miami-dade": {
      name: "Miami-Dade County, Florida",
      openDataPortal: "https://opendata.miamidade.gov",
      apis: {
        parcels: "https://gis-mdc.opendata.arcgis.com/datasets/parcels",
        assessments: "https://www.miamidade.gov/pa/property_search.asp",
        permits: "https://opendata.miamidade.gov/Regulatory/Building-Permits",
        hurricaneZones: "https://gis-mdc.opendata.arcgis.com/datasets/hurricane-evacuation-zones"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV", "KML"],
      updateFrequency: "Real-time",
      coverage: "Complete parcel coverage + hurricane data"
    },
    broward: {
      name: "Broward County, Florida",
      openDataPortal: "https://gis.broward.org/opendata",
      apis: {
        parcels: "https://gis.broward.org/arcgis/rest/services",
        assessments: "https://bcpa.net/PropertySearch",
        permits: "https://permits.broward.org/aca/",
        floodZones: "https://gis.broward.org/arcgis/rest/services/Environmental/Flood_Zones"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Daily",
      coverage: "Complete parcel coverage + flood data"
    },
    orange: {
      name: "Orange County, Florida", 
      openDataPortal: "https://data.ocfl.net",
      apis: {
        parcels: "https://maps.ocfl.net/ArcGIS/rest/services",
        assessments: "https://www.ocpafl.org/searches/ParcelSearch.aspx",
        permits: "https://data.ocfl.net/dataset/building-permits",
        tourism: "https://data.ocfl.net/dataset/tourist-development-tax"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Weekly",
      coverage: "Complete parcel coverage + tourism data"
    }
  },

  // Texas Counties  
  texas: {
    harris: {
      name: "Harris County, Texas",
      openDataPortal: "https://www.hcad.org/open-government/",
      apis: {
        parcels: "https://pdata.hcad.org/download/",
        assessments: "https://public.hcad.org/records/",
        permits: "https://www.harriscountytx.gov/Departments/Engineering/Permits-Fees",
        floodPlains: "https://www.harriscountyfws.org/"
      },
      dataFormats: ["CSV", "TXT", "JSON"],
      updateFrequency: "Monthly",
      coverage: "Complete HCAD coverage"
    },
    dallas: {
      name: "Dallas County, Texas",
      openDataPortal: "https://www.dallascounty.org/government/data/",
      apis: {
        parcels: "https://www.dallascad.org/PropertySearch/", 
        assessments: "https://www.dallascad.org/",
        permits: "https://buildinginspection.dallascityhall.com/"
      },
      dataFormats: ["CSV", "PDF", "JSON"],
      updateFrequency: "Quarterly",
      coverage: "DCAD coverage"
    },
    travis: {
      name: "Travis County, Texas",
      openDataPortal: "https://data.austintexas.gov",
      apis: {
        parcels: "https://data.austintexas.gov/dataset/Property-Parcels",
        assessments: "https://www.traviscad.org/property-search/",
        permits: "https://data.austintexas.gov/Building-and-Development/"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Real-time",
      coverage: "Complete Travis CAD coverage"
    }
  },

  // California Counties
  california: {
    "los-angeles": {
      name: "Los Angeles County, California",
      openDataPortal: "https://data.lacounty.gov",
      apis: {
        parcels: "https://egis3.lacounty.gov/dataportal/",
        assessments: "https://portal.assessor.lacounty.gov/",
        permits: "https://data.lacounty.gov/dataset/Building-Permits"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV", "Shapefile"],
      updateFrequency: "Daily",
      coverage: "Complete assessor coverage"
    },
    orange: {
      name: "Orange County, California",
      openDataPortal: "https://data.ocgov.com",
      apis: {
        parcels: "https://egis.ocgov.com/", 
        assessments: "https://ac.ocgov.com/",
        permits: "https://data.ocgov.com/dataset/building-permits"
      },
      dataFormats: ["JSON", "CSV", "Shapefile"],
      updateFrequency: "Weekly", 
      coverage: "Complete OC assessor coverage"
    },
    "san-diego": {
      name: "San Diego County, California",
      openDataPortal: "https://data.sandiegocounty.gov",
      apis: {
        parcels: "https://sdgis-sandag.opendata.arcgis.com/",
        assessments: "https://arcc.co.san-diego.ca.us/",
        permits: "https://data.sandiegocounty.gov/dataset/building-permits"
      },
      dataFormats: ["JSON", "GeoJSON", "CSV"],
      updateFrequency: "Daily",
      coverage: "Complete SD assessor coverage"
    }
  }
}

// Data ingestion pipeline configuration
export const dataIngestionConfig = {
  refreshSchedule: {
    realTime: ["miami-dade", "travis"], // Counties with real-time APIs
    daily: ["king", "broward", "los-angeles", "san-diego"],
    weekly: ["pierce", "orange-fl", "orange-ca"],
    monthly: ["snohomish", "harris"]
  },
  
  dataValidation: {
    required: ["parcel_id", "address", "assessed_value", "square_footage"],
    optional: ["bedrooms", "bathrooms", "year_built", "zoning", "flood_zone"],
    formats: {
      parcel_id: "string",
      address: "string", 
      assessed_value: "number",
      square_footage: "number",
      coordinates: "geojson"
    }
  },

  processingSteps: [
    "fetch_from_api",
    "validate_data_format", 
    "normalize_schema",
    "geocode_addresses",
    "calculate_terrafusion_metrics",
    "generate_demo_properties",
    "update_county_database"
  ]
}

// API integration helpers
export const apiHelpers = {
  buildApiUrl: (county: string, dataType: string) => {
    // Implementation would build proper API URLs based on county data sources
    return `https://api.terrafusion.com/county-data/${county}/${dataType}`
  },

  fetchCountyData: async (county: string) => {
    // Implementation would fetch live data from county APIs
    console.log(`Fetching data for ${county}`)
    // Return mock data for now, real implementation would call actual APIs
  },

  validateDataIntegrity: (data: any[]) => {
    // Implementation would validate incoming county data
    return { valid: true, errors: [] }
  }
}

export default countyDataSources