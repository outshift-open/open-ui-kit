/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Avatar } from "../components/avatar";
import { AvatarGroup } from "../components/avatar-group";

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
          includeStories={true}
          importLine='import { Avatar, AvatarGroup } from "@open-ui-kit/core";'
          title="Avatar"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const avatarImage = "/assets/img.png";

const figmaLabel = (label: string) => (
  <Typography
    variant="caption"
    sx={{
      alignSelf: "flex-start",
      bgcolor: "#D4B3FF",
      borderRadius: "4px",
      color: "#4C00AE",
      fontWeight: 500,
      px: 0.5,
      py: 0.25,
    }}
  >
    {label}
  </Typography>
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

const AvatarStateRow = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
    {figmaLabel(label)}
    {children}
    <HoverState>{children}</HoverState>
  </Stack>
);

const VariantRows = ({ size }: { size: "L" | "M" }) => (
  <Stack gap={2}>
    <AvatarStateRow label={`${size} Image`}>
      <Avatar size={size} src={avatarImage} alt="Wade Wilson" />
    </AvatarStateRow>
    <AvatarStateRow label={`${size} Text`}>
      <Avatar size={size} initials="WW" />
    </AvatarStateRow>
    <AvatarStateRow label={`${size} Icon`}>
      <Avatar size={size} icon={<PersonIcon />} />
    </AvatarStateRow>
  </Stack>
);

const GroupExample = ({ size }: { size: "L" | "M" }) => (
  <Stack gap={1}>
    {figmaLabel(size === "L" ? "Large" : "Medium")}
    <AvatarGroup size={size}>
      <Avatar initials="WW" />
      <Avatar initials="WW" />
      <Avatar initials="WW" />
      <Avatar initials="WW" />
      <Avatar initials="WW" />
      <Avatar initials="WW" />
      <Avatar initials="WW" />
    </AvatarGroup>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack direction="row" gap={10} sx={{ alignItems: "flex-start" }}>
      <Stack gap={6}>
        <VariantRows size="L" />
        <VariantRows size="M" />
      </Stack>

      <Stack gap={4}>
        <GroupExample size="L" />
        <GroupExample size="M" />
      </Stack>
    </Stack>
  ),
};

export const LImage: Story = {
  render: () => <Avatar size="L" src={avatarImage} alt="Wade Wilson" />,
};

export const LText: Story = {
  render: () => <Avatar size="L" initials="WW" />,
};

export const LIcon: Story = {
  render: () => <Avatar size="L" icon={<PersonIcon />} />,
};

export const MImage: Story = {
  render: () => <Avatar size="M" src={avatarImage} alt="Wade Wilson" />,
};

export const MText: Story = {
  render: () => <Avatar size="M" initials="WW" />,
};

export const MIcon: Story = {
  render: () => <Avatar size="M" icon={<PersonIcon />} />,
};

export const LargeGroup: Story = {
  name: "Large",
  render: () => <GroupExample size="L" />,
};

export const MediumGroup: Story = {
  name: "Medium",
  render: () => <GroupExample size="M" />,
};
