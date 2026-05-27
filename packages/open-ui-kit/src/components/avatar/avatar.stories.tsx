/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "./components/avatar";
import { AvatarGroup } from "./components/avatar-group";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Avatars represent a user or entity with an image, initials, or icon."
          guideLink=""
          importLine={`import { Avatar, AvatarGroup } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ImageLarge: Story = {
  name: "Image — Large",
  render: () => <Avatar size="L" src="/assets/img.png" alt="User" />,
};

export const TextLarge: Story = {
  name: "Text — Large",
  render: () => <Avatar size="L" initials="WW" />,
};

export const IconLarge: Story = {
  name: "Icon — Large",
  render: () => <Avatar size="L" icon={<PersonIcon />} />,
};

export const ImageMedium: Story = {
  name: "Image — Medium",
  render: () => <Avatar size="M" src="/assets/img.png" alt="User" />,
};

export const TextMedium: Story = {
  name: "Text — Medium",
  render: () => <Avatar size="M" initials="WW" />,
};

export const IconMedium: Story = {
  name: "Icon — Medium",
  render: () => <Avatar size="M" icon={<PersonIcon />} />,
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar size="L" src="/assets/img.png" alt="User" />
        <Avatar size="L" initials="WW" />
        <Avatar size="L" icon={<PersonIcon />} />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar size="M" src="/assets/img.png" alt="User" />
        <Avatar size="M" initials="WW" />
        <Avatar size="M" icon={<PersonIcon />} />
      </Stack>
    </Stack>
  ),
};

export const GroupLarge: Story = {
  name: "Group — Large",
  render: () => (
    <AvatarGroup size="L">
      <Avatar initials="WW" />
      <Avatar initials="VW" />
      <Avatar initials="VW" />
      <Avatar initials="VW" />
      <Avatar initials="AA" />
      <Avatar initials="BB" />
      <Avatar initials="CC" />
    </AvatarGroup>
  ),
};

export const GroupMedium: Story = {
  name: "Group — Medium",
  render: () => (
    <AvatarGroup size="M">
      <Avatar initials="WW" />
      <Avatar initials="VW" />
      <Avatar initials="VW" />
      <Avatar initials="VW" />
      <Avatar initials="AA" />
      <Avatar initials="BB" />
      <Avatar initials="CC" />
    </AvatarGroup>
  ),
};
