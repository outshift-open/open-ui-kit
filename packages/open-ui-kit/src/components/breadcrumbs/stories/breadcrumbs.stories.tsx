import { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Breadcrumbs } from "../components/breadcrumbs";
import { IconPosition } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";

const level1Items = [{ text: "Level 1 Page", link: "/level1" }];
const level2Items = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
];
const level3Items = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
  { text: "Level 3 Page", link: "/level1/level2/level3" },
];
const level4Items = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
  { text: "Level 3 Page", link: "/level1/level2/level3" },
  { text: "Level 4 Page", link: "/level1/level2/level3/level4" },
];
const level5Items = [
  { text: "Level 1 Page", link: "/level1" },
  { text: "Level 2 Page", link: "/level1/level2" },
  { text: "Level 3 Page", link: "/level1/level2/level3" },
  { text: "Level 4 Page", link: "/level1/level2/level3/level4" },
  { text: "Level 5 Page", link: "/level1/level2/level3/level4/level5" },
];

const withIconItems = [
  {
    text: "Level 1 Page",
    link: "/level1",
    Icon: GridViewIcon,
    iconPosition: IconPosition.LeftIcon,
  },
  {
    text: "Level 2 Page",
    link: "/level1/level2",
    Icon: GridViewIcon,
    iconPosition: IconPosition.LeftIcon,
  },
  {
    text: "Level 3 Page",
    link: "/level1/level2/level3",
    Icon: GridViewIcon,
    iconPosition: IconPosition.LeftIcon,
  },
];

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Breadcrumbs are used to indicate the current page’s location within a navigational hierarchy. They consist of a list of links that help users visualize a page’s location within the hierarchical structure of a website, and allow navigation up to any of its ancestors."
          guideLink=""
          importLine={`import { Breadcrumbs } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Standard: Story = {
  render: () => (
    <BrowserRouter>
      <Stack spacing={1}>
        <Breadcrumbs items={level1Items} />
        <Breadcrumbs items={level2Items} />
        <Breadcrumbs items={level3Items} />
        <Breadcrumbs items={level4Items} />
        <Breadcrumbs items={level5Items} />
      </Stack>
    </BrowserRouter>
  ),
};

export const Responsive: Story = {
  render: () => (
    <BrowserRouter>
      <Breadcrumbs items={level5Items} maximumNumberOfVisibleBreadcrumbs={2} />
    </BrowserRouter>
  ),
};

export const WithLeftIcons: Story = {
  render: () => (
    <BrowserRouter>
      <Breadcrumbs items={withIconItems} />
    </BrowserRouter>
  ),
};
