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

export function MenuExternalAttackSurface(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M12 4a8 8 0 1 0 8 8 1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.56 0 4.898.964 6.667 2.547l-1.334 1.49A7.966 7.966 0 0 0 12 4Z"
          clipRule="evenodd"
        />
        <path
          fill="#777D85"
          fillRule="evenodd"
          d="M12 9a3 3 0 1 0 3 3 1 1 0 1 1 2 0 5 5 0 1 1-1.692-3.75 1 1 0 0 1-1.324 1.5A2.985 2.985 0 0 0 12 9Z"
          clipRule="evenodd"
        />
        <path
          fill="#E8E9EA"
          fillRule="evenodd"
          d="M21.707 2.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414l9-9a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />
        <path fill="#E8E9EA" d="M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <circle cx="6" cy="5" r="2" fill="#E8E9EA" />
      </svg>
    </SvgIcon>
  );
}
