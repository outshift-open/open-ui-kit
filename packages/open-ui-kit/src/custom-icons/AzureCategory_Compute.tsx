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

export function AzureCategoryCompute(props: SvgIconProps) {
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
          d="M21.04 4.372H4.878a.577.577 0 0 0-.577.577V15.34c0 .319.258.577.577.577h16.164a.577.577 0 0 0 .577-.577V4.95a.577.577 0 0 0-.577-.578Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M15.845 8.46v3.359l-2.886 1.693v-3.367l2.886-1.684Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m15.845 8.46-2.886 1.694-2.887-1.693 2.887-1.684 2.886 1.684Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.959 10.154v3.358l-2.887-1.693V8.46l2.887 1.693Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m10.072 11.819 2.887-1.674v3.367l-2.887-1.693ZM15.845 11.819l-2.886-1.674v3.367l2.886-1.693ZM16.433 19.41c-1.713-.27-1.78-1.501-1.78-3.493h-3.396c0 1.992-.058 3.223-1.77 3.493a.962.962 0 0 0-.857.962h8.659a.962.962 0 0 0-.856-.962Z"
        />
      </svg>
    </SvgIcon>
  );
}
