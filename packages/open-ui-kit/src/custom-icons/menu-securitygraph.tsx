/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MenuSecurityGraph(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M2 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5H4v4.95c0 6.753 5.247 9.32 7 9.987.366-.14.9-.37 1.514-.711a1 1 0 1 1 .972 1.747c-.956.533-1.757.836-2.166.974a1 1 0 0 1-.64 0C9.265 21.47 2 18.6 2 9.95V4Z"
          clipRule="evenodd"
        />
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M10 17a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM20 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm-6 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
