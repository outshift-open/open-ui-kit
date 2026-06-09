import * as React from "react";
import fs from "fs";
import path from "path";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AppFrame } from "@mui/internal-core-docs/AppLayout";
import {
  AppLayoutDocs,
  HEIGHT as AppFrameHeight,
} from "@mui/internal-core-docs/AppLayout";
import {
  getOpenUIKitComponentByRouteSlug,
  getOpenUIKitStorybookUrl,
  openUIKitDynamicRouteSlugs,
  openUIKitCategoryTitles,
} from "docs/src/open-ui-kit-component-registry";
import {
  barGraphBars,
  barGraphRows,
  chartBreakdownData,
  chartGaugeData,
  chartHorizontalData,
  chartLineCategories,
  chartLineData,
  chartStatusData,
  filterGroups,
  keyValueItems,
  listItems,
  nestedMenuTree,
  spiderChartData,
  spiderChartRadars,
  stepperModalSteps,
  stepperPanelSteps,
  tagItems,
  tableColumns,
  tableRows,
} from "docs/src/open-ui-kit-demo-data";

const repositoryBaseUrl =
  "https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components";
const workspaceRoot =
  path.basename(process.cwd()) === "docs"
    ? path.resolve(process.cwd(), "..")
    : process.cwd();

const storyRootByCategory = {
  charts: "charts",
  templates: "templates",
};

const guidanceByCategory = {
  inputs: [
    "Use it when the user needs to provide input, make a choice, or trigger a clear action.",
    "Keep labels short and pair supporting text with validation or helper messaging when needed.",
    "Prefer the Open UI Kit wrapper when one exists so spacing, state, and focus styles stay consistent.",
  ],
  "data-display": [
    "Use it to make status, metadata, and repeated content easier to scan.",
    "Keep content concise and choose the smallest visual treatment that still communicates the state.",
    "Pair dense information with labels, tooltips, or empty states when the meaning is not obvious.",
  ],
  charts: [
    "Use charts for comparison, trend, proportion, and score visualization inside product workflows.",
    "Keep labels and legends close to the data, and avoid encoding meaning with color alone.",
    "Use Storybook examples as the source of truth for supported data shapes while chart docs mature.",
  ],
  feedback: [
    "Use it to communicate status, interruption, confirmation, or contextual guidance.",
    "Match the strength of the surface to the urgency of the message.",
    "Make actions explicit, especially when the component blocks or changes user flow.",
  ],
  layout: [
    "Use layout primitives to compose page structure before reaching for custom CSS.",
    "Keep spacing and responsive behavior token-driven so pages stay aligned with the design system.",
    "Prefer these re-exports when building docs or apps from the Open UI Kit package surface.",
  ],
  templates: [
    "Use templates for repeatable page structures rather than rebuilding common layout chrome.",
    "Pass product-specific content through props and keep page-level composition predictable.",
    "Start from the closest template, then compose smaller components inside the content area.",
  ],
  surfaces: [
    "Use surfaces to group related content and make page hierarchy clear.",
    "Keep nested surfaces shallow; too many framed areas make product pages harder to scan.",
    "Use elevation, borders, and spacing consistently with the surrounding layout.",
  ],
  navigation: [
    "Use navigation components to show location, hierarchy, movement, or view changes.",
    "Make the current state visible and keep labels stable across routes.",
    "Use compact variants only when the surrounding product shell already provides context.",
  ],
};

