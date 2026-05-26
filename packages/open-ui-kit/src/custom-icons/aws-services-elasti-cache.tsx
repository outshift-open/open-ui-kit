/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesElastiCache(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M10.334 13h5v-2h-5v2Zm0 3h5v-2h-5v2Zm0 3h5v-2h-5v2Zm6-8.5v9a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5Zm1 1.5h1V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V9h1V7h1v5Zm-3-3V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V9h1V7h1v2h1Zm-5 0h1V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V12h1V7h1v2Zm11-4.5v10a.5.5 0 0 1-.5.5h-2.5v-1h2V5h-13v9h2v1h-2.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
