/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Block(props: SvgIconProps) {
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
          d="M18.229 16.658A7.778 7.778 0 0 0 7.342 5.77L18.23 16.658Zm-1.571 1.57L5.77 7.343A7.778 7.778 0 0 0 16.658 18.23ZM12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