const contextByCategory = {
  inputs: {
    heading: "Interaction context",
    body: "Input components should make intent obvious before the user acts and make state changes visible after the user acts.",
    checkpoints: [
      "Check default, hover, focus, disabled, error, and loading states where the story exposes them.",
      "Confirm keyboard and screen-reader labels before placing the component in forms or toolbars.",
      "Keep dense controls close to the object they affect.",
    ],
  },
  "data-display": {
    heading: "Content context",
    body: "Data-display components should help people scan product information without adding a new interaction model.",
    checkpoints: [
      "Review empty, long-content, and dense-content stories before using the component in production pages.",
      "Pair values with labels when the meaning is not self-evident.",
      "Use the smallest emphasis that still communicates the state.",
    ],
  },
  charts: {
    heading: "Data context",
    body: "Chart components should clarify comparison, trend, proportion, or score information inside a workflow.",
    checkpoints: [
      "Validate the expected data shape against the Storybook examples.",
      "Keep labels and legends near the marks they describe.",
      "Do not rely on color alone for status or severity meaning.",
    ],
  },
  feedback: {
    heading: "Feedback context",
    body: "Feedback components should match the urgency of the event without interrupting more than necessary.",
    checkpoints: [
      "Use blocking surfaces only when the user must decide before continuing.",
      "Make recovery actions explicit for warnings, errors, and destructive flows.",
      "Check light and dark mode contrast for message text and action labels.",
    ],
  },
  layout: {
    heading: "Composition context",
    body: "Layout primitives are the quiet structure behind product pages; they should keep spacing consistent before custom CSS appears.",
    checkpoints: [
      "Start with tokenized spacing and responsive props.",
      "Keep layout components free of product-specific copy or behavior.",
      "Use them to compose sections, not to hide component complexity.",
    ],
  },
  templates: {
    heading: "Template context",
    body: "Templates package common page shells so teams can focus on the page content instead of rebuilding chrome.",
    checkpoints: [
      "Start from the closest template story and remove what the product flow does not need.",
      "Keep actions, breadcrumbs, and side navigation consistent across sibling pages.",
      "Pass composed content through props rather than forking the template.",
    ],
  },
  surfaces: {
    heading: "Surface context",
    body: "Surface components group content and make hierarchy visible without turning every section into a heavy card.",
    checkpoints: [
      "Use borders, elevation, and spacing to clarify hierarchy.",
      "Avoid stacking multiple framed surfaces inside each other.",
      "Check how the surface behaves with long titles, actions, and responsive width.",
    ],
  },
  navigation: {
    heading: "Navigation context",
    body: "Navigation components should make location, hierarchy, and available movement clear.",
    checkpoints: [
      "Keep active state, labels, and ordering stable across routes.",
      "Use compact patterns only when surrounding layout already provides context.",
      "Check keyboard movement and focus visibility in Storybook before shipping.",
    ],
  },
};

function toSentenceLabel(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\bStory\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getStorySearchRoot(component) {
  if (component.storyPath) {
    return path.join(
      workspaceRoot,
      "packages/open-ui-kit/src/components",
      component.storyPath,
    );
  }

  if (!component.packagePath && !component.sourceUrl) {
    return null;
  }

  const packageArea = storyRootByCategory[component.category] ?? "components";
  const packagePath = component.packagePath ?? component.routeSlug;

  return path.join(
    workspaceRoot,
    "packages/open-ui-kit/src",
    packageArea,
    packagePath,
  );
}

function collectStoryFiles(directory) {
  if (!directory || !fs.existsSync(directory)) {
    return [];
  }

  const directoryStats = fs.statSync(directory);

  if (directoryStats.isFile()) {
    return directory.endsWith(".stories.tsx") ? [directory] : [];
  }

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectStoryFiles(entryPath);
    }

    return entry.name.endsWith(".stories.tsx") ? [entryPath] : [];
  });
}

function getStorybookContext(component) {
  const storyFiles = collectStoryFiles(getStorySearchRoot(component));
  const stories = storyFiles.flatMap((filePath) => {
    const source = fs.readFileSync(filePath, "utf8");

    return Array.from(source.matchAll(/export const ([A-Z]\w*)/g), (match) =>
      toSentenceLabel(match[1]),
    );
  });

  return Array.from(new Set(stories)).filter(Boolean);
}

function stringifyDemoData(value) {
  return JSON.stringify(value, null, 2);
}

function createConst(name, value) {
  return `const ${name} = ${stringifyDemoData(value)};`;
}

