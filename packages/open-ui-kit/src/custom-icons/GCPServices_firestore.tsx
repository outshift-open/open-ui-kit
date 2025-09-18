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

export function GCPServicesFirestore(props: SvgIconProps) {
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
          d="m20.225 13.515-8.1-3.6v3.6l8.1 3.6v-3.6Zm0-6.3-8.1-3.6v3.6l8.1 3.6v-3.6ZM4.025 7.215l8.1-3.6v3.6l-8.1 3.6v-3.6ZM4.025 13.515l8.1-3.6v3.6l-8.1 3.6v-3.6ZM12.125 18.015l3.033-1.35 4.059 1.8-7.092 3.15v-3.6Z"
        />
      </svg>
    </SvgIcon>
  );
}
