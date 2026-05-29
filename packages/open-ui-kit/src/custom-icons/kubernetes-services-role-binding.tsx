/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesServicesRoleBinding(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          stroke="#E8E9EA"
          strokeDasharray="3.02 1.51"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.512"
          d="M20.959 5.025h-16v13.95h16V5.025Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M7.919 12a1.93 1.93 0 0 1 1.929-1.929h2.489V8.889h-2.49a3.112 3.112 0 0 0 0 6.222h2.49V13.93h-2.49A1.93 1.93 0 0 1 7.92 12Zm2.551.622h4.978v-1.244H10.47v1.244Zm5.6-3.733h-2.489v1.182h2.49A1.93 1.93 0 0 1 17.998 12a1.93 1.93 0 0 1-1.929 1.93h-2.489v1.181h2.49a3.112 3.112 0 0 0 0-6.222Z"
        />
      </svg>
    </SvgIcon>
  );
}
