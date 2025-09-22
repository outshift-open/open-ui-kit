/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Table(props: SvgIconProps) {
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
          d="M8.75 19H20.5v-3.425H8.75V19ZM3.5 9.425h3.75V6H3.5v3.425Zm0 4.675h3.75v-3.175H3.5V14.1Zm0 4.9h3.75v-3.425H3.5V19Zm5.25-4.9H20.5v-3.175H8.75V14.1Zm0-4.675H20.5V6H8.75v3.425ZM3.5 20.5c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V6c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h17c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v13c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-17Z"
        />
      </svg>
    </SvgIcon>
  );
}
