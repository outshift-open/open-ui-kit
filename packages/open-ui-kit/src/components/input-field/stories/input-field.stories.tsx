/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { CloseCircleOutline } from "@/custom-icons";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { InputField } from "..";
import {
  getStoryFocusedSx,
  getStoryHoverSx,
  getStoryNegativeSx,
} from "../styles";

const DocsPage = () => (
  <DocsHeader
    title="Input Field"
    blurb="Input fields allow users to input or configure information."
    includeStories={true}
    importLine={`import { InputField } from "@open-ui-kit/core";`}
  />
);

const meta = {
  title: "Components/Input Field",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: DocsPage,
    },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder text",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    focused: { control: "boolean" },
    multiline: { control: "boolean" },
    size: {
      control: "inline-radio",
      options: [undefined, "small"],
    },
    type: {
      control: "select",
      options: ["text", "number", "email", "password", "search"],
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    slotProps: { table: { disable: true } },
    sx: { table: { disable: true } },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const fieldWidth = { xs: "min(280px, 100%)", sm: "280px" };

const StoryCanvas = ({ children }: { children: ReactNode }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.vars.baseBackgroundStrong,
      boxSizing: "border-box",
      color: theme.palette.vars.baseTextDefault,
      overflowX: "hidden",
      p: { xs: 2, sm: 5 },
      width: "100%",
    })}
  >
    {children}
  </Box>
);

const ClearAdornment = () => (
  <Box
    aria-hidden="true"
    sx={(theme) => ({
      color: theme.palette.vars.controlIconWeak,
      display: "inline-flex",
    })}
  >
    <CloseCircleOutline sx={{ height: 20, width: 20 }} />
  </Box>
);

const storyFieldSx = { width: fieldWidth };

export const Default: Story = {
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={storyFieldSx} />
    </StoryCanvas>
  ),
};

export const WithHelperText: Story = {
  name: "With helper text",
  args: {
    helperText: "Keep the hint short.",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={storyFieldSx} />
    </StoryCanvas>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <StoryCanvas>
      <Stack
        direction="row"
        alignItems="flex-start"
        gap={{ xs: 4, sm: 10 }}
        sx={{ flexWrap: "wrap" }}
      >
        <Stack spacing={2} sx={{ flexShrink: 0, width: fieldWidth }}>
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            Large
          </Typography>
          <InputField {...args} sx={{ width: 1 }} />
        </Stack>
        <Stack spacing={2} sx={{ flexShrink: 0, width: fieldWidth }}>
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            Medium
          </Typography>
          <InputField {...args} size="small" sx={{ width: 1 }} />
        </Stack>
      </Stack>
    </StoryCanvas>
  ),
};

export const WithAdornment: Story = {
  name: "With adornment",
  args: {
    defaultValue: "Entered text",
    slotProps: {
      input: {
        endAdornment: <ClearAdornment />,
      },
    },
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={storyFieldSx} />
    </StoryCanvas>
  ),
};

export const Focused: Story = {
  args: {
    defaultValue: "Entered text",
    focused: true,
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={[getStoryFocusedSx, storyFieldSx]} />
    </StoryCanvas>
  ),
};

export const Hover: Story = {
  args: {
    defaultValue: "Entered text",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={[getStoryHoverSx, storyFieldSx]} />
    </StoryCanvas>
  ),
};

export const ErrorState: Story = {
  name: "Error state",
  args: {
    defaultValue: "Entered text",
    error: true,
    helperText: "Review this value.",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={[getStoryNegativeSx, storyFieldSx]} />
    </StoryCanvas>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: "Entered text",
    disabled: true,
    helperText: "This field is unavailable.",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={storyFieldSx} />
    </StoryCanvas>
  ),
};

export const Multiline: Story = {
  args: {
    helperText: "Text can wrap across multiple lines.",
    minRows: 2,
    multiline: true,
    placeholder: "Write a short note",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={storyFieldSx} />
    </StoryCanvas>
  ),
};

export const Number: Story = {
  args: {
    defaultValue: 1,
    label: "Amount",
    placeholder: "",
    type: "number",
  },
  render: (args) => (
    <StoryCanvas>
      <InputField {...args} sx={{ width: "68px" }} />
    </StoryCanvas>
  ),
};
