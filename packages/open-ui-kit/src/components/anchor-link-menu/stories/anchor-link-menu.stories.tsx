/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  AnchorLinkMenu,
  AnchorLinkMenuProps,
} from "../components/anchor-link-menu";

const meta: Meta<AnchorLinkMenuProps> = {
  title: "Components/AnchorLinkMenu",
  component: AnchorLinkMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Anchor Link Menu provides navigation links that allow users to jump to sections on a page. It supports both a rail and floating variant."
          guideLink=""
          importLine={`import { AnchorLinkMenu } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AnchorLinkMenuProps>;

const items = [
  { id: "section-1", label: "Section 1" },
  { id: "section-2", label: "Section 2" },
  { id: "section-3", label: "Section 3" },
];

const itemsWithSubsections = [
  { id: "section-1", label: "Section 1" },
  { id: "section-1-1", label: "Subsection 1.1", subsection: true },
  { id: "section-1-2", label: "Subsection 1.2", subsection: true },
  { id: "section-2", label: "Section 2" },
  { id: "section-2-1", label: "Subsection 2.1", subsection: true },
  { id: "section-3", label: "Section 3" },
];

export const Default: Story = {
  args: {
    items,
    selectedId: "section-1",
    variant: "rail",
  },
};

export const WithTitle: Story = {
  args: {
    items,
    selectedId: "section-2",
    title: "On this page",
    variant: "rail",
  },
};

export const Floating: Story = {
  args: {
    items,
    selectedId: "section-1",
    title: "On this page",
    variant: "floating",
  },
};

export const WithSubsections: Story = {
  args: {
    items: itemsWithSubsections,
    selectedId: "section-1-1",
    title: "On this page",
    variant: "rail",
  },
};

export const FloatingWithSubsections: Story = {
  args: {
    items: itemsWithSubsections,
    selectedId: "section-2-1",
    title: "Contents",
    variant: "floating",
  },
};

export const NoSelection: Story = {
  args: {
    items,
    variant: "rail",
  },
};
