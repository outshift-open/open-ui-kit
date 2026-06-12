/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Stack, Typography } from "@/components";
import type { ReactNode } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";
import type { AvatarProps } from "../types";

const avatarImage = "/assets/img.png";

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    initials: "WW",
    size: "L",
  },
  argTypes: {
    alt: { control: "text" },
    icon: { table: { disable: true } },
    initials: { control: "text" },
    size: {
      control: "radio",
      options: ["L", "M"],
    },
    src: { control: "text" },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Avatars represent a user or entity with an image, initials, or icon."
          guideLink=""
          includeStories
          importLine='import { Avatar, AvatarGroup } from "@open-ui-kit/core";'
          title="Avatar"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AvatarProps>;

const StoryRow = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <Stack direction="row" gap={2} alignItems="center">
    <Typography variant="body2Semibold" sx={{ minWidth: 72 }}>
      {label}
    </Typography>
    {children}
  </Stack>
);

const HoverState = ({ children }: { children: ReactNode }) => (
  <Box
    sx={(theme) => ({
      "& .MuiAvatar-root": {
        bgcolor: theme.palette.vars.brandBackgroundPrimaryMedium,
        color: theme.palette.vars.brandIconPrimaryStrong,
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.vars.brandIconPrimaryStrong,
      },
      "& .avatar-image-overlay": {
        opacity: 1,
      },
    })}
  >
    {children}
  </Box>
);

const DemoGroup = ({ size }: { size: "L" | "M" }) => (
  <AvatarGroup size={size}>
    <Avatar initials="WW" />
    <Avatar initials="VW" />
    <Avatar initials="AA" />
    <Avatar initials="BB" />
    <Avatar initials="CC" />
    <Avatar initials="DD" />
    <Avatar initials="EE" />
  </AvatarGroup>
);

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
};

export const Image: Story = {
  args: {
    alt: "Wade Wilson",
    src: avatarImage,
  },
  render: (args) => <Avatar {...args} />,
};

export const Initials: Story = {
  args: {
    initials: "WW",
  },
  render: (args) => <Avatar {...args} />,
};

export const Icon: Story = {
  args: {
    initials: undefined,
  },
  render: (args) => <Avatar {...args} icon={<PersonIcon />} />,
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={2} alignItems="flex-start">
      <StoryRow label="Large">
        <Avatar size="L" initials="WW" />
        <Avatar size="L" src={avatarImage} alt="Wade Wilson" />
        <Avatar size="L" icon={<PersonIcon />} />
      </StoryRow>
      <StoryRow label="Medium">
        <Avatar size="M" initials="WW" />
        <Avatar size="M" src={avatarImage} alt="Wade Wilson" />
        <Avatar size="M" icon={<PersonIcon />} />
      </StoryRow>
    </Stack>
  ),
};

export const HoverStates: Story = {
  render: () => (
    <Stack gap={2} alignItems="flex-start">
      <StoryRow label="Image">
        <Avatar size="L" src={avatarImage} alt="Wade Wilson" />
        <HoverState>
          <Avatar size="L" src={avatarImage} alt="Wade Wilson" />
        </HoverState>
      </StoryRow>
      <StoryRow label="Initials">
        <Avatar size="L" initials="WW" />
        <HoverState>
          <Avatar size="L" initials="WW" />
        </HoverState>
      </StoryRow>
      <StoryRow label="Icon">
        <Avatar size="L" icon={<PersonIcon />} />
        <HoverState>
          <Avatar size="L" icon={<PersonIcon />} />
        </HoverState>
      </StoryRow>
    </Stack>
  ),
};

export const Groups: Story = {
  render: () => (
    <Stack gap={3} alignItems="flex-start">
      <StoryRow label="Large">
        <DemoGroup size="L" />
      </StoryRow>
      <StoryRow label="Medium">
        <DemoGroup size="M" />
      </StoryRow>
    </Stack>
  ),
};
