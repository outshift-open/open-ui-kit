/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Dots(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 4 16">
      <path
        d="M 2,4 C 3.1,4 4,3.1 4,2 C 4,0.9 3.1,0 2,0 C 0.9,0 0,0.9 0,2 C 0,3.1 0.9,4 2,4 M 2,6 C 0.9,6 0,6.9 0,8 C 0,9.1 0.9,10 2,10 C 3.1,10 4,9.1 4,8 C 4,6.9 3.1,6 2,6 M 2,12 C 0.9,12 0,12.9 0,14 C 0,15.1 0.9,16 2,16 C 3.1,16 4,15.1 4,14 C 4,12.9 3.1,12 2,12"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
