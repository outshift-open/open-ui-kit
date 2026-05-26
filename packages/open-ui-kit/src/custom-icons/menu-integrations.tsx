/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MenuIntegrations(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M15 6c-.922 0-1.793.207-2.57.577l-.86-1.807a8 8 0 1 1-4.56 7.634l-.303.303a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-.278-.278A6 6 0 1 0 15 6Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M3 12a6 6 0 0 1 11.985-.43l-.278-.277a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.303.303A8 8 0 1 0 12 19.418a8 8 0 0 1-2.333-1.455A6 6 0 0 1 3 12Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
