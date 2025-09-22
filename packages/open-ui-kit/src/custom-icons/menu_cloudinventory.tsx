/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MenuCloudInventory(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#E8E9EA"
          d="m7 19.586-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L9 19.586V17a1 1 0 1 0-2 0v2.586ZM14.707 19.707l.293-.293V22a1 1 0 1 0 2 0v-2.586l.293.293a1 1 0 0 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414Z"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M15 13a5 5 0 1 0-5-5 1 1 0 0 1-2 0c0-.275.016-.546.047-.813A3 3 0 1 0 7 13h8Zm0-12c-2.89 0-5.37 1.75-6.439 4.249A5 5 0 1 0 7 15h8a7 7 0 1 0 0-14Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
