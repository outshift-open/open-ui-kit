/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack } from "@/components";
import { ImageGrid } from "@/custom-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { FloatingButton, type FloatingButtonProps } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  args: {
    children: "Button",
    size: "medium",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label or icon-only child.",
    },
    size: {
      control: "radio",
      options: ["medium", "small"],
      description: "Visual scale. Medium is 40px tall; small is 32px tall.",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description:
        "Primary uses the accent border; secondary uses the neutral border.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the floating action.",
    },
  },
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

const variants: FloatingButtonProps["variant"][] = ["primary", "secondary"];
const sizes: FloatingButtonProps["size"][] = ["medium", "small"];

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap={3} alignItems="center">
      {variants.map((variant) => (
        <FloatingButton key={variant} variant={variant}>
          Button
        </FloatingButton>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={3} alignItems="center">
      {sizes.map((size) => (
        <FloatingButton key={size} size={size}>
          Button
        </FloatingButton>
      ))}
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" gap={3} alignItems="center">
      <FloatingButton startIcon={<ImageGrid />}>Button</FloatingButton>
      <FloatingButton endIcon={<ImageGrid />}>Button</FloatingButton>
    </Stack>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Stack direction="row" gap={3} alignItems="center">
      {variants.map((variant) => (
        <FloatingButton
          key={variant}
          aria-label={`${variant} floating action`}
          variant={variant}
        >
          <ImageGrid />
        </FloatingButton>
      ))}
    </Stack>
  ),
};

export const Matrix: Story = {
  render: () => (
    <Stack gap={7}>
      {sizes.map((size) => (
        <Stack key={size} direction="column" gap={2.5}>
          {variants.map((variant) => (
            <Stack key={variant} direction="row" gap={3} alignItems="center">
              <FloatingButton variant={variant} size={size}>
                Button
              </FloatingButton>
              <FloatingButton
                variant={variant}
                size={size}
                startIcon={<ImageGrid />}
              >
                Button
              </FloatingButton>
              <FloatingButton
                variant={variant}
                size={size}
                endIcon={<ImageGrid />}
              >
                Button
              </FloatingButton>
              <FloatingButton
                aria-label={`${variant} ${size} floating action`}
                variant={variant}
                size={size}
              >
                <ImageGrid />
              </FloatingButton>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack direction="row" gap={3} alignItems="center">
      <FloatingButton variant="primary" disabled>
        Button
      </FloatingButton>
      <FloatingButton variant="secondary" disabled>
        Button
      </FloatingButton>
    </Stack>
  ),
};
