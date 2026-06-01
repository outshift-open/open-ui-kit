/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@mui/material";
import { LoadingErrorState } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof LoadingErrorState> = {
  title: "Components/Loading Error State",
  component: LoadingErrorState,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="LoadingErrorState is an API data handler wrapper. Pass loading, error, and data — it renders a spinner or skeleton while loading, an error empty-state on failure, an empty-data state when data is empty, and your content when everything is ready."
          guideLink=""
          importLine='import { LoadingErrorState } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingErrorState>;

export const LoadingSpinner: Story = {
  args: { loading: true, loadingVariant: "spinner" },
};

export const LoadingSkeleton: Story = {
  args: { loading: true, loadingVariant: "skeleton" },
};

export const LoadingCustom: Story = {
  args: {
    loading: true,
    loadingVariant: "custom",
    customLoadingContent: (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          Loading your data…
        </Typography>
      </Box>
    ),
  },
};

export const ErrorState: Story = {
  args: { error: true },
};

export const CustomErrorMessage: Story = {
  args: {
    error: true,
    errorStateProps: {
      title: "No access",
      description: "You do not have permission to view this resource.",
      actionTitle: "Go back",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      actionCallback: () => {},
    },
  },
};

export const EmptyData: Story = {
  args: { data: [] },
};

export const CustomEmptyMessage: Story = {
  args: {
    data: null,
    emptyStateProps: {
      title: "No results",
      description:
        "Try adjusting your filters to find what you're looking for.",
    },
  },
};

export const WithRenderFunction: Story = {
  args: {
    data: { name: "Cisco", count: 42 },
    children: (data: unknown) => {
      const d = data as { name: string; count: number };
      return (
        <Typography variant="body1">
          {d.name} — {d.count} items loaded
        </Typography>
      );
    },
  },
};

export const WithStaticChildren: Story = {
  args: {
    data: "present",
    children: (
      <Typography variant="body1">
        Static children rendered once data is ready.
      </Typography>
    ),
  },
};
