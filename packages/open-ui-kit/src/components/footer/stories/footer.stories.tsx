/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { AgntcyBrand } from "@/custom-icons";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Footer } from "../components/footer";

const ProductNode = () =>
  React.createElement(
    Stack,
    {
      direction: "row",
      alignItems: "center",
      gap: "6px",
      flexWrap: "nowrap",
      sx: { whiteSpace: "nowrap" },
    },
    React.createElement(
      Typography,
      {
        variant: "caption",
        sx: (theme) => ({
          color: theme.palette.vars.baseTextDefault,
          whiteSpace: "nowrap",
        }),
      },
      `\u00A9 ${new Date().getFullYear()} Cisco Systems Inc. \u2022 powered by`,
    ),
    React.createElement(AgntcyBrand, {
      sx: { width: 105, height: 24, flexShrink: 0 },
    }),
    React.createElement(
      Typography,
      {
        variant: "caption",
        sx: (theme) => ({
          color: theme.palette.vars.baseTextDefault,
          whiteSpace: "nowrap",
        }),
      },
      "\u2022 This product is currently in beta. Expect ongoing changes.",
    ),
  );

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          blurb="Footer displays product information, copyright, and navigation links. The left side accepts a custom productNode for rich branding; the right side renders an array of links."
          guideLink=""
          importLine={`import { Footer } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <Footer
        productName="Cisco Systems Inc."
        productNode={<ProductNode />}
        links={[
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
        ]}
      />
    </BrowserRouter>
  ),
};
