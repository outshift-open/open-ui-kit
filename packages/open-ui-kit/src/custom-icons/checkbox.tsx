/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Checkbox(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 5H17.5C18.6046 5 19.5 5.89543 19.5 7V17C19.5 18.1046 18.6046 19 17.5 19H7.5C6.39543 19 5.5 18.1046 5.5 17V7C5.5 5.89543 6.39543 5 7.5 5ZM17.5 3H7.5C5.29086 3 3.5 4.79086 3.5 7V17C3.5 19.2091 5.29086 21 7.5 21H17.5C19.7091 21 21.5 19.2091 21.5 17V7C21.5 4.79086 19.7091 3 17.5 3ZM16.2295 10.6839C16.6073 10.281 16.5869 9.6482 16.184 9.27047C15.781 8.89274 15.1482 8.91315 14.7705 9.31606L11.6865 12.6056L10.1644 11.2526C9.75159 10.8857 9.11952 10.9229 8.7526 11.3356C8.38568 11.7484 8.42286 12.3805 8.83565 12.7474L11.0856 14.7474C11.4907 15.1075 12.1089 15.0793 12.4795 14.6839L16.2295 10.6839Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
