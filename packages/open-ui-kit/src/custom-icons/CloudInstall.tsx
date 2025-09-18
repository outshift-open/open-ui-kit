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

export function CloudInstall(props: SvgIconProps) {
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
          d="M6.795 19c-1.333 0-2.465-.454-3.397-1.362C2.466 16.729 2 15.625 2 14.326c0-1.167.383-2.182 1.148-3.046a4.676 4.676 0 0 1 2.875-1.562c.227-1.24.848-2.337 1.863-3.29C8.902 5.477 10.053 5 11.341 5c.364 0 .682.1.955.3a.95.95 0 0 1 .409.808v6.512l1.886-1.838.977.952-3.545 3.456-3.546-3.456.978-.952 1.886 1.838V6.218c-1.303.163-2.326.72-3.068 1.673-.743.952-1.114 1.982-1.114 3.09h-.432c-.924 0-1.716.318-2.375.953s-.988 1.432-.988 2.392.34 1.757 1.022 2.392a3.419 3.419 0 0 0 2.41.953h11.363c.682 0 1.265-.236 1.75-.709a2.296 2.296 0 0 0 .727-1.706c0-.664-.242-1.233-.727-1.705a2.418 2.418 0 0 0-1.75-.71h-1.432v-1.86c0-1.004-.25-1.872-.75-2.603a5.471 5.471 0 0 0-1.931-1.739V5.2a5.82 5.82 0 0 1 2.943 2.238 6.094 6.094 0 0 1 1.102 3.544v.532c1.09-.03 2.015.31 2.773 1.019.757.709 1.136 1.617 1.136 2.724 0 1.02-.379 1.898-1.136 2.636-.758.739-1.66 1.108-2.705 1.108H6.795Z"
        />
      </svg>
    </SvgIcon>
  );
}
