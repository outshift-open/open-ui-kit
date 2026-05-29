/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Backdrop as MuiBackdrop } from "@mui/material";
import type { BackdropProps } from "../types";

export const Backdrop = (props: BackdropProps) => {
  return <MuiBackdrop {...props} />;
};
