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

export function MenuReports(props: SvgIconProps) {
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
          d="M8.5 1a2 2 0 0 0-2 2v2h2V3h7.586L19.5 6.414V17h-2v2h2a2 2 0 0 0 2-2V6.414A2 2 0 0 0 20.914 5L17.5 1.586A2 2 0 0 0 16.086 1H8.5Z"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M2.5 7a2 2 0 0 1 2-2h7.586a2 2 0 0 1 1.414.586L16.914 9a2 2 0 0 1 .586 1.414V21a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7Zm9.586 0H4.5v14h11V10.414L12.086 7Z"
          clipRule="evenodd"
        />
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M6.5 14a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1ZM6.5 18a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
