/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowMenuOpen(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M9 20V4C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3C10.2833 3 10.5208 3.09583 10.7125 3.2875C10.9042 3.47917 11 3.71667 11 4V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21C9.71667 21 9.47917 20.9042 9.2875 20.7125C9.09583 20.5208 9 20.2833 9 20ZM13 15.8V8.2C13 7.96667 13.1 7.80833 13.3 7.725C13.5 7.64167 13.6833 7.68333 13.85 7.85L17.3 11.3C17.5 11.5 17.6 11.7333 17.6 12C17.6 12.2667 17.5 12.5 17.3 12.7L13.85 16.15C13.6833 16.3167 13.5 16.3583 13.3 16.275C13.1 16.1917 13 16.0333 13 15.8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
