/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Repo(props: SvgIconProps) {
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
          d="M5 2.75a2.75 2.75 0 0 0-.75 5.396v2.848l7 3v2.86a2.751 2.751 0 1 0 1.5 0v-2.86l7-3V8.146a2.751 2.751 0 1 0-1.5 0v1.86L12 12.683l-6.25-2.678v-1.86A2.751 2.751 0 0 0 5 2.75ZM3.75 5.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm14 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM12 18.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
