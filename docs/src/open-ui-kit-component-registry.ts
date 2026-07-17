export type OpenUIKitComponentCategory =
  | "inputs"
  | "data-display"
  | "charts"
  | "feedback"
  | "layout"
  | "templates"
  | "surfaces"
  | "navigation";

export type OpenUIKitComponentDoc = {
  category: OpenUIKitComponentCategory;
  description: string;
  hasMarkdownPage?: boolean;
  importName: string;
  packagePath?: string;
  routeSlug: string;
  sourceUrl?: string;
  storyPath?: string;
  storybookTitle?: string;
  title: string;
};

const storybookBaseUrl = "/storybook";
const packageSourceUrl =
  "https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src";
const packageBarrelUrl =
  "https://github.com/outshift-open/open-ui-kit/blob/main/packages/open-ui-kit/src/components/index.ts";

export const openUIKitCategoryTitles: Record<
  OpenUIKitComponentCategory,
  string
> = {
  inputs: "Inputs",
  "data-display": "Data display",
  charts: "Charts",
  feedback: "Feedback",
  layout: "Layout",
  templates: "Templates",
  surfaces: "Surfaces",
  navigation: "Navigation",
};

export const openUIKitCategoryDescriptions: Record<
  OpenUIKitComponentCategory,
  string
> = {
  inputs: "Actions, choices, filters, and form controls.",
  "data-display": "Reusable patterns for content, metadata, and status.",
  charts: "Data visualization components for product analytics.",
  feedback: "Messages, overlays, and loading states.",
  layout: "Layout primitives re-exported for building product screens.",
  templates: "Composed page patterns for common product layouts.",
  surfaces: "Containers and disclosure patterns for product layouts.",
  navigation: "Wayfinding components for moving through interfaces.",
};

