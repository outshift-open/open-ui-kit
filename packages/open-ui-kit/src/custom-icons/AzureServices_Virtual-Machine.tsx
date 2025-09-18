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

export function AzureServicesVirtualMachine(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M20.855 4.186H4.692a.577.577 0 0 0-.578.577v10.39c0 .32.259.578.578.578h16.163a.577.577 0 0 0 .577-.577V4.764a.577.577 0 0 0-.577-.578Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M15.66 8.275v3.358l-2.887 1.693V9.959l2.887-1.684Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m15.66 8.275-2.887 1.693-2.886-1.693 2.886-1.684 2.886 1.684Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.773 9.968v3.358l-2.886-1.693V8.275l2.886 1.693Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m9.887 11.633 2.886-1.674v3.367l-2.886-1.693ZM15.66 11.633l-2.887-1.674v3.367l2.887-1.693ZM16.247 19.224c-1.712-.27-1.78-1.501-1.78-3.493h-3.396c0 1.992-.058 3.223-1.77 3.493a.963.963 0 0 0-.857.962h8.66a.963.963 0 0 0-.857-.962Z"
        />
      </svg>
    </SvgIcon>
  );
}
