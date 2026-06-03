/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { PageTitle } from "../components/page-title";
import type { PageTitleProps } from "../types";
import { Button } from "@/components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof PageTitle> = {
  title: "Templates/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="PageTitle is a page-level heading block that displays a title, optional breadcrumbs, optional tag/badge, and action buttons."
          guideLink="#"
          importLine='import { PageTitle } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

const defaultArgs: PageTitleProps = {
  title: "Page Title",
  breadcrumbs: [
    { text: "Home", link: "/" },
    { text: "Section", link: "/section" },
    { text: "Page", link: "/section/page" },
  ],
  actions: (
    <>
      <Button variant="primary" size="small">
        Primary Action
      </Button>
      <Button variant="outlined" size="small">
        Secondary
      </Button>
    </>
  ),
};

export const Default: Story = {
  args: defaultArgs,
};

export const WithBreadcrumbs: Story = {
  args: defaultArgs,
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    icon: <InfoOutlinedIcon />,
  },
};

export const WithSubtitle: Story = {
  args: {
    ...defaultArgs,
    subtitle: "Optional subtitle text describing the page.",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Simple Page Title",
  },
};

export const Responsive: Story = {
  args: {
    ...defaultArgs,
    title: "Responsive Page Title with Long Name",
  },
  render: (args) => (
    <Box sx={{ maxWidth: "600px" }}>
      <PageTitle {...args} />
    </Box>
  ),
};
