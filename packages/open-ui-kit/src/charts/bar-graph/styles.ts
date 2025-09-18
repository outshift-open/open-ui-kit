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

import { Theme } from "@mui/material";

export const graphStyles = (theme: Theme) => ({
  legendCircle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
  },
  headerText: {
    color: theme.palette.vars.baseTextWeak,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  xAxisTick: {
    fill: theme.palette.vars.inactiveBackgroundDefault,
    fontSize: "10px",
    fontFamily: "Inter",
    fontWeight: 600,
    letterSpacing: "0.4px",
  },
  yAxisTick: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    alignItems: "center",
  },
  graphContainer: {
    width: "100%",
  },
});

export const tooltipStyles = (theme: Theme) => ({
  mainContainer: {
    padding: "8px 12px",
    borderRadius: "4px",
    background: theme.palette.vars.baseBackgroundStrong,
  },
  title: {
    marginBottom: "8px",
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  categoryEntry: (categoryColor?: string) => ({
    display: "flex",
    alignItems: "center",

    "&::before": {
      content: '""',
      height: "6px",
      width: "6px",
      borderRadius: "50%",
      marginRight: "6px",
      background: categoryColor ?? theme.palette.vars.baseBackgroundStrong,
    },
  }),
});
