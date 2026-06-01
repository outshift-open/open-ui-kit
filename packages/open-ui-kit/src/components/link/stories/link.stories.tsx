/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GeneralSize, IconPosition } from "@/common";
import { Link as LinkIcon } from "@/custom-icons";
import { Link } from "../components/link";
import {
  getLinkColor,
  getStoryGridStyles,
  getStoryLabelStyles,
} from "../styles";
import { LinkColorEnum, LinkState, LinkType } from "../types";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    actions: { argTypesRegex: null },
    controls: { disable: true },
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

const linkTypes = [
  { label: "underline-regular", value: LinkType.UnderlineRegular, bold: false },
  {
    label: "standalone- regular",
    value: LinkType.StandaloneRegular,
    bold: false,
  },
  { label: "standalone- bold", value: LinkType.StandaloneBold, bold: false },
  { label: "underlined- bold", value: LinkType.UnderlineRegular, bold: true },
] as const;

const iconPositions = [
  { label: "no-icon", value: IconPosition.NoIcon },
  { label: "left-icon", value: IconPosition.LeftIcon },
  { label: "right-icon", value: IconPosition.RightIcon },
] as const;

const sizes = [
  { label: "size l", value: GeneralSize.Large },
  { label: "size m", value: GeneralSize.Medium },
  { label: "size s", value: GeneralSize.Small },
] as const;

const states: LinkState[] = ["default", "hover", "pressed", "disabled"];

const StoryLabel = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={(theme) => getStoryLabelStyles(theme)}>
    {children}
  </Typography>
);

const StoryHeaderLabel = ({
  children,
  span = 1,
}: {
  children: React.ReactNode;
  span?: number;
}) => (
  <Box sx={{ gridColumn: `span ${span}` }}>
    <StoryLabel>{children}</StoryLabel>
  </Box>
);

const LinkSample = ({
  color,
  iconPosition,
  linkType,
  size,
  state,
}: {
  color: LinkColorEnum;
  iconPosition: IconPosition;
  linkType: LinkType;
  size: GeneralSize;
  state: LinkState | "focus";
}) => {
  const theme = useTheme();
  const visualState = state === "focus" ? "default" : state;
  const isDisabled = state === "disabled";

  return (
    <Link
      Icon={LinkIcon}
      color={color}
      disabled={isDisabled}
      href="#"
      iconPosition={iconPosition}
      linkType={linkType}
      size={size}
      sx={{
        color: getLinkColor(theme, color, visualState),
        textDecoration:
          isDisabled || linkType === LinkType.StandaloneRegular
            ? state === "hover" || state === "pressed"
              ? "underline"
              : "none"
            : "underline",
        ...(state === "focus" && {
          outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
          outlineOffset: "1px",
        }),
      }}
    >
      Link
    </Link>
  );
};

const LinkMatrix = ({ color }: { color: LinkColorEnum }) => (
  <Stack gap={3}>
    <StoryLabel>{color}</StoryLabel>
    <Box sx={getStoryGridStyles()}>
      <Box />
      <Box />
      {linkTypes.map(({ label }) => (
        <StoryHeaderLabel key={label} span={3}>
          {label}
        </StoryHeaderLabel>
      ))}
      <Box />
      <Box />
      {linkTypes.flatMap(({ label }) =>
        iconPositions.map(({ label: iconLabel }) => (
          <StoryLabel key={`${label}-${iconLabel}`}>{iconLabel}</StoryLabel>
        )),
      )}

      {sizes.flatMap(({ label: sizeLabel, value: size }) =>
        [...states, "focus" as const].flatMap((state, stateIndex) => [
          stateIndex === 0 ? (
            <StoryLabel key={`${color}-${sizeLabel}`}>{sizeLabel}</StoryLabel>
          ) : (
            <Box key={`${color}-${sizeLabel}-empty-${state}`} />
          ),
          <StoryLabel key={`${color}-${sizeLabel}-${state}-label`}>
            state {state}
          </StoryLabel>,
          ...linkTypes.flatMap(({ value, bold }) =>
            iconPositions.map(({ value: iconPosition }) => (
              <LinkSample
                key={`${color}-${sizeLabel}-${state}-${value}-${bold}-${iconPosition}`}
                color={color}
                iconPosition={iconPosition}
                linkType={bold ? LinkType.StandaloneBold : value}
                size={size}
                state={state}
              />
            )),
          ),
        ]),
      )}
    </Box>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <BrowserRouter>
      <Stack gap={8}>
        <LinkMatrix color={LinkColorEnum.Primary} />
        <LinkMatrix color={LinkColorEnum.Secondary} />
      </Stack>
    </BrowserRouter>
  ),
};

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <LinkMatrix color={LinkColorEnum.Primary} />
    </BrowserRouter>
  ),
};

export const Secondary: Story = {
  render: () => (
    <BrowserRouter>
      <LinkMatrix color={LinkColorEnum.Secondary} />
    </BrowserRouter>
  ),
};
