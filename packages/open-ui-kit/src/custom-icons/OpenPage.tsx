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

export function OpenPage(props: SvgIconProps) {
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
          d="M5.77778 20C5.28889 20 4.87037 19.8259 4.52222 19.4778C4.17407 19.1296 4 18.7111 4 18.2222V5.77778C4 5.28889 4.17407 4.87037 4.52222 4.52222C4.87037 4.17407 5.28889 4 5.77778 4H11.1111C11.363 4 11.5741 4.08519 11.7444 4.25556C11.9148 4.42593 12 4.63704 12 4.88889C12 5.14074 11.9148 5.35185 11.7444 5.52222C11.5741 5.69259 11.363 5.77778 11.1111 5.77778H5.77778V18.2222H18.2222V12.8889C18.2222 12.637 18.3074 12.4259 18.4778 12.2556C18.6481 12.0852 18.8593 12 19.1111 12C19.363 12 19.5741 12.0852 19.7444 12.2556C19.9148 12.4259 20 12.637 20 12.8889V18.2222C20 18.7111 19.8259 19.1296 19.4778 19.4778C19.1296 19.8259 18.7111 20 18.2222 20H5.77778ZM18.2222 7.02222L10.5778 14.6667C10.4148 14.8296 10.2074 14.9111 9.95556 14.9111C9.7037 14.9111 9.4963 14.8296 9.33333 14.6667C9.17037 14.5037 9.08889 14.2963 9.08889 14.0444C9.08889 13.7926 9.17037 13.5852 9.33333 13.4222L16.9778 5.77778H14.6667C14.4148 5.77778 14.2037 5.69259 14.0333 5.52222C13.863 5.35185 13.7778 5.14074 13.7778 4.88889C13.7778 4.63704 13.863 4.42593 14.0333 4.25556C14.2037 4.08519 14.4148 4 14.6667 4H19C19.5523 4 20 4.44772 20 5V9.33333C20 9.58519 19.9148 9.7963 19.7444 9.96667C19.5741 10.137 19.363 10.2222 19.1111 10.2222C18.8593 10.2222 18.6481 10.137 18.4778 9.96667C18.3074 9.7963 18.2222 9.58519 18.2222 9.33333V7.02222Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
