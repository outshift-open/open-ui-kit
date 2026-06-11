export const chartStatusData = [
  { name: "Critical", value: 24, color: "#C62953" },
  { name: "Warning", value: 42, color: "#FFAF45" },
  { name: "Healthy", value: 86, color: "#00B98D" },
];

export const chartBreakdownData = [
  { name: "Identity", value: 36, color: "#3A95FF" },
  { name: "Network", value: 28, color: "#6D62E5" },
  { name: "Storage", value: 18, color: "#00B98D" },
  { name: "Compute", value: 12, color: "#FFAF45" },
];

export const chartGaugeData = [
  { name: "Coverage", value: 72, color: "#00B98D" },
];

export const chartHorizontalData = [
  { name: "Data exposure", value: 18, color: "#3A95FF" },
  { name: "Public access", value: 12, color: "#3A95FF" },
  { name: "Weak encryption", value: 8, color: "#3A95FF" },
  { name: "Unused identity", value: 4, color: "#3A95FF" },
];

export const chartLineData = [
  { date: "2026-01-01", Critical: 11, High: 19, Resolved: 8 },
  { date: "2026-01-02", Critical: 9, High: 22, Resolved: 11 },
  { date: "2026-01-03", Critical: 14, High: 18, Resolved: 13 },
  { date: "2026-01-04", Critical: 8, High: 16, Resolved: 18 },
  { date: "2026-01-05", Critical: 6, High: 13, Resolved: 24 },
];

export const chartLineCategories = [
  { name: "Critical", color: "#C62953" },
  { name: "High", color: "#F2643D" },
  { name: "Resolved", color: "#00B98D" },
];

export const barGraphBars = [
  { key: "Critical", color: "#C62953" },
  { key: "High", color: "#F2643D" },
  { key: "Medium", color: "#FFAF45" },
  { key: "Low", color: "#00B98D" },
];

export const barGraphRows = [
  {
    value: "Identity",
    barData: { Critical: 4, High: 8, Medium: 14, Low: 18 },
  },
  {
    value: "Storage",
    barData: { Critical: 6, High: 10, Medium: 8, Low: 12 },
  },
  {
    value: "Network",
    barData: { Critical: 2, High: 7, Medium: 11, Low: 16 },
  },
];

export const spiderChartData = [
  { subject: "Identity", current: 76 },
  { subject: "Network", current: 64 },
  { subject: "Storage", current: 82 },
  { subject: "Compute", current: 58 },
  { subject: "Data", current: 71 },
];

export const spiderChartRadars = [
  { name: "Current posture", dataKey: "current" },
];

export const tableColumns = [
  { accessorKey: "asset", header: "Asset" },
  { accessorKey: "owner", header: "Owner" },
  { accessorKey: "severity", header: "Severity" },
  { accessorKey: "status", header: "Status" },
];

export const tableRows = [
  {
    asset: "Production API",
    owner: "Platform",
    severity: "High",
    status: "Investigating",
  },
  {
    asset: "Billing database",
    owner: "Finance systems",
    severity: "Critical",
    status: "Open",
  },
  {
    asset: "Worker queue",
    owner: "Infrastructure",
    severity: "Medium",
    status: "Resolved",
  },
];

export const tagItems = [
  {
    isSelectable: true,
    nodeKey: "aws",
    value: "AWS",
  },
  {
    isSelectable: true,
    nodeKey: "azure",
    value: "Azure",
  },
  {
    isSelectable: true,
    nodeKey: "gcp",
    value: "Google Cloud",
  },
];

export const filterGroups = [
  {
    name: "Severity",
    filterKey: "severity",
    options: [
      { value: "Critical", isSelected: true },
      { value: "High", isSelected: true },
      { value: "Medium", isSelected: false },
      { value: "Low", isSelected: false },
    ],
  },
  {
    name: "Status",
    filterKey: "status",
    options: [
      { value: "Open", isSelected: true },
      { value: "Investigating", isSelected: false },
      { value: "Resolved", isSelected: false },
    ],
  },
];

export const keyValueItems = [
  { key: "Owner", value: "Platform" },
  { key: "Environment", value: "Production" },
  { key: "Region", value: "us-east-1" },
  { key: "Last scan", value: "5 minutes ago" },
];

export const listItems = [
  { label: "Inbox", secondary: "3 unread" },
  { label: "Drafts", secondary: "Last edited today" },
  { label: "Archived", secondary: "Read-only" },
];

export const nestedMenuTree = [
  {
    value: "Cloud accounts",
    isSelectable: true,
    isExpanded: true,
    childNodes: [
      { value: "Production", isSelectable: true },
      { value: "Staging", isSelectable: true },
      { value: "Sandbox", isSelectable: true },
    ],
  },
  {
    value: "Teams",
    isSelectable: true,
    childNodes: [
      { value: "Platform", isSelectable: true },
      { value: "Security", isSelectable: true },
    ],
  },
];

export const stepperPanelSteps = [
  { label: "Choose scope", state: "completed" },
  {
    label: "Configure",
    subtitle: "Select options for this workflow",
    state: "current",
  },
  { label: "Review", state: "idle" },
  { label: "Launch", state: "disabled" },
];

export const stepperModalSteps = [
  { label: "Details", state: "completed" },
  { label: "Settings", state: "current" },
  { label: "Summary", state: "idle" },
];
