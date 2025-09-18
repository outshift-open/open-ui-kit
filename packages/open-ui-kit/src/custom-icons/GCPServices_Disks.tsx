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

export function GCPServicesDisks(props: SvgIconProps) {
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
          d="M15.878 14.118v4.122H4.998v3.375h14.255v-7.497h-3.375ZM8.372 11.112V6.99h10.881V3.615H4.997v7.497h3.375Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.253 8.862v4.13H4.997v3.376h9v-4.131h5.256V8.862h-9Z"
        />
      </svg>
    </SvgIcon>
  );
}
