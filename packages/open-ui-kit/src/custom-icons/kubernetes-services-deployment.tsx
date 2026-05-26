/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesServicesDeployment(props: SvgIconProps) {
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
          d="M3.97 12.663a7.791 7.791 0 0 0 8.148 7.37l-.146-3.083a4.705 4.705 0 1 1 4.458-5.194h-2.574l2.45 5.994 5.653-5.994h-2.576l.142-.01a7.79 7.79 0 0 0-15.555.917Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
