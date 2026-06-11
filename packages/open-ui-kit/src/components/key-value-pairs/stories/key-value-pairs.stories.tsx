/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GeneralSize, Severity } from "@/common";
import { CopyButton } from "@/components/copy-button";
import { SeverityBadge } from "@/components/severity-badge";
import { Tag } from "@/components/tags";
import { KeyValuePairs } from "..";
import {
  DEFAULT_KEY_VALUE_ITEMS,
  getInlineCodeStyles,
  getStoryDotStyles,
  getStoryLinkStyles,
} from "../styles";

const meta: Meta<typeof KeyValuePairs> = {
  title: "Components/KeyValuePairs",
  component: KeyValuePairs,
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="KeyValuePairs"
          blurb="Key value pairs display compact labels and values in inline or stacked layouts."
          importLine={`import { KeyValuePairs } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
  args: {
    items: DEFAULT_KEY_VALUE_ITEMS,
    layout: "inline",
    columns: 1,
    keyWidth: "72px",
    pairGap: "16px",
    columnGap: "72px",
    rowGap: "12px",
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["inline", "stacked"],
    },
    columns: { control: "number" },
    keyWidth: { control: "text" },
    pairGap: { control: "text" },
    columnGap: { control: "text" },
    rowGap: { control: "text" },
    items: { control: { disable: true } },
    sx: { control: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const multiColumnItems = Array.from({ length: 2 }).flatMap(() =>
  DEFAULT_KEY_VALUE_ITEMS.map((item) => ({ ...item })),
);

const RichValueExamples = [
  { key: "Name", value: "Value" },
  {
    key: "Link",
    value: (
      <Box component="a" href="#" sx={(theme) => getStoryLinkStyles(theme)}>
        Link
      </Box>
    ),
  },
  {
    key: "Summary",
    value: (
      <Stack direction="row" gap={1} alignItems="center">
        <Typography variant="body2">Total: #</Typography>
        {["Text", "Text", "Text"].map((label, index) => (
          <Stack key={index} direction="row" gap={0.75} alignItems="center">
            <Box sx={(theme) => getStoryDotStyles(theme)} />
            <Typography variant="body2" fontWeight={600}>
              {label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    ),
  },
  {
    key: "Tags",
    value: (
      <Stack direction="row" gap={1} flexWrap="wrap" maxWidth="240px">
        {["Tag", "Tag", "Tag", "Tag", "+3", "Tag"].map((label, index) => (
          <Tag key={`${label}-${index}`} size={GeneralSize.Small}>
            {label}
          </Tag>
        ))}
      </Stack>
    ),
  },
  {
    key: "Severity",
    value: (
      <Stack direction="row" gap={1} alignItems="center">
        {Array.from({ length: 5 }).map((_, index) => (
          <SeverityBadge key={index} severity={Severity.INFORMATION} />
        ))}
        <Typography variant="body2">+2</Typography>
      </Stack>
    ),
  },
  {
    key: "Code",
    value: (
      <Box sx={(theme) => getInlineCodeStyles(theme)}>
        <Box component="code">this-is-inline-code</Box>
        <CopyButton text="this-is-inline-code" size="small" disableMargin />
      </Box>
    ),
  },
] as const;

export const Default: Story = {
  render: (args) => <KeyValuePairs {...args} />,
};

export const Stacked: Story = {
  args: {
    layout: "stacked",
  },
  render: (args) => <KeyValuePairs {...args} />,
};

export const MultiColumn: Story = {
  args: {
    items: multiColumnItems,
    columns: 2,
    columnGap: "120px",
  },
  render: (args) => <KeyValuePairs {...args} />,
};

export const RichValues: Story = {
  args: {
    items: RichValueExamples,
    keyWidth: "88px",
    rowGap: "16px",
  },
  render: (args) => <KeyValuePairs {...args} />,
};
