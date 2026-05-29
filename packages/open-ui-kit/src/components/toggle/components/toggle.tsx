/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Switch, SwitchProps } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToggleProps extends SwitchProps {}

export const Toggle = (props: ToggleProps) => (
  <Switch disableRipple {...props} />
);
