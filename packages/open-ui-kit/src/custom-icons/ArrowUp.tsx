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

import { SvgIcon, SvgIconProps, useTheme } from "@mui/material";

export function VulArrowUp(props: SvgIconProps) {
  const theme = useTheme();
  return (
    <SvgIcon {...props}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.1333 12L5.5433 13.41L11.1333 7.83L11.1333 20L13.1333 20L13.1333 7.83L18.7133 13.42L20.1333 12L12.1333 4L4.1333 12Z"
          fill={props?.fill || theme.palette.grey[50]}
        />
      </svg>
    </SvgIcon>
  );
}
