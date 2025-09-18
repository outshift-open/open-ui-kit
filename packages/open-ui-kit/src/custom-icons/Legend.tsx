/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Legend(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M4.62 4C3.723 4 3 4.714 3 5.6c0 .886.723 1.6 1.62 1.6.897 0 1.62-.714 1.62-1.6 0-.886-.723-1.6-1.62-1.6Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M3 10.4h3.24v3.2H3v-3.2ZM4.62 16.8 6.24 20H3l1.62-3.2ZM8.4 4.889H21v1.778H8.4V4.889ZM8.4 11.111H21v1.778H8.4V11.11ZM8.4 17.333H21v1.778H8.4v-1.778Z"
        />
      </svg>
    </SvgIcon>
  );
}
