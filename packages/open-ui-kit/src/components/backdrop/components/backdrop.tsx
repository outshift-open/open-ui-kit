/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Backdrop as MuiBackdrop,
  BackdropProps as MuiBackdropProps,
} from "@mui/material";

export type BackdropProps = MuiBackdropProps;

export const Backdrop = (props: BackdropProps) => {
  return <MuiBackdrop {...props} />;
};
