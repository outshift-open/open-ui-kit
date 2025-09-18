import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Banner, BannerProps } from "../components/banner";

/**
 * ### An banner displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="An banner displays a short, important message in a way that attracts the user's attention without interrupting the user's task."
          guideLink=""
          importLine='import { Banner } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

const BannerStory = (args: BannerProps) => <Banner {...args} />;

export const Example: Story = {
  render: (args) => {
    return (
      <BannerStory
        {...args}
        text={`This is an banner of status ${args.status}`}
      />
    );
  },
  args: {
    status: "info",
  },
};

export const BannerStatus: Story = {
  render: (args) => (
    <Stack direction={"column"} spacing={2}>
      {(["negative", "warning", "success", "info", "excellent"] as const).map(
        (status) =>
          BannerStory({
            ...args,
            status,
            text: `This is an banner of status ${status}`,
          }),
      )}
    </Stack>
  ),
};
