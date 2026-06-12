/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverflowTooltip } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const LONG_NAME = "John Doe John Doe John Doe John Doe John Doe John Doe";
const LONG_PATH = "./path/to/a/really/long/file/name/.git";

const meta: Meta<typeof OverflowTooltip> = {
  title: "Components/Overflow Tooltip",
  component: OverflowTooltip,
  tags: ["autodocs"],
  args: {
    ellipsisDirection: "end",
    value: LONG_NAME,
    children: LONG_NAME,
  },
  argTypes: {
    ellipsisDirection: {
      control: "select",
      options: ["end", "start"],
      description:
        "Controls whether the beginning or end of the text is clipped.",
    },
    value: {
      control: "text",
      description: "Tooltip content shown only when the text overflows.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Overflow Tooltip"
          blurb="Overflow Tooltip shows a tooltip only when the text content overflows its container. It supports end-truncation (default) and start-truncation for path-like strings."
          guideLink=""
          importLine='import { OverflowTooltip } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof OverflowTooltip>;

export const Overflowing: Story = {
  render: () => (
    <Box maxWidth={120}>
      <Typography variant="body2" component="div">
        <OverflowTooltip value={LONG_NAME}>{LONG_NAME}</OverflowTooltip>
      </Typography>
    </Box>
  ),
};

export const NotOverflowing: Story = {
  render: () => (
    <Box maxWidth={200}>
      <Typography variant="body2" component="div">
        <OverflowTooltip value="John Doe">John Doe</OverflowTooltip>
      </Typography>
    </Box>
  ),
};

export const StartTruncation: Story = {
  render: () => (
    <Box maxWidth={120}>
      <Typography variant="body2" component="div">
        <OverflowTooltip value={LONG_PATH} ellipsisDirection="start">
          {LONG_PATH}
        </OverflowTooltip>
      </Typography>
    </Box>
  ),
};
