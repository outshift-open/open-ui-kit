/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { PathDisplay } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof PathDisplay> = {
  title: "Components/Path Display",
  component: PathDisplay,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Path Display"
          blurb="Path Display renders a hierarchical path string. When the path has 3 or more segments it collapses to 'first / … / last' and shows the full path in a tooltip on hover."
          guideLink=""
          importLine='import { PathDisplay } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    path: {
      control: "text",
      description: "Hierarchical path string. Segments are split on '/'.",
    },
    numberOfLevels: {
      control: { type: "number", min: 2 },
      description:
        "Minimum number of path segments before the middle collapses.",
    },
    tooltipProps: {
      control: false,
      description: "Props forwarded to the wrapping Tooltip.",
    },
    typographyProps: {
      control: false,
      description: "Props forwarded to the rendered Typography span.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PathDisplay>;

export const Default: Story = {
  args: {
    path: "Company / subgroup#1 / subgroup#2 / subgroup#3",
  },
};

export const Collapsed: Story = {
  args: {
    path: "Company / subgroup#1 / subgroup#2 / subgroup#3",
    numberOfLevels: 2,
  },
};

export const CustomThreshold: Story = {
  args: {
    path: "Company / subgroup#1 / subgroup#2 / subgroup#3",
    numberOfLevels: 5,
  },
};

export const ShortPath: Story = {
  args: {
    path: "Epsagon / Subgroup",
  },
};

export const SingleSegment: Story = {
  args: {
    path: "Epsagon",
  },
};

export const LeadingSlash: Story = {
  args: {
    path: "/Epsagon",
  },
};

export const Empty: Story = {
  args: {
    path: "",
  },
};
