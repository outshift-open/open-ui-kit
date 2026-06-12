/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  BoxProps,
  CircularProgressProps,
  SxProps,
  Theme,
} from "@mui/material";

export interface SpinnerProps extends CircularProgressProps {
  /** Diameter of the spinner in pixels. Defaults to 40. */
  size?: CircularProgressProps["size"];
  /** Spinner color variant. Primary and secondary are tokenized by the component. */
  color?: CircularProgressProps["color"];
  /** MUI sx overrides applied to both progress layers after internal styles. */
  sx?: SxProps<Theme>;
  /** Props forwarded to the wrapping Box element. */
  boxProps?: BoxProps;
}
