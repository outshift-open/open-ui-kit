/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Minus(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 2">
      <path
        d="M 1,2 C 0.72,2 0.48,1.904 0.29,1.712 C 0.1,1.521 0,1.283 0,1 C 0,0.717 0.1,0.479 0.29,0.287 C 0.48,0.096 0.72,0 1,0 L 13,0 C 13.28,0 13.52,0.096 13.71,0.287 C 13.9,0.479 14,0.717 14,1 C 14,1.283 13.9,1.521 13.71,1.712 C 13.52,1.904 13.28,2 13,2 L 1,2"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
