/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ButtonProps } from "@/components/button";
import { GeneralSize } from "@/common";
import { Info, Negative, Positive, Warning } from "@/custom-illustrations";
import type { SvgIconProps, Theme, TypographyProps } from "@mui/material";
import type { CSSProperties, ReactElement } from "react";
import type { EmptyStateDirection, EmptyStateVariant } from "../types";

export const Illustrations: Record<
  EmptyStateVariant,
  (props: SvgIconProps) => ReactElement
> = {
  info: Info,
  positive: Positive,
  warning: Warning,
  negative: Negative,
};

export const sizeToIllustrationSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "224px",
  [GeneralSize.Medium]: "76px",
  [GeneralSize.Small]: "36px",
};

export const sizeToMainFlexGapSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "12px",
  [GeneralSize.Medium]: "4px",
  [GeneralSize.Small]: "0px",
};

export const sizeToContainerPaddingMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "0px",
  [GeneralSize.Medium]: "12px 0px",
  [GeneralSize.Small]: "4px 12px 8px",
};

export const getContainerPadding = (
  size: GeneralSize,
  direction: EmptyStateDirection,
) =>
  size === GeneralSize.Small && direction === "row"
    ? "0px"
    : sizeToContainerPaddingMapping[size];

export const sizeToRowGapMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "40px",
  [GeneralSize.Medium]: "4px",
  [GeneralSize.Small]: "4px",
};

export const sizeToSecondaryFlexGapSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "8px",
  [GeneralSize.Medium]: "4px",
  [GeneralSize.Small]: "0px",
};

export const sizeToTitleVariantMapping: Record<
  GeneralSize,
  TypographyProps["variant"]
> = {
  [GeneralSize.Large]: "h6",
  [GeneralSize.Medium]: "headingSubSection",
  [GeneralSize.Small]: "headingSubSection",
};

export const sizeToTitleLineHeightMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "24px",
  [GeneralSize.Medium]: "22px",
  [GeneralSize.Small]: "22px",
};

export const sizeToTitleFontSizeMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "20px",
  [GeneralSize.Medium]: "16px",
  [GeneralSize.Small]: "16px",
};

export const sizeToDescriptionVariantMapping: Record<
  GeneralSize,
  TypographyProps["variant"]
> = {
  [GeneralSize.Large]: "body1",
  [GeneralSize.Medium]: "body2",
  [GeneralSize.Small]: "body2",
};

export const sizeToActionSizeMapping: Record<GeneralSize, ButtonProps["size"]> =
  {
    [GeneralSize.Large]: "medium",
    [GeneralSize.Medium]: "small",
    [GeneralSize.Small]: "small",
  };

export const directionToFlexAlignmentMapping: Record<
  EmptyStateDirection,
  CSSProperties["alignItems"]
> = {
  row: "flex-start",
  column: "center",
};

export const directionToTextAlignmentMapping: Record<
  EmptyStateDirection,
  CSSProperties["textAlign"]
> = {
  row: "start",
  column: "center",
};

export const directionToTextMaxWidthMapping: Record<
  EmptyStateDirection,
  string
> = {
  row: "596px",
  column: "255px",
};

export const sizeToColumnTextMaxWidthMapping: Record<GeneralSize, string> = {
  [GeneralSize.Large]: "255px",
  [GeneralSize.Medium]: "255px",
  [GeneralSize.Small]: "212px",
};

export const getTextMaxWidth = (
  size: GeneralSize,
  direction: EmptyStateDirection,
) =>
  direction === "column"
    ? sizeToColumnTextMaxWidthMapping[size]
    : directionToTextMaxWidthMapping[direction];

export const getIllustrationAccentColor = (
  theme: Theme,
  variant: EmptyStateVariant,
) => {
  switch (variant) {
    case "positive":
      return theme.palette.vars.successBackgroundDefault;
    case "warning":
      return theme.palette.vars.warningBackgroundDefault;
    case "negative":
      return theme.palette.vars.negativeIconDefault;
    case "info":
    default:
      return theme.palette.vars.infoBackgroundDefault;
  }
};

export const DefaultDescription = "No matches found";
