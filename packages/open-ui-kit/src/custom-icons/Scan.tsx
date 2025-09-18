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

export function Scan(props: SvgIconProps) {
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
          d="M17 22.5v-2h3v-3h2V21c0 .4-.2.7-.5 1-.3.3-.7.5-1 .5H17Zm-10 0H3.5c-.4 0-.7-.2-1-.5-.3-.3-.5-.7-.5-1v-3.5h2v3h3v2Zm10-20h3.5c.4 0 .7.2 1 .5.3.3.5.6.5 1v3.5h-2v-3h-3v-2Zm-10 0v2H4v3H2V4c0-.4.2-.7.5-1 .3-.3.6-.5 1-.5H7Zm12 9H5v2h14v-2Z"
        />
      </svg>
    </SvgIcon>
  );
}
