import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  Navigation,
  NavigationDrawer,
  NavigationSubNavigation,
  type NavigationSectionData,
} from "..";

const makeDashboardItem = (
  id: string,
  state?: "default" | "selected" | "disabled",
) => ({
  id,
  label: "Dashboard",
  state,
  disabled: state === "disabled",
});

const nestedChildren = Array.from({ length: 6 }, (_, index) =>
  makeDashboardItem(
    `dashboard-child-${index + 1}`,
    index === 1 ? "selected" : undefined,
  ),
);

const dashboardItems = Array.from({ length: 6 }, (_, index) => ({
  ...makeDashboardItem(
    `dashboard-${index + 1}`,
    index === 2 ? "selected" : undefined,
  ),
  children: index === 0 ? nestedChildren : undefined,
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

const drawerSections: NavigationSectionData[] = Array.from(
  { length: 4 },
  (_, index) => ({
    label: "Menu list",
    items: dashboardItems.map((item, itemIndex) => ({
      ...item,
      id: `drawer-${item.id}-${index}-${itemIndex}`,
      subtext: itemIndex === 0 ? "Subtext" : undefined,
      state: index === 0 && itemIndex === 1 ? "selected" : undefined,
    })),
  }),
);

const itemStateSections: NavigationSectionData[] = [
  {
    label: "Menu list",
    items: [
      makeDashboardItem("default"),
      makeDashboardItem("selected", "selected"),
      makeDashboardItem("disabled", "disabled"),
      {
        ...makeDashboardItem("with-children"),
        children: nestedChildren,
      },
    ],
  },
];

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  args: {
    organizationLabel: "[Organization]",
    organizationDrawerTitle: "Headline",
    sections,
  },
  argTypes: {
    compact: {
      control: "boolean",
      description: "Renders the icon-only compact navigation rail.",
    },
    organizationLabel: {
      control: "text",
      description: "Label displayed inside the organization switcher.",
    },
    organizationDrawerTitle: {
      control: "text",
      description: "Title displayed when the organization drawer opens.",
    },
    selectedItemId: {
      control: "text",
      description: "Selected item id. Overrides item-level selected state.",
    },
    onCollapseClick: { action: "collapse clicked" },
    onItemSelect: { action: "item selected" },
    onOrganizationClick: { action: "organization clicked" },
    onSubNavigationClose: { action: "sub navigation closed" },
  },
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

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
    sections,
  },
};

export const ItemStates: Story = {
  args: {
    sections: itemStateSections,
  },
};

export const OrganizationDrawer: Story = {
  render: (args) => (
    <NavigationDrawer
      title={args.organizationDrawerTitle}
      sections={drawerSections}
    />
  ),
};

export const SubNavigation: Story = {
  render: () => (
    <NavigationSubNavigation
      headline="Headline"
      sections={drawerSections}
      selectedItemId="drawer-dashboard-2-0-1"
    />
  ),
};

export const WithSubNavigation: Story = {
  args: {
    sections: [
      {
        label: "Menu list",
        items: [
          {
            ...makeDashboardItem("insight-analytics"),
            label: "Insight Analytics",
            children: nestedChildren,
          },
          ...dashboardItems.slice(1),
        ],
      },
      ...sections.slice(1),
    ],
  },
};

export const StatesOverview: Story = {
  render: (args) => (
    <Stack direction="row" gap="40px" alignItems="flex-start" flexWrap="wrap">
      <Navigation {...args} sections={sections} />
      <Navigation {...args} compact sections={sections} />
      <NavigationDrawer
        title={args.organizationDrawerTitle}
        sections={drawerSections}
      />
      <NavigationSubNavigation
        headline="Headline"
        sections={drawerSections}
        selectedItemId="drawer-dashboard-2-0-1"
      />
    </Stack>
  ),
};
