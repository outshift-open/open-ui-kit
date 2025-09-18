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

import { Components, Theme } from "@mui/material";

export const dialogComponent = (theme: Theme): Components => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          background: theme.palette.vars.controlBackgroundDefault,
          padding: "24px",
          "&.MuiDialog-paperWidthMd": {
            maxWidth: "480px",
          },
          "&.MuiDialog-paperWidthLg": {
            maxWidth: "720px",
          },
          "&.MuiDialog-paperWidthXl": {
            maxWidth: "1200px",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "24px 0 0 0",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          color: theme.palette.vars.baseTextDefault,
        },
      },
    },
  };
};
