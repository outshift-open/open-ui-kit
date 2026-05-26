/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesResources(props: SvgIconProps) {
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
          d="M10.373 15.386h4.8v4.8h-4.8v-4.8Zm-5.6-6.4h4.8v-4.8h-4.13a.67.67 0 0 0-.67.67v4.13Zm.67 11.2h4.13v-4.8h-4.8v4.13a.67.67 0 0 0 .67.67Zm-.67-5.6h4.8v-4.8h-4.8v4.8Zm11.2 5.6h4.14a.67.67 0 0 0 .66-.67v-4.13h-4.8v4.8Zm-5.6-5.6h4.8v-4.8h-4.8v4.8Zm5.6 0h4.8v-4.8h-4.8v4.8Zm0-10.4v4.8h4.8v-4.13a.67.67 0 0 0-.66-.67h-4.14Zm-5.6 4.8h4.8v-4.8h-4.8v4.8Z"
        />
      </svg>
    </SvgIcon>
  );
}
