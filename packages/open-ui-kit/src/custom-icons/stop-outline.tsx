/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function StopOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 12 12">
      <path
        d="M 0,10 L 0,2 C 0,1.45 0.2,0.979 0.59,0.588 C 0.98,0.196 1.45,0 2,0 L 10,0 C 10.55,0 11.02,0.196 11.41,0.588 C 11.8,0.979 12,1.45 12,2 L 12,10 C 12,10.55 11.8,11.021 11.41,11.413 C 11.02,11.804 10.55,12 10,12 L 2,12 C 1.45,12 0.98,11.804 0.59,11.413 C 0.2,11.021 0,10.55 0,10 M 2,10 L 10,10 L 10,2 L 2,2 L 2,10"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
