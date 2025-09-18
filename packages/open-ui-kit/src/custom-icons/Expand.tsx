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

export function Expand(props: SvgIconProps) {
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
          d="M9.5 13.59 10.91 15l-4.5 4.5H10v2H3v-7h2v3.59l4.5-4.5ZM10.91 10 9.5 11.41 5 6.91v3.59H3v-7h7v2H6.41l4.5 4.5Zm3.59 3.59 4.5 4.5V14.5h2v7h-7v-2h3.59l-4.5-4.5 1.41-1.41ZM13.09 10l4.5-4.5H14v-2h7v7h-2V6.91l-4.5 4.5L13.09 10Z"
        />
      </svg>
    </SvgIcon>
  );
}
