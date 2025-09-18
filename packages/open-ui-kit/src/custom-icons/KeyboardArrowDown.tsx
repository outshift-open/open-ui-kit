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

export function KeyboardArrowDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="keyboard-arrow-down-icon">
          <path
            id="keyboard_arrow_down"
            d="M11.9998 15.2751C11.8665 15.2751 11.7415 15.2543 11.6248 15.2126C11.5081 15.1709 11.3998 15.1001 11.2998 15.0001L6.6998 10.4001C6.51647 10.2168 6.4248 9.98343 6.4248 9.7001C6.4248 9.41676 6.51647 9.18343 6.6998 9.0001C6.88314 8.81676 7.11647 8.7251 7.3998 8.7251C7.68314 8.7251 7.91647 8.81676 8.0998 9.0001L11.9998 12.9001L15.8998 9.0001C16.0831 8.81676 16.3165 8.7251 16.5998 8.7251C16.8831 8.7251 17.1165 8.81676 17.2998 9.0001C17.4831 9.18343 17.5748 9.41676 17.5748 9.7001C17.5748 9.98343 17.4831 10.2168 17.2998 10.4001L12.6998 15.0001C12.5998 15.1001 12.4915 15.1709 12.3748 15.2126C12.2581 15.2543 12.1331 15.2751 11.9998 15.2751Z"
            fill={props.fill ?? "currentColor"}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
