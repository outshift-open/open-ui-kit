/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSCategoryContainers(props: SvgIconProps) {
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
          d="M7.334 17.5h11v-5h-11v5Zm12 1h-13v1h13v-1Zm-13-7h13v-1h-13v1Zm13 1v5h.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.5v-5h-.5a.5.5 0 0 1-.5-.5v-2c0-.179.099-.328.239-.416l-.005-.008 5.12-3.204.531.848L7.576 9.5h10.516l-3.643-2.28.531-.848 5.12 3.204-.005.008c.14.088.239.237.239.416v2a.5.5 0 0 1-.5.5h-.5Zm-7-5h1v-3h-1v3Zm-3 9h1v-3h-1v3Zm6 0h1v-3h-1v3Zm-3 0h1v-3h-1v3Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
