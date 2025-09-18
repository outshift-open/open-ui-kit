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

export function KeyboardArrowLeft(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0996 12L14.9996 15.9C15.1829 16.0834 15.2746 16.3167 15.2746 16.6C15.2746 16.8834 15.1829 17.1167 14.9996 17.3C14.8163 17.4834 14.5829 17.575 14.2996 17.575C14.0163 17.575 13.7829 17.4834 13.5996 17.3L8.99961 12.7C8.89961 12.6 8.82878 12.4917 8.78711 12.375C8.74544 12.2584 8.72461 12.1334 8.72461 12C8.72461 11.8667 8.74544 11.7417 8.78711 11.625C8.82878 11.5084 8.89961 11.4 8.99961 11.3L13.5996 6.70005C13.7829 6.51672 14.0163 6.42505 14.2996 6.42505C14.5829 6.42505 14.8163 6.51672 14.9996 6.70005C15.1829 6.88338 15.2746 7.11672 15.2746 7.40005C15.2746 7.68338 15.1829 7.91672 14.9996 8.10005L11.0996 12Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
