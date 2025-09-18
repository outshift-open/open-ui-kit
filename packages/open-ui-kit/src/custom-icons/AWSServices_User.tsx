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

export function AWSServicesUser(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".1"
          d="M16.155 13.796c1.843 1.15 3.03 3.202 3.162 5.427H6.351c.205-3.557 3.036-6.381 6.483-6.381 1.172 0 2.32.33 3.321.954ZM9.318 8.319c0-1.953 1.578-3.542 3.517-3.542 1.938 0 3.515 1.59 3.515 3.542 0 1.954-1.577 3.543-3.515 3.543-1.94 0-3.517-1.59-3.517-3.543Zm7.275 4.775a7.099 7.099 0 0 0-1.902-.827 4.375 4.375 0 0 0 2.487-3.948c0-2.409-1.949-4.369-4.343-4.369-2.396 0-4.345 1.96-4.345 4.37a4.375 4.375 0 0 0 2.493 3.95c-3.144.857-5.471 3.831-5.471 7.366 0 .229.184.414.413.414h13.818a.414.414 0 0 0 .414-.414c0-2.664-1.365-5.17-3.564-6.542Z"
        />
      </svg>
    </SvgIcon>
  );
}
