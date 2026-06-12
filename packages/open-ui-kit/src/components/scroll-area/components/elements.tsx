/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import {
  getScrollAreaRootStyles,
  getScrollAreaViewportStyles,
} from "../styles";

export const ScrollAreaRoot = styled(Box)(
  getScrollAreaRootStyles,
) as ComponentType<BoxProps>;

export const ScrollAreaViewport = styled(Box)(({ theme }) =>
  getScrollAreaViewportStyles(theme),
) as ComponentType<BoxProps>;
