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

export function Collapse(props: SvgIconProps) {
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
          d="m19.41 3.5 1.41 1.41-4.5 4.5h3.59v2h-7v-7h2V8l4.5-4.5Zm1.41 16.41-1.41 1.41-4.5-4.5v3.59h-2v-7h7v2h-3.59l4.5 4.5ZM4.41 3.5 8.91 8V4.41h2v7h-7v-2H7.5L3 4.91 4.41 3.5ZM3 19.91l4.5-4.5H3.91v-2h7v7h-2v-3.59l-4.5 4.5L3 19.91Z"
        />
      </svg>
    </SvgIcon>
  );
}
