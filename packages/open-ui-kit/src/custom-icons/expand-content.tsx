/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ExpandContent(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <path
        d="M 2,12 L 5,12 C 5.28,12 5.52,12.1 5.71,12.29 C 5.9,12.48 6,12.72 6,13 C 6,13.28 5.9,13.52 5.71,13.71 C 5.52,13.9 5.28,14 5,14 L 1,14 C 0.72,14 0.48,13.9 0.29,13.71 C 0.1,13.52 0,13.28 0,13 L 0,9 C 0,8.72 0.1,8.48 0.29,8.29 C 0.48,8.1 0.72,8 1,8 C 1.28,8 1.52,8.1 1.71,8.29 C 1.9,8.48 2,8.72 2,9 L 2,12 M 12,2 L 9,2 C 8.72,2 8.48,1.9 8.29,1.71 C 8.1,1.52 8,1.28 8,1 C 8,0.72 8.1,0.48 8.29,0.29 C 8.48,0.1 8.72,0 9,0 L 13,0 C 13.28,0 13.52,0.1 13.71,0.29 C 13.9,0.48 14,0.72 14,1 L 14,5 C 14,5.28 13.9,5.52 13.71,5.71 C 13.52,5.9 13.28,6 13,6 C 12.72,6 12.48,5.9 12.29,5.71 C 12.1,5.52 12,5.28 12,5 L 12,2"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
