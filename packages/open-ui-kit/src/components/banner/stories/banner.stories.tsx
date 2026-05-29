import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Banner } from "../components/banner";
import type { BannerProps } from "../types";

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
          importLine={`import { Banner } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

const ALL_STATUSES = [
  "negative",
  "warning",
  "success",
  "info",
  "excellent",
] as const;

export const Error: Story = {
  render: () => (
    <Banner
      status="negative"
      text="Due to a planned update, the website will be temporarily down"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <Banner
      status="warning"
      text="Due to a planned update, the website will be temporarily down"
    />
  ),
};

export const Success: Story = {
  render: () => (
    <Banner
      status="success"
      text="Due to a planned update, the website will be temporarily down"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <Banner
      status="info"
      text="Due to a planned update, the website will be temporarily down"
    />
  ),
};

export const Branded: Story = {
  render: () => (
    <Banner
      status="excellent"
      text="Due to a planned update, the website will be temporarily down"
    />
  ),
};

export const AllVariants: Story = {
  render: (args: BannerProps) => (
    <Stack direction="column" spacing={2}>
      {ALL_STATUSES.map((status) => (
        <Banner
          key={status}
          {...args}
          status={status}
          text="Due to a planned update, the website will be temporarily down"
        />
      ))}
    </Stack>
  ),
};
