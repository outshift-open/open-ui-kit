/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function OracleServicesDynamicGroups(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M12.25 3.704a9.025 9.025 0 1 0 0 18.05 9.025 9.025 0 0 0 0-18.05Zm0 17.248a8.223 8.223 0 1 1 8.224-8.223 8.233 8.233 0 0 1-8.224 8.224Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m13.748 16.851-1.1 1.1V7.602l1.1 1.1.018.018.018-.018.53-.53.018-.018-.017-.018-2.048-2.048-.017-.017-.018.017-2.047 2.048-.018.018.018.017.53.531.018.018.018-.018 1.1-1.1v10.35l-1.1-1.1-.018-.017-.018.017-.53.531-.018.018.018.018 2.047 2.047.018.018.017-.018 2.048-2.047.018-.018-.018-.018-.531-.53-.018-.018-.018.017Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m9.815 10.664-.017-.018-.018.018-.53.53-.019.018.018.018 1.1 1.1H5.57v.797h4.779l-1.1 1.1-.018.018.018.018.531.531.018.018.017-.018 2.043-2.047.018-.018-.018-.018-2.043-2.047ZM14.15 12.33l1.1-1.1.018-.018-.017-.017-.531-.531-.018-.018-.018.018-2.042 2.047-.018.018.018.018 2.043 2.047.017.018.018-.018.53-.53.018-.018-.017-.018-1.1-1.1h4.779v-.797h-4.78Z"
        />
      </svg>
    </SvgIcon>
  );
}