const exampleCodeByRouteSlug = {
  "bar-chart": () => `import { BarChart } from '@open-ui-kit/core';

${createConst("statusData", chartStatusData)}

export function BarChartExample() {
  return <BarChart data={statusData} showTooltip />;
}`,
  "bar-graph": () => `import { BarGraph } from '@open-ui-kit/core';

${createConst("bars", barGraphBars)}

${createConst("rows", barGraphRows)}

export function BarGraphExample() {
  return (
    <BarGraph
      headers={['Area', 'Findings']}
      bars={bars}
      data={rows}
      showTooltip
    />
  );
}`,
  "chart-widget":
    () => `import { ChartType, ChartWidget } from '@open-ui-kit/core';

${createConst("data", chartBreakdownData)}

export function ChartWidgetExample() {
  return (
    <ChartWidget
      label="Exposure by area"
      labelTooltip="Open findings grouped by product area"
      data={data}
      type={ChartType.DONUT}
      showTooltip
    />
  );
}`,
  "donut-chart": () => `import { DonutChart } from '@open-ui-kit/core';

${createConst("breakdownData", chartBreakdownData)}

export function DonutChartExample() {
  return <DonutChart data={breakdownData} showTooltip />;
}`,
  "gauge-chart": () => `import { GaugeChart } from '@open-ui-kit/core';

${createConst("coverageData", chartGaugeData)}

export function GaugeChartExample() {
  return <GaugeChart data={coverageData} maxValue={100} />;
}`,
  "horizontal-bar-chart":
    () => `import { HorizontalBarChart } from '@open-ui-kit/core';

${createConst("rankedData", chartHorizontalData)}

export function HorizontalBarChartExample() {
  return (
    <HorizontalBarChart
      data={rankedData}
      categories={[{ name: 'Finding type' }, { name: 'Open' }]}
      showTooltip
    />
  );
}`,
  "line-chart": () => `import { LineChart } from '@open-ui-kit/core';

${createConst("trendData", chartLineData)}

${createConst("categories", chartLineCategories)}

export function LineChartExample() {
  return <LineChart data={trendData} categories={categories} showTooltip />;
}`,
  "spider-chart": () => `import { SpiderChart } from '@open-ui-kit/core';

${createConst("postureData", spiderChartData)}

${createConst("radars", spiderChartRadars)}

export function SpiderChartExample() {
  return <SpiderChart data={postureData} radars={radars} showTooltip />;
}`,
  filters: () => `import { Filters } from '@open-ui-kit/core';

${createConst("filters", filterGroups)}

export function FiltersExample() {
  return (
    <Filters
      filters={filters}
      onApply={(nextFilters) => console.log(nextFilters)}
    />
  );
}`,
  "key-value-pairs": () => `import { KeyValuePairs } from '@open-ui-kit/core';

${createConst("items", keyValueItems)}

export function KeyValuePairsExample() {
  return <KeyValuePairs items={items} columns={2} />;
}`,
  list: () => `import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@open-ui-kit/core';

${createConst("items", listItems)}

export function ListExample() {
  return (
    <List sx={{ maxWidth: 360 }}>
      {items.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton>
            <ListItemText
              primary={item.label}
              secondary={item.secondary}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}`,
  "loading-error-state":
    () => `import { LoadingErrorState, Typography } from '@open-ui-kit/core';

export function LoadingErrorStateExample() {
  return (
    <LoadingErrorState
      data={{ name: 'Production API', count: 42 }}
      error={false}
      loading={false}
      loadingVariant="skeleton"
    >
      {(data) => (
        <Typography>
          {data.name} loaded with {data.count} records.
        </Typography>
      )}
    </LoadingErrorState>
  );
}`,
  "loading-states": () => `import { LoadingStates } from '@open-ui-kit/core';

export function LoadingStatesExample() {
  return (
    <LoadingStates
      showSpinner
      showSkeleton
      skeletonStates={['loading', 'failure']}
    />
  );
}`,
  message: () => `import { Message } from '@open-ui-kit/core';

export function MessageExample() {
  return (
    <Message
      type="success"
      title="Saved"
      actionLabel="View details"
      onActionClick={() => console.log('details')}
    >
      The configuration was updated successfully.
    </Message>
  );
}`,
  "nested-menu":
    () => `import { NestedMenu, useNestedMenu } from '@open-ui-kit/core';

${createConst("treeData", nestedMenuTree)}

export function NestedMenuExample() {
  const {
    flattenedTreeOptions,
    onSelectAllChange,
    selectAllNode,
    toggleExpand,
    updateCheckbox,
  } = useNestedMenu({ treeData });

  return (
    <NestedMenu
      buttonContent="Select scope"
      flattenedTreeOptions={flattenedTreeOptions.flattenedSelectTree}
      onSelectAllChange={onSelectAllChange}
      selectAllNode={selectAllNode}
      toggleExpand={toggleExpand}
      updateCheckbox={updateCheckbox}
    />
  );
}`,
  table: () => `import { Table } from '@open-ui-kit/core';

${createConst("columns", tableColumns)}

${createConst("rows", tableRows)}

export function TableExample() {
  return (
    <Table
      title={{ label: 'Assets', count: rows.length }}
      columns={columns}
      data={rows}
      enableRowSelection
    />
  );
}`,
  tag: () => `import { GeneralSize, Tag, TagStatus } from '@open-ui-kit/core';

export function TagExample() {
  return (
    <Tag
      size={GeneralSize.Medium}
      status={TagStatus.Positive}
      onDelete={() => console.log('remove tag')}
    >
      Production
    </Tag>
  );
}`,
  tags: () => `import { GeneralSize, Tags } from '@open-ui-kit/core';

${createConst("items", tagItems)}

export function TagsExample() {
  return (
    <Tags
      items={items}
      size={GeneralSize.Small}
      maxTooltipTags={2}
      shouldTruncate
    />
  );
}`,
  pagination: () => `import { Pagination } from '@open-ui-kit/core';

export function PaginationExample() {
  return (
    <Pagination
      count={7}
      page={1}
      showFirstButton
      showLastButton
      onChange={(event, page) => console.log(page)}
    />
  );
}`,
  "severity-badge":
    () => `import { Severity, SeverityBadge } from '@open-ui-kit/core';

export function SeverityBadgeExample() {
  return (
    <>
      <SeverityBadge severity={Severity.CRITICAL} />
      <SeverityBadge value={72} />
    </>
  );
}`,
  "severity-badge-label":
    () => `import { Severity, SeverityBadgeLabel } from '@open-ui-kit/core';

export function SeverityBadgeLabelExample() {
  return (
    <SeverityBadgeLabel
      severity={Severity.HIGH}
      label="Elevated risk"
    />
  );
}`,
  "severity-bar":
    () => `import { Severity, SeverityBar } from '@open-ui-kit/core';

export function SeverityBarExample() {
  return <SeverityBar severity={Severity.CRITICAL} />;
}`,
  "stepper-modal":
    () => `import { Button, StepperModal } from '@open-ui-kit/core';

${createConst("steps", stepperModalSteps)}

export function StepperModalExample() {
  return (
    <StepperModal
      open
      title="Create policy"
      subtitle="Optional descriptor"
      description="Complete each step before launching the policy."
      steps={steps}
      activeStep={1}
      footer={<Button size="small">Next</Button>}
    >
      Policy configuration content
    </StepperModal>
  );
}`,
  "stepper-panel":
    () => `import { Button, StepperPanel } from '@open-ui-kit/core';

${createConst("steps", stepperPanelSteps)}

export function StepperPanelExample() {
  return (
    <StepperPanel
      steps={steps}
      activeStep={1}
      footer={<Button size="small">Next</Button>}
    >
      Step content
    </StepperPanel>
  );
}`,
};

