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

export function All(props: SvgIconProps) {
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
          d="M3 3.5h4v4H3v-4ZM10 5.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 12.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM12 17.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM14 10.5v4h-4v-4h4ZM19 3.5l-2 4h4l-2-4ZM17 17.5v4h4v-4h-4ZM3 21.5l2-4 2 4H3Z"
        />
      </svg>
    </SvgIcon>
  );
}
