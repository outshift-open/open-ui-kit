/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Dashboard1(props: SvgIconProps) {
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
          d="M5.49 8.929a9.22 9.22 0 0 1 5.76-2.649V8.5h1.5V6.28a9.25 9.25 0 0 1 8.5 9.22v1h1.5v-1c0-5.937-4.813-10.75-10.75-10.75S1.25 9.563 1.25 15.5v1h1.5v-1c0-2.028.653-3.905 1.76-5.43l1.46 1.46 1.06-1.06-1.54-1.541Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M9.25 16.5a2.75 2.75 0 0 1 4.09-2.402l4.13-4.128 1.06 1.06-4.128 4.13A2.75 2.75 0 1 1 9.25 16.5ZM12 15.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
