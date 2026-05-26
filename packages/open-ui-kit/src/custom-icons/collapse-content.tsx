/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CollapseContent(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 10,4 L 13,4 C 13.28,4 13.52,4.1 13.71,4.29 C 13.9,4.48 14,4.72 14,5 C 14,5.28 13.9,5.52 13.71,5.71 C 13.52,5.9 13.28,6 13,6 L 9,6 C 8.72,6 8.48,5.9 8.29,5.71 C 8.1,5.52 8,5.28 8,5 L 8,1 C 8,0.72 8.1,0.48 8.29,0.29 C 8.48,0.1 8.72,0 9,0 C 9.28,0 9.52,0.1 9.71,0.29 C 9.9,0.48 10,0.72 10,1 L 10,4 M 4,10 L 1,10 C 0.72,10 0.48,9.9 0.29,9.71 C 0.1,9.52 0,9.28 0,9 C 0,8.72 0.1,8.48 0.29,8.29 C 0.48,8.1 0.72,8 1,8 L 5,8 C 5.28,8 5.52,8.1 5.71,8.29 C 5.9,8.48 6,8.72 6,9 L 6,13 C 6,13.28 5.9,13.52 5.71,13.71 C 5.52,13.9 5.28,14 5,14 C 4.72,14 4.48,13.9 4.29,13.71 C 4.1,13.52 4,13.28 4,13 L 4,10"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
