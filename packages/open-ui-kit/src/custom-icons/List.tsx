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

export function List(props: SvgIconProps) {
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
          d="M4 4h7.111v1.778H4V4Zm8.889 0H20v1.778h-7.111V4ZM4 7.556h7.111v1.777H4V7.556Zm8.889 0H20v1.777h-7.111V7.556ZM4 11.11h7.111v1.778H4V11.11Zm8.889 0H20v1.778h-7.111V11.11ZM4 14.667h7.111v1.777H4v-1.777Zm8.889 0H20v1.777h-7.111v-1.777ZM4 18.222h7.111V20H4v-1.778Zm8.889 0H20V20h-7.111v-1.778Z"
        />
      </svg>
    </SvgIcon>
  );
}
