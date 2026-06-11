/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Severity } from "@/common";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SeverityBar } from "../components/severity-bar";

const meta: Meta<typeof SeverityBar> = {
  title: "Components/Severity/Bar",
  component: SeverityBar,
  tags: ["autodocs"],
  args: {
    severity: Severity.CRITICAL,
  },
  argTypes: {
    severity: {
      control: "select",
      options: Object.values(Severity),
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Severity Bar"
          blurb="SeverityBar renders a compact colored vertical bar sized 4×32px, using the severity level to determine the fill color."
          guideLink=""
          importLine='import { SeverityBar } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBar>;

export const Default: Story = {
  render: (args) => <SeverityBar {...args} />,
};

export const AllSeverities: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center">
      {Object.values(Severity).map((severity) => (
        <SeverityBar key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};
