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

export function Permissions(props: SvgIconProps) {
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
          d="M22 18.8v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V15c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3V15c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3v2.5h4.3c.6 0 1.2.6 1.2 1.3ZM6 2.5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6v-2H6v-16h7v5h5v1c.7 0 1.4.2 2 .4V8.5l-6-6H6Z"
        />
      </svg>
    </SvgIcon>
  );
}
