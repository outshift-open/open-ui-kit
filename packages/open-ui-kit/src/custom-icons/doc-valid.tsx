/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function DocValid(props: SvgIconProps) {
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
          d="M16.1 12a5.502 5.502 0 0 0-5.5 5.5c0 3.036 2.464 5.5 5.5 5.5s5.5-2.464 5.5-5.5-2.464-5.5-5.5-5.5ZM15 20.25l-2.75-2.75.775-.776L15 18.694l4.174-4.175.776.781L15 20.25Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M4.2 1A2.2 2.2 0 0 0 2 3.2v17.6c0 1.221.979 2.2 2.2 2.2h6.6v-2.2H4.2V3.2h7.7v5.5h5.5V12h2.2V7.6L13 1"
        />
      </svg>
    </SvgIcon>
  );
}
