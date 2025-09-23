/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { surfaceDarkPalette, greyPalette } from "@/theme/color-palette";
import { darkTheme } from "@/theme/dark/dark-theme";

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

const filterItemStyles = {
  loadingStack: {
    padding: "8px 24px",
    backgroundColor: surfaceDarkPalette[700],
  },
  parentAccordion: {
    "&.MuiPaper-root": {
      border: "0px solid !important",
      borderBottom: `0.5px solid ${surfaceDarkPalette[400]} !important`,
      boxShadow: "unset",
      margin: "0",
      "&:not(.Mui-disabled) .MuiAccordionSummary-expandIconWrapper": {
        color: greyPalette[50],
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
        color: greyPalette[50],
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
      ? (darkTheme.palette.primary[500] ?? "unset")
      : darkTheme.palette.text.primary,
    backgroundColor: surfaceDarkPalette[700],
    flexDirection: "row-reverse",
  }),
  accordionDetails: {
    backgroundColor: surfaceDarkPalette[700],
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
    return { paddingLeft: "0px" }; // Default return value
  },
  listItemButton: {
    backgroundColor: surfaceDarkPalette[700],
    paddingTop: 0,
    paddingBottom: 0,
  },
  searchMatchText: {
    color: darkTheme.palette.primary[500],
  },
  accordionTitleTypography: (isSelectAllEnabled: boolean) => ({
    margin: isSelectAllEnabled ? 0 : "0 8px",
    textTransform: "capitalize",
  }),
  accordionCheckbox: {
    padding: "0 8px",
  },
};

const filtersDrawerStyles = {
  drawerBody: {
    width: "480px",
    paddingLeft: "8px",
  },
  drawerHeader: {
    padding: "16px 24px",
    width: "480px",
    backgroundColor: surfaceDarkPalette[400],
  },
  drawerTitle: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchField: {
    marginTop: "16px",
  },
  activeFiltersDesc: {
    color: darkTheme.palette.primary[500],
  },
  clearAll: {
    "&.MuiButton-sizeMedium": {
      backgroundColor: surfaceDarkPalette[500],
      height: "58px",
      justifyContent: "left",
      padding: "8px 16px",
    },
  },
};

const emptySearchStyles = {
  emptySearchTypography: { color: greyPalette[300], marginTop: "50px" },
  emptySearchInput: { color: greyPalette[50] },
};

export const styles = {
  ...filtersDrawerStyles,
  ...filterItemStyles,
  ...emptySearchStyles,
};
