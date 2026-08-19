/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@/components";
import { AgntcyBrand } from "@/custom-icons";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Footer } from "..";

const ProductNode = () => (
  <Stack
    direction="row"
    alignItems="center"
    gap="8px"
    flexWrap="nowrap"
    sx={{ whiteSpace: "nowrap" }}
  >
    <Typography
      variant="caption"
      sx={(theme) => ({
        color: theme.palette.vars.baseTextDefault,
        whiteSpace: "nowrap",
      })}
    >
      {`© ${new Date().getFullYear()} Cisco Systems Inc. • powered by`}
    </Typography>
    <AgntcyBrand
      sx={(theme) => ({
        width: 66,
        height: 15,
        flexShrink: 0,
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
      })}
    />
    <Typography
      variant="caption"
      sx={(theme) => ({
        color: theme.palette.vars.baseTextDefault,
        whiteSpace: "nowrap",
      })}
    >
      • This product is currently in beta. Expect ongoing changes.
    </Typography>
  </Stack>
);

const footerLinks = [
  {
    children: "support@agntcy.com",
    href: "mailto:support@agntcy.com",
    openInNewTab: true,
  },
  {
    children: "Terms & Conditions",
    href: "https://www.example.com/terms",
    openInNewTab: true,
  },
  {
    children: "Privacy Policy",
    href: "https://example.com/privacy",
    openInNewTab: true,
  },
  {
    children: "Cookies",
    href: "https://www.example.com/cookies",
    openInNewTab: true,
  },
];

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    productName: "Cisco Systems Inc.",
    links: footerLinks,
  },
  argTypes: {
    productName: {
      control: "text",
      description:
        "Product or company name used by the default copyright content.",
    },
    productLink: {
      control: "text",
      description: "Navigation target for the default copyright content.",
    },
    productNode: {
      control: false,
      description: "Optional rich content for the left side of the footer.",
    },
    links: {
      control: "object",
      description: "Right-side footer links rendered with the Link component.",
    },
    sx: {
      control: false,
      description: "Optional container style overrides.",
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Footer"
          blurb="Footer displays product information, copyright, and navigation links. The left side accepts a custom productNode for rich branding; the right side renders an array of links."
          importLine={`import { Footer } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    productNode: <ProductNode />,
  },
};

export const DefaultCopyright: Story = {};

export const WithoutLinks: Story = {
  args: {
    productNode: <ProductNode />,
    links: [],
  },
};
