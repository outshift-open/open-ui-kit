/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Hub } from "@mui/icons-material";
import { FloatingButton } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Floating button"
          blurb="A pill-shaped floating button with a drop shadow. Supports primary and secondary variants in medium and small sizes, with optional leading or trailing icons."
          importLine={`import { FloatingButton } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

export const AllVariants: Story = {
  name: "Floating button",
  render: () => (
    <Stack gap={7}>
      <Stack direction="column" gap={2.5}>
        <Stack direction="row" gap={3} alignItems="center">
          <FloatingButton variant="primary" size="medium">
            Button
          </FloatingButton>
          <FloatingButton variant="primary" size="medium" startIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton variant="primary" size="medium" endIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton aria-label="Button" variant="primary" size="medium">
            <Hub />
          </FloatingButton>
        </Stack>
        <Stack direction="row" gap={3} alignItems="center">
          <FloatingButton variant="secondary" size="medium">
            Button
          </FloatingButton>
          <FloatingButton variant="secondary" size="medium" startIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton variant="secondary" size="medium" endIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton aria-label="Button" variant="secondary" size="medium">
            <Hub />
          </FloatingButton>
        </Stack>
      </Stack>
      <Stack direction="column" gap={2.5}>
        <Stack direction="row" gap={3} alignItems="center">
          <FloatingButton variant="primary" size="small">
            Button
          </FloatingButton>
          <FloatingButton variant="primary" size="small" startIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton variant="primary" size="small" endIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton aria-label="Button" variant="primary" size="small">
            <Hub />
          </FloatingButton>
        </Stack>
        <Stack direction="row" gap={3} alignItems="center">
          <FloatingButton variant="secondary" size="small">
            Button
          </FloatingButton>
          <FloatingButton variant="secondary" size="small" startIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton variant="secondary" size="small" endIcon={<Hub />}>
            Button
          </FloatingButton>
          <FloatingButton aria-label="Button" variant="secondary" size="small">
            <Hub />
          </FloatingButton>
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const ContentTextOnlyVariantPrimarySizeMedium: Story = {
  name: "Content=Text only, Variant=Primary, Size=Medium",
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
  },
};

export const ContentTextOnlyVariantSecondarySizeMedium: Story = {
  name: "Content=Text only, Variant=Secondary, Size=Medium",
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};

export const ContentTextOnlyVariantPrimarySizeSmall: Story = {
  name: "Content=Text only, Variant=Primary, Size=Small",
  args: {
    variant: "primary",
    size: "small",
    children: "Button",
  },
};

export const ContentTextOnlyVariantSecondarySizeSmall: Story = {
  name: "Content=Text only, Variant=Secondary, Size=Small",
  args: {
    variant: "secondary",
    size: "small",
    children: "Button",
  },
};

export const ContentLeftIconVariantPrimarySizeMedium: Story = {
  name: "Content=Left icon, Variant=Primary, Size=Medium",
  args: {
    variant: "primary",
    size: "medium",
    startIcon: <Hub />,
    children: "Button",
  },
};

export const ContentRightIconVariantPrimarySizeMedium: Story = {
  name: "Content=Right icon, Variant=Primary, Size=Medium",
  args: {
    variant: "primary",
    size: "medium",
    endIcon: <Hub />,
    children: "Button",
  },
};

export const ContentIconOnlyVariantPrimarySizeMedium: Story = {
  name: "Content=Icon only, Variant=Primary, Size=Medium",
  args: {
    "aria-label": "Button",
    variant: "primary",
    size: "medium",
    children: <Hub />,
  },
};

export const ContentIconOnlyVariantSecondarySizeMedium: Story = {
  name: "Content=Icon only, Variant=Secondary, Size=Medium",
  args: {
    "aria-label": "Button",
    variant: "secondary",
    size: "medium",
    children: <Hub />,
  },
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <FloatingButton variant="primary" size="medium" disabled>
        Button
      </FloatingButton>
      <FloatingButton variant="secondary" size="medium" disabled>
        Button
      </FloatingButton>
    </Stack>
  ),
};
