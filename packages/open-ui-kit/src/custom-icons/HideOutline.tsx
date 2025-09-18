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

export function HideOutline(props: SvgIconProps) {
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
          d="M2 4.77 3.28 3.5 20 20.22l-1.27 1.28-3.08-3.08c-1.15.38-2.37.58-3.65.58-5 0-9.27-3.11-11-7.5.69-1.76 1.79-3.31 3.19-4.54L2 4.77ZM12 8.5a3 3 0 0 1 2.83 4L11 8.67a3 3 0 0 1 1-.17ZM12 4c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43a9.862 9.862 0 0 0 3.24-3.76A9.821 9.821 0 0 0 12 6c-1.09 0-2.16.18-3.16.5L7.3 4.97C8.74 4.35 10.33 4 12 4Zm-8.82 7.5A9.821 9.821 0 0 0 12 17c.69 0 1.37-.07 2-.21l-2.28-2.29A3.064 3.064 0 0 1 9 11.78L5.6 8.37c-.99.85-1.82 1.91-2.42 3.13Z"
        />
      </svg>
    </SvgIcon>
  );
}
