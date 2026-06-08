import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GridViewIcon from "@mui/icons-material/GridView";
import { Stack } from "@/components";
import { GeneralSize, IconPosition } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Breadcrumbs } from "../components/breadcrumbs";

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
const level5Items = [page(1), page(2), page(3), page(4), page(5)];

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
          blurb="Breadcrumbs indicate the current page's location within a navigational hierarchy and allow navigation up to any ancestor."
          guideLink=""
          includeStories={true}
          importLine='import { Breadcrumbs } from "@open-ui-kit/core";'
          title="Breadcrumb"
        />
      ),
    },
  },
  args: {
    items: level3Items,
    maximumNumberOfVisibleBreadcrumbs: 4,
  },
  argTypes: {
    items: {
      table: { disable: true },
    },
    separator: {
      table: { disable: true },
    },
    slotProps: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const SinglePage: Story = {
  args: {
    items: level1Items,
  },
};

export const TwoPages: Story = {
  args: {
    items: level2Items,
  },
};

export const FivePages: Story = {
  args: {
    items: level5Items,
    maximumNumberOfVisibleBreadcrumbs: 6,
  },
};

export const Collapsed: Story = {
  args: {
    items: level5Items,
    maximumNumberOfVisibleBreadcrumbs: 2,
  },
};

export const WithLeftIcons: Story = {
  args: {
    items: withIconItems,
    maximumNumberOfVisibleBreadcrumbs: 6,
  },
};

export const CollapsedWithIcons: Story = {
  args: {
    items: withIconItems,
    maximumNumberOfVisibleBreadcrumbs: 2,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Breadcrumbs items={level3Items} size={GeneralSize.Small} />
      <Breadcrumbs items={level3Items} size={GeneralSize.Medium} />
      <Breadcrumbs items={level3Items} size={GeneralSize.Large} />
    </Stack>
  ),
};