function getExampleCode(component) {
  const { importName, category, routeSlug, title } = component;

  if (exampleCodeByRouteSlug[routeSlug]) {
    return exampleCodeByRouteSlug[routeSlug]();
  }

  if (category === "charts") {
    return `import { ${importName} } from '@open-ui-kit/core';

${createConst("data", chartStatusData)}

export function ${importName}Example() {
  return <${importName} data={data} />;
}`;
  }

  if (category === "layout") {
    if (importName === "Grid") {
      return `import { Grid, Paper, Typography } from '@open-ui-kit/core';

export function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography>Primary panel</Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 2 }}>
          <Typography>Secondary panel</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}`;
    }

    return `import { ${importName} } from '@open-ui-kit/core';

export function ${importName}Example() {
  return (
    <${importName} sx={{ p: 2 }}>
      ${title} content
    </${importName}>
  );
}`;
  }

  if (category === "templates") {
    return `import { ${importName} } from '@open-ui-kit/core';

export function ${importName}Example() {
  return (
    <${importName}
      title=\"${title}\"
      description=\"Compose a consistent product page from Open UI Kit patterns.\"
    >
      Page content
    </${importName}>
  );
}`;
  }

  return `import { ${importName} } from '@open-ui-kit/core';

export function ${importName}Example() {
  return (
    <${importName}>
      ${title}
    </${importName}>
  );
}`;
}

