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

export function KeyboardArrowRight(props: SvgIconProps) {
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
          d="M12.8996 12L8.99961 8.10005C8.81628 7.91672 8.72461 7.68338 8.72461 7.40005C8.72461 7.11672 8.81628 6.88338 8.99961 6.70005C9.18294 6.51672 9.41628 6.42505 9.69961 6.42505C9.98294 6.42505 10.2163 6.51672 10.3996 6.70005L14.9996 11.3C15.0996 11.4 15.1704 11.5084 15.2121 11.625C15.2538 11.7417 15.2746 11.8667 15.2746 12C15.2746 12.1334 15.2538 12.2584 15.2121 12.375C15.1704 12.4917 15.0996 12.6 14.9996 12.7L10.3996 17.3C10.2163 17.4834 9.98294 17.575 9.69961 17.575C9.41628 17.575 9.18294 17.4834 8.99961 17.3C8.81628 17.1167 8.72461 16.8834 8.72461 16.6C8.72461 16.3167 8.81628 16.0834 8.99961 15.9L12.8996 12Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
