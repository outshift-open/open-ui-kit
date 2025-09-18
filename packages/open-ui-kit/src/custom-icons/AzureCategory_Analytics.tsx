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

export function AzureCategoryAnalytics(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <g fill="#E8E9EA" clipPath="url(#a)">
          <path d="M11.099 5.892h-6.36a.28.28 0 0 0-.28.28v4.75c0 .154.125.28.28.28h6.36a.28.28 0 0 0 .28-.28v-4.75a.28.28 0 0 0-.28-.28ZM21.18 8.952h-6.36a.28.28 0 0 0-.28.28v4.75c0 .154.124.28.28.28h6.36a.28.28 0 0 0 .28-.28v-4.75a.28.28 0 0 0-.28-.28ZM12.28 13.552H6.2a.42.42 0 0 0-.42.42v4.47c0 .232.187.42.42.42h6.08a.42.42 0 0 0 .42-.42v-4.47a.42.42 0 0 0-.42-.42Z" />
          <path d="m17.109 12.292.23-.64-8.56-3.15-.23.63 8.56 3.16Zm.53-.09-.32-.6-8.07 4.25.31.6 8.08-4.25Zm-8.68 4.54.67-.12-1.36-7.71-.67.12 1.36 7.71Z" />
          <path d="M18.571 12.517a1.08 1.08 0 1 0-1.157-1.824 1.08 1.08 0 0 0 1.157 1.824ZM8.502 9.456a1.08 1.08 0 1 0-1.158-1.824 1.08 1.08 0 0 0 1.158 1.824ZM9.83 17.11a1.08 1.08 0 1 0-1.157-1.824A1.08 1.08 0 0 0 9.83 17.11Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M3.959 3.372h18v18h-18z" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
