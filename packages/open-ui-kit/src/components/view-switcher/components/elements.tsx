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

import { Box, styled, useTheme } from "@mui/material";
import { ViewSwitcherSize } from "../types";

export const StyledBox = styled(Box)(
  ({ fullWidth }: { fullWidth?: boolean }) => ({
    display: fullWidth ? "flex" : "inline-block",
    borderRadius: "8px",
  }),
);

export const StyledButton = styled("button")(({
  size,
  disabled,
  selected,
  isIconOnly,
}: {
  fullWidth?: boolean;
  size?: ViewSwitcherSize;
  disabled?: boolean;
  selected: boolean;
  isIconOnly: boolean;
}) => {
  const theme = useTheme();
  return {
    cursor: disabled ? "not-allowed" : "pointer",
    pointerEvents: disabled ? "none" : "all",

    display: "inline-flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",

    padding: isIconOnly ? "4px" : size === "sm" ? "4px 8px" : "4px 12px",

    fontSize: size === "sm" ? "12px" : "14px",
    fontWeight: 600,
    lineHeight: size === "sm" ? "16px" : "20px",
    color: disabled
      ? theme.palette.vars.baseTextDisabled
      : selected
        ? theme.palette.vars.baseTextStrong
        : theme.palette.vars.baseTextDefault,

    backgroundColor: disabled
      ? theme.palette.vars.controlBackgroundDisabled
      : selected
        ? theme.palette.vars.controlBackgroundDefault
        : theme.palette.vars.controlBackgroundDefault,

    border: `2px solid ${disabled ? theme.palette.vars.controlBorderMedium : selected ? theme.palette.vars.interactiveTertiaryActive : theme.palette.vars.controlBorderMedium}`,
    borderRadius: 0,
    borderRightWidth: 0,

    "&:first-child": {
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
    },

    "&:last-child": {
      borderRightWidth: "2px",
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
    },

    "&:hover": {
      backgroundColor: theme.palette.vars.baseBackgroundHover,
      color: theme.palette.vars.baseTextStrong,
    },

    "&.osd-view-switcher-option-selected": {
      borderWidth: "2px",
      "& + .osd-view-switcher-option": {
        borderLeftWidth: 0,
      },
    },

    "& > .view-switcher-option-icon": {
      fontSize: size === "sm" ? "16px" : "20px",
      fill: theme.palette.vars.controlIconDefault,
    },
  };
});
