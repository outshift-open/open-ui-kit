/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureDevops(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3.74571V15.9057L15 20L7.25 17.1786V19.9743L2.86286 14.2457L15.65 15.2429V4.29429L20 3.74571ZM15.7371 4.35714L8.56286 0V2.85857L1.97571 4.79429L0 7.32857V13.0843L2.82571 14.3314V6.95571L15.7371 4.35714Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
