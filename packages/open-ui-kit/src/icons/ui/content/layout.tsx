/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Layout(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M3 19V10C3 9.45 3.19583 8.97917 3.5875 8.5875C3.97917 8.19583 4.45 8 5 8H8V5C8 4.45 8.19583 3.97917 8.5875 3.5875C8.97917 3.19583 9.45 3 10 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19ZM16 19H19V5H10V8H14C14.55 8 15.0208 8.19583 15.4125 8.5875C15.8042 8.97917 16 9.45 16 10V19ZM10 19H14V10H10V19ZM5 19H8V10H5V19Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
