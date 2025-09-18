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

export function DocValid(props: SvgIconProps) {
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
          d="M16.1 12a5.502 5.502 0 0 0-5.5 5.5c0 3.036 2.464 5.5 5.5 5.5s5.5-2.464 5.5-5.5-2.464-5.5-5.5-5.5ZM15 20.25l-2.75-2.75.775-.776L15 18.694l4.174-4.175.776.781L15 20.25Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M4.2 1A2.2 2.2 0 0 0 2 3.2v17.6c0 1.221.979 2.2 2.2 2.2h6.6v-2.2H4.2V3.2h7.7v5.5h5.5V12h2.2V7.6L13 1"
        />
      </svg>
    </SvgIcon>
  );
}
