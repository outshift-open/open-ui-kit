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

export function Exchange(props: SvgIconProps) {
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
          d="M11.989 21.5c-1.478 0-2.903-.426-4.276-1.278-1.372-.851-2.465-1.825-3.28-2.92v2.609H3v-5.15h5.13V16.2H5.42c.672.982 1.623 1.87 2.851 2.662 1.228.792 2.468 1.188 3.718 1.188a7.25 7.25 0 0 0 2.886-.585c.91-.39 1.706-.92 2.39-1.591a7.666 7.666 0 0 0 1.635-2.376c.407-.913.614-1.89.622-2.93h1.444a8.71 8.71 0 0 1-.727 3.492 9.047 9.047 0 0 1-4.793 4.749 8.73 8.73 0 0 1-3.457.691Zm-8.955-9.067c0-1.22.235-2.374.705-3.46a9.072 9.072 0 0 1 1.92-2.843c.811-.81 1.76-1.45 2.85-1.922A8.686 8.686 0 0 1 12 3.5c1.478 0 2.907.428 4.287 1.283 1.38.856 2.469 1.828 3.268 2.916v-2.61H21v5.15h-5.13V8.8h2.71c-.694-1.005-1.659-1.897-2.891-2.678C14.455 5.34 13.226 4.95 12 4.95a7.25 7.25 0 0 0-2.886.585c-.91.39-1.706.92-2.39 1.591A7.669 7.669 0 0 0 5.09 9.502a7.244 7.244 0 0 0-.622 2.93H3.034Z"
        />
      </svg>
    </SvgIcon>
  );
}
