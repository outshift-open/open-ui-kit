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

export function MenuComplianceReport(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M3 18V6h2v12H3ZM18 5H6V3h12v2Zm1 13V6h2v12h-2ZM5 19h14v2H5v-2Z"
          clipRule="evenodd"
        />
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M1.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM17.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM17.5 20a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM1.5 20a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM15.707 9.793a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.307.093l-2-1.5a1 1 0 1 1 1.2-1.6l1.306.98 2.387-2.387a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
