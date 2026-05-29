/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ExpandAll(props: SvgIconProps) {
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
          d="M17.5 5.5c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v14c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-14c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V7c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h14Zm0 1.5h-14v14h14V7Zm3-4.5c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v15.5h-1.5V4H5V2.5h15.5Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M5 19.5v-4.714h1.179v3.535h3.535V19.5H5Zm9.821-6.286V9.68h-3.535V8.5H16v4.714h-1.179Z"
        />
      </svg>
    </SvgIcon>
  );
}
