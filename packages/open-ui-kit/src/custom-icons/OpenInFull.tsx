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

export const PAOpenInFull = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.88889 20C4.63704 20 4.42593 19.9148 4.25556 19.7444C4.08519 19.5741 4 19.363 4 19.1111V13.7778C4 13.5259 4.08519 13.3148 4.25556 13.1444C4.42593 12.9741 4.63704 12.8889 4.88889 12.8889C5.14074 12.8889 5.35185 12.9741 5.52222 13.1444C5.69259 13.3148 5.77778 13.5259 5.77778 13.7778V16.9778L16.9778 5.77778H13.7778C13.5259 5.77778 13.3148 5.69259 13.1444 5.52222C12.9741 5.35185 12.8889 5.14074 12.8889 4.88889C12.8889 4.63704 12.9741 4.42593 13.1444 4.25556C13.3148 4.08519 13.5259 4 13.7778 4H19.1111C19.363 4 19.5741 4.08519 19.7444 4.25556C19.9148 4.42593 20 4.63704 20 4.88889V10.2222C20 10.4741 19.9148 10.6852 19.7444 10.8556C19.5741 11.0259 19.363 11.1111 19.1111 11.1111C18.8593 11.1111 18.6481 11.0259 18.4778 10.8556C18.3074 10.6852 18.2222 10.4741 18.2222 10.2222V7.02222L7.02222 18.2222H10.2222C10.4741 18.2222 10.6852 18.3074 10.8556 18.4778C11.0259 18.6481 11.1111 18.8593 11.1111 19.1111C11.1111 19.363 11.0259 19.5741 10.8556 19.7444C10.6852 19.9148 10.4741 20 10.2222 20H4.88889Z"
        fill={props.fill ?? "currentColor"}
      />
    </svg>
  </SvgIcon>
);
