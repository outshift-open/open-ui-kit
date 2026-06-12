/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function PauseOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <path
        d="M 10,14 C 9.45,14 8.98,13.804 8.59,13.413 C 8.2,13.021 8,12.55 8,12 L 8,2 C 8,1.45 8.2,0.979 8.59,0.588 C 8.98,0.196 9.45,0 10,0 L 12,0 C 12.55,0 13.02,0.196 13.41,0.588 C 13.8,0.979 14,1.45 14,2 L 14,12 C 14,12.55 13.8,13.021 13.41,13.413 C 13.02,13.804 12.55,14 12,14 L 10,14 M 2,14 C 1.45,14 0.98,13.804 0.59,13.413 C 0.2,13.021 0,12.55 0,12 L 0,2 C 0,1.45 0.2,0.979 0.59,0.588 C 0.98,0.196 1.45,0 2,0 L 4,0 C 4.55,0 5.02,0.196 5.41,0.588 C 5.8,0.979 6,1.45 6,2 L 6,12 C 6,12.55 5.8,13.021 5.41,13.413 C 5.02,13.804 4.55,14 4,14 L 2,14 M 10,12 L 12,12 L 12,2 L 10,2 L 10,12 M 2,12 L 4,12 L 4,2 L 2,2 L 2,12"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
