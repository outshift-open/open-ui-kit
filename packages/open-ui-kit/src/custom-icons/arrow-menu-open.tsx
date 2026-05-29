/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowMenuOpen(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8.6 18">
      <path
        d="M 0,17 L 0,1 C 0,0.72 0.1,0.48 0.29,0.29 C 0.48,0.1 0.72,0 1,0 C 1.28,0 1.52,0.1 1.71,0.29 C 1.9,0.48 2,0.72 2,1 L 2,17 C 2,17.28 1.9,17.52 1.71,17.71 C 1.52,17.9 1.28,18 1,18 C 0.72,18 0.48,17.9 0.29,17.71 C 0.1,17.52 0,17.28 0,17 M 4,12.8 L 4,5.2 C 4,4.97 4.1,4.81 4.3,4.72 C 4.5,4.64 4.68,4.68 4.85,4.85 L 8.3,8.3 C 8.5,8.5 8.6,8.73 8.6,9 C 8.6,9.27 8.5,9.5 8.3,9.7 L 4.85,13.15 C 4.68,13.32 4.5,13.36 4.3,13.28 C 4.1,13.19 4,13.03 4,12.8"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
