/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Apps } from "@mui/icons-material";
import { FloatingButton } from "../components/floating-button";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="A pill-shaped floating button with a drop shadow. Supports primary and secondary variants in medium and small sizes, with optional leading or trailing icons."
          guideLink=""
          importLine={`import { FloatingButton } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const AllVariants: Story = {
  render: () => (
    <Stack gap={3}>
      <Stack direction="row" gap={2} alignItems="center">
        <FloatingButton variant="primary" size="medium">
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="medium" startIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="medium" endIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="medium">
          <Apps />
        </FloatingButton>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <FloatingButton variant="secondary" size="medium">
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="medium" startIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="medium" endIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="medium">
          <Apps />
        </FloatingButton>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <FloatingButton variant="primary" size="small">
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="small" startIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="small" endIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="primary" size="small">
          <Apps />
        </FloatingButton>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <FloatingButton variant="secondary" size="small">
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="small" startIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="small" endIcon={<Apps />}>
          Button
        </FloatingButton>
        <FloatingButton variant="secondary" size="small">
          <Apps />
        </FloatingButton>
      </Stack>
    </Stack>
  ),
};

export const PrimaryMedium: Story = {
  name: "Primary / Medium",
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
};

export const SecondaryMedium: Story = {
  name: "Secondary / Medium",
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};

export const PrimarySmall: Story = {
  name: "Primary / Small",
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
  },
};

export const SecondarySmall: Story = {
  name: "Secondary / Small",
  args: {
    variant: "secondary",
    size: "small",
    children: "Button",
  },
};

export const IconOnly: Story = {
  render: () => (
    <Stack direction="row" gap={2}>
      <FloatingButton variant="primary" size="medium">
        <Apps />
      </FloatingButton>
      <FloatingButton variant="secondary" size="medium">
        <Apps />
      </FloatingButton>
      <FloatingButton variant="primary" size="small">
        <Apps />
      </FloatingButton>
      <FloatingButton variant="secondary" size="small">
        <Apps />
      </FloatingButton>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" gap={2}>
      <FloatingButton variant="primary" size="medium" disabled>
        Button
      </FloatingButton>
      <FloatingButton variant="secondary" size="medium" disabled>
        Button
      </FloatingButton>
    </Stack>
  ),
};
