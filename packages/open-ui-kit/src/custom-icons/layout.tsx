/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Layout(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        d="M 0,16 L 0,7 C 0,6.45 0.2,5.98 0.59,5.59 C 0.98,5.2 1.45,5 2,5 L 5,5 L 5,2 C 5,1.45 5.2,0.98 5.59,0.59 C 5.98,0.2 6.45,0 7,0 L 16,0 C 16.55,0 17.02,0.2 17.41,0.59 C 17.8,0.98 18,1.45 18,2 L 18,16 C 18,16.55 17.8,17.02 17.41,17.41 C 17.02,17.8 16.55,18 16,18 L 2,18 C 1.45,18 0.98,17.8 0.59,17.41 C 0.2,17.02 0,16.55 0,16 M 13,16 L 16,16 L 16,2 L 7,2 L 7,5 L 11,5 C 11.55,5 12.02,5.2 12.41,5.59 C 12.8,5.98 13,6.45 13,7 L 13,16 M 7,16 L 11,16 L 11,7 L 7,7 L 7,16 M 2,16 L 5,16 L 5,7 L 2,7 L 2,16"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
