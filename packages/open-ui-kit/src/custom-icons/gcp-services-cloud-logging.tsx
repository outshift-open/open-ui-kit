/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesCloudLogging(props: SvgIconProps) {
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
          d="M3.454 9.393h5.053V4.34H3.454v5.053Zm16.842-.842H9.35V5.182h10.947v3.369Zm0 5.894H9.35v-3.368h10.947v3.368Zm0 5.895H9.35v-3.368h10.947v3.368Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M6.822 17.814H5.138V7.709h1.684v4.21h3.368v1.684H6.822v4.21Zm3.368 0H5.138v1.684h5.052v-1.684Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
