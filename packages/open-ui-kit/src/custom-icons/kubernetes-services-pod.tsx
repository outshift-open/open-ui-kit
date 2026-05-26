/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesServicesPod(props: SvgIconProps) {
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
          d="M4.883 6.342 12.959 4l8.076 2.342-8.076 2.342-8.076-2.342ZM4.883 7.239v8.593L12.407 20l.038-10.512-7.562-2.25ZM21.034 7.239v8.593L13.51 20l-.037-10.512 7.561-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
