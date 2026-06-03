/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@/components";
import { OverflowTooltip } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof OverflowTooltip> = {
  title: "Components/Overflow Tooltip",
  component: OverflowTooltip,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
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

const LONG_NAME = "John Doe John Doe John Doe John Doe John Doe John Doe";
const LONG_PATH = "./path/to/a/really/long/file/name/.git";

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
