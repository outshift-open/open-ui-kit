/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MenuCICD(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#777D85"
          d="M9.707 2.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414L10 6H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2a1 1 0 1 1 0 2H6a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5h4l-.293-.293a1 1 0 0 1 0-1.414ZM16 4a1 1 0 1 0 0 2h2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L14 20h4a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5h-2Z"
        />
        <path
          fill="#E8E9EA"
          d="M13.949 9.316a1 1 0 0 0-1.898-.632l-2 6a1 1 0 0 0 1.898.632l2-6ZM16.707 14.707l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 1 0-1.414 1.414L16.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414ZM8.707 9.293a1 1 0 0 1 0 1.414L7.414 12l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Z"
        />
      </svg>
    </SvgIcon>
  );
}
