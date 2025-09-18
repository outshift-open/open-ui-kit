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

export function MenuRuntimeEvents(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M6 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 14a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M1 18a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v1.12A2.88 2.88 0 0 1 17.12 22H3.88A2.88 2.88 0 0 1 1 19.12V18Zm2 1v.12c0 .486.394.88.88.88h13.24a.88.88 0 0 0 .88-.88V19H3Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          d="M19 12.584V19H2V8.88A2.88 2.88 0 0 1 4.88 6h7.22a5.022 5.022 0 0 0 0 2H4.88a.88.88 0 0 0-.88.88V17h13v-4c.711 0 1.387-.148 2-.416Z"
        />
        <circle cx="17" cy="8" r="4" fill="#E8E9EA" />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M17 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M19.121 10.121a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M17 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
