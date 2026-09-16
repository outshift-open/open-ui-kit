/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function OpenFullPage(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.7 4.8C5.20294 4.8 4.8 5.20294 4.8 5.7V18.3C4.8 18.7971 5.20294 19.2 5.7 19.2H18.3C18.7971 19.2 19.2 18.7971 19.2 18.3V5.7C19.2 5.20294 18.7971 4.8 18.3 4.8H5.7ZM3 5.7C3 4.20883 4.20883 3 5.7 3H18.3C19.7912 3 21 4.20883 21 5.7V18.3C21 19.7912 19.7912 21 18.3 21H5.7C4.20883 21 3 19.7912 3 18.3V5.7Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.30018 3C9.79724 3 10.2002 3.40294 10.2002 3.9V20.1C10.2002 20.5971 9.79724 21 9.30018 21C8.80313 21 8.40018 20.5971 8.40018 20.1V3.9C8.40018 3.40294 8.80313 3 9.30018 3ZM13.1638 8.6636C13.5153 8.31213 14.0851 8.31213 14.4366 8.6636L17.1366 11.3636C17.4881 11.7151 17.4881 12.2849 17.1366 12.6364L14.4366 15.3364C14.0851 15.6879 13.5153 15.6879 13.1638 15.3364C12.8123 14.9849 12.8123 14.4151 13.1638 14.0636L15.2274 12L13.1638 9.9364C12.8123 9.58492 12.8123 9.01508 13.1638 8.6636Z"
          fill="currentColor"
        />
      </>
    </SvgIcon>
  );
}
