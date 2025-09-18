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

export function SkipPrevious(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Left icon">
          <path
            id="Vector"
            d="M5.5 17V7C5.5 6.71667 5.59583 6.47917 5.7875 6.2875C5.97917 6.09583 6.21667 6 6.5 6C6.78333 6 7.02083 6.09583 7.2125 6.2875C7.40417 6.47917 7.5 6.71667 7.5 7V17C7.5 17.2833 7.40417 17.5208 7.2125 17.7125C7.02083 17.9042 6.78333 18 6.5 18C6.21667 18 5.97917 17.9042 5.7875 17.7125C5.59583 17.5208 5.5 17.2833 5.5 17ZM16.95 16.975L10.75 12.825C10.6 12.725 10.4875 12.6042 10.4125 12.4625C10.3375 12.3208 10.3 12.1667 10.3 12C10.3 11.8333 10.3375 11.6792 10.4125 11.5375C10.4875 11.3958 10.6 11.275 10.75 11.175L16.95 7.025C17.0333 6.95833 17.125 6.91667 17.225 6.9C17.325 6.88333 17.4167 6.875 17.5 6.875C17.7667 6.875 18 6.96667 18.2 7.15C18.4 7.33333 18.5 7.575 18.5 7.875V16.125C18.5 16.425 18.4 16.6667 18.2 16.85C18 17.0333 17.7667 17.125 17.5 17.125C17.4167 17.125 17.325 17.1167 17.225 17.1C17.125 17.0833 17.0333 17.0417 16.95 16.975ZM16.5 14.25V9.75L13.1 12L16.5 14.25Z"
            fill={props.fill ?? "currentColor"}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
