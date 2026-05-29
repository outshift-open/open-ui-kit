/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function All(props: SvgIconProps) {
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
          d="M3 3.5h4v4H3v-4ZM10 5.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 12.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM12 17.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM14 10.5v4h-4v-4h4ZM19 3.5l-2 4h4l-2-4ZM17 17.5v4h4v-4h-4ZM3 21.5l2-4 2 4H3Z"
        />
      </svg>
    </SvgIcon>
  );
}
