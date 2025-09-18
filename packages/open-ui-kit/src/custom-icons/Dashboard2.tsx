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

export function Dashboard2(props: SvgIconProps) {
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
          d="M22 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-4.543 6.517A8.5 8.5 0 1 1 11.25 4.032v8.779l6.207 6.206Zm1.06-1.06L13.061 12.5l5.456-5.457A8.466 8.466 0 0 1 20.5 12.5c0 2.077-.745 3.98-1.983 5.457Zm-1.06-11.974-4.707 4.706V4.033a8.462 8.462 0 0 1 4.707 1.95Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
