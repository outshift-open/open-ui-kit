/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesAzureAD(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="m5.383 12.716 7.32-8.72 7.47 8.73-7.47 4.72-7.32-4.73Zm-.6.66 7.92 5.14 8.06-5.16 1.01 1.18-9.07 5.84-8.93-5.84 1.01-1.16Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
