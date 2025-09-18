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

export function GCPServicesFilestore(props: SvgIconProps) {
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
          d="M8.525 12.615h7.2l-1.8 2h-3.6l-1.8-2ZM7.625 4.615h9l.9 2h-10.8l.9-2ZM4.925 7.615h14.4l.9 2h-16.2l.9-2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M21.125 20.615v-9h-5.4l-1.8 3h-3.6l-1.8-3h-5.4v9h18Z"
        />
      </svg>
    </SvgIcon>
  );
}
