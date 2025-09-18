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

export const defaultPopperContentStyles = {
  width: "480px",
  maxHeight: "375px",
  backgroundColor: PA_Colors.surface[500],
  borderRadius: "4px",
  boxShadow:
    "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
};

export const autocompleteStyles = (showSearchBox: boolean, label: boolean) => ({
  "& .MuiInputBase-root.MuiAutocomplete-inputRoot": {
    padding: "7px 8px 7px 16px",
    marginTop: label ? "24px" : 0,

    "&.MuiInputBase-sizeSmall": {
      padding: "3px 8px 3px 16px",
    },

    // the search box inside Autocomplete
    "& .MuiInputBase-input.MuiAutocomplete-input": {
      minWidth: "100px",
      ...(!showSearchBox
        ? { height: "0 !important", padding: 0 }
        : { padding: "1px" }), // needed to account for the small (32px) and medium (40px) autocomplete height sizes
    },
  },
  "& .MuiAutocomplete-endAdornment": { paddingRight: "6px" },
});

export const chip = {
  maxWidth: "169px",
  "& .MuiChip-label": {
    textTransform: "none",
  },
};

export const searchMatchText = {
  color: darkTheme.palette.primary[500],
};

export const selectNodeListItemStyle = {
  height: "40px",
  padding: "8px 16px",
  gap: "8px",
  justifyContent: "space-between",
  cursor: "pointer",
};

export const iconStyle = {
  width: "24px",
  height: "24px",
};

export const selectNodeStyle = (nestLevel: number) => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  padding: 0,
  alignItems: "center",
  gap: "8px",
  alignSelf: "stretch",
  marginLeft: `${32 * nestLevel}px`,
  cursor: "pointer",
  overflow: "hidden",
});

export const overflowTooltipPopperStyle = {
  wordBreak: "break-word",
};
