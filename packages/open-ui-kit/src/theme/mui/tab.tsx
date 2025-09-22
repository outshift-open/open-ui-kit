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

const toggleTabHeight = 32;
const groupedSubTabHeight = 40;
const groupedTabHeight = 42;
const padding = "8px 24px";

export const tabComponent = (theme: Theme): Components => {
  return {
    MuiTab: {
      variants: [
        {
          props: {
            type: "main",
          },
          style: {
            ...theme.typography.body1,
            fontWeight: theme.typography.fontWeightSemiBold,
            minHeight: `${groupedTabHeight}px`,
            height: `${groupedTabHeight}px`,
            color: theme.palette.vars.baseTextDefault,
            padding,
            "&:hover": {
              backgroundColor: theme.palette.vars?.controlBackgroundMedium,
            },
            ["&.Mui-selected"]: {
              backgroundColor: "none",
              color: theme.palette.vars.interactiveSecondaryDefaultActive,
            },
          },
        },
        {
          props: {
            type: "subTab",
          },
          style: {
            ...theme.typography.body2,
            fontWeight: theme.typography.fontWeightSemiBold,
            minHeight: `${groupedSubTabHeight}px`,
            height: `${groupedSubTabHeight}px`,
            color: theme.palette.vars.baseTextDefault,
            padding,
            "&:hover": {
              backgroundColor: theme.palette.vars?.controlBackgroundMedium,
            },
            "&.Mui-selected": {
              backgroundColor: "unset",
              color: theme.palette.vars.interactiveSecondaryDefaultActive,
            },
          },
        },
        {
          props: {
            type: "toggleTab",
          },
          style: {
            ...theme.typography.caption,
            fontWeight: theme.typography.fontWeightSemiBold,
            color: theme.palette.vars.baseTextDefault,
            minHeight: `${toggleTabHeight}px`,
            height: `${toggleTabHeight}px`,
            borderRadius: "20px",
            backgroundColor: theme.palette.vars?.controlBackgroundWeak,
            "&:hover": {
              backgroundColor: theme.palette.vars?.controlBackgroundMedium,
            },
            "&.Mui-selected": {
              backgroundColor: theme.palette.vars?.controlBackgroundMedium,
              color: theme.palette.vars.interactiveSecondaryDefaultActive,
            },
          },
        },
      ],
      defaultProps: {
        loading: false,
        type: "main",
      },
    },
  };
};
