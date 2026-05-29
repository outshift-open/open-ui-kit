/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Bar(props: SvgIconProps) {
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
          d="M21.75 2.75h-7.5v4h-6v4h-6v11.5h19.5V2.75Zm-6 18h4.5V4.25h-4.5v16.5Zm-1.5 0V8.25h-4.5v12.5h4.5Zm-6-8.5v8.5h-4.5v-8.5h4.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
