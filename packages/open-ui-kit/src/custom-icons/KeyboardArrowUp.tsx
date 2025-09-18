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

export function KeyboardArrowUp(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="keyboard-arrow-up-icon">
          <path
            id="keyboard_arrow_up"
            d="M11.9998 11.11L8.0998 15.01C7.91647 15.1933 7.68314 15.285 7.3998 15.285C7.11647 15.285 6.88314 15.1933 6.6998 15.01C6.51647 14.8266 6.4248 14.5933 6.4248 14.31C6.4248 14.0266 6.51647 13.7933 6.6998 13.61L11.2998 9.00996C11.4998 8.80996 11.7331 8.70996 11.9998 8.70996C12.2665 8.70996 12.4998 8.80996 12.6998 9.00996L17.2998 13.61C17.4831 13.7933 17.5748 14.0266 17.5748 14.31C17.5748 14.5933 17.4831 14.8266 17.2998 15.01C17.1165 15.1933 16.8831 15.285 16.5998 15.285C16.3165 15.285 16.0831 15.1933 15.8998 15.01L11.9998 11.11Z"
            fill={props.fill ?? "currentColor"}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
