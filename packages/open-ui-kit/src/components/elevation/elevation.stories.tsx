/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import {
  darkModeCardFloating,
  darkModeCardLifted,
  darkModeCardRaised,
  darkModeCardSubtle,
  darkModeFooterBottom,
  darkModeSideDrawerLeft,
  darkModeSideDrawerRight,
  grey50,
  grey500,
  lightModeCardFloating,
  lightModeCardLifted,
  lightModeCardRaised,
  lightModeCardSubtle,
  lightModeFooterBottom,
  lightModeSideDrawerLeft,
  lightModeSideDrawerRight,
  surfaceDark600,
  surfaceLight100,
  surfaceLight300,
} from "@/theme/style/color-palette";
import { DocsHeader } from "storybook/components/docs-header.stories";

type ShadowSpec = {
  label: string;
  shadow: string;
  width: number;
};

const lightShadows: ShadowSpec[] = [
  { label: "Drawer\nRight", shadow: lightModeSideDrawerRight, width: 107 },
  { label: "Drawer\nLeft", shadow: lightModeSideDrawerLeft, width: 107 },
  { label: "Lifted", shadow: lightModeCardLifted, width: 94 },
  { label: "Subtle", shadow: lightModeCardSubtle, width: 98 },
  { label: "Raised", shadow: lightModeCardRaised, width: 100 },
  { label: "Floating", shadow: lightModeCardFloating, width: 113 },
  { label: "Bottom\nfooter", shadow: lightModeFooterBottom, width: 108 },
];

const darkShadows: ShadowSpec[] = [
  { label: "Drawer\nRight", shadow: darkModeSideDrawerRight, width: 107 },
  { label: "Drawer\nLeft", shadow: darkModeSideDrawerLeft, width: 107 },
  { label: "Lifted", shadow: darkModeCardLifted, width: 94 },
  { label: "Subtle", shadow: darkModeCardSubtle, width: 98 },
  { label: "Raised", shadow: darkModeCardRaised, width: 100 },
  { label: "Floating", shadow: darkModeCardFloating, width: 113 },
  { label: "Bottom\nfooter", shadow: darkModeFooterBottom, width: 108 },
];

function ShadowCard({
  label,
  shadow,
  width,
  bg,
  textColor,
}: {
  label: string;
  shadow: string;
  width: number;
  bg: string;
  textColor: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
        width,
        height: 116,
        background: bg,
        boxShadow: shadow,
        borderRadius: "16px",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="headingSubSection"
        textAlign="center"
        color={textColor}
        sx={{
          letterSpacing: 0,
          lineHeight: "22px",
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

const ElevationDemo = () => (
  <Box
    sx={{
      backgroundColor: surfaceLight100,
      boxSizing: "border-box",
      p: { xs: "32px 24px", md: "64px" },
      width: "100%",
    }}
  >
    <Stack gap="36px" sx={{ maxWidth: 824 }}>
      <Stack gap="8px">
        <Typography
          variant="h6"
          fontWeight={700}
          color={grey500}
          sx={{ letterSpacing: 0, lineHeight: "24px" }}
        >
          Elevation
        </Typography>
        <Typography variant="body2" color={grey500}>
          Used to elevate cards, side panels.
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {lightShadows.map(({ label, shadow, width }) => (
          <ShadowCard
            key={label}
            label={label}
            shadow={shadow}
            width={width}
            bg={surfaceLight300}
            textColor={grey500}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {darkShadows.map(({ label, shadow, width }) => (
          <ShadowCard
            key={label}
            label={label}
            shadow={shadow}
            width={width}
            bg={surfaceDark600}
            textColor={grey50}
          />
        ))}
      </Box>
    </Stack>
  </Box>
);

const meta: Meta = {
  title: "Foundations/Elevation",
  component: ElevationDemo,
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Elevation"
          blurb="Used to elevate cards, side panels."
          importLine='import { lightTheme, darkTheme } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ElevationDemo>;

export const All: Story = {
  render: () => <ElevationDemo />,
};
