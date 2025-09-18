/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PA_Colors } from "@/theme/dark/dark-color-palette";
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
    backgroundColor: PA_Colors.surface[700],
  },
  parentAccordion: {
    "&.MuiPaper-root": {
      border: "0px solid !important",
      borderBottom: `0.5px solid ${PA_Colors.surface[400]} !important`,
      boxShadow: "unset",
      margin: "0",
      "&:not(.Mui-disabled) .MuiAccordionSummary-expandIconWrapper": {
        color: PA_Colors.grey[50],
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
        color: PA_Colors.grey[50],
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
    backgroundColor: PA_Colors.surface[700],
    flexDirection: "row-reverse",
  }),
  accordionDetails: {
    backgroundColor: PA_Colors.surface[700],
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
    backgroundColor: PA_Colors.surface[700],
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
    backgroundColor: PA_Colors.surface[400],
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
      backgroundColor: PA_Colors.surface[500],
      height: "58px",
      justifyContent: "left",
      padding: "8px 16px",
    },
  },
};

const emptySearchStyles = {
  emptySearchTypography: { color: PA_Colors.grey[300], marginTop: "50px" },
  emptySearchInput: { color: PA_Colors.grey[50] },
};

export const styles = {
  ...filtersDrawerStyles,
  ...filterItemStyles,
  ...emptySearchStyles,
};
