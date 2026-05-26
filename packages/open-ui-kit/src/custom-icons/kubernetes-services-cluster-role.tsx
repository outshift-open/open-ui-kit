/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesServicesClusterRole(props: SvgIconProps) {
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
          d="M12.993 7.182a1.7 1.7 0 0 0-1.703 1.69v.709h3.41v-.72a1.703 1.703 0 0 0-1.707-1.68ZM12.815 13.93c.668 0 1.21-.537 1.21-1.2 0-.662-.542-1.2-1.21-1.2-.668 0-1.21.538-1.21 1.2 0 .663.542 1.2 1.21 1.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.96 3 5.535 6.283v4.898c0 4.542 3.165 8.787 7.425 9.819 4.254-1.032 7.422-5.277 7.422-9.819V6.284L12.96 3Zm3.93 13.183H9.028V9.581h1.128v-.72c0-1.555 1.271-2.817 2.842-2.817 1.57 0 2.84 1.262 2.84 2.817v.72h1.054v6.602Z"
        />
      </svg>
    </SvgIcon>
  );
}
