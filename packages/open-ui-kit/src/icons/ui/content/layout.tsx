/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Layout(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        d="M0 16V7C0 6.45 0.195833 5.97917 0.5875 5.5875C0.979167 5.19583 1.45 5 2 5H5V2C5 1.45 5.19583 0.979167 5.5875 0.5875C5.97917 0.195833 6.45 0 7 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16ZM13 16H16V2H7V5H11C11.55 5 12.0208 5.19583 12.4125 5.5875C12.8042 5.97917 13 6.45 13 7V16ZM7 16H11V7H7V16ZM2 16H5V7H2V16Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
