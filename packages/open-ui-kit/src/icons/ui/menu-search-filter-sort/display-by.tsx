/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function DisplayBy(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 4.79927V8.79927H19.2V4.79927H4.8ZM4 2.99927C3.44772 2.99927 3 3.44698 3 3.99927V9.59927C3 10.1516 3.44772 10.5993 4 10.5993H4.75743V17.1264C4.75743 17.6235 5.16037 18.0264 5.65743 18.0264H10.2V19.9997C10.2 20.5519 10.6477 20.9997 11.2 20.9997H20C20.5523 20.9997 21 20.5519 21 19.9997V14.3997C21 13.8474 20.5523 13.3997 20 13.3997H11.2C10.6477 13.3997 10.2 13.8474 10.2 14.3997V16.2264H6.55743V10.5993H20C20.5523 10.5993 21 10.1516 21 9.59927V3.99927C21 3.44698 20.5523 2.99927 20 2.99927H4ZM12 15.1997V19.1997H19.2V15.1997H12Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
