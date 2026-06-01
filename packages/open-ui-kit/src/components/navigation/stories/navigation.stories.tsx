import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  Navigation,
  NavigationDrawer,
  NavigationSubNavigation,
  type NavigationSectionData,
} from "..";

const dashboardItems = Array.from({ length: 6 }, (_, index) => ({
  id: `dashboard-${index + 1}`,
  label: "Dashboard",
  state: index === 2 ? ("selected" as const) : undefined,
  children:
    index === 0
      ? Array.from({ length: 6 }, (_, childIndex) => ({
          id: `dashboard-child-${childIndex + 1}`,
          label: "Dashboard",
          state: childIndex === 0 ? ("selected" as const) : undefined,
        }))
      : undefined,
}));

const sections: NavigationSectionData[] = Array.from(
  { length: 4 },
  (_, index) => ({
    label: "Menu list",
    items: dashboardItems.map((item, itemIndex) => ({
      ...item,
      id: `${item.id}-${index}-${itemIndex}`,
      state: index === 0 && itemIndex === 2 ? "selected" : undefined,
    })),
  }),
);

const subSections: NavigationSectionData[] = Array.from(
  { length: 4 },
  (_, index) => ({
    label: "Menu list",
    items: dashboardItems.map((item, itemIndex) => ({
      ...item,
      id: `sub-${item.id}-${index}-${itemIndex}`,
      state: index === 0 && itemIndex === 0 ? "selected" : undefined,
    })),
  }),
);

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Navigation"
          blurb="Navigation organizes product routes into grouped menu sections, compact rails, drawers, and optional sub-navigation."
          guideLink=""
          importLine={`import { Navigation } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const MainComponent: Story = {
  name: "Main component",
  render: () => (
    <Stack direction="row" gap="24px" alignItems="flex-start">
      <Navigation sections={sections} />
      <Navigation compact sections={sections.slice(0, 4)} />
    </Stack>
  ),
};

export const ItemSectionHead: Story = {
  name: "_item section head",
  render: () => <Navigation sections={[{ label: "Label", items: [] }]} />,
};

export const ItemMenuList: Story = {
  name: "_item menu list",
  render: () => (
    <Navigation
      sections={[
        {
          label: "Menu list",
          items: dashboardItems,
        },
      ]}
    />
  ),
};

export const ItemNavigation: Story = {
  name: "_item navigation",
  render: () => (
    <Stack direction="row" gap="32px" alignItems="flex-start">
      <Navigation
        sections={[
          {
            label: "Menu list",
            items: [
              { id: "default", label: "Dashboard" },
              { id: "selected", label: "Dashboard", state: "selected" },
            ],
          },
        ]}
      />
      <Navigation
        compact
        sections={[{ label: "Menu list", items: dashboardItems }]}
      />
    </Stack>
  ),
};

export const NavigationDrawerStory: Story = {
  name: "Navigation Drawer",
  render: () => <NavigationDrawer sections={subSections} />,
};

export const WithSubNavigation: Story = {
  name: "Navigation with sub navigation Sub nav opens on click",
  render: () => (
    <Stack direction="row" gap="0" alignItems="flex-start">
      <Stack gap="32px" sx={{ width: 360 }}>
        <Typography variant="h4">
          Navigation with sub navigation
          <br />
          Sub nav opens on click
        </Typography>
        <Navigation sections={subSections} sx={{ minHeight: "720px" }} />
      </Stack>
    </Stack>
  ),
};

export const All: Story = {
  name: "Navigation",
  render: () => (
    <Stack direction="row" gap="40px" alignItems="flex-start" flexWrap="wrap">
      <Navigation sections={sections} />
      <Stack gap="40px">
        <Navigation
          sections={[{ label: "Menu list", items: dashboardItems }]}
        />
        <NavigationDrawer sections={subSections} />
      </Stack>
      <Stack gap="40px">
        <Navigation
          compact
          sections={[{ label: "Menu list", items: dashboardItems }]}
        />
        <NavigationSubNavigation sections={subSections} />
      </Stack>
    </Stack>
  ),
};
