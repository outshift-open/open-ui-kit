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

export function OracleCategoryNetworking(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M21.688 12.144c0-.72-.54-1.35-1.215-1.53-.72-4.23-4.456-7.47-8.91-7.47-4.95 0-9 4.05-9 9s4.05 9 9 9c4.454 0 8.144-3.24 8.864-7.515.72-.135 1.26-.765 1.26-1.485Zm-1.575.81c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81Zm-.405-2.295c-.54.135-.945.585-1.08 1.125h-3.466c0-.765-.09-1.485-.225-2.205.72-.315 1.26-1.035 1.26-1.89 0-1.125-.944-2.07-2.07-2.07-.225 0-.405.045-.585.09A10.18 10.18 0 0 0 12.418 4c3.645.315 6.614 3.105 7.29 6.66ZM9.043 14.89c1.125-.27 1.98-1.215 2.115-2.34h3.24c-.09 2.79-1.08 5.49-2.835 7.695-1.26-1.62-2.116-3.42-2.52-5.355Zm-2.745-2.745c0-1.125.944-2.07 2.07-2.07 1.124 0 2.07.945 2.07 2.07s-.946 2.07-2.07 2.07a2.094 2.094 0 0 1-2.07-2.07Zm4.86-.36a2.727 2.727 0 0 0-2.16-2.34c.405-1.935 1.305-3.735 2.52-5.31.494.585.9 1.26 1.26 1.89-.495.36-.81.99-.81 1.62 0 1.125.944 2.07 2.07 2.07h.044c.135.675.225 1.35.225 2.07h-3.15Zm2.97-5.445a1.306 1.306 0 0 1 0 2.61c-.72 0-1.306-.585-1.306-1.305s.54-1.305 1.306-1.305Zm-3.376-2.385c-1.215 1.62-2.07 3.42-2.475 5.4a2.801 2.801 0 0 0-2.7 2.43h-2.25c.18-4.095 3.375-7.425 7.425-7.83Zm-7.425 8.55h2.25a2.801 2.801 0 0 0 2.7 2.43c.405 1.935 1.26 3.78 2.476 5.4-4.05-.405-7.245-3.735-7.425-7.83Zm9.09 7.83c1.71-2.25 2.655-4.995 2.745-7.83h3.466c.134.54.54.945 1.08 1.125-.675 3.6-3.645 6.345-7.29 6.705Z"
        />
      </svg>
    </SvgIcon>
  );
}
