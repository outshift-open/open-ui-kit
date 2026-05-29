import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GridViewIcon from "@mui/icons-material/GridView";
import { Breadcrumbs } from "../components/breadcrumbs";
import { IconPosition } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";

const page = (level: number) => ({
  text: `Level ${level} Page`,
  link: `/level-${level}`,
});

const level1Items = [
  {
    ...page(1),
    Icon: ArrowBackIcon,
    iconPosition: IconPosition.LeftIcon,
  },
];
const level2Items = [page(1), page(2)];
const level3Items = [page(1), page(2), page(3)];
const level4Items = [page(1), page(2), page(3), page(4)];
const level5Items = [page(1), page(2), page(3), page(4), page(5)];
const collapsedItems = level5Items;

const withIconItems = level5Items.map((item) => ({
  ...item,
  Icon: GridViewIcon,
  iconPosition: IconPosition.LeftIcon,
}));

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Breadcrumbs are used to indicate the current page’s location within a navigational hierarchy. They consist of a list of links that help users visualize a page’s location within the hierarchical structure of a website, and allow navigation up to any of its ancestors."
          guideLink=""
          includeStories={true}
          importLine='import { Breadcrumbs } from "@open-ui-kit/core";'
          title="Breadcrumb"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const figmaLabel = (label: string) => (
  <Typography
    variant="caption"
    sx={{
      bgcolor: "#D4B3FF",
      borderRadius: "4px",
      color: "#4C00AE",
      fontWeight: 500,
      px: 0.5,
      py: 0.25,
      width: "fit-content",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </Typography>
);

const BreadcrumbRows = ({ withIcons = false }: { withIcons?: boolean }) => {
  const rows = withIcons
    ? [
        withIconItems.slice(0, 1),
        withIconItems.slice(0, 2),
        withIconItems.slice(0, 3),
        withIconItems.slice(0, 4),
        withIconItems,
      ]
    : [level1Items, level2Items, level3Items, level4Items, level5Items];

  return (
    <Stack gap={2.5}>
      {rows.map((items, index) => (
        <Breadcrumbs
          key={`${withIcons ? "icons" : "standard"}-${index}`}
          items={items}
          maximumNumberOfVisibleBreadcrumbs={6}
        />
      ))}
      <Breadcrumbs
        items={withIcons ? withIconItems : collapsedItems}
        maximumNumberOfVisibleBreadcrumbs={2}
      />
    </Stack>
  );
};

const StaticCollapsedMenu = ({
  withIcons = false,
}: {
  withIcons?: boolean;
}) => (
  <Stack gap={1.5}>
    <Breadcrumbs
      items={withIcons ? withIconItems : collapsedItems}
      maximumNumberOfVisibleBreadcrumbs={2}
    />
    <Box
      sx={(theme) => ({
        border: `2px solid ${theme.palette.vars.interactivePrimaryDefaultDefault}`,
        borderRadius: "8px",
        boxShadow: theme.shadows[2],
        px: 2,
        py: 1.5,
        width: withIcons ? 168 : 136,
      })}
    >
      {[2, 3, 4].map((level) => (
        <Stack
          key={level}
          direction="row"
          gap={1}
          sx={{ alignItems: "center", height: 40 }}
        >
          {withIcons ? <GridViewIcon sx={{ fontSize: 20 }} /> : null}
          <Typography variant="body2">{`Level ${level} Page`}</Typography>
        </Stack>
      ))}
    </Box>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack gap={4}>
      <Stack
        direction="row"
        gap={6}
        sx={{ alignItems: "flex-start", flexWrap: "wrap" }}
      >
        <Stack gap={2.5}>
          {figmaLabel("Default")}
          <BreadcrumbRows />
        </Stack>
        <Stack gap={2.5}>
          {figmaLabel("With left icons")}
          <BreadcrumbRows withIcons />
        </Stack>
      </Stack>

      <Stack gap={2}>
        {figmaLabel("Collapsed behavior - responsive behavior")}
        <Typography variant="body2">
          Collapsed behavior only happens when the breadcrumb is too long for
          the screen width.
        </Typography>
        <Breadcrumbs
          items={collapsedItems}
          maximumNumberOfVisibleBreadcrumbs={2}
        />
        <Typography variant="body2">
          When the user clicks on the more icon - a menu appears to show the
          breadcrumb options. The user can choose.
        </Typography>
        <Stack
          direction="row"
          gap={6}
          sx={{ alignItems: "flex-start", flexWrap: "wrap" }}
        >
          <StaticCollapsedMenu />
          <Stack gap={1.5}>
            <Typography variant="body2">With Icons</Typography>
            <StaticCollapsedMenu withIcons />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const Standard: Story = {
  render: () => <BreadcrumbRows />,
};

export const Responsive: Story = {
  render: () => (
    <Breadcrumbs items={level5Items} maximumNumberOfVisibleBreadcrumbs={2} />
  ),
};

export const WithLeftIcons: Story = {
  render: () => <BreadcrumbRows withIcons />,
};
