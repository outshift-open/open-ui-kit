/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function StopOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 12 12">
      <path
        d="M0 10V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10C10.55 0 11.0208 0.195833 11.4125 0.5875C11.8042 0.979167 12 1.45 12 2V10C12 10.55 11.8042 11.0208 11.4125 11.4125C11.0208 11.8042 10.55 12 10 12H2C1.45 12 0.979167 11.8042 0.5875 11.4125C0.195833 11.0208 0 10.55 0 10ZM2 10H10V2H2V10Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
