/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { LoadingStates } from "..";
import {
  DEFAULT_SKELETON_STATES,
  DEFAULT_SPINNER_SIZES,
  getStorySectionLabelStyles,
  getStorySizeLabelStyles,
} from "../styles";

const meta: Meta<typeof LoadingStates> = {
  title: "Components/LoadingStates",
  component: LoadingStates,
  args: {
    showSkeleton: true,
    showSpinner: true,
    skeletonStates: DEFAULT_SKELETON_STATES,
    spinnerSizes: DEFAULT_SPINNER_SIZES,
  },
  argTypes: {
    showSkeleton: { control: "boolean" },
    showSpinner: { control: "boolean" },
    skeletonStates: {
      control: "check",
      options: DEFAULT_SKELETON_STATES,
    },
    spinnerSizes: { table: { disable: true } },
    sx: { table: { disable: true } },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Loading States"
          blurb="Loading states collect spinner and skeleton patterns for indeterminate progress and placeholder content."
          importLine={`import { LoadingStates } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const storyStackStyles = {
  alignItems: "flex-start",
};

const sizeLabels = ["large", "medium", "small", "extra small"] as const;

const SpinnerLabels = () => (
  <Stack gap="40px" sx={{ width: "126px" }}>
    {["Primary", "Secondary"].map((variant) => (
      <Stack key={variant} gap="28px" sx={storyStackStyles}>
        <Typography sx={(theme) => getStorySectionLabelStyles(theme)}>
          {variant}
        </Typography>
        {DEFAULT_SPINNER_SIZES.map((size, index) => (
          <Typography
            key={`${variant}-${size}`}
            sx={(theme) => getStorySizeLabelStyles(theme)}
          >
            {sizeLabels[index]}
          </Typography>
        ))}
      </Stack>
    ))}
  </Stack>
);

export const Default: Story = {};

export const SpinnerOnly: Story = {
  args: {
    showSkeleton: false,
  },
  render: (args) => (
    <Stack direction="row" gap="24px" sx={storyStackStyles}>
      <SpinnerLabels />
      <LoadingStates {...args} />
    </Stack>
  ),
};

export const SkeletonOnly: Story = {
  args: {
    showSpinner: false,
  },
};

export const LoadingSkeleton: Story = {
  args: {
    showSpinner: false,
    skeletonStates: ["loading"],
  },
};

export const StaticSkeleton: Story = {
  args: {
    showSpinner: false,
    skeletonStates: ["failure"],
  },
};

export const SpinnerSizes: Story = {
  args: {
    showSkeleton: false,
  },
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Typography sx={(theme) => getStorySectionLabelStyles(theme)}>
        Spinner sizes
      </Typography>
      <Box>
        <LoadingStates {...args} />
      </Box>
    </Stack>
  ),
};
