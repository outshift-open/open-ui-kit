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
          importLine='import { Avatar, AvatarGroup } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ImageLarge: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="L" src="/assets/img.png" alt="User" />
    </Stack>
  ),
};

export const InitialsLarge: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="L" initials="WW" />
    </Stack>
  ),
};

export const IconLarge: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="L" icon={<PersonIcon />} />
    </Stack>
  ),
};

export const InitialsMedium: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="M" initials="WW" />
    </Stack>
  ),
};

export const IconMedium: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar size="M" icon={<PersonIcon />} />
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar size="L" src="/assets/img.png" alt="User" />
        <Avatar size="L" initials="WW" />
        <Avatar size="L" icon={<PersonIcon />} />
        <Avatar size="M" src="/assets/img.png" alt="User" />
        <Avatar size="M" initials="WW" />
        <Avatar size="M" icon={<PersonIcon />} />
      </Stack>
    </Stack>
  ),
};

export const Group: Story = {
  render: () => (
    <Stack spacing={2}>
      <AvatarGroup size="L">
        <Avatar initials="AA" />
        <Avatar initials="BB" />
        <Avatar initials="CC" />
        <Avatar initials="DD" />
        <Avatar initials="EE" />
      </AvatarGroup>
      <AvatarGroup size="M">
        <Avatar initials="AA" />
        <Avatar initials="BB" />
        <Avatar initials="CC" />
        <Avatar initials="DD" />
        <Avatar initials="EE" />
      </AvatarGroup>
    </Stack>
  ),
};
