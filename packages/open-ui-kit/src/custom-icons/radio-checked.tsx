/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function RadioChecked(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 11.7C10.4912 11.7 11.7 10.4912 11.7 9C11.7 7.50883 10.4912 6.3 9 6.3C7.50883 6.3 6.3 7.50883 6.3 9C6.3 10.4912 7.50883 11.7 9 11.7ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
