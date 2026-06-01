/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { Severity } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SeverityBar } from "../components/severity-bar";

const meta: Meta<typeof SeverityBar> = {
  title: "Components/Severity/Bar",
  component: SeverityBar,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="SeverityBar renders a compact colored vertical bar sized 4×32px, using the severity level to determine the fill color."
          guideLink=""
          importLine='import { SeverityBar } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBar>;

export const AllSeverities: Story = {
  name: "All Severities",
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      {Object.values(Severity).map((severity) => (
        <SeverityBar key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};
