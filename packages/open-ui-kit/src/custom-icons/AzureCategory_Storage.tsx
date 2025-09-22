/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import { greyPalette } from "@/theme/color-palette";

export function AzureCategoryStorage(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? greyPalette[50]}
          d="M4.959 9.346h16v8.922a.536.536 0 0 1-.537.537H5.495a.537.537 0 0 1-.536-.537V9.346ZM5.495 5.939h14.927a.537.537 0 0 1 .537.536v2.87h-16v-2.88a.536.536 0 0 1 .536-.526Z"
        />
        <path
          fill={props.fill ?? greyPalette[50]}
          d="M7.138 10.381h11.643a.254.254 0 0 1 .244.254v1.318a.254.254 0 0 1-.244.254H7.138a.254.254 0 0 1-.244-.254v-1.318a.254.254 0 0 1 .244-.254ZM7.14 13.007h11.642a.254.254 0 0 1 .245.254v1.327a.254.254 0 0 1-.245.254H7.14a.254.254 0 0 1-.245-.254v-1.28a.254.254 0 0 1 .245-.3ZM7.137 15.661H18.78a.254.254 0 0 1 .244.254v1.327a.254.254 0 0 1-.244.255H7.137a.254.254 0 0 1-.244-.255v-1.327a.254.254 0 0 1 .244-.254Z"
        />
      </svg>
    </SvgIcon>
  );
}
