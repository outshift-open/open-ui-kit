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

export const searchIconStyle = (theme: Theme) => ({
  color: theme.palette.vars?.controlIconWeak,
  ".Mui-focused &": {
    color: theme.palette.vars.brandIconPrimaryDefault,
  },
});

export const clearIconStyle = (theme: Theme) => ({
  width: "21.6px",
  height: "21.6px",
  color: theme.palette.vars?.controlIconWeak,
});

export const clearButtonStyle = (inputHasValue: boolean) => {
  return {
    padding: "1px",
    visibility: inputHasValue ? "visible" : "hidden",
  };
};