export default function ComponentInventoryPage({
  component,
  sourceUrl,
  storybookStories,
  storybookUrl,
}) {
  const importLine = `import { ${component.importName} } from '@open-ui-kit/core';`;
  const exampleCode = getExampleCode(component);
  const guidance = guidanceByCategory[component.category] ?? [];
  const categoryContext = contextByCategory[component.category];
  const visibleStories = storybookStories.slice(0, 12);
  const hiddenStoryCount = Math.max(
    storybookStories.length - visibleStories.length,
    0,
  );
  const hasStorybookCoverage = storybookStories.length > 0;

  return (
    <AppLayoutDocs
      cardOptions={{
        title: component.title,
        description: component.description,
      }}
      description={component.description}
      disableLayout
      location={`/open-ui-kit-core/react-${component.routeSlug}/`}
      title={`${component.title} component`}
      toc={[
        { text: "Overview", hash: "overview", children: [] },
        { text: categoryContext.heading, hash: "context", children: [] },
        { text: "Import", hash: "import", children: [] },
        { text: "Basic example", hash: "basic-example", children: [] },
        {
          text: "Storybook coverage",
          hash: "storybook-coverage",
          children: [],
        },
        { text: "Usage guidance", hash: "usage-guidance", children: [] },
        { text: "Resources", hash: "resources", children: [] },
      ]}
    >
      <Box
        sx={{
          "--MuiDocs-header-height": `${AppFrameHeight}px`,
          maxWidth: 980,
        }}
      >
        <Stack spacing={5}>
          <Box>
            <Chip
              label={openUIKitCategoryTitles[component.category]}
              color="primary"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Typography variant="h1">{component.title}</Typography>
            <Typography className="description" sx={{ mt: 2 }}>
              {component.description}
            </Typography>
          </Box>

          <Box>
            <Typography id="overview" variant="h2">
              Overview
            </Typography>
            <Typography sx={{ mt: 1 }}>
              {component.title} is part of the Open UI Kit Core public API. It
              belongs to the{" "}
              {openUIKitCategoryTitles[component.category].toLowerCase()} group
              and should be used with the same behavior, spacing, and theme
              expectations shown in Storybook.
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Use this page as the implementation entry point, then use
              Storybook to inspect visual states, prop combinations, and the
              edge cases that are easier to understand interactively.
            </Typography>
          </Box>

          <Box>
            <Typography id="context" variant="h2">
              {categoryContext.heading}
            </Typography>
            <Typography sx={{ mt: 1 }}>{categoryContext.body}</Typography>
            <Box component="ul" sx={{ mt: 1.5, pl: 3 }}>
              {categoryContext.checkpoints.map((item) => (
                <Typography component="li" key={item} sx={{ mb: 1 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography id="import" variant="h2">
              Import
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 1,
                fontFamily: "Consolas, Menlo, Monaco, monospace",
                fontSize: "0.95rem",
                overflowX: "auto",
              }}
            >
              {importLine}
            </Paper>
          </Box>

          <Box>
            <Typography id="basic-example" variant="h2">
              Basic example
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Start with the package import, then adapt the props to the product
              flow. Storybook contains the most complete interactive states for
              this component.
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Box
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  fontFamily: "Consolas, Menlo, Monaco, monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  overflowX: "auto",
                  whiteSpace: "pre",
                }}
              >
                <code>{exampleCode}</code>
              </Box>
            </Paper>
          </Box>

          <Box>
            <Typography id="storybook-coverage" variant="h2">
              Storybook coverage
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Storybook is the source of truth for interactive examples,
              controls, and visual state checks for this component.
            </Typography>
            {hasStorybookCoverage ? (
              <>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  {visibleStories.map((story) => (
                    <Chip key={story} label={story} variant="outlined" />
                  ))}
                  {hiddenStoryCount > 0 && (
                    <Chip
                      label={`+${hiddenStoryCount} more`}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                </Stack>
                <Typography sx={{ mt: 2 }}>
                  Start with the closest story, then adapt the props to match
                  your product flow. The story names above map to the scenarios
                  maintained beside the component source.
                </Typography>
              </>
            ) : (
              <Typography sx={{ mt: 1 }}>
                This export does not have dedicated Storybook stories yet. Use
                the source reference and nearby category examples while the docs
                are expanded.
              </Typography>
            )}
          </Box>

          <Box>
            <Typography id="usage-guidance" variant="h2">
              Usage guidance
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 3 }}>
              {guidance.map((item) => (
                <Typography component="li" key={item} sx={{ mb: 1 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography id="resources" variant="h2">
              Resources
            </Typography>
            <Typography sx={{ mt: 1, mb: 2 }}>
              Use Storybook for live states and source for implementation
              details. The docs route stays aligned with the public
              <Box
                component="code"
                sx={{
                  mx: 0.5,
                  px: 0.75,
                  py: 0.25,
                  borderRadius: 0.5,
                  bgcolor: "action.hover",
                  fontFamily: "Consolas, Menlo, Monaco, monospace",
                }}
              >
                @open-ui-kit/core
              </Box>
              export.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              {component.storybookTitle && (
                <Button
                  component={Link}
                  href={storybookUrl}
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  underline="none"
                >
                  View in Storybook
                </Button>
              )}
              <Button
                component={Link}
                href={sourceUrl}
                target="_blank"
                rel="noopener"
                variant="outlined"
                underline="none"
              >
                View source
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </AppLayoutDocs>
  );
}

ComponentInventoryPage.getLayout = (page) => {
  return <AppFrame>{page}</AppFrame>;
};

export async function getStaticPaths() {
  return {
    paths: openUIKitDynamicRouteSlugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const component = getOpenUIKitComponentByRouteSlug(slug);

  if (!component || component.hasMarkdownPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      component,
      sourceUrl:
        component.sourceUrl ?? `${repositoryBaseUrl}/${component.packagePath}`,
      storybookStories: getStorybookContext(component),
      storybookUrl: getOpenUIKitStorybookUrl(component),
    },
  };
}
