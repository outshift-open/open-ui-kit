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

export function Docker(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="m16.353 9 .452.107a3.756 3.756 0 0 1 2.473 1.944 3.738 3.738 0 0 1 3.061.895l.345.304-.115.445a3.755 3.755 0 0 1-2.805 2.72c-1.12 4.078-4.762 7.091-9.11 7.091-.121 0-.242-.002-.362-.007a8.753 8.753 0 0 1-8.796-6.435c-.31-1.133.621-2.058 1.636-2.058h9.806c.944 0 1.828-.248 2.592-.683a3.738 3.738 0 0 1-.342-1.567c0-.912.326-1.75.868-2.4L16.353 9Zm.578 1.737a2.239 2.239 0 0 0-.243 1.02c0 .507.167.973.45 1.349l.45.6-.6.45a6.723 6.723 0 0 1-4.05 1.35H3.132a.219.219 0 0 0-.168.071.11.11 0 0 0-.024.044.092.092 0 0 0 .003.048 7.253 7.253 0 0 0 7.316 5.33l.032-.001.032.001c.11.005.22.007.33.007 3.776 0 6.962-2.727 7.77-6.418l.12-.548.559-.04a2.251 2.251 0 0 0 1.838-1.217 2.237 2.237 0 0 0-1.083-.277c-.273 0-.534.048-.774.136l-.76.279-.22-.779a2.257 2.257 0 0 0-1.172-1.405Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M9 2.5h4.5V13H3V8.5h3v-3h3v-3ZM7.5 10v1.5H9V10H7.5ZM6 11.5V10H4.5v1.5H6Zm6 0h-1.5V10H12v1.5Zm0-3h-1.5V7H12v1.5Zm-3 0H7.5V7H9v1.5ZM12 4v1.5h-1.5V4H12Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
