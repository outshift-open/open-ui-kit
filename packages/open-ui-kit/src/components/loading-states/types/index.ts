/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BoxProps, SxProps, Theme } from "@mui/material";

export type LoadingStatesSkeletonState = "loading" | "failure";

export interface LoadingStatesProps extends Omit<BoxProps, "children"> {
  /** Spinner sizes rendered in the spinner section. */
  spinnerSizes?: readonly number[];
  /** Shows or hides the spinner section. */
  showSpinner?: boolean;
  /** Shows or hides the skeleton section. */
  showSkeleton?: boolean;
  /** Skeleton examples to render. Loading animates; failure renders the static fallback color. */
  skeletonStates?: readonly LoadingStatesSkeletonState[];
  /** Optional style overrides for the root container. */
  sx?: SxProps<Theme>;
}
