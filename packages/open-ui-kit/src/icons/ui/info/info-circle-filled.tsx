/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function InfoCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9.00035 5.56172C8.45519 5.56172 8.01035 5.12257 8.01035 4.58086C8.01035 4.03914 8.45519 3.6 9.00035 3.6C9.54551 3.6 9.99035 4.03914 9.99035 4.58086C9.99035 5.12257 9.54551 5.56172 9.00035 5.56172ZM9.00035 14.4C8.45359 14.4 8.01035 13.9596 8.01035 13.4163V8.0201C8.01035 7.4768 8.45359 7.03636 9.00035 7.03636C9.54711 7.03636 9.99035 7.4768 9.99035 8.0201V13.4163C9.99035 13.9596 9.54711 14.4 9.00035 14.4Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
