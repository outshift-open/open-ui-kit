/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CollapseAll(props: SvgIconProps) {
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
          d="M12 12.5v-4h1v3h3v1h-4ZM9 15.5v4H8v-3H5v-1h4Z"
        />
      </svg>
    </SvgIcon>
  );
}
