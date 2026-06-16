/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  greenPalette,
  lightBluePalette,
  lightOrangePalette,
  orangePalette,
  redPalette,
} from "../style/color-palette";

// IoC Theme Color Palette
// Inspired by Cisco Cloud Control with deep navy foundations and teal accents.

// Surface (translucent over dark base)
export const iocSurface50 = "rgba(255, 255, 255, 0.02)";
export const iocSurface100 = "rgba(255, 255, 255, 0.035)";
export const iocSurface200 = "rgba(255, 255, 255, 0.06)";
export const iocSurface300 = "rgba(255, 255, 255, 0.09)";
export const iocSurface400 = "rgba(255, 255, 255, 0.12)";
export const iocSurface500 = "rgba(255, 255, 255, 0.16)";

export const iocSurfacePalette = {
  50: iocSurface50,
  100: iocSurface100,
  200: iocSurface200,
  300: iocSurface300,
  400: iocSurface400,
  500: iocSurface500,
};

export const iocControlBackgroundHover = iocSurface400;
export const iocControlBackgroundStickyColumn = "rgba(255, 255, 255, 0.1)";

// Backdrop (solid dark navy)
export const iocBackdrop900 = "#020508";
export const iocBackdrop800 = "#03080F";
export const iocBackdrop700 = "#050C18";
export const iocBackdrop600 = "#07111F";
export const iocBackdrop500 = "#091428";
export const iocBackdrop400 = "#0C1B35";
export const iocBackdrop300 = "#0F2040";
export const iocBackdrop200 = "#132650";
export const iocBackdrop100 = "#1A3060";

export const iocBackdropPalette = {
  900: iocBackdrop900,
  800: iocBackdrop800,
  700: iocBackdrop700,
  600: iocBackdrop600,
  500: iocBackdrop500,
  400: iocBackdrop400,
  300: iocBackdrop300,
  200: iocBackdrop200,
  100: iocBackdrop100,
};

// Cisco Teal (primary accent)
export const iocTeal50 = "#E6F9FE";
export const iocTeal100 = "#B3EEFB";
export const iocTeal200 = "#7DE0F8";
export const iocTeal300 = "#40D0F4";
export const iocTeal400 = "#1AC6F0";
export const iocTeal500 = "#00BCEB"; // Cisco brand teal
export const iocTeal600 = "#00A0D1";
export const iocTeal700 = "#0082AD";
export const iocTeal800 = "#006B8A";
export const iocTeal900 = "#003D54";

export const iocTealAlpha40 = "rgba(0, 188, 235, 0.40)";
export const iocTealAlpha20 = "rgba(0, 188, 235, 0.20)";
export const iocTealAlpha10 = "rgba(0, 188, 235, 0.10)";
export const iocTealAlpha05 = "rgba(0, 188, 235, 0.05)";

export const iocTealPalette = {
  50: iocTeal50,
  100: iocTeal100,
  200: iocTeal200,
  300: iocTeal300,
  400: iocTeal400,
  500: iocTeal500,
  600: iocTeal600,
  700: iocTeal700,
  800: iocTeal800,
  900: iocTeal900,
  alpha40: iocTealAlpha40,
  alpha20: iocTealAlpha20,
  alpha10: iocTealAlpha10,
  alpha05: iocTealAlpha05,
};

// Cisco Blue (secondary / button)
export const iocBlue500 = "#2B82F6";
export const iocBlue400 = "#3B92FF";
export const iocBlue600 = "#1E6FD9";

export const iocBluePalette = {
  400: iocBlue400,
  500: iocBlue500,
  600: iocBlue600,
};

// Border
export const iocBorder100 = "rgba(255, 255, 255, 0.05)";
export const iocBorder200 = "rgba(255, 255, 255, 0.07)";
export const iocBorder300 = "rgba(255, 255, 255, 0.09)";
export const iocBorder400 = "rgba(255, 255, 255, 0.12)";
export const iocBorder500 = "rgba(255, 255, 255, 0.18)";

export const iocBorderPalette = {
  100: iocBorder100,
  200: iocBorder200,
  300: iocBorder300,
  400: iocBorder400,
  500: iocBorder500,
};

// Text
export const iocTextPrimary = "rgba(255, 255, 255, 0.94)";
export const iocTextSecondary = "rgba(255, 255, 255, 0.55)";
export const iocTextTertiary = "rgba(255, 255, 255, 0.32)";
export const iocTextDisabled = "rgba(255, 255, 255, 0.22)";

