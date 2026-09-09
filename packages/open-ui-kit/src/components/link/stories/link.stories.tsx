/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Theme } from "@mui/material";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GeneralSize, IconPosition } from "@/common";
import { Link as LinkIcon } from "@/custom-icons";
import { Link } from "../components/link";
import { getLinkColors } from "../styles";
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
  display: "flex",
  flexDirection: "row",
  gap: 4,
  alignItems: "flex-start",
};

type PinnedState = "hover" | "pressed" | "focus";

/**
 * Hover, pressed, and focus resolve from pointer and keyboard interaction, so the docs
 * page would otherwise only ever show the default state. These stories pin one state at a
 * time using the same tokens the component uses, matching the Link spec sheet in Figma.
 * The focus ring uses each color family's own default token, so primary and secondary
 * links carry their own ring rather than a shared one.
 */
const pinnedStateSx =
  (state: PinnedState, color: LinkColorEnum) => (theme: Theme) => {
    const colors = getLinkColors(theme, color);

    if (state === "focus") {
      return {
        color: colors.default,
        outline: `2px solid ${colors.default}`,
        outlineOffset: "1px",
        "&:hover": { color: colors.default },
        "&:active": { color: colors.default },
      };
    }

    const pinnedColor = state === "hover" ? colors.hover : colors.pressed;

    return {
      color: pinnedColor,
      textDecoration: "underline",
      "&:hover": { color: pinnedColor },
      "&:active": { color: pinnedColor },
    };
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

export const Hover: Story = {
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Link
        {...args}
        color={LinkColorEnum.Primary}
        sx={pinnedStateSx("hover", LinkColorEnum.Primary)}
      />
      <Link
        {...args}
        color={LinkColorEnum.Secondary}
        sx={pinnedStateSx("hover", LinkColorEnum.Secondary)}
      />
    </Stack>
  ),
};

export const Pressed: Story = {
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Link
        {...args}
        color={LinkColorEnum.Primary}
        sx={pinnedStateSx("pressed", LinkColorEnum.Primary)}
      />
      <Link
        {...args}
        color={LinkColorEnum.Secondary}
        sx={pinnedStateSx("pressed", LinkColorEnum.Secondary)}
      />
    </Stack>
  ),
};

export const Focused: Story = {
  render: (args) => (
    <Stack gap={2} sx={storyStackStyles}>
      <Link
        {...args}
        color={LinkColorEnum.Primary}
        sx={pinnedStateSx("focus", LinkColorEnum.Primary)}
      />
      <Link
        {...args}
        color={LinkColorEnum.Secondary}
        sx={pinnedStateSx("focus", LinkColorEnum.Secondary)}
      />
    </Stack>
  ),
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
