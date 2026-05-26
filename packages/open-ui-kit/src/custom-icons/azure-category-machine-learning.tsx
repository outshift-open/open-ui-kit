/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureCategoryMachineLearning(props: SvgIconProps) {
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
          d="M20.16 21.372H5.76L4.594 17.03h16.73l-1.166 4.34Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.736 3.372v6.776l-6.141 6.883 1.164 4.34 9.424-11.223V3.372h-4.447Z"
        />
      </svg>
    </SvgIcon>
  );
}
