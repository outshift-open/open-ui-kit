/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CrossCircleOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12 20.148c4.296 0 8.148-3.852 8.148-8.148 0-4.296-3.852-8.148-8.148-8.148-4.296 0-8.148 3.852-8.148 8.148 0 4.296 3.852 8.148 8.148 8.148ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m16.364 8.727-1.09-1.09L12 10.908 8.728 7.636 7.637 8.727 10.909 12l-3.272 3.273 1.09 1.09L12 13.092l3.273 3.273 1.091-1.091L13.091 12l3.273-3.273Z"
        />
      </svg>
    </SvgIcon>
  );
}
