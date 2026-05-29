/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesServicesK8Service(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M8.786 15.578v3.389H3.959v-3.389h4.827Zm6.586 0v3.389h-4.826v-3.389h4.826Zm6.587 0v3.389h-4.827v-3.389h4.827ZM16.783 5.533v3.389h-3.385v2.887l6.144.002a.44.44 0 0 1 .427.338l.012.101v3.324h-.878v-2.886h-5.692v2.888h-.877l-.002-2.888H6.814v2.886h-.877V12.25a.44.44 0 0 1 .338-.428l.1-.011 6.131-.002V8.924h.013v-.002H9.136V5.533h7.648Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
