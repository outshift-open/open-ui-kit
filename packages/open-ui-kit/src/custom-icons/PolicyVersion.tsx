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

export function PolicyVersion(props: SvgIconProps) {
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
          d="M3.095 1A2.095 2.095 0 0 0 1 3.095v16.762a2.095 2.095 0 0 0 2.095 2.095h8.81A7.333 7.333 0 0 0 15.668 23 7.333 7.333 0 0 0 23 15.667a7.333 7.333 0 0 0-5.238-7.02V7.287L11.476 1h-8.38Zm0 2.095h7.334v5.238h5.238a7.333 7.333 0 0 0-7.334 7.334 7.333 7.333 0 0 0 1.32 4.19H3.095V3.095Zm12.572 7.334a5.238 5.238 0 1 1 0 10.476 5.238 5.238 0 0 1 0-10.476Zm-1.048 1.047v5.238l3.782 2.263.786-1.278-2.997-1.77v-4.453H14.62Z"
        />
      </svg>
    </SvgIcon>
  );
}
