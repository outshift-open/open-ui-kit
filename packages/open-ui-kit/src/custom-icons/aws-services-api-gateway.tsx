/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesAPIGateway(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="m6.334 6.768 2-1.334v13.132l-2-1.333V6.768Zm-1-.268v11a.5.5 0 0 0 .223.416l3 2a.498.498 0 0 0 .513.025.5.5 0 0 0 .264-.441V17h1v-1h-1V8h1V7h-1V4.5a.5.5 0 0 0-.777-.417l-3 2a.501.501 0 0 0-.223.417Zm14 10.733-2 1.333V5.434l2 1.334v10.465Zm.777-11.15-3-2a.5.5 0 0 0-.777.416V7h-1v1h1v8h-1v1h1V19.5a.5.5 0 0 0 .777.416l3-2a.5.5 0 0 0 .223-.416v-11a.501.501 0 0 0-.223-.417ZM13.334 8h1V7h-1v1Zm-2 0h1V7h-1v1Zm2 9h1v-1h-1v1Zm-2 0h1v-1h-1v1Zm2.18-2.115-3-2.5a.5.5 0 0 1 0-.77l3-2.5.64.77L11.615 12l2.539 2.116-.64.769Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
