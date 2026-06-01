/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, styled, type BoxProps } from "@mui/material";
import type { ComponentType } from "react";
import type { LoadingStatesSkeletonState } from "../types";
import {
  getLoadingStatesRootStyles,
  getLoadingStatesSkeletonCardStyles,
  getLoadingStatesSkeletonPreviewStyles,
  getLoadingStatesSkeletonSectionStyles,
  getLoadingStatesSpinnerGroupStyles,
  getLoadingStatesSpinnerRowStyles,
  getLoadingStatesSpinnerSectionStyles,
} from "../styles";

export const StyledLoadingStatesRoot = styled(Box)(() =>
  getLoadingStatesRootStyles(),
) as ComponentType<BoxProps>;

export const StyledSpinnerSection = styled(Box)(() =>
  getLoadingStatesSpinnerSectionStyles(),
) as ComponentType<BoxProps>;

export const StyledSpinnerGroup = styled(Box)(() =>
  getLoadingStatesSpinnerGroupStyles(),
) as ComponentType<BoxProps>;

export const StyledSpinnerRow = styled(Box)(() =>
  getLoadingStatesSpinnerRowStyles(),
) as ComponentType<BoxProps>;

export const StyledSkeletonSection = styled(Box)(() =>
  getLoadingStatesSkeletonSectionStyles(),
) as ComponentType<BoxProps>;

export const StyledSkeletonCard = styled(Box)(() =>
  getLoadingStatesSkeletonCardStyles(),
) as ComponentType<BoxProps>;

export const StyledSkeletonPreview = styled(Box, {
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: LoadingStatesSkeletonState }>(() =>
  getLoadingStatesSkeletonPreviewStyles(),
) as ComponentType<BoxProps & { state: LoadingStatesSkeletonState }>;
