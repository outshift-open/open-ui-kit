import { Meta, StoryObj } from "@storybook/react";
import { PathDisplay } from "../components/path-display";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof PathDisplay> = {
  title: "Components/PathDisplay",
  component: PathDisplay,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="PathDisplay is a component that displays a hierarchical path, such as a breadcrumb trail."
          guideLink=""
          importLine='import { PathDisplay } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof PathDisplay>;

function PathDisplayComponent(args: { path: string }) {
  return <PathDisplay {...args} />;
}

export const Default: Story = {
  args: {
    path: "Company / subgroup#1 / subgroup#2 / subgroup#3",
  },
};

export const Collapsed: Story = {
  args: {
    path: "Company / subgroup#1 / subgroup#2 / subgroup#3",
    numberOfLevels: 2,
  },
};

export const NoLevels1: Story = {
  render: PathDisplayComponent,
  args: {
    path: "Epsagon / Subgroup",
  },
};

export const NoLevels2: Story = {
  render: PathDisplayComponent,
  args: {
    path: "Epsagon",
  },
};

export const EmptyPath: Story = {
  render: PathDisplayComponent,
  args: {
    path: "",
  },
};

export const EmptyPathWithSlash: Story = {
  render: PathDisplayComponent,
  args: {
    path: "/",
  },
};

export const EmptyPathWithSlashAndText: Story = {
  render: PathDisplayComponent,
  args: {
    path: "/Epsagon",
  },
};
