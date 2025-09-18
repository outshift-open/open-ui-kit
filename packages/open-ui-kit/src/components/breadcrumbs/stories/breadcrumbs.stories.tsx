import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Breadcrumbs } from "../components/breadcrumbs";
import { IconPosition } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const simpleItems = [
  { text: "this", link: "fake-route/this" },
  { text: "is", link: "fake-route/this/is" },
  { text: "a-route", link: "fake-route/this/is/a-route" },
];

const tooManyItems = [
  { text: "Level 1", link: "fake-route/level1" },
  { text: "Level 2", link: "fake-route/level1/level2" },
  { text: "Level 3", link: "fake-route/level1/level2/level3" },
  { text: "Level 4", link: "fake-route/level1/level2/level3/level4" },
  { text: "Level 5", link: "fake-route/level1/level2/level3/level4/level5" },
];

const iconItems = [
  {
    text: "this",
    link: "fake-route/this",
    Icon: GridViewIcon,
    iconPosition: IconPosition.NoIcon,
  },
  {
    text: "is",
    link: "fake-route/this/is",
    Icon: GridViewIcon,
    iconPosition: IconPosition.LeftIcon,
  },
  {
    text: "a-route",
    link: "fake-route/this/is/a-route",
    Icon: GridViewIcon,
    iconPosition: IconPosition.RightIcon,
  },
];

/**
 * ### Indicate the current page’s location within a navigational hierarchy.

Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website,
and allow navigation up to any of its "ancestors".
 */
const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    items: {
      description: "Array of route pieces to display in the breadcrumbs",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Breadcrumbs are used to indicate the current page's location within a navigational hierarchy. They consist of a list of links that help users visualize a page's location within the hierarchical structure of a website, and allow navigation up to any of its 'ancestors'."
          importLine='import { Breadcrumbs } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const BasicBreadcrumbs: Story = {
  render: () => (
    <BrowserRouter>
      <Breadcrumbs items={simpleItems} />
    </BrowserRouter>
  ),
};

export const BreadcrumbsWithMoreThan4Level: Story = {
  render: () => (
    <BrowserRouter>
      <Breadcrumbs items={tooManyItems} />
    </BrowserRouter>
  ),
};

export const BreadcrumbsTooLong: Story = {
  render: () => (
    <BrowserRouter>
      <Box sx={{ width: "200px" }}>
        <Breadcrumbs items={tooManyItems} />
      </Box>
    </BrowserRouter>
  ),
};

export const BreadcrumbsWithIcons: Story = {
  render: () => (
    <BrowserRouter>
      <Breadcrumbs items={iconItems} />
    </BrowserRouter>
  ),
};
