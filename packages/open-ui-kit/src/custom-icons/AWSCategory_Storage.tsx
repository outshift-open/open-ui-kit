/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSCategoryStorage(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M9.834 11.5h5.794v-1H9.834v1Zm1 6h4v-1h-4v1Zm5-1.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5Zm3-1.5h-12v4.735c0 .146.119.265.265.265h11.47a.265.265 0 0 0 .265-.265V14.5Zm-10-1h8v-5h-2.5a.5.5 0 0 1-.5-.5V5.5h-5v8Zm6-7.793V7.5h1.793l-1.793-1.793Zm5 8.293v5.235c0 .698-.567 1.265-1.265 1.265H7.099a1.266 1.266 0 0 1-1.265-1.265V14a.5.5 0 0 1 .5-.5h1.5V5a.5.5 0 0 1 .5-.5h6.5c.133 0 .26.053.354.146l2.5 2.5a.504.504 0 0 1 .146.354v6h1.5a.5.5 0 0 1 .5.5Zm-10-4.5h3v-1h-3v1Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
