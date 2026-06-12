/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";

const getChildAccordionMarginLeft = (
  level: number,
  isSelectAllEnabled?: boolean,
  isSelectAllEnabledOnParent?: boolean,
) => {
  if (level > 1) {
    if (isSelectAllEnabled) {
      return "20px";
    } else {
      if (isSelectAllEnabledOnParent) {
        return "52px";
      } else {
        return "20px";
      }
    }
  }

  return "0";
};

const filterItemStyles = (theme: Theme) => ({
  loadingStack: {
    padding: "8px 24px",
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  parentAccordion: {
    "&.MuiPaper-root": {
      border: "0px solid !important",
      borderBottom: `0.5px solid ${theme.palette.vars.baseBorderDefault} !important`,
      boxShadow: "unset",
      margin: "0",
      "&:not(.Mui-disabled) .MuiAccordionSummary-expandIconWrapper": {
        color: theme.palette.vars.baseTextDefault,
      },
      "& .MuiAccordionSummary-content": {
        margin: 0,
      },
      "& .MuiAccordionDetails-root": {
        padding: 0,
      },
      "& .MuiAccordionSummary-root": {
        minHeight: "40px",
        padding: "0 16px",
      },
      "&.Mui-expanded": {
        margin: "0",
        "& .MuiAccordionSummary-root": {
          minHeight: "40px",
          "& .MuiAccordionSummary-content": {
            margin: "0",
          },
        },
      },
    },
    "&.MuiPaper-root:last-child": {
      border: "0px solid !important",
    },
  },
  childAccordion: (
    level: number,
    isSelectAllEnabled?: boolean,
    isSelectAllEnabledOnParent?: boolean,
  ) => ({
    "&.MuiPaper-root": {
      border: "0px solid !important",
      boxShadow: "unset",
      margin: `0 8px 0 ${getChildAccordionMarginLeft(
        level,
        isSelectAllEnabled,
        isSelectAllEnabledOnParent,
      )}`,
      "&:not(.Mui-disabled) .MuiAccordionSummary-expandIconWrapper": {
        color: theme.palette.vars.baseTextDefault,
      },
      "& .MuiAccordionSummary-content": {
        margin: 0,
      },
      "& .MuiAccordionDetails-root": {
        padding: "0 12px",
      },
      "& .MuiAccordionSummary-root": {
        minHeight: "40px !important",
      },
      "&.Mui-expanded": {
        margin: `0 8px 0 ${getChildAccordionMarginLeft(
          level,
          isSelectAllEnabled,
          isSelectAllEnabledOnParent,
        )}`,
        "& .MuiAccordionSummary-root": {
          minHeight: "40px !important",
          "& .MuiAccordionSummary-content": {
            margin: "0",
          },
        },
      },
    },
  }),
  accordionSummery: (isSelected: boolean) => ({
    color: isSelected
      ? theme.palette.vars.interactivePrimaryDefaultDefault
      : theme.palette.vars.baseTextDefault,
    backgroundColor: theme.palette.vars.baseBackgroundHover,
    flexDirection: "row-reverse",
    gap: "8px",
  }),
  accordionDetails: {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  listItem: (level: number, isSelectAllEnabled: boolean) => {
    const baseStyles = {
      boxSizing: "border-box" as const,
      height: "40px",
      minHeight: "40px",
    };

    if (level === 0) {
      if (isSelectAllEnabled) {
        return { ...baseStyles, paddingLeft: "76px" };
      }
      return { ...baseStyles, paddingLeft: "12px" };
    } else if (level > 0) {
      if (isSelectAllEnabled) {
        return { ...baseStyles, paddingLeft: "64px" };
      }
      return { ...baseStyles, paddingLeft: "32px" };
    }
    return { ...baseStyles, paddingLeft: "0px" };
  },
  listItemButton: {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
    boxSizing: "border-box",
    height: "40px",
    minHeight: "40px",
    padding: "8px 16px",
  },
  searchMatchText: {
    color: theme.palette.vars.interactivePrimaryDefaultDefault,
  },
  accordionTitleTypography: (isSelectAllEnabled: boolean) => ({
    margin: isSelectAllEnabled ? 0 : "0 8px",
    textTransform: "capitalize" as const,
  }),
  accordionCheckbox: {
    padding: "0 8px",
  },
});

const filtersDrawerStyles = (theme: Theme) => ({
  drawerPaper: {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
    color: theme.palette.vars.baseTextDefault,
    width: "480px",
  },
  drawerBody: {
    flex: 1,
    overflow: "auto",
    width: "480px",
  },
  drawerHeader: {
    padding: "16px 24px",
    width: "480px",
    backgroundColor: theme.palette.vars.baseBackgroundWeak,
  },
  drawerTitle: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerCloseButton: {
    color: theme.palette.vars.controlIconDefault,
    height: "40px",
    width: "40px",
  },
  searchField: {
    marginTop: "16px",
    width: "100%",
  },
  activeFiltersDesc: {
    color: theme.palette.vars.interactivePrimaryDefaultDefault,
  },
  clearAll: {
    "&.MuiButton-sizeMedium": {
      backgroundColor: theme.palette.vars.controlBackgroundWeak,
      height: "58px",
      justifyContent: "left",
      padding: "8px 16px",
    },
  },
});

const emptySearchStyles = (theme: Theme) => ({
  emptySearchTypography: {
    color: theme.palette.vars.baseTextWeak,
    marginTop: "50px",
  },
  emptySearchInput: {
    color: theme.palette.vars.baseTextDefault,
  },
});

export const getStyles = (theme: Theme) => ({
  ...filtersDrawerStyles(theme),
  ...filterItemStyles(theme),
  ...emptySearchStyles(theme),
});
