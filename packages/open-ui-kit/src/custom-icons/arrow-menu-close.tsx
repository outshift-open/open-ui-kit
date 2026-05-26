/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowMenuClose(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8.6 18">
      <path
        d="M 3.75,13.15 L 0.3,9.7 C 0.1,9.5 0,9.27 0,9 C 0,8.73 0.1,8.5 0.3,8.3 L 3.75,4.85 C 3.92,4.68 4.1,4.64 4.3,4.72 C 4.5,4.81 4.6,4.97 4.6,5.2 L 4.6,12.8 C 4.6,13.03 4.5,13.19 4.3,13.28 C 4.1,13.36 3.92,13.32 3.75,13.15 M 6.6,17 L 6.6,1 C 6.6,0.72 6.7,0.48 6.89,0.29 C 7.08,0.1 7.32,0 7.6,0 C 7.88,0 8.12,0.1 8.31,0.29 C 8.5,0.48 8.6,0.72 8.6,1 L 8.6,17 C 8.6,17.28 8.5,17.52 8.31,17.71 C 8.12,17.9 7.88,18 7.6,18 C 7.32,18 7.08,17.9 6.89,17.71 C 6.7,17.52 6.6,17.28 6.6,17"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
