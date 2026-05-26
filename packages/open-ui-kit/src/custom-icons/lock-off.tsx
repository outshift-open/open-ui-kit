/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function LockOff(props: SvgIconProps) {
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
          d="M12 4.25A3.25 3.25 0 0 0 8.75 7.5v.127L7.407 6.284A4.752 4.752 0 0 1 16.75 7.5v2.25H17a2.75 2.75 0 0 1 2.75 2.75v6c0 .042 0 .083-.003.125l-1.497-1.498V12.5c0-.69-.56-1.25-1.25-1.25h-4.627l-1.5-1.5h4.377V7.5A3.25 3.25 0 0 0 12 4.25Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M6.284 9.844 3.47 7.03l1.06-1.06 15 15-1.06 1.06-.85-.85c-.2.046-.407.07-.62.07H7a2.75 2.75 0 0 1-2.75-2.75v-6c0-1.27.862-2.34 2.034-2.656Zm1.405 1.406H7c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h9.19l-8.5-8.5Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
