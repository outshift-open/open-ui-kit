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

const tableCell = (theme: Theme) => ({
  borderBottom: "none",
  padding: "8px 0px 0px 0px",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextDefault,
});

const tableHeaderCell = (isHorizontal: boolean, theme: Theme) => ({
  borderBottom: "none",
  padding: isHorizontal ? "0px" : "8px 0px 0px 0px",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: theme.palette.vars.baseTextWeak,
});

export const styles = (theme: Theme) => ({
  Table: (isHorizontal: boolean) => ({
    paddingTop: isHorizontal ? "0px" : "16px",
    overflow: "visible",
  }),
  leftMostColumnCell: {
    ...tableCell(theme),
    display: "inline-flex",
    alignItems: "center",
  },
  cell: {
    ...tableCell(theme),
    textAlign: "right",
  },
  leftMostHeaderCell: (isHorizontal: boolean) => ({
    ...tableHeaderCell(isHorizontal, theme),
  }),
  headerCell: (isHorizontal: boolean) => ({
    ...tableHeaderCell(isHorizontal, theme),
    textAlign: "right",
  }),
  circle: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
    flexShrink: 0,
  },
  clickable: {
    cursor: "pointer",
  },
});
