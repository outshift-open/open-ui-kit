import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup, AvatarProps, Stack } from "@mui/material";
import { FileCopy } from "@mui/icons-material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Avatars are found throughout material design with uses in everything from tables to dialog menus.
 */
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Avatars are found throughout material design with uses in everything from tables to dialog menus."
          guideLink=""
          importLine='import { Avatar } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const AvatarStory = (args: AvatarProps) => (
  <Avatar variant={args.variant} src={args.src}>
    {args.children}
  </Avatar>
);

export const Example: Story = {
  render: AvatarStory,
  args: {
    variant: "circular",
  },
};

export const AvatarWithInitials: Story = {
  render: AvatarStory,
  args: {
    children: "SG",
  },
};

export const AvatarWithIcon: Story = {
  render: AvatarStory,
  args: {
    children: <FileCopy />,
  },
};

export const AvatarWithImage: Story = {
  render: AvatarStory,
  args: {
    src: "/assets/img.png",
  },
};

export const AvatarsGroup: Story = {
  render: (args) => (
    <Stack>
      <AvatarGroup sx={{ justifyContent: "flex-end" }}>
        <AvatarStory {...args} />
        <AvatarStory {...args} />
        <AvatarStory {...args} />
      </AvatarGroup>
      <AvatarGroup
        variant={args.variant}
        total={10}
        sx={{ justifyContent: "flex-end" }}
      >
        <AvatarStory {...args} />
        <AvatarStory {...args} />
        <AvatarStory {...args} />
      </AvatarGroup>
    </Stack>
  ),
  args: {
    children: "SG",
  },
};
