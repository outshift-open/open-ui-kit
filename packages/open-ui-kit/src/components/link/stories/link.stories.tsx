/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GeneralSize, IconPosition } from "@/common";
import { Link as LinkIcon } from "@/custom-icons";
import { Link } from "../components/link";
import { LinkColorEnum, LinkType } from "../types";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    children: "Link",
    color: LinkColorEnum.Primary,
    disabled: false,
    ellipsis: false,
    href: "/",
    iconPosition: IconPosition.NoIcon,
    linkType: LinkType.UnderlineRegular,
    openInNewTab: false,
    size: GeneralSize.Large,
  },
  argTypes: {
    children: { control: "text" },
    color: {
      control: "select",
      options: Object.values(LinkColorEnum),
    },
    disabled: { control: "boolean" },
    ellipsis: { control: "boolean" },
    href: { control: "text" },
    iconPosition: {
      control: "select",
      options: Object.values(IconPosition),
    },
    linkType: {
      control: "select",
      options: Object.values(LinkType),
    },
    openInNewTab: { control: "boolean" },
    size: {
      control: "select",
      options: Object.values(GeneralSize),
    },
    Icon: { table: { disable: true } },
    customizeColor: { table: { disable: true } },
    fontStyle: { table: { disable: true } },
    onMouseDown: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    onMouseUp: { table: { disable: true } },
    sx: { table: { disable: true } },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Link"
          blurb="Links navigate users to another route or resource and can include optional leading or trailing icons."
          importLine={`import { Link } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const storyStackStyles = {
  alignItems: "flex-start",
};

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    color: LinkColorEnum.Secondary,
  },
};

export const Standalone: Story = {
  args: {
    linkType: LinkType.StandaloneRegular,
  },
};

export const StandaloneBold: Story = {
  args: {
    linkType: LinkType.StandaloneBold,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    Icon: LinkIcon,
    iconPosition: IconPosition.LeftIcon,
  },
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Link {...args} iconPosition={IconPosition.LeftIcon}>
        Leading icon
      </Link>
      <Link {...args} iconPosition={IconPosition.RightIcon}>
        Trailing icon
      </Link>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Link {...args} size={GeneralSize.Large}>
        Large link
      </Link>
      <Link {...args} size={GeneralSize.Medium}>
        Medium link
      </Link>
      <Link {...args} size={GeneralSize.Small}>
        Small link
      </Link>
    </Stack>
  ),
};

export const Ellipsis: Story = {
  args: {
    children: "A long navigation link that truncates cleanly",
    ellipsis: true,
  },
  render: (args) => (
    <Box sx={{ width: 220 }}>
      <Link {...args} />
    </Box>
  ),
};

export const StateMatrix: Story = {
  render: (args) => (
    <Stack gap={3} sx={storyStackStyles}>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {[LinkColorEnum.Primary, LinkColorEnum.Secondary].map((color) => (
          <Stack key={color} gap={1} sx={storyStackStyles}>
            <Typography variant="caption">{color}</Typography>
            <Link {...args} color={color}>
              Default
            </Link>
            <Link {...args} color={color} disabled>
              Disabled
            </Link>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {[
          LinkType.UnderlineRegular,
          LinkType.StandaloneRegular,
          LinkType.StandaloneBold,
        ].map((linkType) => (
          <Link key={linkType} {...args} linkType={linkType}>
            {linkType}
          </Link>
        ))}
      </Stack>
    </Stack>
  ),
};
