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
        minHeight: "44px",
      },
      "&.Mui-expanded": {
        margin: "0",
        "& .MuiAccordionSummary-root": {
          minHeight: "44px",
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
  }),
  accordionDetails: {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
  },
  listItem: (level: number, isSelectAllEnabled: boolean) => {
    if (level === 0) {
      if (isSelectAllEnabled) {
        return { paddingLeft: "76px" };
      }
      return { paddingLeft: "12px" };
    } else if (level > 0) {
      if (isSelectAllEnabled) {
        return { paddingLeft: "64px" };
      }
      return { paddingLeft: "32px" };
    }
    return { paddingLeft: "0px" };
  },
  listItemButton: {
    backgroundColor: theme.palette.vars.baseBackgroundHover,
    paddingTop: 0,
    paddingBottom: 0,
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
  drawerBody: {
    width: "480px",
    paddingLeft: "8px",
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
  searchField: {
    marginTop: "16px",
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
