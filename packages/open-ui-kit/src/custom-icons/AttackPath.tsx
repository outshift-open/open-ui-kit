/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AttackPath(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M18 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M9.179 14.928a4 4 0 1 1 .672-1.341l4.97 2.485a4 4 0 1 1-.672 1.341l-4.97-2.485ZM8.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M13.453 9.768a.765.765 0 0 1-.439.106.871.871 0 0 1-.797-.442.89.89 0 0 1 1.014-1.299.865.865 0 0 1 .547.418.913.913 0 0 1-.066.987.874.874 0 0 1-.259.23ZM10.162 10.472a.872.872 0 0 0 .718.42h.082a.732.732 0 0 0 .42-.118.908.908 0 0 0 .321-1.215.87.87 0 0 0-.55-.414.894.894 0 0 0-1.004 1.308l.013.02Z"
        />
      </svg>
    </SvgIcon>
  );
}
