/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { MemoryRouter } from "react-router-dom";
import { Box, Typography } from "@/components";
import { Button } from "@/components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { PageTitle } from "../components/page-title";
import type { PageTitleProps } from "../types";

const meta: Meta<typeof PageTitle> = {
  title: "Templates/Page Title",
  component: PageTitle,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    actions: {
      control: false,
      description: "Action controls rendered at the end of the title block.",
    },
    breadcrumbs: {
      control: "object",
      description: "Breadcrumb items rendered above the title block.",
    },
    icon: {
      control: false,
      description: "Icon rendered before the title when no image is supplied.",
    },
    image: {
      control: false,
      description: "Image rendered before the title block.",
    },
    subtitle: {
      control: "text",
      description: "Supporting text rendered below the title row.",
    },
    sx: {
      control: false,
      description: "Style overrides for the outer title container.",
    },
    tag: {
      control: false,
      description: "Status tag or badge rendered beside the title.",
    },
    title: {
      control: "text",
      description: "Main page heading.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Page Title"
          blurb="PageTitle is a page-level heading block with optional breadcrumbs, media, tag, subtitle, and actions."
          guideLink="#"
          importLine='import { PageTitle } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

const breadcrumbs = [
  { text: "Home", link: "/" },
  { text: "Runtime", link: "/runtime" },
  { text: "Protection", link: "/runtime/protection" },
];

const actions = (
  <>
    <Button variant="primary" size="small">
      Scan
    </Button>
    <Button variant="outlined" size="small">
      Export
    </Button>
  </>
);

const tag = (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.vars.successBackgroundWeak,
      borderRadius: "4px",
      color: theme.palette.vars.successTextDefault,
      padding: "2px 6px",
    })}
  >
    <Typography variant="captionMedium">Active</Typography>
  </Box>
);

const image = (
  <Box
    sx={(theme) => ({
      alignItems: "center",
      backgroundColor: theme.palette.vars.accentAWeak,
      color: theme.palette.vars.accentADefault,
      display: "flex",
      height: "100%",
      justifyContent: "center",
      width: "100%",
    })}
  >
    <InfoOutlinedIcon aria-hidden />
  </Box>
);

const defaultArgs: PageTitleProps = {
  title: "Runtime protection",
  subtitle: "Monitor workload findings by cluster and namespace.",
  breadcrumbs,
  actions,
};

export const Default: Story = {
  args: defaultArgs,
};

export const TitleOnly: Story = {
  args: {
    title: "Inventory overview",
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: "Policy details",
    breadcrumbs,
  },
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    icon: <InfoOutlinedIcon aria-hidden />,
  },
};

export const WithImage: Story = {
  args: {
    ...defaultArgs,
    image,
  },
};

export const WithTag: Story = {
  args: {
    ...defaultArgs,
    tag,
  },
};

export const Narrow: Story = {
  args: {
    ...defaultArgs,
    title: "Runtime protection with an especially long workspace name",
    tag,
  },
  render: (args) => (
    <Box sx={{ maxWidth: "360px" }}>
      <PageTitle {...args} />
    </Box>
  ),
};
