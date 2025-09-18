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

export function SettingsMenuProfile(props: SvgIconProps) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.53846 12C3.53846 7.32682 7.32682 3.53846 12 3.53846C16.6732 3.53846 20.4615 7.32682 20.4615 12C20.4615 16.6732 16.6732 20.4615 12 20.4615C9.75143 20.4615 7.70771 19.5845 6.1923 18.1537C7.70769 16.7232 9.75131 15.8462 11.9998 15.8462C14.2483 15.8462 16.292 16.7232 17.8074 18.1539C18.1807 17.8014 18.522 17.4153 18.8265 17.0004C17.7578 16.0016 16.4699 15.2345 15.0427 14.7791C16.1576 13.8863 16.8715 12.5137 16.8715 10.9744C16.8715 8.28374 14.6903 6.10256 11.9997 6.10256C9.30911 6.10256 7.12793 8.28374 7.12793 10.9744C7.12793 12.5137 7.84189 13.8863 8.95674 14.7791C7.52969 15.2345 6.24184 16.0015 5.17323 17.0002C4.14546 15.5994 3.53846 13.8706 3.53846 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.9997 7.64103C10.1588 7.64103 8.66639 9.13341 8.66639 10.9744C8.66639 12.8153 10.1588 14.3077 11.9997 14.3077C13.8407 14.3077 15.3331 12.8153 15.3331 10.9744C15.3331 9.13341 13.8407 7.64103 11.9997 7.64103Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
