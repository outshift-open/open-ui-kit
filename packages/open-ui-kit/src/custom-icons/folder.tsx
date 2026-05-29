/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Folder(props: SvgIconProps) {
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
          d="M3.5 20.5c-.4 0-.75-.154-1.05-.462C2.15 19.729 2 19.383 2 19V6c0-.383.15-.73.45-1.037.3-.309.65-.463 1.05-.463h7.025l1.5 1.5H20.5c.383 0 .73.154 1.038.463.308.308.462.654.462 1.037V19c0 .383-.154.73-.462 1.038-.309.308-.655.462-1.038.462h-17Zm0-1.5h17V7.5h-9.1L9.9 6H3.5v13Z"
        />
      </svg>
    </SvgIcon>
  );
}