export const openUIKitComponents: OpenUIKitComponentDoc[] = [
  {
    category: "inputs",
    description:
      "Actions users can press to submit forms, trigger commands, or move through a workflow.",
    hasMarkdownPage: true,
    importName: "Button",
    packagePath: "button",
    routeSlug: "button",
    storybookTitle: "Components/Button",
    title: "Button",
  },
  {
    category: "inputs",
    description:
      "Grouped buttons for related actions that need shared emphasis and alignment.",
    hasMarkdownPage: true,
    importName: "ButtonGroup",
    routeSlug: "button-group",
    sourceUrl: packageBarrelUrl,
    title: "Button Group",
  },
  {
    category: "inputs",
    description:
      "Selection control for binary choices, bulk selection, and filter options.",
    hasMarkdownPage: true,
    importName: "Checkbox",
    packagePath: "checkbox",
    routeSlug: "checkbox",
    storybookTitle: "Components/Checkbox",
    title: "Checkbox",
  },
  {
    category: "inputs",
    description:
      "Date and time inputs for scheduling, filtering, and temporal ranges.",
    hasMarkdownPage: true,
    importName: "DateTimePicker",
    packagePath: "date-time",
    routeSlug: "date-time",
    storybookTitle: "Components/DateTime",
    title: "Date Time",
  },
  {
    category: "inputs",
    description:
      "Filter bars and drawers for narrowing dense datasets and product lists.",
    hasMarkdownPage: true,
    importName: "FiltersBar",
    packagePath: "filters",
    routeSlug: "filters",
    storybookTitle: "Components/Filters",
    title: "Filters",
  },
  {
    category: "inputs",
    description:
      "Persistent floating action trigger for high-priority page commands.",
    hasMarkdownPage: true,
    importName: "FloatingButton",
    packagePath: "floating-button",
    routeSlug: "floating-action-button",
    storybookTitle: "Components/FloatingButton",
    title: "Floating Button",
  },
  {
    category: "inputs",
    description:
      "Text entry control with Open UI Kit spacing, helper text, and state treatments.",
    hasMarkdownPage: true,
    importName: "InputField",
    packagePath: "input-field",
    routeSlug: "input-field",
    storybookTitle: "Components/InputField",
    title: "Input Field",
  },
  {
    category: "inputs",
    description:
      "Icon-only action button for compact toolbars, menus, and controls.",
    hasMarkdownPage: true,
    importName: "IconButton",
    routeSlug: "icon-button",
    sourceUrl: packageBarrelUrl,
    title: "Icon Button",
  },
  {
    category: "inputs",
    description: "Picker item primitives for compact choice surfaces.",
    hasMarkdownPage: true,
    importName: "PickerItem",
    packagePath: "picker",
    routeSlug: "picker",
    storybookTitle: "Components/Picker",
    title: "Picker Item",
  },
  {
    category: "inputs",
    description: "Radio controls for choosing one option from a small set.",
    hasMarkdownPage: true,
    importName: "RadioButton",
    packagePath: "radio",
    routeSlug: "radio",
    storybookTitle: "Components/Radio Button",
    title: "Radio Button",
  },
  {
    category: "inputs",
    description:
      "Search field for filtering lists, tables, navigation, and command surfaces.",
    hasMarkdownPage: true,
    importName: "SearchInput",
    packagePath: "search-input",
    routeSlug: "search-input",
    storybookTitle: "Components/Search Input",
    title: "Search Input",
  },
  {
    category: "inputs",
    description: "Select control for choosing from a menu of options.",
    hasMarkdownPage: true,
    importName: "Select",
    packagePath: "select",
    routeSlug: "select",
    storybookTitle: "Components/Select",
    title: "Select",
  },
  {
    category: "inputs",
    description: "Range control for continuous numeric values.",
    hasMarkdownPage: true,
    importName: "Slider",
    packagePath: "slider",
    routeSlug: "slider",
    storybookTitle: "Components/Slider",
    title: "Slider",
  },
  {
    category: "inputs",
    description: "Switch-style control for enabling or disabling a setting.",
    hasMarkdownPage: true,
    importName: "Toggle",
    packagePath: "toggle",
    routeSlug: "toggle",
    storybookTitle: "Components/Toggle",
    title: "Toggle",
  },
  {
    category: "inputs",
    description:
      "File upload surface for choosing, validating, and reviewing selected files.",
    hasMarkdownPage: true,
    importName: "Upload",
    packagePath: "upload",
    routeSlug: "upload",
    storybookTitle: "Components/Upload",
    title: "Upload",
  },
  {
    category: "data-display",
    description:
      "Chronological disclosure pattern for events, checks, and workflow history.",
    hasMarkdownPage: true,
    importName: "ActivityTimeline",
    packagePath: "activity-timeline",
    routeSlug: "activity-timeline",
    storybookTitle: "Components/ActivityTimeline",
    title: "Activity Timeline",
  },
  {
    category: "data-display",
    description:
      "User, entity, or object identity marker with image and fallback states.",
    hasMarkdownPage: true,
    importName: "Avatar",
    packagePath: "avatar",
    routeSlug: "avatar",
    storybookTitle: "Components/Avatar",
    title: "Avatar",
  },
  {
    category: "data-display",
    description: "Compact status, count, or notification marker.",
    hasMarkdownPage: true,
    importName: "Badge",
    packagePath: "badge",
    routeSlug: "badge",
    storybookTitle: "Components/Badge",
    title: "Badge",
  },
  {
    category: "data-display",
    description:
      "Formatted code surface with language styling and copy affordances.",
    hasMarkdownPage: true,
    importName: "CodeBlock",
    packagePath: "code-block",
    routeSlug: "code-block",
    storybookTitle: "Components/CodeBlock",
    title: "Code Block",
  },
  {
    category: "data-display",
    description: "Icon button that copies nearby text and confirms success.",
    hasMarkdownPage: true,
    importName: "CopyButton",
    packagePath: "copy-button",
    routeSlug: "copy-button",
    storybookTitle: "Components/CopyButton",
    title: "Copy Button",
  },
  {
    category: "data-display",
    description: "Visual separator for grouping related content.",
    hasMarkdownPage: true,
    importName: "Divider",
    packagePath: "divider",
    routeSlug: "divider",
    storybookTitle: "Components/Divider",
    title: "Divider",
  },
  {
    category: "data-display",
    description:
      "Empty state layout for missing data, no results, or first-run experiences.",
    hasMarkdownPage: true,
    importName: "EmptyState",
    packagePath: "empty-state",
    routeSlug: "empty-state",
    storybookTitle: "Components/EmptyState",
    title: "Empty State",
  },
  {
    category: "data-display",
    description:
      "Icon wrapper and iconography entry point for product visuals.",
    hasMarkdownPage: true,
    importName: "Icon",
    packagePath: "icon",
    routeSlug: "icon",
    storybookTitle: "Components/Icon",
    title: "Icon",
  },
  {
    category: "data-display",
    description:
      "Small numeric or status indicator for dense product surfaces.",
    hasMarkdownPage: true,
    importName: "IndicatorBadge",
    packagePath: "indicator-badge",
    routeSlug: "indicator-badge",
    storybookTitle: "Components/IndicatorBadge",
    title: "Indicator Badge",
  },
  {
    category: "data-display",
    description:
      "Structured key-value rows for metadata, summaries, and detail panels.",
    hasMarkdownPage: true,
    importName: "KeyValuePairs",
    packagePath: "key-value-pairs",
    routeSlug: "key-value-pairs",
    storybookTitle: "Components/KeyValuePairs",
    title: "Key Value Pairs",
  },
  {
    category: "data-display",
    description:
      "Text primitive for headings, body copy, captions, and semantic text scales.",
    hasMarkdownPage: true,
    importName: "Typography",
    routeSlug: "typography",
    sourceUrl: packageBarrelUrl,
    title: "Typography",
  },
  {
    category: "data-display",
    description:
      "Vertical list pattern for repeated rows with icons, secondary text, selection, dense, disabled, and divider states.",
    hasMarkdownPage: true,
    importName: "List",
    packagePath: "list",
    routeSlug: "list",
    storybookTitle: "Components/List",
    title: "List",
  },
  {
    category: "data-display",
    description:
      "API data-state wrapper that renders loading, error, empty, and ready content from one place.",
    hasMarkdownPage: true,
    importName: "LoadingErrorState",
    packagePath: "loading-error-state",
    routeSlug: "loading-error-state",
    storybookTitle: "Components/Loading Error State",
    title: "Loading Error State",
  },
  {
    category: "data-display",
    description:
      "Spinner and skeleton reference patterns for indeterminate progress and placeholder content.",
    hasMarkdownPage: true,
    importName: "LoadingStates",
    packagePath: "loading-states",
    routeSlug: "loading-states",
    storybookTitle: "Components/LoadingStates",
    title: "Loading States",
  },
  {
    category: "data-display",
    description:
      "Short status message with success, error, warning, and info variants plus optional title, action, and dismiss control.",
    hasMarkdownPage: true,
    importName: "Message",
    packagePath: "message",
    routeSlug: "message",
    storybookTitle: "Components/Message",
    title: "Message",
  },
  {
    category: "data-display",
    description:
      "Tooltip helper for text that may truncate in constrained layouts.",
    hasMarkdownPage: true,
    importName: "OverflowTooltip",
    packagePath: "overflow-tooltip",
    routeSlug: "overflow-tooltip",
    storybookTitle: "Components/Overflow Tooltip",
    title: "Overflow Tooltip",
  },
  {
    category: "data-display",
    description: "Path display for file, route, or hierarchy strings.",
    hasMarkdownPage: true,
    importName: "PathDisplay",
    packagePath: "path-display",
    routeSlug: "path-display",
    storybookTitle: "Components/Path Display",
    title: "Path Display",
  },
  {
    category: "data-display",
    description:
      "Color indicator for severity enum values or numeric score systems with configurable thresholds.",
    hasMarkdownPage: true,
    importName: "SeverityBadge",
    packagePath: "severity-badge",
    routeSlug: "severity-badge",
    storybookTitle: "Components/Severity/Badge",
    title: "Severity Badge",
  },
  {
    category: "data-display",
    description:
      "Severity indicator paired with a readable label, using the same enum and score system API as Severity Badge.",
    hasMarkdownPage: true,
    importName: "SeverityBadgeLabel",
    packagePath: "severity-badge-label",
    routeSlug: "severity-badge-label",
    storybookTitle: "Components/Severity/Badge Label",
    title: "Severity Badge Label",
  },
  {
    category: "data-display",
    description:
      "Compact 4 by 32 pixel vertical color bar that communicates one severity level with minimal space.",
    hasMarkdownPage: true,
    importName: "SeverityBar",
    packagePath: "severity-bar",
    routeSlug: "severity-bar",
    storybookTitle: "Components/Severity/Bar",
    title: "Severity Bar",
  },
  {
    category: "data-display",
    description:
      "Skeleton placeholders that reserve layout while content loads.",
    hasMarkdownPage: true,
    importName: "Skeleton",
    packagePath: "skeleton",
    routeSlug: "skeleton",
    storybookTitle: "Components/Skeleton",
    title: "Skeleton",
  },
  {
    category: "data-display",
    description: "Spinner indicator for indeterminate loading.",
    hasMarkdownPage: true,
    importName: "Spinner",
    packagePath: "spinner",
    routeSlug: "spinner",
    storybookTitle: "Components/Spinner",
    title: "Spinner",
  },
  {
    category: "data-display",
    description: "Tabular data display with product-ready table patterns.",
    hasMarkdownPage: true,
    importName: "Table",
    packagePath: "table",
    routeSlug: "table",
    storybookTitle: "Components/Table",
    title: "Table",
  },
  {
    category: "data-display",
    description:
      "Single compact label for categorizing, filtering, and annotating content with color, status, icon, avatar, and delete states.",
    hasMarkdownPage: true,
    importName: "Tag",
    packagePath: "tags/tag",
    routeSlug: "tag",
    storybookTitle: "Components/Tags/Tag",
    title: "Tag",
  },
  {
    category: "data-display",
    description:
      "Compact collection of tags with first-item summaries, overflow counts, truncation, and delete callbacks.",
    hasMarkdownPage: true,
    importName: "Tags",
    packagePath: "tags/tags",
    routeSlug: "tags",
    storybookTitle: "Components/Tags/Tags",
    title: "Tags",
  },
  {
    category: "charts",
    description:
      "Bar chart for comparing quantities against a common baseline.",
    hasMarkdownPage: true,
    importName: "BarChart",
    routeSlug: "bar-chart",
    sourceUrl: `${packageSourceUrl}/charts/bar-chart`,
    storybookTitle: "Charts/Bar Chart",
    title: "Bar Chart",
  },
  {
    category: "charts",
    description:
      "Stacked bar graph for grouped health, status, or distribution data.",
    hasMarkdownPage: true,
    importName: "BarGraph",
    routeSlug: "bar-graph",
    sourceUrl: `${packageSourceUrl}/charts/bar-graph`,
    storybookTitle: "Charts/Bar Graph",
    title: "Bar Graph",
  },
  {
    category: "charts",
    description:
      "Dashboard widget shell for wrapping chart content with title, actions, and states.",
    hasMarkdownPage: true,
    importName: "ChartWidget",
    routeSlug: "chart-widget",
    sourceUrl: `${packageSourceUrl}/charts/chart-widget`,
    storybookTitle: "Charts/Chart Widget",
    title: "Chart Widget",
  },
  {
    category: "charts",
    description:
      "Donut chart for proportional breakdowns and compact summary visuals.",
    hasMarkdownPage: true,
    importName: "DonutChart",
    routeSlug: "donut-chart",
    sourceUrl: `${packageSourceUrl}/charts/donut-chart`,
    storybookTitle: "Charts/Donut Chart",
    title: "Donut Chart",
  },
  {
    category: "charts",
    description:
      "Gauge chart for progress, score, and threshold-oriented visual summaries.",
    hasMarkdownPage: true,
    importName: "GaugeChart",
    routeSlug: "gauge-chart",
    sourceUrl: `${packageSourceUrl}/charts/gauge-chart`,
    storybookTitle: "Charts/Gauge Chart",
    title: "Gauge Chart",
  },
  {
    category: "charts",
    description:
      "Horizontal bar chart for ranking categories and comparing ordered values.",
    hasMarkdownPage: true,
    importName: "HorizontalBarChart",
    routeSlug: "horizontal-bar-chart",
    sourceUrl: `${packageSourceUrl}/charts/horizontal-bar-chart`,
    storybookTitle: "Charts/Horizontal Bar Chart",
    title: "Horizontal Bar Chart",
  },
  {
    category: "charts",
    description: "Line chart for trends, time series, and changing values.",
    hasMarkdownPage: true,
    importName: "LineChart",
    routeSlug: "line-chart",
    sourceUrl: `${packageSourceUrl}/charts/line-chart`,
    storybookTitle: "Charts/Line Chart",
    title: "Line Chart",
  },
  {
    category: "charts",
    description:
      "Spider chart for comparing multi-axis scores across entities or categories.",
    hasMarkdownPage: true,
    importName: "SpiderChart",
    routeSlug: "spider-chart",
    sourceUrl: `${packageSourceUrl}/charts/spider-chart`,
    storybookTitle: "Charts/Spider Chart",
    title: "Spider Chart",
  },
  {
    category: "feedback",
    description:
      "Modal confirmation flow with optional comment suggestions and dismiss checkbox.",
    hasMarkdownPage: true,
    importName: "ActionsDialog",
    packagePath: "actions-dialog",
    routeSlug: "actions-dialog",
    storybookTitle: "Components/Dialog/ActionsDialog",
    title: "Actions Dialog",
  },
  {
    category: "feedback",
    description: "Backdrop overlay for blocking or dimming background content.",
    hasMarkdownPage: true,
    importName: "Backdrop",
    packagePath: "backdrop",
    routeSlug: "backdrop",
    storybookTitle: "Components/Backdrop",
    title: "Backdrop",
  },
  {
    category: "feedback",
    description: "Page-level message for important contextual updates.",
    hasMarkdownPage: true,
    importName: "Banner",
    packagePath: "banner",
    routeSlug: "banner",
    storybookTitle: "Components/Banner",
    title: "Banner",
  },
  {
    category: "feedback",
    description: "Modal dialog for decisions, forms, and interruptive flows.",
    hasMarkdownPage: true,
    importName: "Dialog",
    packagePath: "dialog",
    routeSlug: "dialog",
    storybookTitle: "Components/Dialog",
    title: "Dialog",
  },
  {
    category: "feedback",
    description: "Floating contextual layer anchored to another element.",
    hasMarkdownPage: true,
    importName: "Popover",
    packagePath: "popover",
    routeSlug: "popover",
    storybookTitle: "Components/Popover",
    title: "Popover",
  },
  {
    category: "feedback",
    description: "Temporary notification for background outcomes and updates.",
    hasMarkdownPage: true,
    importName: "Toast",
    packagePath: "toast",
    routeSlug: "toast",
    storybookTitle: "Components/Toast/Toast",
    title: "Toast",
  },
  {
    category: "feedback",
    description: "Hover and focus helper text for compact controls.",
    hasMarkdownPage: true,
    importName: "Tooltip",
    packagePath: "tooltip",
    routeSlug: "tooltip",
    storybookTitle: "Components/Tooltip",
    title: "Tooltip",
  },
  {
    category: "layout",
    description:
      "Low-level layout wrapper for spacing, sizing, and responsive style composition.",
    hasMarkdownPage: true,
    importName: "Box",
    routeSlug: "box",
    sourceUrl: packageBarrelUrl,
    title: "Box",
  },
  {
    category: "layout",
    description:
      "Responsive page-width wrapper for keeping content aligned to a readable measure.",
    hasMarkdownPage: true,
    importName: "Container",
    routeSlug: "container",
    sourceUrl: packageBarrelUrl,
    title: "Container",
  },
  {
    category: "layout",
    description:
      "Responsive grid primitive for arranging content across columns and breakpoints.",
    hasMarkdownPage: true,
    importName: "Grid",
    routeSlug: "grid",
    sourceUrl: packageBarrelUrl,
    title: "Grid",
  },
  {
    category: "layout",
    description:
      "One-dimensional layout primitive for vertical and horizontal spacing.",
    hasMarkdownPage: true,
    importName: "Stack",
    routeSlug: "stack",
    sourceUrl: packageBarrelUrl,
    title: "Stack",
  },
  {
    category: "templates",
    description:
      "Page template with header, breadcrumbs, optional sub-navigation, and content area.",
    hasMarkdownPage: true,
    importName: "BasePage",
    routeSlug: "base-page",
    sourceUrl: `${packageSourceUrl}/templates/base-page`,
    storybookTitle: "Templates/BasePage",
    title: "BasePage",
  },
  {
    category: "templates",
    description:
      "Application layout template for wrapping product navigation and page content.",
    hasMarkdownPage: true,
    importName: "Layout",
    routeSlug: "layout",
    sourceUrl: `${packageSourceUrl}/templates/layout`,
    storybookTitle: "Templates/Layout",
    title: "Layout",
  },
  {
    category: "templates",
    description:
      "Page title template for consistent headings, descriptions, and page actions.",
    hasMarkdownPage: true,
    importName: "PageTitle",
    routeSlug: "page-title",
    sourceUrl: `${packageSourceUrl}/templates/page-title`,
    storybookTitle: "Templates/PageTitle",
    title: "Page Title",
  },
  {
    category: "surfaces",
    description:
      "Disclosure surface for grouped settings, summaries, and optional details.",
    hasMarkdownPage: true,
    importName: "Accordion",
    packagePath: "accordion",
    routeSlug: "accordion",
    storybookTitle: "Components/Accordion",
    title: "Accordion",
  },
  {
    category: "surfaces",
    description: "Content container for grouped information and actions.",
    hasMarkdownPage: true,
    importName: "Card",
    packagePath: "card",
    routeSlug: "card",
    storybookTitle: "Components/Card",
    title: "Card",
  },
  {
    category: "surfaces",
    description:
      "Application footer layout for links, legal text, and branding.",
    hasMarkdownPage: true,
    importName: "Footer",
    packagePath: "footer",
    routeSlug: "footer",
    storybookTitle: "Components/Footer",
    title: "Footer",
  },
  {
    category: "surfaces",
    description:
      "Application header for brand, navigation, search, and actions.",
    hasMarkdownPage: true,
    importName: "Header",
    packagePath: "header",
    routeSlug: "header",
    storybookTitle: "Components/Header",
    title: "Header",
  },
  {
    category: "surfaces",
    description:
      "Composite card surface for metric, chart, and dashboard content with headline slots, actions, loading, and empty states.",
    hasMarkdownPage: true,
    importName: "Widget",
    packagePath: "widget",
    routeSlug: "widget",
    storybookTitle: "Components/Widget",
    title: "Widget",
  },
  {
    category: "surfaces",
    description:
      "Elevated surface primitive for panels, cards, menus, and contained content.",
    hasMarkdownPage: true,
    importName: "Paper",
    routeSlug: "paper",
    sourceUrl: packageBarrelUrl,
    title: "Paper",
  },
  {
    category: "surfaces",
    description: "Drawer shell for secondary panels and side workflows.",
    hasMarkdownPage: true,
    importName: "SideDrawer",
    packagePath: "side-drawer",
    routeSlug: "side-drawer",
    storybookTitle: "Components/SideDrawer",
    title: "Side Drawer",
  },
  {
    category: "navigation",
    description: "In-page table of contents for long docs and settings pages.",
    hasMarkdownPage: true,
    importName: "AnchorLinkMenu",
    packagePath: "anchor-link-menu",
    routeSlug: "anchor-link-menu",
    storybookTitle: "Components/AnchorLinkMenu",
    title: "Anchor Link Menu",
  },
  {
    category: "navigation",
    description: "Breadcrumb trail for hierarchy and location context.",
    hasMarkdownPage: true,
    importName: "Breadcrumbs",
    packagePath: "breadcrumbs",
    routeSlug: "breadcrumbs",
    storybookTitle: "Components/Breadcrumbs",
    title: "Breadcrumbs",
  },
  {
    category: "navigation",
    description: "Link component for standalone and inline navigation actions.",
    hasMarkdownPage: true,
    importName: "Link",
    packagePath: "link",
    routeSlug: "link",
    storybookTitle: "Components/Link",
    title: "Link",
  },
  {
    category: "navigation",
    description: "Menu surfaces and items for contextual command groups.",
    hasMarkdownPage: true,
    importName: "Menu",
    packagePath: "menu",
    routeSlug: "menu",
    storybookTitle: "Components/Menu/Menu",
    title: "Menu",
  },
  {
    category: "navigation",
    description: "Navigation rail and drawer patterns for product IA.",
    hasMarkdownPage: true,
    importName: "Navigation",
    packagePath: "navigation",
    routeSlug: "navigation",
    storybookTitle: "Components/Navigation",
    title: "Navigation",
  },
  {
    category: "navigation",
    description: "Nested menu for selecting items from hierarchical options.",
    hasMarkdownPage: true,
    importName: "NestedMenu",
    packagePath: "nested-menu",
    routeSlug: "nested-menu",
    storybookTitle: "Components/Menu/NestedMenu",
    title: "Nested Menu",
  },
  {
    category: "navigation",
    description:
      "Pagination controls for moving through page ranges with boundary buttons, sizes, variants, and disabled state.",
    hasMarkdownPage: true,
    importName: "Pagination",
    packagePath: "pagination",
    routeSlug: "pagination",
    storybookTitle: "Components/Pagination",
    title: "Pagination",
  },
  {
    category: "navigation",
    description: "Scroll area wrapper for constrained panes and long content.",
    hasMarkdownPage: true,
    importName: "ScrollArea",
    packagePath: "scroll-area",
    routeSlug: "scroll-area",
    storybookTitle: "Components/Scroll Area",
    title: "Scroll Area",
  },
  {
    category: "navigation",
    description:
      "Wizard-style panel with vertical steps, main content, optional footer actions, and a collapsible sidebar.",
    hasMarkdownPage: true,
    importName: "StepperPanel",
    packagePath: "stepper",
    routeSlug: "stepper-panel",
    storyPath: "stepper/stories/stepper-panel.stories.tsx",
    storybookTitle: "Components/Stepper/StepperPanel",
    title: "Stepper Panel",
  },
  {
    category: "navigation",
    description:
      "Dialog-style stepped workflow with a horizontal step series, title area, body content, and footer actions.",
    hasMarkdownPage: true,
    importName: "StepperModal",
    packagePath: "stepper",
    routeSlug: "stepper-modal",
    storyPath: "stepper/stories/stepper-modal.stories.tsx",
    storybookTitle: "Components/Stepper/StepperModal",
    title: "Stepper Modal",
  },
  {
    category: "navigation",
    description: "Tabs for switching between peer views inside one context.",
    hasMarkdownPage: true,
    importName: "Tabs",
    packagePath: "tabs",
    routeSlug: "tabs",
    storybookTitle: "Components/Tabs",
    title: "Tabs",
  },
  {
    category: "navigation",
    description: "View switcher for toggling between equivalent presentations.",
    hasMarkdownPage: true,
    importName: "ViewSwitcher",
    packagePath: "view-switcher",
    routeSlug: "view-switcher",
    storybookTitle: "Components/ViewSwitcher",
    title: "View Switcher",
  },
];

export const openUIKitRouteSlugs = openUIKitComponents.map(
  (component) => `react-${component.routeSlug}`,
);

export const openUIKitDynamicRouteSlugs = openUIKitComponents
  .filter((component) => !component.hasMarkdownPage)
  .map((component) => `react-${component.routeSlug}`);

export function getOpenUIKitComponentByRouteSlug(slug: string) {
  const normalizedSlug = slug.replace(/^react-/, "");

  return openUIKitComponents.find(
    (component) => component.routeSlug === normalizedSlug,
  );
}

export function getOpenUIKitComponentsByCategory(
  category: OpenUIKitComponentCategory,
) {
  return openUIKitComponents.filter(
    (component) => component.category === category,
  );
}

export function getOpenUIKitStorybookUrl(component: OpenUIKitComponentDoc) {
  if (!component.storybookTitle) {
    return storybookBaseUrl;
  }

  const storybookId = component.storybookTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${storybookBaseUrl}/?path=/docs/${storybookId}--docs`;
}
