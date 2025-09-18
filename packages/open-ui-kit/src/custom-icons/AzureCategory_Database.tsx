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

export function AzureCategoryDatabase(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M14.018 14.564a.995.995 0 0 1-.805.37.974.974 0 0 1-.805-.381 1.61 1.61 0 0 1-.307-1.059 1.62 1.62 0 0 1 .307-1.059 1.057 1.057 0 0 1 .826-.391.92.92 0 0 1 .794.391c.209.313.31.684.286 1.06.037.38-.068.761-.296 1.069Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M19.746 5.828v13.087c0 1.398-3.039 2.457-6.787 2.457h-.095c-3.706-.021-6.692-1.112-6.692-2.457V5.83c0-1.398 3.039-2.457 6.787-2.457 3.748 0 6.787 1.059 6.787 2.456Zm-4.348 1.184c1.646-.263 2.77-.783 2.77-1.385 0-.858-2.34-1.556-5.21-1.556-2.869 0-5.208.688-5.208 1.556 0 .371.427.711 1.14.98l-.05.015c1.33.427 2.723.62 4.119.572.819.024 1.636-.037 2.439-.182Zm1.69 7.901v-3.6h-.953v4.373h2.605v-.773h-1.652Zm-7.56-1.768c-.196-.08-.379-.19-.54-.329a.466.466 0 0 1-.127-.338.36.36 0 0 1 .16-.318.72.72 0 0 1 .444-.127c.377-.017.75.091 1.059.307v-.91a2.73 2.73 0 0 0-1.06-.17 1.736 1.736 0 0 0-1.153.36 1.143 1.143 0 0 0-.445.942c0 .54.339.964 1.059 1.282.234.099.454.227.656.38a.443.443 0 0 1 .16.34.403.403 0 0 1-.17.328.857.857 0 0 1-.477.116 1.757 1.757 0 0 1-1.154-.444v.984c.35.18.74.268 1.133.254a1.99 1.99 0 0 0 1.25-.349 1.145 1.145 0 0 0 .349-.963 1.111 1.111 0 0 0-.265-.742 2.561 2.561 0 0 0-.879-.603Zm5.549 1.683c.24-.402.361-.865.349-1.334a2.456 2.456 0 0 0-.35-1.122 1.917 1.917 0 0 0-.74-.794 2.117 2.117 0 0 0-1.06-.276c-.4-.008-.794.09-1.143.286a1.969 1.969 0 0 0-.773.784 2.604 2.604 0 0 0-.275 1.207c.002.368.089.73.254 1.059.162.327.416.6.73.783.32.195.685.305 1.06.318l.91 1.059h1.281l-1.302-1.165a1.895 1.895 0 0 0 1.059-.805Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
