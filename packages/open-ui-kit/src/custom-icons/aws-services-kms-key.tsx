/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesKMSKey(props: SvgIconProps) {
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
          d="M14.507 15.572h2.214v-1.107h-2.214v1.107Zm-3.32 0H13.4v-1.107h-2.214v1.107Zm9.962-6.089v7.75a.553.553 0 0 1-.553.553h-9.41v-1.107h8.856v-6.642H13.4V8.93h7.196c.307 0 .553.248.553.553ZM8.375 10.607a2.752 2.752 0 0 1-2.748-2.75 2.753 2.753 0 0 1 2.748-2.75 2.753 2.753 0 0 1 2.751 2.75 2.753 2.753 0 0 1-2.75 2.75Zm0-6.607A3.86 3.86 0 0 0 4.52 7.857c0 1.937 1.44 3.53 3.302 3.8v5.022H5.65v1.107h2.17V20H8.93v-8.343c1.863-.27 3.304-1.863 3.304-3.8A3.862 3.862 0 0 0 8.375 4Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
