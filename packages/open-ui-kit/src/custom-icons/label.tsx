/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Label(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 17.778 14">
      <path
        d="M 17.59,6.42 C 17.84,6.77 17.84,7.23 17.59,7.58 L 13.65,13.15 C 13.47,13.42 13.23,13.62 12.94,13.77 C 12.65,13.92 12.33,14 12,14 L 2,14 C 1.45,14 0.98,13.8 0.59,13.41 C 0.2,13.02 0,12.55 0,12 L 0,2 C 0,1.45 0.2,0.98 0.59,0.59 C 0.98,0.2 1.45,0 2,0 L 12,0 C 12.33,0 12.65,0.07 12.94,0.22 C 13.23,0.37 13.47,0.58 13.65,0.85 L 17.59,6.42 M 15.14,7.58 C 15.39,7.23 15.39,6.77 15.14,6.42 L 12,2 L 2,2 L 2,12 L 12,12 L 15.14,7.58 M 2,7 L 2,12 L 2,2 L 2,7"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
