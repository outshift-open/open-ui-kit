/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Pause(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect x="6" y="5.5" width="4" height="12" rx="0.5" fill="currentColor" />
      <rect x="14" y="5.5" width="4" height="12" rx="0.5" fill="currentColor" />
    </SvgIcon>
  );
}
