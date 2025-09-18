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

export function Tray(props: SvgIconProps) {
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
          d="M18 12.25H6v-1.5h12v1.5ZM8 9.25h8v-1.5H8v1.5Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="m2 13.5 4-9h12l4 9v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm18.358 0L17.026 6H6.975L3.64 13.5H9a3 3 0 1 0 6 0h5.358ZM12 18a4.502 4.502 0 0 0 4.244-3H20.5v4.5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V15h4.256A4.502 4.502 0 0 0 12 18Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
