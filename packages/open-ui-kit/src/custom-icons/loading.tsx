/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Loading(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <circle
          cx="3.818"
          cy="13.045"
          r="1.636"
          fill={props.fill ?? "currentColor"}
        />
        <circle
          cx="10.909"
          cy="13.045"
          r="2.182"
          fill={props.fill ?? "currentColor"}
        />
        <circle
          cx="19.091"
          cy="13.045"
          r="2.727"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
