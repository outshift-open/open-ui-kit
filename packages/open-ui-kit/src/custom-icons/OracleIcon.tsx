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

export function OracleIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.3125 18.3125C4.79063 18.3125 2 15.455 2 12C2 8.47813 4.85719 5.6875 8.3125 5.6875H15.6875C19.2094 5.6875 22 8.545 22 12C22 15.5219 19.1428 18.3125 15.6875 18.3125H8.3125ZM15.555 16.0531C17.8144 16.0531 19.6747 14.1928 19.6747 11.9334C19.6747 9.67406 17.8144 7.81375 15.555 7.81375H8.51156C6.25219 7.81375 4.39188 9.67406 4.39188 11.9334C4.39188 14.1928 6.2525 16.0531 8.51156 16.0531H15.555Z"
          fill="#E8E9EA"
        />
      </svg>
    </SvgIcon>
  );
}
