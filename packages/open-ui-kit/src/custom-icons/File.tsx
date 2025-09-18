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

export function File(props: SvgIconProps) {
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
          d="M7.975 18.25h8.05v-1.5h-8.05v1.5Zm0-4.25h8.05v-1.5h-8.05V14ZM5.5 22.5c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05V4c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h9.025L20 7.975V21c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-13Zm8.275-13.85V4H5.5v17h13V8.65h-4.725Z"
        />
      </svg>
    </SvgIcon>
  );
}
