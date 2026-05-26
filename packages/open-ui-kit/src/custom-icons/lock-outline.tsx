/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function LockOutline(props: SvgIconProps) {
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
          d="M12 17.5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 0 4Zm6 3v-10H6v10h12Zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-10c0-1.11.89-2 2-2h1v-2a5 5 0 1 1 10 0v2h1Zm-6-5a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3Z"
        />
      </svg>
    </SvgIcon>
  );
}
