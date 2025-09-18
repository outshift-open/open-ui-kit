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

export function Approved(props: SvgIconProps) {
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
          d="m10.563 15.942 6.99-6.996-1.194-1.2-5.796 5.795-2.971-2.97-1.17 1.175 4.141 4.196Zm-6.01 5.225c-.468 0-.869-.167-1.202-.502a1.649 1.649 0 0 1-.5-1.207V4.566c0-.469.166-.87.5-1.203a1.64 1.64 0 0 1 1.203-.5h4.975a2.333 2.333 0 0 1 .854-1.441c.462-.373 1.001-.56 1.617-.56.616 0 1.155.187 1.617.56.462.373.746.853.854 1.44h4.975c.47 0 .873.167 1.207.5.335.334.503.735.503 1.204v14.892c0 .47-.168.873-.503 1.207a1.646 1.646 0 0 1-1.207.502H4.554Zm0-1.709h14.893V4.566H4.554v14.892ZM12 4.123c.247 0 .46-.09.64-.27.18-.18.27-.393.27-.638a.882.882 0 0 0-.27-.64A.87.87 0 0 0 12 2.3c-.247 0-.46.091-.64.273a.878.878 0 0 0-.27.638c0 .247.09.46.27.64.18.18.393.27.64.27Z"
        />
      </svg>
    </SvgIcon>
  );
}
