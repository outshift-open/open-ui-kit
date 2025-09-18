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

export function Trend(props: SvgIconProps) {
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
          d="m7.225 22.325-1.05-1.05 6.725-6.75 3.5 3.5 5.4-5.375 1.05 1.05-6.45 6.45-3.5-3.5-5.675 5.675ZM3.5 21.5c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V4.5c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h15c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v4.95H3.5V21.5Zm0-13.55h15V4.5h-15v3.45Z"
        />
      </svg>
    </SvgIcon>
  );
}
