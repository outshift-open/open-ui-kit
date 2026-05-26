/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesMachineLearning(props: SvgIconProps) {
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
          d="M19.974 21.186h-14.4l-1.165-4.341h16.73l-1.165 4.34Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.55 3.186v6.776l-6.14 6.883 1.164 4.34 9.423-11.223V3.186H10.55Z"
        />
      </svg>
    </SvgIcon>
  );
}
