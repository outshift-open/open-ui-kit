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

export function API(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="m21.941 3.094-1.039-1.04a.194.194 0 0 0-.14-.054c-.051 0-.102.02-.141.055l-1.864 1.867a4.861 4.861 0 0 0-2.746-.84 4.88 4.88 0 0 0-3.47 1.438l-2.496 2.496a.2.2 0 0 0 0 .278l6.657 6.657c.04.039.09.055.141.055.05 0 .102-.02.14-.055l2.497-2.497a4.91 4.91 0 0 0 .594-6.215L21.94 3.37a.193.193 0 0 0 0-.277Zm-8.305 9.755a.2.2 0 0 0-.278 0l-1.633 1.633-2.215-2.215 1.637-1.637a.2.2 0 0 0 0-.277l-.89-.891a.2.2 0 0 0-.278 0l-1.633 1.637-1.055-1.055a.183.183 0 0 0-.14-.055c-.052 0-.102.02-.141.055l-2.493 2.5a4.9 4.9 0 0 0-.598 6.212l-1.863 1.868a.2.2 0 0 0 0 .277l1.039 1.04c.039.039.09.054.14.054.051 0 .102-.02.141-.055l1.864-1.867c.824.563 1.785.84 2.746.84a4.88 4.88 0 0 0 3.47-1.438l2.496-2.496a.2.2 0 0 0 0-.278l-1.055-1.055 1.637-1.636a.2.2 0 0 0 0-.278l-.899-.883Z"
        />
      </svg>
    </SvgIcon>
  );
}
