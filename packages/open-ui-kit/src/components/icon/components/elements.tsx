/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Icon as MuiIcon,
  IconProps as MuiIconProps,
  styled,
} from "@mui/material";
import type { ComponentType } from "react";

export const StyledIcon = styled(MuiIcon, {
  shouldForwardProp: (prop) =>
    prop !== "hasColorProp" && prop !== "hasFontSizeProp",
})<{ hasColorProp?: boolean; hasFontSizeProp?: boolean }>(
  ({ theme, hasColorProp, hasFontSizeProp }) => ({
    color: hasColorProp ? undefined : theme.palette.vars.controlIconDefault,
    fontSize: hasFontSizeProp ? undefined : "24px",
  }),
) as ComponentType<
  MuiIconProps & { hasColorProp?: boolean; hasFontSizeProp?: boolean }
>;
