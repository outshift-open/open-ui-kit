/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";
import type { CSSObject, Theme } from "@mui/material";
import type { LinkColorEnum, LinkState, LinkType } from "../types";

enum LinkStackGap {
  small = "6px",
  medium = "4px",
  large = "4px",
}

export const linkStackStyle = (size: GeneralSize): CSSObject => ({
  gap: LinkStackGap[size],
  flexDirection: "row",
  alignItems: "center",
  border: "none",
});

export const iconStyle: Record<GeneralSize, CSSObject> = {
  [GeneralSize.Large]: { width: "24px", height: "24px" },
  [GeneralSize.Medium]: { width: "20px", height: "20px" },
  [GeneralSize.Small]: { width: "16px", height: "16px" },
};

export const getLinkColors = (theme: Theme, color: LinkColorEnum) => {
  const colorMap = {
    primary: {
      default: theme.palette.vars.interactivePrimaryDefaultDefault,
      hover: theme.palette.vars.interactivePrimaryDefaultHover,
      pressed: theme.palette.vars.interactivePrimaryDefaultActive,
      disabled: theme.palette.vars.interactivePrimaryDefaultDisabled,
    },
    secondary: {
      default: theme.palette.vars.interactiveSecondaryDefaultDefault,
      hover: theme.palette.vars.interactiveSecondaryDefaultHover,
      pressed: theme.palette.vars.interactiveSecondaryDefaultActive,
      disabled: theme.palette.vars.interactiveSecondaryDefaultDisabled,
    },
  };

  return colorMap[color];
};

export const getLinkColor = (
  theme: Theme,
  color: LinkColorEnum,
  state: LinkState,
) => getLinkColors(theme, color)[state];

export const getLinkTypographyStyles = (
  size: GeneralSize,
  linkType: LinkType,
  theme: Theme,
): CSSObject => {
  const fontSizes = {
    [GeneralSize.Large]: "16px",
    [GeneralSize.Medium]: "14px",
    [GeneralSize.Small]: "12px",
  };
  const lineHeights = {
    [GeneralSize.Large]: "20px",
    [GeneralSize.Medium]: "18px",
    [GeneralSize.Small]: "15px",
  };

  return {
    fontFamily: theme.typography.fontFamily,
    fontSize: fontSizes[size],
    fontWeight:
      linkType === "standaloneBold"
        ? theme.typography.fontWeightSemiBold
        : theme.typography.fontWeightRegular,
    lineHeight: lineHeights[size],
    letterSpacing: "0px",
  };
};

export const getLinkRootStyles = ({
  color,
  disabled,
  ellipsis,
  linkType,
  theme,
}: {
  color: LinkColorEnum;
  disabled: boolean;
  ellipsis: boolean;
  linkType: LinkType;
  theme: Theme;
}): CSSObject => {
  const colors = getLinkColors(theme, color);

  return {
    color: disabled ? colors.disabled : colors.default,
    display: "inline-flex",
    width: ellipsis ? "100%" : "fit-content",
    maxWidth: ellipsis ? "100%" : undefined,
    justifyContent: "center",
    textDecoration: disabled
      ? "none"
      : linkType === "underlineRegular"
        ? "underline"
        : "none",
    pointerEvents: disabled ? "none" : "auto",
    borderRadius: "4px",
    outline: 0,
    "&:hover": {
      color: disabled ? colors.disabled : colors.hover,
      textDecoration: disabled ? "none" : "underline",
    },
    "&:active": {
      color: disabled ? colors.disabled : colors.pressed,
      textDecoration: disabled ? "none" : "underline",
    },
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
      outlineOffset: "1px",
    },
  };
};

export const getStoryGridStyles = (): CSSObject => ({
  display: "grid",
  gridTemplateColumns: "72px 96px repeat(12, max-content)",
  columnGap: "32px",
  rowGap: "18px",
  alignItems: "center",
});

export const getStoryLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.caption,
  width: "fit-content",
  padding: "2px 6px",
  borderRadius: "4px",
  color: theme.palette.vars.infoTextDefault,
  backgroundColor: theme.palette.vars.infoBackgroundWeak,
});
