/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesServices(props: SvgIconProps) {
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
          d="M11.869 7.687h-1.8v2.7h-1.8v2.643a4.535 4.535 0 0 0 3.6 4.458v3.698h1.8v-3.742a4.507 4.507 0 0 0 3.608-4.414l-.016-2.643h-1.792v-2.7h-1.8v2.7h-1.8v-2.7Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M18.444 5.203a9 9 0 0 0-5.674-2.017v.001a9 9 0 0 0-3.6 17.243v-2.018a7.193 7.193 0 0 1 3.6-13.425v-.001a7.195 7.195 0 0 1 3.6 13.427v2.02a9 9 0 0 0 2.074-15.23Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
