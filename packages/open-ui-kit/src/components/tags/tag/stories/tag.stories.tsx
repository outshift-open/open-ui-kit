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

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof Tag> = {
  title: "Components/Tags/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
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

/* ─── Sizes ─── */
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

/* ─── Deletable ─── */
export const Deletable: Story = {
  name: "Deletable",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag size={GeneralSize.Small} onDelete={noop}>
        Tag
      </Tag>
      <Tag size={GeneralSize.Medium} onDelete={noop}>
        Tag
      </Tag>
      <Tag size={GeneralSize.Large} onDelete={noop}>
        Tag
      </Tag>
    </Stack>
  ),
};

/* ─── With Avatar ─── */
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

/* ─── Clickable with Icon ─── */
export const ClickableWithIcon: Story = {
  name: "Clickable with Icon",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag icon={<AccountCircleIcon />} size={GeneralSize.Small} onClick={noop}>
        Tag
      </Tag>
      <Tag
        icon={<AccountCircleIcon />}
        size={GeneralSize.Medium}
        onClick={noop}
      >
        Tag
      </Tag>
      <Tag icon={<AccountCircleIcon />} size={GeneralSize.Large} onClick={noop}>
        Tag
      </Tag>
    </Stack>
  ),
};

/* ─── Outlined (overflow) ─── */
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

/* ─── Status ─── */
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

/* ─── Colors ─── */
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

/* ─── Disabled ─── */
export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <Stack gap="16px" direction="row" alignItems="center">
      <Tag disabled onClick={noop}>
        Disabled Tag
      </Tag>
      <Tag disabled onDelete={noop}>
        Disabled deletable
      </Tag>
    </Stack>
  ),
};
