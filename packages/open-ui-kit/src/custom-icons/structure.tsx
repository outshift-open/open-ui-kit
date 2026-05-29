/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Structure(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M16 2.5H8v7h3.25v2.25h-6v3.75H2v7h8v-7H6.75v-2.25h10.5v2.25H14v7h8v-7h-3.25v-3.75h-6V9.5H16v-7ZM14.5 8V4h-5v4h5Zm-6 13v-4h-5v4h5Zm12-4v4h-5v-4h5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
