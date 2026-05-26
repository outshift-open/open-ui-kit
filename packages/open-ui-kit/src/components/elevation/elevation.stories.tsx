/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  lightModeCardLifted,
  lightModeCardSubtle,
  lightModeCardRaised,
  lightModeCardFloating,
  lightModeSideDrawerRight,
  lightModeSideDrawerLeft,
  lightModeFooterBottom,
  darkModeCardLifted,
  darkModeCardSubtle,
  darkModeCardRaised,
  darkModeCardFloating,
  darkModeSideDrawerRight,
  darkModeSideDrawerLeft,
  darkModeFooterBottom,
  surfaceLight300,
  surfaceDark600,
} from "@/theme/style/color-palette";

const lightShadows = [
  { label: "Drawer / Right", shadow: lightModeSideDrawerRight },
  { label: "Drawer / Left", shadow: lightModeSideDrawerLeft },
  { label: "Card / Lifted", shadow: lightModeCardLifted },
  { label: "Card / Subtle", shadow: lightModeCardSubtle },
  { label: "Card / Raised", shadow: lightModeCardRaised },
  { label: "Card / Floating", shadow: lightModeCardFloating },
  { label: "Footer / Bottom", shadow: lightModeFooterBottom },
];

const darkShadows = [
  { label: "Drawer / Right", shadow: darkModeSideDrawerRight },
  { label: "Drawer / Left", shadow: darkModeSideDrawerLeft },
  { label: "Card / Lifted", shadow: darkModeCardLifted },
  { label: "Card / Subtle", shadow: darkModeCardSubtle },
  { label: "Card / Raised", shadow: darkModeCardRaised },
  { label: "Card / Floating", shadow: darkModeCardFloating },
  { label: "Footer / Bottom", shadow: darkModeFooterBottom },
];

function ShadowCard({
  label,
  shadow,
  bg,
  textColor,
}: {
  label: string;
  shadow: string;
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
        width: 107,
        height: 116,
        background: bg,
        boxShadow: shadow,
        borderRadius: "16px",
        flexShrink: 0,
      }}
    >
      <Typography
        variant="body2"
        fontWeight={700}
        textAlign="center"
        color={textColor}
        sx={{ fontSize: 18, lineHeight: "22px" }}
      >
        {label}
      </Typography>
    </Box>
  );
}

const ElevationDemo = () => (
  <Stack gap="36px" sx={{ p: 4 }}>
    <Stack gap="8px">
      <Typography variant="h6" fontWeight={700}>
        Elevation
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Box shadows define elevation levels for cards, drawers, and footers.
      </Typography>
    </Stack>

    <Stack gap="8px">
      <Typography variant="body2" fontWeight={600} color="text.secondary">
        Light Mode
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {lightShadows.map(({ label, shadow }) => (
          <ShadowCard
            key={label}
            label={label}
            shadow={shadow}
            bg={surfaceLight300}
            textColor="#3C4551"
          />
        ))}
      </Box>
    </Stack>

    <Stack gap="8px">
      <Typography variant="body2" fontWeight={600} color="text.secondary">
        Dark Mode
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {darkShadows.map(({ label, shadow }) => (
          <ShadowCard
            key={label}
            label={label}
            shadow={shadow}
            bg={surfaceDark600}
            textColor="#E8E9EA"
          />
        ))}
      </Box>
    </Stack>
  </Stack>
);

const meta: Meta = {
  title: "Foundations/Elevation",
  component: ElevationDemo,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const All: Story = {};
