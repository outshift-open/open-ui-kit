export function getFiltersData() {
  return [
    {
      name: "Provider",
      filterKey: "provider",
      options: [
        { value: "AWS", isSelected: true },
        { value: "Azure", isSelected: false },
        { value: "GCP", isSelected: false },
      ],
    },
    {
      name: "Region",
      filterKey: "region",
      options: [
        { value: "US East 1", isSelected: false },
        { value: "US East 2", isSelected: false },
        { value: "EU West 1", isSelected: false },
        { value: "EU West 2", isSelected: false },
      ],
    },
    {
      name: "Service",
      filterKey: "service",
      options: [
        { value: "API Gateway", isSelected: false },
        { value: "App Service", isSelected: false },
        { value: "Cloud Storage", isSelected: false },
        { value: "Identity", isSelected: false },
      ],
    },
  ];
}

export function getSelectAllFiltersData() {
  return [
    {
      name: "Engines",
      isSelectAllEnabled: true,
      options: [
        { value: "Security Graph", isSelected: false },
        { value: "Cloud Configuration", isSelected: false },
        { value: "Network", isSelected: false },
        { value: "Workload Security", isSelected: false },
        { value: "CI/CD", isSelected: false },
      ],
    },
    {
      name: "Severity",
      options: [
        { value: "Critical", isSelected: true },
        { value: "High", isSelected: false },
        { value: "Medium", isSelected: false },
        { value: "Low", isSelected: false },
      ],
    },
  ];
}

export function getNestedFiltersData() {
  return [
    {
      name: "Engines",
      options: [
        { value: "Security Graph", isSelected: false },
        { value: "Cloud Configuration", isSelected: false },
        { value: "Network", isSelected: false },
      ],
    },
    {
      name: "Frameworks and categories",
      options: [],
      filters: [
        {
          name: "CIS",
          options: [],
          isSelectAllEnabled: true,
          filters: [
            {
              name: "Identity",
              options: [
                { value: "MFA enabled", isSelected: false },
                { value: "Least privilege", isSelected: false },
              ],
            },
            {
              name: "Storage",
              options: [
                { value: "Encryption", isSelected: false },
                { value: "Public access", isSelected: false },
              ],
            },
          ],
        },
        {
          name: "Custom checks",
          options: [
            { value: "Production only", isSelected: true },
            { value: "High confidence", isSelected: false },
          ],
        },
      ],
    },
  ];
}

export function getSingleSelectFiltersData() {
  return [
    {
      name: "Risk state",
      filterKey: "risk_state",
      multiSelect: false,
      options: [
        { value: "Open", isSelected: true },
        { value: "Accepted", isSelected: false },
        { value: "Resolved", isSelected: false },
        { value: "Muted", isSelected: false },
      ],
    },
  ];
}
