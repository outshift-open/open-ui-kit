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

export function SettingsMenuIntegrations(props: SvgIconProps) {
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
          d="M2.25 12C2.25 8.54822 5.04822 5.75 8.5 5.75C11.6563 5.75 14.2661 8.0896 14.6898 11.1292L14.0303 10.4697C13.7374 10.1768 13.2626 10.1768 12.9697 10.4697C12.6768 10.7626 12.6768 11.2374 12.9697 11.5303L14.9697 13.5303C15.1103 13.671 15.3011 13.75 15.5 13.75C15.6989 13.75 15.8897 13.671 16.0303 13.5303L18.0303 11.5303C18.3232 11.2374 18.3232 10.7626 18.0303 10.4697C17.7374 10.1768 17.2626 10.1768 16.9697 10.4697L16.212 11.2274C15.8242 7.30991 12.5195 4.25 8.5 4.25C4.21979 4.25 0.75 7.71979 0.75 12C0.75 16.2802 4.21979 19.75 8.5 19.75C8.91421 19.75 9.25 19.4142 9.25 19C9.25 18.5858 8.91421 18.25 8.5 18.25C5.04822 18.25 2.25 15.4518 2.25 12Z"
          fill={props.fill ?? "currentColor"}
        />
        <path
          d="M15.5 4.25C15.0858 4.25 14.75 4.58579 14.75 5C14.75 5.41421 15.0858 5.75 15.5 5.75C18.9518 5.75 21.75 8.54822 21.75 12C21.75 15.4518 18.9518 18.25 15.5 18.25C12.3437 18.25 9.73392 15.9104 9.31019 12.8708L9.96967 13.5303C10.2626 13.8232 10.7374 13.8232 11.0303 13.5303C11.3232 13.2374 11.3232 12.7626 11.0303 12.4697L9.03033 10.4697C8.88968 10.329 8.69891 10.25 8.5 10.25C8.30109 10.25 8.11032 10.329 7.96967 10.4697L5.96967 12.4697C5.67678 12.7626 5.67678 13.2374 5.96967 13.5303C6.26256 13.8232 6.73744 13.8232 7.03033 13.5303L7.78803 12.7726C8.17577 16.6901 11.4805 19.75 15.5 19.75C19.7802 19.75 23.25 16.2802 23.25 12C23.25 7.71979 19.7802 4.25 15.5 4.25Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
