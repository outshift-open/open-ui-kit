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

export function GCPCategoryStorage(props: SvgIconProps) {
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
          d="M20 5.794h-1.6v5.6H20v-5.6Z"
        />
        <path
          fill={props.fill ?? PA_Colors.grey[50]}
          fillRule="evenodd"
          d="M20 5.794v5.6H4v-5.6h16Zm-3.2 2.8a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0Zm-4.8-.4H7.2v.8H12v-.8ZM5.6 12.905H20v5.6H4v-5.6h1.6Zm11.2 2.8a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0Zm-4.8-.4H7.2v.8H12v-.8Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
