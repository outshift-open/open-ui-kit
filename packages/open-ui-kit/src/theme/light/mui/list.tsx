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

export const listComponent = (theme: Theme): Components => {
  const commonStyle = {
    ...theme.typography.body1,
    color: theme.palette.vars.baseTextDefault,
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    minHeight: "40px",
    alignItems: "center",
    "&.MuiListItem-dense, &.MuiListItemButton-dense": {
      ...theme.typography.body2,
      minHeight: "36px",
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.vars.controlBackgroundMedium,
      color: theme.palette.vars.interactiveSecondaryDefaultActive,
    },
    "&:hover": {
      backgroundColor: theme.palette.vars.controlBackgroundMedium,
    },
    "&:focus, &:focus-visible, &.Mui-focusVisible": {
      backgroundColor: theme.palette.vars.controlBackgroundMedium,
    },
    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextWeak,
      backgroundColor: theme.palette.vars.controlBackgroundDisabled,
    },
  };

  return {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: commonStyle,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: commonStyle,
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "24px",
          marginRight: "8px",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: theme.palette.vars.baseTextWeak,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          color: theme.palette.vars.baseTextWeak,
        },
      },
    },
  };
};
