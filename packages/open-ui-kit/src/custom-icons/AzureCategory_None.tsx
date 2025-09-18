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
import { PA_Colors } from "../theme/dark/dark-color-palette";

export function AzureCategoryNone(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? PA_Colors.grey[50]}
          d="M2 17.535L7.18932 8.89266L13.25 4L6.67866 17.5483V17.535H2ZM15.9923 17.3761L11.11 11.7431L13.6513 4.96782L22 19.0001H6.50003L15.9923 17.3761Z"
        />
      </svg>
    </SvgIcon>
  );
}