// Background: diffuse blue atmosphere from upper-left.
// The glow is a smooth color field with ambient depth.
export const iocPageBackground = `
  radial-gradient(ellipse 130% 90% at -15% -5%, rgba(0, 70, 160, 0.50) 0%, rgba(0, 40, 100, 0.15) 45%, transparent 65%),
  radial-gradient(ellipse  80% 60% at 60% 110%, rgba(0, 30,  80, 0.30) 0%, transparent 60%),
  linear-gradient(160deg, #07111F 0%, #050C18 40%, #030810 100%)
`;

// Shadows
export const iocShadowSm = "0 2px 8px rgba(0, 0, 0, 0.30)";
export const iocShadowMd = "0 4px 16px rgba(0, 0, 0, 0.40)";
export const iocShadowLg = "0 8px 32px rgba(0, 0, 0, 0.50)";

// Effects
export const iocBackdropBlur = "blur(20px)";

// Shape
export const iocBorderRadiusSm = "4px";
export const iocBorderRadiusLg = "8px";
export const iocBorderRadius4xl = "20px";

export const iocBorderWidthDefault = "1px";
export const iocBorderWidthStrong = "4px";

// Gradients
export const iocGradientPrimary = `linear-gradient(180deg, ${iocTealPalette[400]} 0%, ${iocTealPalette[600]} 100%)`;
export const iocGradientSecondary = `linear-gradient(180deg, ${iocBluePalette[500]} 0%, ${iocBluePalette[600]} 100%)`;
export const iocGradientNegative = `linear-gradient(180deg, ${redPalette[400]} 0%, ${redPalette[500]} 100%)`;
export const iocGradientBrand = `linear-gradient(135deg, ${iocTealPalette[400]} 0%, ${iocBluePalette[500]} 100%)`;
export const iocGradientPage = iocPageBackground;

export const iocGradients = {
  primary: iocGradientPrimary,
  secondary: iocGradientSecondary,
  negative: iocGradientNegative,
  brand: iocGradientBrand,
  page: iocGradientPage,
};

// Glows
export const iocGlowPrimary = `0 0 6px ${iocTealPalette[500]}CC, 0 0 16px ${iocTealPalette[500]}77, 0 0 28px ${iocTealPalette[500]}33`;
export const iocGlowSecondary = `0 0 6px ${iocBluePalette[500]}CC, 0 0 16px ${iocBluePalette[500]}77, 0 0 28px ${iocBluePalette[500]}33`;
export const iocGlowSuccess = `0 0 6px ${greenPalette[500]}CC, 0 0 16px ${greenPalette[500]}77, 0 0 28px ${greenPalette[500]}33`;
export const iocGlowWarning = `0 0 6px ${lightOrangePalette[500]}CC, 0 0 16px ${lightOrangePalette[500]}77, 0 0 28px ${lightOrangePalette[500]}33`;
export const iocGlowNegative = `0 0 6px ${redPalette[500]}CC, 0 0 16px ${redPalette[500]}77, 0 0 28px ${redPalette[500]}33`;
export const iocGlowSevere = `0 0 6px ${orangePalette[500]}CC, 0 0 16px ${orangePalette[500]}77, 0 0 28px ${orangePalette[500]}33`;
export const iocGlowExcellent = `0 0 6px ${lightBluePalette[500]}CC, 0 0 16px ${lightBluePalette[500]}77, 0 0 28px ${lightBluePalette[500]}33`;
export const iocGlowNeutral = `0 0 6px ${iocTealPalette[600]}99, 0 0 14px ${iocTealPalette[600]}44`;

export const iocGlows = {
  primary: iocGlowPrimary,
  secondary: iocGlowSecondary,
  success: iocGlowSuccess,
  warning: iocGlowWarning,
  negative: iocGlowNegative,
  severe: iocGlowSevere,
  excellent: iocGlowExcellent,
  neutral: iocGlowNeutral,
};

export const iocShape = {
  borderRadiusSm: iocBorderRadiusSm,
  borderRadiusLg: iocBorderRadiusLg,
  borderRadius4xl: iocBorderRadius4xl,
  borderWidthDefault: iocBorderWidthDefault,
  borderWidthStrong: iocBorderWidthStrong,
};
