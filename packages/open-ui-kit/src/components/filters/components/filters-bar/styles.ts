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

export const styles = {
  searchStack: {
    flex: "1",
  },
  searchInput: {
    flex: "1",
    "& .MuiInputBase-root": {
      borderRadius: "4px 0px 0px 4px",
    },
  },
  searchButton: {
    borderRadius: "0px 4px 4px 0px",
  },
  chipsStack: {
    flexWrap: "wrap",
    rowGap: "8px",
    minHeight: "32px",
    marginTop: "12px",
  },
  chipTooltip: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: PA_Colors.surface[50],
      color: darkTheme.palette.grey[50],
      marginBottom: "2px !important",
      height: "auto",
      display: "flow",
    },
  },
  chip: {
    marginRight: "8px",
    maxWidth: "240px",
    textTransform: "none",
  },
};
