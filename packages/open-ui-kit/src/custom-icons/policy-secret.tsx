/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function PolicySecret(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M14 1H5.2A2.2 2.2 0 0 0 3 3.2v17.6A2.2 2.2 0 0 0 5.2 23h13.2a2.2 2.2 0 0 0 2.2-2.2V7.6L14 1Zm4.4 19.8H5.2V3.2h7.7v5.5h5.5m-5.687 6.6a3.3 3.3 0 1 0 0 2.2H14v2.2h2.2v-2.2h1.1v-2.2m-7.7 2.2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z"
        />
      </svg>
    </SvgIcon>
  );
}
