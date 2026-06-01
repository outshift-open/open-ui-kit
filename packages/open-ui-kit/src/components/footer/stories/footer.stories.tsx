/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@mui/material";
import { AgntcyBrand } from "@/custom-icons";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Footer } from "..";

const ProductNode = () => (
  <Stack
    direction="row"
    alignItems="center"
    gap="6px"
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
    <AgntcyBrand sx={{ width: 64, height: 16, flexShrink: 0 }} />
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

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
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
  name: "Footer - Product",
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
