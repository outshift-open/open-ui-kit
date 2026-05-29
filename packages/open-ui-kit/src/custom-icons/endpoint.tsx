/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Endpoint(props: SvgIconProps) {
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
          d="M21.818 12.5a3.436 3.436 0 0 1-6.873.034v.457H7.042a2.455 2.455 0 1 1 0-.982h7.903v.458a3.436 3.436 0 0 1 6.873.033Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
