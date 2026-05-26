/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPCategoryManagementGovernance(props: SvgIconProps) {
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
          d="M3.58 9.202h1.683V19.307h4.21v.842h10.948v-3.368H9.474v.842H6.948v-4.21h2.526v.842H20.42v-3.369H9.474v.842H6.948V9.202h1.684V4.149H3.579v5.053Zm5.894-.842H20.42V4.992H9.474V8.36Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
