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

export function GCPCategoryNetworking(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.8 16.95h-1.6V4.15h1.6v12.8ZM4 19.35h16v-1.6H4v1.6Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.4 20.15h3.2v-3.2h-3.2v3.2ZM20 4.15H4v4.8h16v-4.8Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M20 4.15h-8v4.8h8v-4.8ZM7.2 5.75H5.6v1.6h1.6v-1.6ZM20 10.55H4v4.8h16v-4.8Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M20 10.55h-8v4.8h8v-4.8ZM7.2 12.15H5.6v1.6h1.6v-1.6Z"
        />
      </svg>
    </SvgIcon>
  );
}
