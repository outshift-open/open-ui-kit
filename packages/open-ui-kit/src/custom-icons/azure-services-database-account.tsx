/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesDatabaseAccount(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill="#E8E9EA"
          d="M18.846 21.615a1.45 1.45 0 0 0 1.45-1.45.467.467 0 0 0 0-.17c-.58-4.57-3.17-8.29-8.17-8.29s-7.66 3.15-8.17 8.3a1.46 1.46 0 0 0 1.31 1.61h13.58Z"
        />
        <path
          fill="#E8E9EA"
          d="M12.126 12.785c-.88 0-1.74-.254-2.48-.73l2.48 6.42 2.44-6.38a4.53 4.53 0 0 1-2.44.69Z"
          opacity=".8"
        />
        <path
          fill="#9EA2A8"
          d="M12.136 12.775a4.58 4.58 0 1 0 0-9.16 4.58 4.58 0 0 0 0 9.16Z"
        />
      </svg>
    </SvgIcon>
  );
}
