/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function InfoBold(props: SvgIconProps) {
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
          d="M12.002 3c.482 0 .894.172 1.236.515.341.343.512.755.512 1.237 0 .482-.172.894-.515 1.236a1.691 1.691 0 0 1-1.237.512 1.68 1.68 0 0 1-1.236-.515 1.69 1.69 0 0 1-.512-1.237c0-.482.172-.894.515-1.236A1.691 1.691 0 0 1 12.002 3Zm1.748 6v12h-3.5V9h3.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
