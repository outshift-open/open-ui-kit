/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { LoadingStates } from "..";
import {
  DEFAULT_SPINNER_SIZES,
  getStorySectionLabelStyles,
  getStorySizeLabelStyles,
} from "../styles";

const meta: Meta<typeof LoadingStates> = {
  title: "Components/LoadingStates",
  component: LoadingStates,
  parameters: {
    actions: { argTypesRegex: null },
    controls: { disable: true },
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

const sizeLabels = ["large", "medium", "small", "extra small"] as const;

const SpinnerLegend = () => (
  <Stack gap="40px" sx={{ width: "126px" }}>
    {["Primary", "Secondary"].map((variant) => (
      <Stack key={variant} gap="28px">
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

export const Default: Story = {
  name: "Loading States",
  render: () => (
    <Stack direction="row" gap="52px" alignItems="flex-start">
      <Stack gap="24px">
        <Typography sx={(theme) => getStorySectionLabelStyles(theme)}>
          Spinner
        </Typography>
        <Stack direction="row" gap="24px" alignItems="flex-start">
          <SpinnerLegend />
          <LoadingStates showSkeleton={false} />
        </Stack>
      </Stack>
      <Stack gap="24px">
        <Typography sx={(theme) => getStorySectionLabelStyles(theme)}>
          Skeleton
        </Typography>
        <Box sx={{ paddingTop: "92px" }}>
          <LoadingStates showSpinner={false} />
        </Box>
      </Stack>
    </Stack>
  ),
};

export const SpinnerOnly: Story = {
  name: "Spinner",
  render: () => <LoadingStates showSkeleton={false} />,
};

export const SkeletonOnly: Story = {
  name: "Skeleton",
  render: () => <LoadingStates showSpinner={false} />,
};
