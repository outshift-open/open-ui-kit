/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GeneralSize, Severity } from "@/common";
import { CopyButton } from "@/components/copy-button";
import { SeverityBadge } from "@/components/severity-badge";
import { Tag, TagStatus } from "@/components/tags";
import { AllDots } from "@/custom-icons";
import { KeyValuePairs } from "..";
import {
  DEFAULT_KEY_VALUE_ITEMS,
  getInlineCodeStyles,
  getStoryDotStyles,
  getStoryLinkStyles,
  getStorySectionTitleStyles,
  getStoryValuePanelStyles,
} from "../styles";

const meta: Meta<typeof KeyValuePairs> = {
  title: "Components/KeyValuePairs",
  component: KeyValuePairs,
  parameters: {
    actions: { argTypesRegex: null },
    controls: { disable: true },
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
};

export default meta;
type Story = StoryObj<typeof meta>;

const repeatedItems = Array.from({ length: 4 }).flatMap(() =>
  DEFAULT_KEY_VALUE_ITEMS.map((item) => ({ ...item })),
);

const pairedItems = Array.from({ length: 2 }).flatMap(() =>
  DEFAULT_KEY_VALUE_ITEMS.map((item) => ({ ...item })),
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography sx={(theme) => getStorySectionTitleStyles(theme)}>
    {children}
  </Typography>
);

const ValueExamples = () => (
  <Stack sx={getStoryValuePanelStyles()} alignItems="flex-start">
    <Typography variant="body2">Value</Typography>
    <Typography variant="body2">Value</Typography>
    <Box component="a" href="#" sx={(theme) => getStoryLinkStyles(theme)}>
      Link
    </Box>
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
    <Stack direction="row" gap={1} flexWrap="wrap" maxWidth="240px">
      {[
        "Tag",
        "Tag",
        "Tag",
        "Tag",
        "+3",
        "Tag",
        "Tag",
        "Tag",
        "+3",
        "Tag",
        "Tag",
        "Tag",
        "+3",
      ].map((label, index) => (
        <Tag key={`${label}-${index}`} size={GeneralSize.Small}>
          {label}
        </Tag>
      ))}
    </Stack>
    <Tag status={TagStatus.Positive} size={GeneralSize.Small}>
      Positive
    </Tag>
    <Stack direction="row" gap={1} alignItems="center">
      {Array.from({ length: 5 }).map((_, index) => (
        <SeverityBadge key={index} severity={Severity.INFORMATION} />
      ))}
      <Typography variant="body2">+2</Typography>
    </Stack>
    <Stack direction="row" gap={1} alignItems="center">
      {[0, 1, 2, 3, 4].map((index) => (
        <AllDots key={index} sx={{ fontSize: "16px" }} />
      ))}
      <Typography variant="body2">#</Typography>
      <AllDots sx={{ fontSize: "16px" }} />
      <Typography variant="body2">#</Typography>
    </Stack>
    <Box sx={(theme) => getInlineCodeStyles(theme)}>
      <Box component="code">this-is-inline-code</Box>
      <CopyButton text="this-is-inline-code" size="small" disableMargin />
    </Box>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack direction="row" gap={6} alignItems="flex-start">
      <Stack gap={3}>
        <SectionTitle>Key Value Pairs</SectionTitle>
        <Stack gap={7}>
          <KeyValuePairs items={repeatedItems} columns={4} />
          <KeyValuePairs items={repeatedItems} columns={4} layout="stacked" />
        </Stack>
      </Stack>
      <Stack gap={3}>
        <SectionTitle>Key position</SectionTitle>
        <Stack gap={6}>
          <KeyValuePairs items={pairedItems} columns={2} columnGap="120px" />
          <KeyValuePairs
            items={pairedItems}
            columns={2}
            layout="stacked"
            columnGap="120px"
          />
        </Stack>
      </Stack>
      <Stack gap={3}>
        <SectionTitle>Value</SectionTitle>
        <ValueExamples />
      </Stack>
    </Stack>
  ),
};

export const Inline: Story = {
  name: "Key Value Pairs",
  render: () => <KeyValuePairs items={DEFAULT_KEY_VALUE_ITEMS} />,
};

export const KeyPosition: Story = {
  name: "Key position",
  render: () => (
    <KeyValuePairs
      items={DEFAULT_KEY_VALUE_ITEMS}
      columns={2}
      columnGap="120px"
    />
  ),
};

export const Stacked: Story = {
  render: () => (
    <KeyValuePairs items={DEFAULT_KEY_VALUE_ITEMS} layout="stacked" />
  ),
};
