/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Collapse(props: SvgIconProps) {
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
          d="m19.41 3.5 1.41 1.41-4.5 4.5h3.59v2h-7v-7h2V8l4.5-4.5Zm1.41 16.41-1.41 1.41-4.5-4.5v3.59h-2v-7h7v2h-3.59l4.5 4.5ZM4.41 3.5 8.91 8V4.41h2v7h-7v-2H7.5L3 4.91 4.41 3.5ZM3 19.91l4.5-4.5H3.91v-2h7v7h-2v-3.59l-4.5 4.5L3 19.91Z"
        />
      </svg>
    </SvgIcon>
  );
}
