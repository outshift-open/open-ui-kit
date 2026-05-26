/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function NotEqual(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path
        d="M 2.728e-12,0 L 16,16"
        stroke="#3C4551"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 14.18,13 L 1.5,13 C 1.08,13 0.73,12.854 0.44,12.563 C 0.15,12.271 2.728e-12,11.917 2.728e-12,11.5 C 2.728e-12,11.084 0.15,10.729 0.44,10.438 C 0.73,10.146 1.08,10 1.5,10 L 11.18,10 L 14.18,13 M 14.5,10 C 14.92,10 15.27,10.146 15.56,10.438 C 15.85,10.729 16,11.084 16,11.5 C 16,11.653 15.98,11.798 15.94,11.934 L 14.01,10 L 14.5,10 M 7.18,6 L 1.5,6 C 1.08,6 0.73,5.854 0.44,5.563 C 0.15,5.271 2.728e-12,4.917 2.728e-12,4.5 C 2.728e-12,4.084 0.15,3.729 0.44,3.438 C 0.73,3.146 1.08,3 1.5,3 L 4.18,3 L 7.18,6 M 14.5,3 C 14.92,3 15.27,3.146 15.56,3.438 C 15.85,3.729 16,4.084 16,4.5 C 16,4.917 15.85,5.271 15.56,5.563 C 15.27,5.854 14.92,6 14.5,6 L 10.01,6 L 7.01,3 L 14.5,3"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
