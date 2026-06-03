/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";
import type { TabsType } from "../types";

const toggleTabHeight = 32;
const groupedSubTabHeight = 38;
const groupedTabHeight = 42;
const padding = "8px 24px";

export const groupTabs = {
  alignItems: "end",
  minHeight: `${groupedTabHeight}px`,
  height: `${groupedTabHeight}px`,
};

export const groupSubTabs = {
  minHeight: `${groupedSubTabHeight}px`,
  height: `${groupedSubTabHeight}px`,
  alignItems: "center",
  borderBottom: "none",
  borderRight: "none",
};

export const toggleTabs = {
  width: "fit-content",
  minHeight: `${toggleTabHeight}px`,
  height: `${toggleTabHeight}px`,
  borderBottom: "none",
  borderRight: "none",
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

export const toggleTabsBox = {
  borderRadius: "20px",
  border: "1px solid",
  boxSizing: "border-box",
  display: "inline-flex",
  height: `${toggleTabHeight}px`,
  width: "fit-content",
  "@media (max-width: 600px)": {
    height: "44px",
  },
};

export const boxTabs = {
  display: "inline-flex",
};

export const getTabStyles = (theme: Theme, type: TabsType): SxProps<Theme> => {
  if (type === "subTab") {
    return {
      ...theme.typography.body2Semibold,
      color: theme.palette.vars.baseTextDefault,
      height: `${groupedSubTabHeight}px`,
      minWidth: 0,
      minHeight: `${groupedSubTabHeight}px`,
      padding,
      textTransform: "none",
      transition: "none",
      "&:hover": {
        backgroundColor: theme.palette.vars.controlBackgroundMedium,
      },
      "&.Mui-selected": {
        backgroundColor: "unset",
        color: theme.palette.vars.interactiveSecondaryDefaultActive,
      },
      "&.Mui-disabled": {
        color: theme.palette.vars.baseTextWeak,
        opacity: 1,
      },
      "@media (max-width: 600px)": {
        height: "44px",
        minHeight: "44px",
      },
    };
  }

  if (type === "toggleTab") {
    return {
      ...theme.typography.captionSemibold,
      borderRadius: "20px",
      color: theme.palette.vars.baseTextDefault,
      height: `${toggleTabHeight}px`,
      minWidth: 0,
      minHeight: `${toggleTabHeight}px`,
      padding,
      textTransform: "none",
      transition: "none",
      "&:hover": {
        backgroundColor: theme.palette.vars.controlBackgroundMedium,
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.vars.controlBackgroundMedium,
        color: theme.palette.vars.interactiveSecondaryDefaultActive,
      },
      "&.Mui-disabled": {
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.vars.baseBackgroundMedium
            : theme.palette.vars.controlBackgroundWeak,
        color: theme.palette.vars.baseTextWeak,
        opacity: 1,
      },
      "@media (max-width: 600px)": {
        height: "44px",
        minHeight: "44px",
      },
    };
  }

  return {
    ...theme.typography.body1Semibold,
    color: theme.palette.vars.baseTextDefault,
    height: `${groupedTabHeight}px`,
    minWidth: 0,
    minHeight: `${groupedTabHeight}px`,
    padding,
    textTransform: "none",
    transition: "none",
    "&:hover": {
      backgroundColor: theme.palette.vars.controlBackgroundMedium,
    },
    "&.Mui-selected": {
      backgroundColor: "unset",
      color: theme.palette.vars.interactiveSecondaryDefaultActive,
    },
    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextWeak,
      opacity: 1,
    },
    "@media (max-width: 600px)": {
      height: "44px",
      minHeight: "44px",
    },
  };
};

export const getTabsBoxStyles = (): SxProps<Theme> => ({});

export const getTabsFrameStyles = (
  theme: Theme,
  type: TabsType,
  orientation: "horizontal" | "vertical",
): SxProps<Theme> => ({
  ...(type === "main"
    ? groupTabs
    : type === "subTab"
      ? groupSubTabs
      : toggleTabs),
  ...(type === "main" && {
    overflow: "visible",
    ...(orientation === "vertical"
      ? { borderRight: `1px solid ${theme.palette.vars.controlBorderStrong}` }
      : {
          borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
        }),
  }),
  "& .MuiTab-root": {
    gap: "8px",
  },
  "& .MuiTab-iconWrapper": {
    margin: 0,
  },
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.vars.interactiveSecondaryDefaultActive,
    borderRadius: "100px",
    bottom: orientation === "horizontal" ? 0 : undefined,
    height: "3px",
    right: orientation === "vertical" ? 0 : undefined,
    width: orientation === "vertical" ? "3px" : undefined,
    zIndex: 1,
    ...(type === "toggleTab" && { display: "none" }),
  },
  "& .MuiTabs-scroller": {
    overflow: type === "main" ? "visible !important" : undefined,
  },
  "@media (max-width: 600px)": {
    height: "44px",
    minHeight: "44px",
  },
});
