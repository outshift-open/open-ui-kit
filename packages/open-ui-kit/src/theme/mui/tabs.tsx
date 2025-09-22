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

export const tabsComponent = (theme: Theme): Components => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            backgroundColor:
              theme.palette.vars.interactiveSecondaryDefaultActive,
            height: "3px",
          },
        },
      },
      variants: [
        {
          props: {
            orientation: "horizontal",
          },
          style: {
            borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          },
        },
        {
          props: {
            orientation: "vertical",
          },
          style: {
            borderRight: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          },
        },
      ],
    },
  };
};
