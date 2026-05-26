/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function OpenPort(props: SvgIconProps) {
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
          d="M7.25 8.5v3h1.5v-3h-1.5ZM9.25 11.5v-3h1.5v3h-1.5ZM11.25 8.5v3h1.5v-3h-1.5ZM13.25 11.5v-3h1.5v3h-1.5ZM15.25 8.5v3h1.5v-3h-1.5Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M6 17.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H6Zm4.5-1.5v2h3v-2h4V7h-11v9h4Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M4 2.5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2H4ZM20 4H4a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5v-16A.5.5 0 0 0 20 4Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
