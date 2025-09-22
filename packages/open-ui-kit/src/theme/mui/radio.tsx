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
import { RadioChecked } from "@/custom-icons";

export const radioComponent = (theme: Theme): Components => {
  return {
    MuiRadio: {
      defaultProps: {
        checkedIcon: <RadioChecked />,
      },
      styleOverrides: {
        root: {
          color: theme.palette.vars.controlIconDefault, // unchecked color
          "&.Mui-disabled": {
            color: theme.palette.vars.controlIconDisabled,
          },
          "&.MuiRadio-sizeSmall": {
            padding: "3px",
            "& svg": {
              height: "18px",
              width: "18px",
            },
          },
        },
      },
    },
  };
};
