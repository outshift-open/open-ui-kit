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

export function GCPCategoryCompute(props: SvgIconProps) {
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
          d="M14.4 9.75H9.6v4.8h4.8v-4.8ZM12.8 4.15h-1.6v3.2h1.6v-3.2ZM9.6 4.15H8v3.2h1.6v-3.2ZM16 4.15h-1.6v3.2H16v-3.2ZM12.8 16.95h-1.6v3.2h1.6v-3.2ZM9.6 16.95H8v3.2h1.6v-3.2ZM16 16.95h-1.6v3.2H16v-3.2ZM16.8 11.35v1.6H20v-1.6h-3.2ZM16.8 14.55v1.6H20v-1.6h-3.2ZM16.8 8.15v1.6H20v-1.6h-3.2ZM4 11.35v1.6h3.2v-1.6H4ZM4 14.55v1.6h3.2v-1.6H4ZM4 8.15v1.6h3.2v-1.6H4Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M6.4 6.55v11.2h11.2V6.55H6.4Zm9.6 9.6H8v-8h8v8Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M9.6 14.55h4.8l-2.4-2.4-2.4 2.4ZM12 12.15l2.4 2.4v-4.8l-2.4 2.4Z"
        />
      </svg>
    </SvgIcon>
  );
}
