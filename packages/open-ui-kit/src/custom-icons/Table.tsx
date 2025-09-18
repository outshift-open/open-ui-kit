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

export function Table(props: SvgIconProps) {
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
          d="M8.75 19H20.5v-3.425H8.75V19ZM3.5 9.425h3.75V6H3.5v3.425Zm0 4.675h3.75v-3.175H3.5V14.1Zm0 4.9h3.75v-3.425H3.5V19Zm5.25-4.9H20.5v-3.175H8.75V14.1Zm0-4.675H20.5V6H8.75v3.425ZM3.5 20.5c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V6c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h17c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v13c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-17Z"
        />
      </svg>
    </SvgIcon>
  );
}
