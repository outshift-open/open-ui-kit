/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function InfoCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0004 8.56172C11.4552 8.56172 11.0104 8.12257 11.0104 7.58086C11.0104 7.03914 11.4552 6.6 12.0004 6.6C12.5455 6.6 12.9904 7.03914 12.9904 7.58086C12.9904 8.12257 12.5455 8.56172 12.0004 8.56172ZM12.0004 17.4C11.4536 17.4 11.0104 16.9596 11.0104 16.4163V11.0201C11.0104 10.4768 11.4536 10.0364 12.0004 10.0364C12.5471 10.0364 12.9904 10.4768 12.9904 11.0201V16.4163C12.9904 16.9596 12.5471 17.4 12.0004 17.4Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
