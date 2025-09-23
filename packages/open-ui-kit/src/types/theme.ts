/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/Button";
import "@mui/material/Divider";
import "@mui/material/Tab";

import React from "react";
import { VarsType } from "./vars";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    negative: Palette["primary"];
    orange: Palette["primary"];
    vars: VarsType;
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    negative?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    vars?: VarsType;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorPartial {}

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  interface TypographyVariants {
    captionMedium: React.CSSProperties;
    captionSemibold: React.CSSProperties;
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
    body1Semibold: React.CSSProperties;
    body2Semibold: React.CSSProperties;
    headingSubSection: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionMedium?: React.CSSProperties;
    captionSemibold?: React.CSSProperties;
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
    body1Semibold?: React.CSSProperties;
    body2Semibold?: React.CSSProperties;
    headingSubSection?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    text: false;
    contained: false;
    primary: true;
    secondary: true;
    outlined: true;
    tertariary: true;
  }

  interface ButtonPropsColorOverrides {
    primary: false;
    secondary: false;
    success: false;
    error: false;
    info: false;
    warning: false;
    default: true;
    negative: true;
  }
}

declare module "@mui/material/Divider" {
  interface DividerPropsVariantOverrides {
    bold: true;
  }
}

declare module "@mui/material/Tab" {
  interface TabOwnProps {
    loading?: boolean;
    type?: "main" | "subTab" | "toggleTab";
    to?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionMedium: true;
    captionSemibold: true;
    body1Semibold: true;
    body2Semibold: true;
    headingSubSection: true;
  }
}
