import { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "../components/empty-state";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="EmptyState is a component that provides a visual indication when there is no content to display. It can include a title, description, and an action button to guide users on what to do next."
          guideLink="#"
          importLine='import { EmptyState } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type DisplayByButtonStory = StoryObj<typeof EmptyState>;

const EmptyStateBaseStory = ({ ...args }) => {
  return <EmptyState {...args} />;
};

export const Example: DisplayByButtonStory = {
  args: {
    title: "Heading",
    description:
      "Description about what this page is for and what the user can do.",
    actionCallback: () => null,
    actionTitle: "Refresh",
  },
  render: (args) => {
    return <EmptyStateBaseStory {...args} />;
  },
};
