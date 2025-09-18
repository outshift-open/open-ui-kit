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

import { CSSProperties } from "react";
import { LinkType } from "../types";
import { Theme } from "@mui/material";

export const getLinkStyle = (
  color: string,
  disabled: boolean,
  linkType: LinkType,
  ellipsis: boolean,
) => {
  const pointerEventValue: CSSProperties["pointerEvents"] = disabled
    ? "none"
    : "auto";

  return {
    color: color,
    width: ellipsis ? "100%" : "fit-content",
    pointerEvents: pointerEventValue,
    display: "inline-flex",
    justifyContent: "center",
    textDecoration: disabled
      ? "none"
      : linkType === LinkType.UnderlineRegular
        ? "underline"
        : "initial", // on hover
  };
};

export const getLinkColors = (theme: Theme) => ({
  primary: {
    default: theme.palette.vars?.interactivePrimaryDefaultDefault,
    hover: theme.palette.vars?.interactivePrimaryDefaultHover,
    pressed: theme.palette.vars?.interactivePrimaryDefaultActive,
    disabled: theme.palette.vars?.interactivePrimaryDefaultDisabled,
  },
  secondary: {
    default: theme.palette.vars?.interactiveSecondaryDefaultDefault,
    hover: theme.palette.vars?.interactiveSecondaryDefaultHover,
    pressed: theme.palette.vars?.interactiveSecondaryDefaultActive,
    disabled: theme.palette.vars?.interactiveSecondaryDefaultDisabled,
  },
});
