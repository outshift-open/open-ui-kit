/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { GeneralSize } from "@/common";
import { Tag } from "../components/tag";
import { TagBackgroundColorVariants, TagStatus } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";

const handleStoryAction = () => undefined;

const meta: Meta<typeof Tag> = {
  title: "Components/Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Tag",
    color: TagBackgroundColorVariants.Primary,
    size: GeneralSize.Large,
  },
  argTypes: {
    color: {
      control: "select",
      options: Object.values(TagBackgroundColorVariants),
    },
    size: {
      control: "select",
      options: Object.values(GeneralSize),
    },
    status: {
      control: "select",
      options: Object.values(TagStatus),
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Tag"
          blurb="Tags categorize and label items, allowing users to filter and search for content. They support sizes, colors, status variants, avatars, icons, and deletable state."
          guideLink=""
          importLine='import { Tag } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag size={GeneralSize.Small}>Tag</Tag>
      <Tag size={GeneralSize.Medium}>Tag</Tag>
      <Tag size={GeneralSize.Large}>Tag</Tag>
    </Stack>
  ),
};

export const Deletable: Story = {
  name: "Deletable",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag size={GeneralSize.Small} onDelete={handleStoryAction}>
        Tag
      </Tag>
      <Tag size={GeneralSize.Medium} onDelete={handleStoryAction}>
        Tag
      </Tag>
      <Tag size={GeneralSize.Large} onDelete={handleStoryAction}>
        Tag
      </Tag>
    </Stack>
  ),
};

export const WithAvatar: Story = {
  name: "With Avatar",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Small}>
        Tag
      </Tag>
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Medium}>
        Tag
      </Tag>
      <Tag avatar={<AccountCircleIcon />} size={GeneralSize.Large}>
        Tag
      </Tag>
    </Stack>
  ),
};

export const ClickableWithIcon: Story = {
  name: "Clickable with Icon",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Small}
        onClick={handleStoryAction}
      >
        Tag
      </Tag>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Medium}
        onClick={handleStoryAction}
      >
        Tag
      </Tag>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Large}
        onClick={handleStoryAction}
      >
        Tag
      </Tag>
    </Stack>
  ),
};

export const Outlined: Story = {
  name: "Outlined",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag variant="outlined" size={GeneralSize.Small}>
        Tag
      </Tag>
      <Tag variant="outlined" size={GeneralSize.Medium}>
        Tag
      </Tag>
      <Tag variant="outlined" size={GeneralSize.Large}>
        Tag
      </Tag>
    </Stack>
  ),
};

export const Status: Story = {
  name: "Status",
  render: () => (
    <Stack gap="8px" direction="row" flexWrap="wrap" alignItems="center">
      {(Object.values(TagStatus) as TagStatus[]).map((s) => (
        <Tag key={s} status={s}>
          {s}
        </Tag>
      ))}
    </Stack>
  ),
};

export const Colors: Story = {
  name: "Colors",
  render: () => (
    <Stack gap="8px" direction="row" flexWrap="wrap" alignItems="center">
      {Object.values(TagBackgroundColorVariants).map((c) => (
        <Tag key={c} color={c}>
          {c}
        </Tag>
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag disabled onClick={handleStoryAction}>
        Disabled Tag
      </Tag>
      <Tag disabled onDelete={handleStoryAction}>
        Disabled deletable
      </Tag>
    </Stack>
  ),
};
