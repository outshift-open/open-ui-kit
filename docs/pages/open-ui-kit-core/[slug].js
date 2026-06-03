import * as React from "react";
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

const repositoryBaseUrl =
  "https://github.com/outshift-open/open-ui-kit/tree/main/packages/open-ui-kit/src/components";

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

function getExampleCode(component) {
  const { importName, category, title } = component;

  if (category === "charts") {
    return `import { ${importName} } from '@open-ui-kit/core';

const data = [
  { name: 'Critical', value: 24 },
  { name: 'Warning', value: 42 },
  { name: 'Healthy', value: 86 },
];

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
  storybookUrl,
}) {
  const importLine = `import { ${component.importName} } from '@open-ui-kit/core';`;
  const exampleCode = getExampleCode(component);
  const guidance = guidanceByCategory[component.category] ?? [];

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
        { text: "Import", hash: "import", children: [] },
        { text: "Basic example", hash: "basic-example", children: [] },
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
              {component.title} is part of the Open UI Kit Core public API. Use
              this page as the implementation entry point for imports, examples,
              Storybook coverage, and source references.
            </Typography>
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
      storybookUrl: getOpenUIKitStorybookUrl(component),
    },
  };
}
