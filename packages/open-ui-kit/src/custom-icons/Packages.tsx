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

export function Packages(props: SvgIconProps) {
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
          d="M3 20.95V8.65c-.233-.033-.458-.2-.675-.5A1.632 1.632 0 0 1 2 7.175V4c0-.383.15-.73.45-1.038.3-.308.65-.462 1.05-.462h17c.383 0 .73.154 1.038.462.308.309.462.655.462 1.038v3.175c0 .35-.108.675-.325.975-.217.3-.442.467-.675.5v12.3c0 .383-.154.738-.462 1.063-.309.324-.655.487-1.038.487h-15c-.4 0-.75-.163-1.05-.488-.3-.325-.45-.679-.45-1.062ZM4.5 8.675V21h15V8.675h-15Zm16-1.5V4h-17v3.175h17ZM9 13.925h6v-1.5H9v1.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
