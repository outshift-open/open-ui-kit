/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Expand(props: SvgIconProps) {
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
          d="M9.5 13.59 10.91 15l-4.5 4.5H10v2H3v-7h2v3.59l4.5-4.5ZM10.91 10 9.5 11.41 5 6.91v3.59H3v-7h7v2H6.41l4.5 4.5Zm3.59 3.59 4.5 4.5V14.5h2v7h-7v-2h3.59l-4.5-4.5 1.41-1.41ZM13.09 10l4.5-4.5H14v-2h7v7h-2V6.91l-4.5 4.5L13.09 10Z"
        />
      </svg>
    </SvgIcon>
  );
}
