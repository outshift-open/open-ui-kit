/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

export const OverviewSelected = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 20 17.778">
      <rect
        x="1994"
        y="795.111"
        width="8.88889"
        height="11.1111"
        rx="1"
        fill={theme.palette.primary[100]}
      />
      <path
        d="M 1.592e-12,14.445 C 1.592e-12,13.831 0.5,13.333 1.11,13.333 L 7.78,13.333 C 8.39,13.333 8.89,13.831 8.89,14.445 L 8.89,16.667 C 8.89,17.28 8.39,17.778 7.78,17.778 L 1.11,17.778 C 0.5,17.778 1.592e-12,17.28 1.592e-12,16.667 L 1.592e-12,14.445"
        fill="#187ADC"
      />
      <path
        d="M 11.11,1.111 C 11.11,0.498 11.61,3.411e-13 12.22,3.411e-13 L 18.89,3.411e-13 C 19.5,3.411e-13 20,0.498 20,1.111 L 20,5.556 C 20,6.169 19.5,6.667 18.89,6.667 L 12.22,6.667 C 11.61,6.667 11.11,6.169 11.11,5.556 L 11.11,1.111"
        fill="#187ADC"
      />
      <rect
        x="2005.11"
        y="804"
        width="8.88889"
        height="8.88889"
        rx="1"
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  );
};

export const OverviewUnSelected = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 20 17.778">
      <rect
        x="2022"
        y="795.111"
        width="8.88889"
        height="11.1111"
        rx="1"
        fill={theme.palette.grey[500]}
      />
      <path
        d="M 1.592e-12,14.445 C 1.592e-12,13.831 0.5,13.333 1.11,13.333 L 7.78,13.333 C 8.39,13.333 8.89,13.831 8.89,14.445 L 8.89,16.667 C 8.89,17.28 8.39,17.778 7.78,17.778 L 1.11,17.778 C 0.5,17.778 1.592e-12,17.28 1.592e-12,16.667 L 1.592e-12,14.445"
        fill="#0D274D"
      />
      <path
        d="M 11.11,1.111 C 11.11,0.498 11.61,3.411e-13 12.22,3.411e-13 L 18.89,3.411e-13 C 19.5,3.411e-13 20,0.498 20,1.111 L 20,5.556 C 20,6.169 19.5,6.667 18.89,6.667 L 12.22,6.667 C 11.61,6.667 11.11,6.169 11.11,5.556 L 11.11,1.111"
        fill="#0D274D"
      />
      <rect
        x="2033.11"
        y="804"
        width="8.88889"
        height="8.88889"
        rx="1"
        fill={theme.palette.grey[900]}
      />
    </SvgIcon>
  );
};

export const OverviewDisabled = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 20 17.778">
      <rect
        x="1966"
        y="795.111"
        width="8.88889"
        height="11.1111"
        rx="1"
        fill={theme.palette.grey[800]}
      />
      <path
        d="M 1.592e-12,14.445 C 1.592e-12,13.831 0.5,13.333 1.11,13.333 L 7.78,13.333 C 8.39,13.333 8.89,13.831 8.89,14.445 L 8.89,16.667 C 8.89,17.28 8.39,17.778 7.78,17.778 L 1.11,17.778 C 0.5,17.778 1.592e-12,17.28 1.592e-12,16.667 L 1.592e-12,14.445"
        fill={theme.palette.grey[800]}
      />
      <path
        d="M 11.11,1.111 C 11.11,0.498 11.61,3.411e-13 12.22,3.411e-13 L 18.89,3.411e-13 C 19.5,3.411e-13 20,0.498 20,1.111 L 20,5.556 C 20,6.169 19.5,6.667 18.89,6.667 L 12.22,6.667 C 11.61,6.667 11.11,6.169 11.11,5.556 L 11.11,1.111"
        fill={theme.palette.grey[800]}
      />
      <rect
        x="1977.11"
        y="804"
        width="8.88889"
        height="8.88889"
        rx="1"
        fill={theme.palette.grey[800]}
      />
    </SvgIcon>
  );
};
